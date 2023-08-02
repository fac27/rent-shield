'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Dropdown, Navbar, Avatar } from 'flowbite-react'
import { RxHamburgerMenu } from 'react-icons/rx'
import HamburgerSidebar from './HamburgerSidebar'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Session,
  createClientComponentClient,
} from '@supabase/auth-helpers-nextjs'
import { Database } from '../../types/supabase'

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const [session, setSession] = useState<Session | null>(null)
  const router = useRouter()
  const supabase = createClientComponentClient<Database>()

  useEffect(() => {
    // check whether user is logged in
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()
      console.log(session)
      if (session) return setSession(session)
    }
    getSession()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <header>
      <Navbar fluid rounded>
        {showSidebar ? <HamburgerSidebar /> : null}
        <div className="flex gap-3 items-center">
          <button onClick={() => setShowSidebar(!showSidebar)}>
            <RxHamburgerMenu className="invert scale-125 mx-2" />
          </button>
          <Navbar.Brand href="/" className="flex gap-3 items-center">
            {
              <Image
                src="/rs-logo.svg"
                width={30}
                height={30}
                alt="Rent-shield logo"
                className="h-6 sm:h-9"
              />
            }
            <span className="hidden whitespace-nowrap text-xl font-semibold dark:text-white md:block">
              rent shield
            </span>
          </Navbar.Brand>
        </div>
        <div className="flex ">
          <Dropdown
            inline
            theme={{ arrowIcon: 'ml-0 mb-0' }}
            label={
              <Avatar
                alt="User settings"
                img="/images/user-image.svg"
                className="scale-75 md:w-16 md:h-16 md:scale-100"
              />
            }
          >
            {session ? (
              <>
                <Dropdown.Header>
                  {/* <span className="block text-lg">Gertrude Pickle</span> */}
                  <span className="block truncate text-lg font-medium">
                    {session.user.email}
                  </span>
                </Dropdown.Header>
                <Dropdown.Item>Settings</Dropdown.Item>
                {session.user.user_metadata.role_id === 2 ? (
                  <>
                    <Dropdown.Divider />
                    <Link href="/add-listing">
                      <Dropdown.Item>Add Listing</Dropdown.Item>
                    </Link>
                  </>
                ) : (
                  ''
                )}

                <Dropdown.Divider />
                <Dropdown.Item>Sign out</Dropdown.Item>
              </>
            ) : (
              <>
                <Link href="/log-in">
                  <Dropdown.Item>Log In</Dropdown.Item>
                </Link>
                <Link href="/sign-up">
                  <Dropdown.Item>Sign Up</Dropdown.Item>
                </Link>
              </>
            )}
          </Dropdown>
        </div>
      </Navbar>
    </header>
  )
}

export default Header
