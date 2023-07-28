import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Button,
  Checkbox,
  Label,
  TextInput,
  RangeSlider,
  Select,
  ToggleSwitch,
  Card,
} from 'flowbite-react';

import { SearchFormProps, SearchPreferenceProps } from '../../types/types';
import { convertAddress } from 'utils/mapHelper';

const SearchPreferencesForm: FC<SearchFormProps> = ({ preferences }) => {
  const router = useRouter();
  const [maxRent, setMaxRent] = useState<number>(preferences.cost.max - preferences.cost.min)

  const redirect = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submitted: any = e.nativeEvent?.target;
    const test = submitted
    console.log({test})
    if (!submitted) return console.log('💩');

    const search: SearchPreferenceProps = {
      preferences: {
        location: submitted.location.value,
        cost: {
          max: submitted.cost.value,
          billsIncluded: submitted.bills.checked,
        },
        propertyDetails: {
          type: submitted.type.value,
          rooms: {
            min: submitted.roomsMin.value,
            max: submitted.roomsMax.value,
          },
          tenancyMin: submitted.tenancy.value,
        },
        features: {
          pets: submitted.pets_allowed.checked,
          smokers: submitted.smokers_allowed.checked,
          bike_storage: submitted.bike_storage.checked,
          garden: submitted.garden.checked,
          fireplace: submitted.fireplace.checked,
          elevator: submitted.elevator.checked,
          wheelchair_accessible: submitted.wheelchair_accessible.checked,
          electric_heating: submitted.electric_heating.checked,
          gas_heating: submitted.gas_heating.checked,
          visitor_parking: submitted.visitor_parking.checked,
          parking: {
            allocated: submitted.allocated.checked,
            street: submitted.street.checked,
          },
        },
      },
    };

    // const { lat, lng } = await convertAddress(search.preferences.location);

    const query = Object.keys(submitted).map(key=>{
      `${key}=${key.valueOf}`
    }).join('&')
    console.log(query)
    router.push(`/listings?=${query}`);
  };

  return (
    <Card className="w-8/12 p-4 m-auto">
      <form
        action="/listings"
        className="flex max-w-md flex-col mx-20 my-8 gap-4"
        onSubmit={redirect}
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
              defaultValue={preferences.location}
            />
          </div>
        </fieldset>

        <fieldset className="mt-4">
          <legend>Cost</legend>
          <div>
            <div className="mb-1 block">
              <Label htmlFor="default-range" value={`Maximum Rent: ${maxRent}`} />
            </div>
            <RangeSlider
              id="default-range"
              max={preferences.cost.max}
              min={preferences.cost.min}
              name="cost"
              defaultValue={preferences.cost.max - preferences.cost.min}
              onChange={(e)=>{setMaxRent(Number(e.target.value))}}
            />
          </div>
          <ToggleSwitch
            checked
            label="Bills included only"
            name="bills"
            onChange={() => {
              console.log('FILTER FOR BILLS INCLUDED');
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
              <Select id="roomsMin" name="roomsMin" required>
                {preferences.propertyDetails.rooms.map((number) => {
                  return <option key={`${number}-rooms`} value={number}>{number}</option>;
                })}
              </Select>
            </div>
            <div className="max-w-md flex items-center gap-2" id="select">
              <div className="mb-2 block">
                <Label htmlFor="roomsMax" value="Max" />
              </div>
              <Select id="roomsMax" name="roomsMax" required>
                {preferences.propertyDetails.rooms.map((number) => {
                  return <option key={`${number}-rooms`} value={number}>{number}</option>;
                })}
              </Select>
            </div>
          </div>
          <div className="max-w-md flex items-center gap-2 mt-4" id="select">
            <div className="mb-2 block">
              <Label htmlFor="tenancyMin" value="Minimum Tenancy" />
            </div>
            <Select id="tenancyMin" name="tenancy" required>
              {preferences.propertyDetails.tenancyMin.map((duration) => {
                return <option key={`${duration}-duration`} value={duration}>{duration}</option>;
              })}
            </Select>
          </div>

          <div className="flex-row space-y-2 mt-4">
            {preferences.propertyDetails.type.map((type) => {
              const typeValue = type.replace(' ', '_');
              return (
                <div
                  key={`${typeValue}-type`}
                  className="flex-col items-center space-x-2"
                >
                  <Checkbox id={typeValue} name="type" value={typeValue} />
                  <Label>{type}</Label>
                </div>
              );
            })}
          </div>
        </fieldset>

        <fieldset>
          <legend>Features</legend>
          <div className="flex-row space-y-2 mt-4">
            {preferences.features.map((feature) => {
              const featureValue = feature.replace(' ', '_');
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
              );
            })}
          </div>
        </fieldset>
        <fieldset>
          <legend>Parking</legend>
          {preferences.parking.map((option) => {
            const optionValue = option.replace(' ', '_');
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
            );
          })}
        </fieldset>

        <Button className="mt-6" type="submit">
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default SearchPreferencesForm;
