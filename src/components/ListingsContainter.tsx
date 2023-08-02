import { FC, useEffect, useState } from 'react';

import Property from './Property';
import { ContainerProps } from '../../types/types';
import {getAllImages} from '../lib/models'
import { Images } from '../../types/types';

const ListingsContainer: FC<ContainerProps> = ({ listings }) => {
  // const [allImages, setAllImages] = useState<Images>([])
  

    // const getImages = async() => {
    //   const images = await getAllImages()
    //   setAllImages(images)
    // }
    // getImages()


//   listings = listings.map(listing => ({
//     ...listing,
//     image: allImages.filter(image => image.id === listing.id)
// })
// )

  return (
    <div>
      {listings.map((listing, index) => (
        <Property
          id={`listing-${index + 1}`}
          listing={listing}
          key={listing.id}
        />
      ))}
    </div>
  );
};

export default ListingsContainer;
