import { FC } from 'react';

import Property from './Property';
import { ContainerProps } from '../../types/types';

const ListingsContainer: FC<ContainerProps> = ({listings}) => {
  return (
    <div>
      {listings.map(listing=> (
        <Property listing={listing} key={listing.id} />
      ))}
    </div>
  );
};

export default ListingsContainer;
