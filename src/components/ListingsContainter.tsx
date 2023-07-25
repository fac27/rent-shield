import { ReactElement, FC } from 'react';

import Property from './Property';
import { ContainerProps } from '../../types/supabase';

const ListingsContainer: FC<ContainerProps> = ({listings}):ReactElement => {
  // console.log(listings)
  return (
    <div>
      {listings.map(listing=> (
        <Property listing={listing} key={listing.id} />
      ))}
    </div>
  );
};

export default ListingsContainer;
