import { FC } from 'react';
import {
  Button,
  Checkbox,
  Label,
  TextInput,
  RangeSlider,
  Select,
  ToggleSwitch
} from 'flowbite-react';

const SearchPreferencesForm: FC = () => {
  return (
    <form className="flex max-w-md flex-col mx-20 my-8 gap-4">
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
          />
        </div>
      </fieldset>

      <fieldset className="mt-4">
        <legend>Cost</legend>
        <div>
          <div className="mb-1 block">
            <Label htmlFor="default-range" value="Maximum Rent" />
          </div>
          <RangeSlider id="default-range" />
        </div>
        <ToggleSwitch
          checked
          label="Bills included only"
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
            <Select id="roomsMin" required>
              <option>Studio</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Select>
          </div>
          <div className="max-w-md flex items-center gap-2" id="select">
            <div className="mb-2 block">
              <Label htmlFor="roomsMax" value="Max" />
            </div>
            <Select id="roomsMax" required>
              <option>Studio</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Select>
          </div>
        </div>
        <div className="max-w-md flex items-center gap-2 mt-4" id="select">
          <div className="mb-2 block">
            <Label htmlFor="tenancyMin" value="Minimum Tenancy" />
          </div>
          <Select id="tenancyMin" required>
            <option>6 months</option>
            <option>1 year</option>
            <option>2 years</option>
          </Select>
        </div>

        <div className="flex-row space-y-2 mt-4">
          <div className="flex-col items-center space-x-2">
            <Checkbox id="studio" name="studio" value="studio" />
            <Label>Studio Flat</Label>
          </div>
          <div className="flex-col items-center space-x-2">
            <Checkbox id="bedsit" name="bedsit" value="bedsit" />
            <Label>Bedsit</Label>
          </div>
          <div className="flex-col items-center space-x-2">
            <Checkbox id="detached" name="detached" value="detached" />
            <Label>Detached House</Label>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend>Extras</legend>
        <div className="flex-row space-y-2 mt-4">
          <div className="flex-col items-center space-x-2">
            <Checkbox id="pets" name="pets" value="pets" />
            <Label>Pets allowed</Label>
          </div>
          <div className="flex-col items-center space-x-2">
            <Checkbox id="smokers" name="smokers" value="smokers" />
            <Label>Smokers allowed</Label>
          </div>
          <div className="flex-col items-center space-x-2">
            <Checkbox id="bike-storage" name="bike-storage" value="bike-storage" />
            <Label>Bike Storage</Label>
          </div>
          <div className="flex-col items-center space-x-2">
            <Checkbox id="garden" name="garden" value="garden" />
            <Label>Garden</Label>
          </div>
          <div className="flex-col items-center space-x-2">
            <Checkbox id="fireplace" name="fireplace" value="fireplace" />
            <Label>Fireplace</Label>
          </div>
          <div className="flex-col items-center space-x-2">
            <Checkbox id="elevator" name="elevator" value="elevator" />
            <Label>Elevator</Label>
          </div>
          <div className="flex-col items-center space-x-2">
            <Checkbox
              id="electric-heating"
              name="electric-heating"
              value="electric-heating"
            />
            <Label>Electric Heating</Label>
          </div>
          <div className="flex-col items-center space-x-2">
            <Checkbox id="gas-heating" name="gas-heating" value="gas-heating" />
            <Label>Gas Heating</Label>
          </div>
          <div className="flex-col items-center space-x-2">
            <Checkbox
              id="visitor-parking"
              name="visitor-parking"
              value="visitor-parking"
            />
            <Label>Visitor Parking</Label>
          </div>
        </div>
      </fieldset>

      <Button className="mt-6" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default SearchPreferencesForm;
