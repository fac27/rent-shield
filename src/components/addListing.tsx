'use client';
import { Card, TextInput, Label } from 'flowbite-react';
import { formFields } from 'utils/formFields';
import { FormFields } from '../../types/types';

const AddListingForm = () => {

  return (
    <main className="flex h-full w-screen pb-20 dark:text-white">
      <Card className="w-8/12 p-4 m-auto">
        <form className="flex flex-col w-full placeholder:flex-col gap-4">
        {Object.keys(formFields).map((field) => {
  const fieldData = formFields[field as FormFields];
  const sharedClasses = "block mb-2 text-sm font-medium text-gray-900 dark:text-white";

  switch (fieldData.inputType) {
    case 'radio':
      return (
        <fieldset>
          <legend className={sharedClasses}>{fieldData.label}</legend>
          {fieldData.options.map((option: string, index: number) => (
            <div key={index} className="flex items-center mb-4">
              <input type="radio" id={`${field}-${index}`} name={field} value={option} className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
              <label htmlFor={`${field}-${index}`} className={sharedClasses}>{option}</label>
            </div>
          ))}
        </fieldset>
      );
    case 'select':
      return (
        <div>
          <label htmlFor={field} className={sharedClasses}>{fieldData.label}</label>
          <select id={field} name={field} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {fieldData.options.map((option: string, index: number) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
      );
    case 'checkbox':
      return (
        <fieldset>
          <legend className="sr-only">{fieldData.label}</legend>
          {fieldData.options.map((option, index) => (
            <div key={index} className="flex items-center mb-4">
              <input
                type="checkbox"
                id={`${field}-${index}`}
                name={field}
                value={option}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor={`${field}-${index}`} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                {option}
              </label>
            </div>
          ))}
          {fieldData.helperText && 
            <div className="flex mb-4">
              <div className="flex items-center h-5">
                <input
                  id={`${field}-helper`}
                  aria-describedby={`${field}-helper-text`}
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div className="ml-2 text-sm">
                <label htmlFor={`${field}-helper`} className="font-medium text-gray-900 dark:text-gray-300">{fieldData.helperTitle}</label>
                <p id={`${field}-helper-text`} className="text-xs font-normal text-gray-500 dark:text-gray-400">{fieldData.helperText}</p>
              </div>
            </div>
          }
          {fieldData.disabledOption &&
            <div className="flex items-center">
              <input
                id={`${field}-disabled`}
                type="checkbox"
                value=""
                className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                disabled
              />
              <label htmlFor={`${field}-disabled`} className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500">{fieldData.disabledOption}</label>
            </div>
          }
        </fieldset>
      );
    default:
      return (
        <div>
          <label htmlFor={field} className={sharedClasses}>{fieldData.label}</label>
          <TextInput type={fieldData.inputType} id={field} name={field} placeholder={fieldData.placeholder} className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
      );
  }
})}
        </form>
      </Card>
    </main>
  );
};

export default AddListingForm;

 