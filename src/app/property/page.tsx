import { getPropertyById } from '../../lib/models';
import Image from 'next/image';

// eslint-disable-next-line react/display-name
const Property = async (id: string) => {
  const property = await getPropertyById(id);
  console.log(`property: ${JSON.stringify(property)}`);
  const images = property[0].image;
  return property ? (
    <div className="py-5">
      <h1 className="font-bold">Property details</h1>
      <p>{property[0].address1}</p>
      <p>{property[0].address2}</p>
      {images.map((image) => (
        <Image
          key={image.id}
          src={image.url}
          alt={'property image'}
          width={400}
          height={160}
        />
      ))}
    </div>
  ) : (
    <div className="py-5">No data fetched</div>
  );
};

export default Property;
