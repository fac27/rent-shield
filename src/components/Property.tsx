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
import arrow from '../../public/arrow.svg';
import { useState } from 'react';
// import { Carousel } from 'flowbite-react';

export default function Property() {
  const [liked, setLiked] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  //    use props
  //   paths
  const images = ['/images/interior-1.jpeg', '/images/interior-3.jpeg'];

  return (
    <div className="flex flex-col">
      {/* images */}
      {/* animate */}
      <section className="relative h-96">
        <div className="flex justify-center">
          {images.map((image, i) => (
            <Image
              key={crypto.randomUUID()}
              src={image}
              alt="image-1"
              layout="fill"
              objectFit="contain"
              style={currentSlide === i ? {} : { display: 'none' }}
            />
          ))}
        </div>
        <button
          className="absolute inset-y-0 left-0 h-96 mx-4 rotate-180"
          onClick={() =>
            currentSlide !== 0 ? setCurrentSlide(currentSlide - 1) : ''
          }
        >
          <Image src={arrow} alt="arrow-left" width={40} height={40} />
        </button>
        <button
          className="absolute inset-y-0 right-0 h-96 mx-4"
          onClick={() =>
            currentSlide !== images.length - 1
              ? setCurrentSlide(currentSlide + 1)
              : ''
          }
        >
          <Image src={arrow} alt="arrow-right" width={40} height={40} />
        </button>
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          {images.map((_, index) => (
            <button
              key={crypto.randomUUID()}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? 'bg-white' : 'bg-gray-300'
              }`}
              onClick={() => {
                setCurrentSlide(index);
              }}
              aria-current="true"
              aria-label="Slide 1"
            ></button>
          ))}
        </div>
      </section>

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
        <Image src={map} alt="demo of map" width={1000} height={1000} />
      </div>
    </div>
  );
}
