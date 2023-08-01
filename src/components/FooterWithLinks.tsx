'use client'
import { Footer } from 'flowbite-react'
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'

const FooterWithLinks = () => {
  return (
    <Footer className="absolute bottom-0">
      <div className="w-full px-4 py-6 flex items-center justify-between">
        <Footer.Copyright by="rent-shield" href="/" year={2023} />
        <div className="flex space-x-6">
          <Footer.Icon href="#" icon={BsFacebook} />
          <Footer.Icon href="#" icon={BsInstagram} />
          <Footer.Icon href="#" icon={BsTwitter} />
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
