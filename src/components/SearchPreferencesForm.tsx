import { FC } from 'react';
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

  const redirect = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submitted: any = e.nativeEvent?.target;
    if (!submitted) return;

    const search: SearchPreferenceProps = {
      preferences: {
        location: submitted.location.value,
        cost: {
          max: submitted.localtion.value,
          billsIncluded: submitted.bills.value,
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
          pets: submitted.pets.value,
          smokers: submitted.smokers.value,
          bike_storage: submitted.bike_storage.value,
          garden: submitted.garden.value,
          fireplace: submitted.fireplace.value,
          elevator: submitted.elevator.value,
          wheelchair_accessible: submitted.wheelchair_accessible.value,
          electric_heating: submitted.electric_heating.value,
          gas_heating: submitted.gas_heating.value,
          visitor_parking: submitted.visitor_parking.value,
          parking: {
            allocated: submitted.allocated.value,
            street: submitted.street.value,
          },
        },
      },
    };

    const {lat, lng} = await convertAddress(search.preferences.location)

    router.push(`/listings?=${lat && 'lat='+lat}${lng && 'lng='+lng}`)

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
              name="cost"
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
                  return <option key={`${number}-rooms`}>{number}</option>;
                })}
              </Select>
            </div>
            <div className="max-w-md flex items-center gap-2" id="select">
              <div className="mb-2 block">
                <Label htmlFor="roomsMax" value="Max" />
              </div>
              <Select id="roomsMax" name="roomsMax" required>
                {preferences.propertyDetails.rooms.map((number) => {
                  return <option key={`${number}-rooms`}>{number}</option>;
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
                return <option key={`${duration}-duration`}>{duration}</option>;
              })}
            </Select>
          </div>

          <div className="flex-row space-y-2 mt-4">
            {preferences.propertyDetails.type.map((type) => {
              const typeValue = type.replace(' ', '-');
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
              const featureValue = feature.replace(' ', '-');
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
            const optionValue = option.replace(' ', '-');
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
