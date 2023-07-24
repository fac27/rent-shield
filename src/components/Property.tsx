'use client';

import Image from 'next/image';
import location from '../../public/location.svg';
import bed from '../../public/bed.svg';
import bath from '../../public/bath.svg';
import price from '../../public/price.svg';
import heart from '../../public/heart.svg';
import fullHeart from '../../public/full-heart.svg';
import transport from '../../public/transport.svg';
import { useEffect, useState } from 'react';
import Carousel from '../components/Carousel';
import Map from './Map';
import { convertAddress } from 'utils/mapHelper';

export default function Property({ propertyProps }: any) {
  //won't add the type until we have it from the database interface!
  const [liked, setLiked] = useState(false);
  const [center, setCenter] = useState({ lat: 51.56506, lng: -0.09763 });
  const [markers, setMarkers] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true); // added a loading state in case the map doesn't load...

  //    use props
  //   paths
  const images = ['/images/interior-1.jpeg', '/images/interior-3.jpeg'];
  //needed use effect to access promise from the convertaddress function
  // (we should do this before it goes into the database and get the data
  //from the property object instead of using a useeffect for this.)
  useEffect(() => {
    convertAddress(propertyProps.address)
      .then((location) => {
        setCenter(location);
        setMarkers([location]);
        setLoading(false);
      })
      .catch((error) => console.error('something has gone wrong'));
  }, [propertyProps.address]);

  return (
    <div className="flex flex-col">
      {/* images */}
      {/* animate */}
      <Carousel images={images} />

      {/* details */}
      <section className="flex justify-evenly bg-[#202A37] py-5">
        <span className="flex gap-2 text-xl">
          <Image src={price} alt="price" width={20} height={20} />
          <p className="text-slate-200"> $1,500/Month</p>
        </span>
        <span className="flex gap-2 text-xl">
          <Image src={bed} alt="bed" width={20} height={20} />
          <p className="text-slate-200"> 1 </p>
        </span>
        <span className="flex gap-2 text-xl">
          <Image src={bath} alt="bath" width={20} height={20} />
          <p className="text-slate-200"> 2 </p>
        </span>
        <button onClick={() => setLiked(!liked)}>
          {liked ? (
            <Image src={fullHeart} alt="saved" width={25} height={25} />
          ) : (
            <Image src={heart} alt="not saved" width={25} height={25} />
          )}
        </button>
      </section>

      {/* description */}
      <p className="p-10">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores os qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est. Lorem, ipsum dolor
        sit amet consectetur adipisicing elit. Quis saepe at possimus, expedita
        commodi voluptates, iusto illo sint architecto veritatis consectetur
        placeat porro libero adipisci quam ad, incidunt consequuntur excepturi.
      </p>

      {/* location info */}
      <section className="flex justify-around lg:justify-center lg:gap-60">
        <b className="flex  items-center gap-2 text-sm">
          <Image
            src={location}
            alt="location"
            width={20}
            height={20}
            className="invert"
          />
          2 mi from desired location
        </b>
        <b className="flex items-center gap-2 text-sm">
          <Image src={transport} alt="transport" width={20} height={20} />
          Piccadilly Circus
        </b>
      </section>

      {/* map */}
      <div className="flex justify-center py-5">
        {/* <Image src={map} alt="demo of map" width={1000} height={1000} /> */}

        {loading === false ? (
          <Map center={center} markers={markers} />
        ) : (
          <div>loading...</div>
        )}
      </div>
    </div>
  );
}
