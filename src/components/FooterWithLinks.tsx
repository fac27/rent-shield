'use client'
import { Footer } from 'flowbite-react'
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from 'react-icons/bs'

const FooterWithLinks = () => {
  return (
    <Footer className="absolute bottom-0">
      <div className="w-full px-4 py-6 flex items-center justify-between">
        <Footer.Copyright by="rent-shield" href="/" year={2023} />
        <div className="flex space-x-6">
          <Footer.Icon
            href="https://www.linkedin.com/school/founders-and-coders/?originalSubdomain=uk"
            icon={BsLinkedin}
          />
          <Footer.Icon
            href="https://www.instagram.com/founderscoders/?hl=en"
            icon={BsInstagram}
          />
          <Footer.Icon
            href="https://twitter.com/founderscoders"
            icon={BsTwitter}
          />
          <Footer.Icon
            href="https://github.com/fac27/rent-shield"
            icon={BsGithub}
          />
        </div>
      </div>
    </Footer>
  )
}

export default FooterWithLinks
