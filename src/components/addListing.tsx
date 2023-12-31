'use client'

import { Card, TextInput, Label, Button } from 'flowbite-react'
import { formFields } from 'utils/formFields'
import type {
  AdditionalFormFields,
  FormFieldKeys,
  FormFields,
  DatabaseListingsInsObj,
} from '../../types/types'
import supabaseCompClient from 'lib/supabaseCompClient'
import { useEffect, useState, Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/navigation'

const AddListingForm = () => {
  const router = useRouter()
  const [hasError, setHasError] = useState(false)
  const [userId, setUserId] = useState('')
  const [form, setForm]: [
    form: FormFields,
    setForm: Dispatch<SetStateAction<FormFields>>,
  ] = useState({} as FormFields)

  useEffect(() => {
    const init = async () => {
      setForm(await formFields())
      const {
        data: { session },
      } = await supabaseCompClient.auth.getSession()

      // role_id = 2 is landlord, this can be fetched from the roles table in case other roles are introduced
      if (!session || session.user.user_metadata.role_id !== 2) {
        alert('You are not allowed to access this page')
        return router.push('/log-in')
      }
      setUserId(session.user.id)
    }
    init()
  }, [])

  const removeKeysForInsert = (form: FormFields) => {
    const keys: AdditionalFormFields[] = [
      'floor_plans',
      'property_video',
      'property_images',
      'epcCertificate',
      'uploadedImagesOfEveryRoom',
      'clearAndHighQualityImages',
      'imagesOfInteriorAndExterior',
      'newlyTakenImages',
    ]

    for (const key of keys) {
      delete form[key]
    }
  }

  /**
+   * Posts a listing to the API.
+   *
+   * @param {React.FormEvent} e - The form event.
+   * @return {Promise<void>} - A promise that resolves when the listing is successfully posted.
+   */
  async function postListing(e: React.FormEvent) {
    e.preventDefault()
    setHasError(false)
    const formTarget = e.nativeEvent.target as HTMLFormElement

    const fileElements = []
    const listingsObject: DatabaseListingsInsObj = {} as DatabaseListingsInsObj

    for (const key in form) {
      switch (formTarget[key].type) {
        case 'file': {
          if (formTarget[key].files.length > 0) {
            fileElements.push(formTarget[key].files)
          }
          break
        }
        case 'checkbox': {
          if (formTarget[key].checked) {
            listingsObject[key as keyof DatabaseListingsInsObj] =
              formTarget[key].checked // alway true, but get ts error?
          }
          break
        }
        case 'select-one':
        case 'text':
        case 'date':
        case 'number': {
          if (formTarget[key].value) {
            listingsObject[key as keyof DatabaseListingsInsObj] =
              formTarget[key].value
          }
          break
        }
        case undefined: {
          // this doesnt currently happen but may do if you use fieldsets with radio buttons

          // wrapper for children inputs
          for (const element in formTarget[key]) {
            listingsObject[key as keyof DatabaseListingsInsObj] =
              formTarget[key][element].value
          }
          break
        }
        default: {
          // this should never happen, but if it does throw an error
          console.log(
            ` 🔥 ${key} of type ${formTarget[key].type} and value ${formTarget[key].value} was inserted`,
          )
          throw Error(`Unknown type ${formTarget[key].type}`)
        }
      }
    }

    try {
      // UPLOAD LISTING
      const { data: selectTypeData } = await supabaseCompClient
        .from('type')
        .select('id')
        .eq('description', listingsObject.type_id)
      const { data: selectStatusData } = await supabaseCompClient
        .from('status')
        .select('id')
        .eq('description', listingsObject.status_id)
      const { count: idCount } = await supabaseCompClient
        .from('property')
        .select('*', { count: 'exact', head: true })

      if (!selectTypeData || !selectStatusData || !idCount)
        throw Error('No session')
      const id = idCount + 1
      const type_id = selectTypeData[0].id
      const status_id = selectStatusData[0].id

      removeKeysForInsert(listingsObject as FormFields) // as FormFields since its not yet insert object but will return insert object

      const { error: uploadListingError } = await supabaseCompClient
        .from('property')
        .upsert({ ...listingsObject, user_id: userId, type_id, status_id, id }) //temp status_id

      if (uploadListingError) throw Error(JSON.stringify(uploadListingError))

      //  UPLOAD IMAGES
      // needs better error handling, prompt user that uploaded image is a duplicate
      fileElements.forEach((files) => {
        Object.values(files).forEach(async (file: any) => {
          const { data: upload } = await supabaseCompClient.storage
            .from('images')
            .upload(`public/${file.name}`, file, {
              cacheControl: '3600',
              upsert: false,
            })
          if (!upload)
            throw Error('Failed uploading image, image probably already exists')

          const { error } = await supabaseCompClient.from('image').insert({
            url: `${process.env.NEXT_PUBLIC_SUPABASE_URL}storage/v1/object/public/images/${upload.path}`,
            property_id: id,
          })

          if (error) throw Error(JSON.stringify(error))
        })
      })
      router.push('/listings')
    } catch (error) {
      setHasError(true)
    }
  }

  return (
    <main className="flex h-full w-screen pb-20 dark:text-white">
      <Card className="w-full p-4 m-auto">
        <form
          onSubmit={postListing}
          className="flex flex-col w-full placeholder:flex-col gap-4"
        >
          {Object.keys(form).map((field) => {
            // needs ListingsKeys for children
            const fieldData = form[field as FormFieldKeys]
            const sharedClasses =
              'block mb-2 text-sm font-medium text-gray-900 dark:text-white'

            switch (fieldData.inputType) {
              case 'radio':
                return (
                  <fieldset key={crypto.randomUUID()}>
                    <legend className={sharedClasses}>{fieldData.label}</legend>
                    {fieldData.options.map((option: string, index: number) => (
                      <div key={index} className="flex items-center mb-4">
                        <input
                          type="radio"
                          id={`${field}-${index}`}
                          name={field}
                          value={option}
                          required={fieldData.required}
                          className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <Label
                          htmlFor={`${field}-${index}`}
                          className={sharedClasses}
                        >
                          {option}
                        </Label>
                      </div>
                    ))}
                  </fieldset>
                )
              case 'select':
                return (
                  <div key={crypto.randomUUID()}>
                    <Label htmlFor={field} className={sharedClasses}>
                      {fieldData.label}
                    </Label>
                    <select
                      id={field}
                      name={field}
                      required={fieldData.required}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      {fieldData.options.map(
                        (option: string, index: number) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ),
                      )}
                    </select>
                  </div>
                )
              case 'checkbox':
                return (
                  <div
                    key={crypto.randomUUID()}
                    className="flex items-center mb-4"
                  >
                    <input
                      type="checkbox"
                      id={field}
                      name={field}
                      required={fieldData.required}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <Label
                      htmlFor={field}
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {fieldData.label}
                    </Label>
                  </div>
                )
              default:
                return (
                  <div key={crypto.randomUUID()}>
                    <Label htmlFor={field} className={sharedClasses}>
                      {fieldData.label}
                    </Label>
                    <TextInput
                      type={fieldData.inputType}
                      id={field}
                      name={field}
                      required={fieldData.required}
                      defaultValue={
                        fieldData.inputType === 'date' ? fieldData.default : ''
                      }
                      placeholder={fieldData.placeholder}
                      className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                )
            }
          })}
          <Button
            gradientDuoTone="purpleToPink"
            type="submit"
            style={{ backgroundColor: hasError ? 'red' : '' }}
          >
            {hasError ? 'try again?' : 'Advertise Listing'}
          </Button>
        </form>
      </Card>
    </main>
  )
}

export default AddListingForm
