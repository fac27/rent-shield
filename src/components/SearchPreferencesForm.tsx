import {FC} from 'react'
import { Button, Checkbox, Label, TextInput, RangeSlider } from 'flowbite-react';

const SearchPreferencesForm: FC = () => {
  return (
    <form className="flex max-w-md flex-col">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput
          id="email1"
          placeholder="name@flowbite.com"
          required
          type="email"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput id="password1" required type="password" />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>

        <div>
          <div className="mb-1 block">
            <Label htmlFor="default-range" value="Maximum Rent" />
          </div>
          <RangeSlider id="default-range" />
        </div>
       

      <Button type="submit">Submit</Button>
    </form>
  );
}

export default SearchPreferencesForm