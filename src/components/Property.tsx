'use client';

import Image from 'next/image';
import location from '../../public/location.svg';
import bed from '../../public/bed.svg';
import bath from '../../public/bath.svg';
import price from '../../public/price.svg';
import heart from '../../public/heart.svg';
import fullHeart from '../../public/full-heart.svg';
import transport from '../../public/transport.svg';
import map from '../../public/images/map-test.png';
import { useState, FC } from 'react';
import Carousel from './Carousel';
import { PropertyType } from '../../types/supabase';


const Property: FC<PropertyType> = ({listing}) => {
  const [liked, setLiked] = useState(listing.favourited);

  return (
    <div className="flex flex-col">
      {/* images */}
      {/* animate */}
      <Carousel images={listing.images} />

      {/* details */}
      <section className="flex justify-evenly bg-[#202A37] py-5">
        <span className="flex gap-2 text-xl">
          <Image src={price} alt="price" width={20} height={20} />
          <p className="text-slate-200"> {listing.rent}</p>
        </span>
        <span className="flex gap-2 text-xl">
          <Image src={bed} alt="bed" width={20} height={20} />
          <p className="text-slate-200"> {listing.bedrooms} </p>
        </span>
        <span className="flex gap-2 text-xl">
          <Image src={bath} alt="bath" width={20} height={20} />
          <p className="text-slate-200"> {listing.bathrooms} </p>
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
        {listing.description}
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
        <Image src={map} alt="demo of map" width={1000} height={1000} />
      </div>
    </div>
  );
}

export default Property