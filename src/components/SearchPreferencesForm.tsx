import { FC } from 'react'
import {
  Button,
  Checkbox,
  Label,
  TextInput,
  RangeSlider,
  Select,
  ToggleSwitch,
  Card,
} from 'flowbite-react'
import { SearchFormProps } from '../../types/types'

const SearchPreferencesForm: FC<SearchFormProps> = ({ preferences }) => {
  return (
    <Card className="w-8/12 p-4 m-auto">
      <form
        action="/listings"
        className="flex max-w-md flex-col mx-20 my-8 gap-4"
      >
        <fieldset className="mt-4">
          <legend>Location</legend>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Area" />
            </div>
            <TextInput
              id="email1"
              placeholder="Search area or postcode"
              required
              type="text"
              name="location"
              defaultValue={preferences.location && preferences.location}
            />
          </div>
        </fieldset>

        <fieldset className="mt-4">
          <legend>Cost</legend>
          <div>
            <div className="mb-1 block">
              <Label htmlFor="default-range" value="Maximum Rent" />
            </div>
            <RangeSlider
              id="default-range"
              max={preferences.cost.max}
              min={preferences.cost.min}
            />
          </div>
          <ToggleSwitch
            checked
            label="Bills included only"
            onChange={() => {
              console.log('FILTER FOR BILLS INCLUDED')
            }}
          />
        </fieldset>

        <fieldset className="mt-4">
          <legend>Property Details</legend>
          <div className="flex gap-4 mt-4">
            <div className="max-w-md flex items-center gap-2" id="select">
              <div className="mb-2 block">
                <Label htmlFor="roomsMin" value="Min" />
              </div>
              <Select id="roomsMin" required>
                {preferences.propertyDetails.rooms.map((number) => {
                  return <option key={`${number}-rooms`}>{number}</option>
                })}
              </Select>
            </div>
            <div className="max-w-md flex items-center gap-2" id="select">
              <div className="mb-2 block">
                <Label htmlFor="roomsMax" value="Max" />
              </div>
              <Select id="roomsMax" required>
                {preferences.propertyDetails.rooms.map((number) => {
                  return <option key={`${number}-rooms`}>{number}</option>
                })}
              </Select>
            </div>
          </div>
          <div className="max-w-md flex items-center gap-2 mt-4" id="select">
            <div className="mb-2 block">
              <Label htmlFor="tenancyMin" value="Minimum Tenancy" />
            </div>
            <Select id="tenancyMin" required>
              {preferences.propertyDetails.tenancyMin.map((duration) => {
                return <option key={`${duration}-duration`}>{duration}</option>
              })}
            </Select>
          </div>

          <div className="flex-row space-y-2 mt-4">
            {preferences.propertyDetails.type.map((type) => {
              const typeValue = type.replace(' ', '-')
              return (
                <div
                  key={`${typeValue}-type`}
                  className="flex-col items-center space-x-2"
                >
                  <Checkbox id={typeValue} name={typeValue} value={typeValue} />
                  <Label>{type}</Label>
                </div>
              )
            })}
          </div>
        </fieldset>

        <fieldset>
          <legend>Features</legend>
          <div className="flex-row space-y-2 mt-4">
            {preferences.features.map((feature) => {
              const featureValue = feature.replace(' ', '-')
              return (
                <div
                  key={`${featureValue}-feature`}
                  className="flex-col items-center space-x-2"
                >
                  <Checkbox
                    id={featureValue}
                    name={featureValue}
                    value={featureValue}
                  />
                  <Label>{feature}</Label>
                </div>
              )
            })}
          </div>
        </fieldset>
        <fieldset>
          <legend>Parking</legend>
          {preferences.parking.map((option) => {
            const optionValue = option.replace(' ', '-')
            return (
              <div
                key={`${optionValue}-feature`}
                className="flex-col items-center space-x-2"
              >
                <Checkbox
                  id={optionValue}
                  name={optionValue}
                  value={optionValue}
                />
                <Label>{option}</Label>
              </div>
            )
          })}
        </fieldset>

        <Button className="mt-6" type="submit">
          Submit
        </Button>
      </form>
    </Card>
  )
}

export default SearchPreferencesForm
