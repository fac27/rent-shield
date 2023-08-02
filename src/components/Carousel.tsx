import Image from 'next/image'
import { useState } from 'react'
import arrow from '../../public/arrow.svg'
import { v4 as uuidv4 } from 'uuid'
import type { Images } from '../../types/types'

export default function Carousel({ images }: { images: Images }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <section className="relative h-96 bg-[#CAC4CE] dark:bg-[#202A37]">
      <div id="carousel" className="relative flex justify-center w-screen h-96">
        {images.map((image, i) => (
          <Image
            key={uuidv4()}
            src={image.url}
            alt={`image-${i + 1}`}
            fill
            style={{ objectFit: 'contain' }}
            className={currentSlide === i ? '' : 'hidden'}
          />
        ))}
      </div>
      <button
        id="left-arrow"
        className="absolute inset-y-0 left-0 h-96 mx-4 rotate-180"
        onClick={() =>
          currentSlide !== 0
            ? setCurrentSlide(currentSlide - 1)
            : setCurrentSlide(images.length - 1)
        }
      >
        <Image src={arrow} alt="arrow-left" width={40} height={40} />
      </button>
      <button
        id="right-arrow"
        className="absolute inset-y-0 right-0 h-96 mx-4"
        onClick={() =>
          currentSlide !== images.length - 1
            ? setCurrentSlide(currentSlide + 1)
            : setCurrentSlide(0)
        }
      >
        <Image src={arrow} alt="arrow-right" width={40} height={40} />
      </button>
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2 rounded-full bg-slate-300 p-2">
        {images.map((_, index) => (
          <button
            key={uuidv4()}
            id={`slide-${index + 1}`}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-white' : 'bg-[#A2A6AD]'
            }`}
            onClick={() => {
              setCurrentSlide(index)
            }}
            aria-current="true"
            aria-label="Slide 1"
          ></button>
        ))}
      </div>
    </section>
  )
}
