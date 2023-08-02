import { FC, useState, ChangeEvent } from 'react';
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

import { SearchFormProps } from '../../types/types';
import { makeIntoQuery, makeIntoProps } from 'utils/searchPreferenceHelpers';
import { convertAddress } from 'utils/mapHelper';

const SearchPreferencesForm: FC<SearchFormProps> = ({ preferences }) => {
  const router = useRouter();
  const [searchRadius, setSearchRadius] = useState<number>(30);
  const [minRooms, setMinRooms] = useState<number>(0);
  const [maxRent, setMaxRent] = useState<number>(
    preferences.cost.max - preferences.cost.min,
  );
  const [minRent, setMinRent] = useState<number>(preferences.cost.min);
  const [maxRooms, setMaxRooms] = useState<number>(
    preferences.property_details.rooms.reduce((acc, cur) =>
      acc > cur ? acc : cur,
    ),
  );
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<string[]>([...preferences.property_details.type])

  const handlePropertyTypes = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedPropertyTypes((prevSelectedTypes) => {
      const selectedValue = event.target?.value
      if (prevSelectedTypes.includes(selectedValue)) 
        return prevSelectedTypes.filter((type) => type !== selectedValue)
      return [...prevSelectedTypes, selectedValue]
  })
  }

  const redirect = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const search = makeIntoProps(e.nativeEvent?.target);
    const query = makeIntoQuery(search.preferences, 'preferences');
    const address = search.preferences.location;
    const editedPropertyTypes = selectedPropertyTypes.map(type=>{type.replace(' ', '_')})
    let { lat, lng } = await convertAddress(address as string);
    router.push(`/listings?=&lat=${lat}&lon=${lng}&property_type=${selectedPropertyTypes.join('=')}${query}`);
  };

  return (
    <Card data-cy="SearchPreferencesForm" className="w-8/12 p-4 m-auto">
      <form
        action="/listings"
        className="flex max-w-md flex-col mx-20 my-8 gap-4"
        onSubmit={redirect}
      >
        <fieldset className="mt-4">
          <legend>Location</legend>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="location" value="Area" />
            </div>
            <TextInput
              id="location"
              placeholder="Search area or postcode"
              required
              type="text"
              name="location"
              defaultValue={preferences.location}
            />
            <div>
              <div className="mb-1 block">
                <Label
                  htmlFor="search-radius"
                  value={`Search Radius: ${searchRadius} km`}
                />
              </div>
              <RangeSlider
                id="search-radius"
                max={30}
                min={1}
                name="radius"
                value={searchRadius}
                onChange={(e) => {
                  setSearchRadius(Number(e.target.value));
                }}
              />
            </div>
          </div>
        </fieldset>

        <fieldset className="mt-4">
          <legend>Cost</legend>
          <div>
            <div>
              <div className="mb-1 block">
                <Label
                  htmlFor="min-cost"
                  value={`Minimum Rent: £${minRent
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
                />
              </div>
              <RangeSlider
                id="min-cost"
                max={preferences.cost.max}
                min={preferences.cost.min}
                name="min_cost"
                value={minRent}
                onChange={(e) => {
                  setMinRent(Number(e.target.value));
                }}
              />
            </div>
            <div className="mb-1 block">
              <Label
                htmlFor="default-range"
                value={`Maximum Rent: £${maxRent
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
              />
            </div>
            <RangeSlider
              id="default-range"
              max={preferences.cost.max}
              min={preferences.cost.min}
              name="max_cost"
              value={maxRent}
              onChange={(e) => {
                setMaxRent(Number(e.target.value));
              }}
            />
          </div>
          <ToggleSwitch
            checked={isToggled}
            label="Bills included only"
            name="bills"
            onChange={() => {
              setIsToggled(!isToggled);
            }}
          />
        </fieldset>

        <fieldset className="mt-4">
          <legend>Property Details</legend>
          <div className="flex gap-4 mt-4">
            <div className="max-w-md flex items-center gap-2" id="select">
              <div className="flex-col items-left">
                <Label
                  htmlFor="min-rooms"
                  value={`Minimum number of rooms: ${minRooms}`}
                />
                <RangeSlider
                  id="min-rooms"
                  max={preferences.property_details.rooms.reduce((acc, cur) =>
                    acc > cur ? acc : cur,
                  )}
                  min={0}
                  name="roomsMin"
                  value={minRooms}
                  onChange={(e) => {
                    setMinRooms(Number(e.target.value));
                  }}
                />
              </div>

              <div className="flex-col items-left">
                <Label
                  htmlFor="max-rooms"
                  value={`Maximum number of rooms: ${maxRooms}`}
                />
                <RangeSlider
                  id="max-rooms"
                  max={preferences.property_details.rooms.reduce((acc, cur) =>
                    acc > cur ? acc : cur,
                  )}
                  min={0}
                  name="roomsMax"
                  value={maxRooms}
                  onChange={(e) => {
                    setMaxRooms(Number(e.target.value));
                  }}
                />
              </div>
            </div>
          </div>
          <div className="max-w-md flex items-center gap-2 mt-4" id="select">
            <div className="mb-2 block">
              <Label htmlFor="tenancyMin" value="Minimum Tenancy" />
            </div>
            <Select id="tenancyMin" name="tenancy" required>
              {preferences.property_details.min_tenancy_months.map(
                (duration) => {
                  return (
                    <option key={`${duration}-duration`} value={duration}>
                      {`${duration} months`}
                    </option>
                  );
                },
              )}
            </Select>
          </div>

          <div className="flex-row space-y-2 mt-4">
            {preferences.property_details.type.map((type) => {
              const typeValue = type.replace(' ', '_');
              return (
                <div
                  key={`${typeValue}-type`}
                  className="flex-col items-center space-x-2"
                >
                  <Checkbox
                    id={typeValue}
                    name="property_type"
                    value={type}
                    defaultChecked
                    onChange={(e)=>{handlePropertyTypes(e)}}
                  />
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
        <Button className="mt-6" type="submit">
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default SearchPreferencesForm;
