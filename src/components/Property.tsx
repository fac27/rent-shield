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
import { useState } from 'react';
import { Carousel } from 'flowbite-react';

export default function Property() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="flex flex-col">
      {/* image */}
      {/* <Image
        src="/images/interior-3.jpeg"
        alt="interior-3"
        width={1000}
        height={1000}
      /> */}
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image
              src="/images/interior-1.jpeg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
              width={1000}
              height={1000}
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image
              src="/images/interior-.jpeg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
      {/* <Carousel slideInterval={5000} className="h-1/2">
        <Image
          src="/images/interior-1.jpeg"
          alt="interior-1"
          width={500}
          height={500}
        />
        <Image
          src="/images/interior-3.jpeg"
          alt="interior-3"
          width={500}
          height={500}
        />
      </Carousel> */}

      {/* details */}
      <section className="flex justify-evenly bg-[#011627] py-5">
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
      <section className="flex justify-around">
        <b className="flex  items-center gap-2 text-xl">
          <Image
            src={location}
            alt="location"
            width={20}
            height={20}
            className="invert"
          />
          2 mi from desired location
        </b>
        <b className="flex items-center gap-2 text-xl">
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
