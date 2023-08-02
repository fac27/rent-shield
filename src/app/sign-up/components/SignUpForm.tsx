'use client'

import { Button, Card, Label, TextInput } from 'flowbite-react'
import Link from 'next/link'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '../../../../types/supabase'
import { useRouter } from 'next/navigation'
import { ReactEventHandler, useState } from 'react'
import { BsHouseHeartFill, BsFillPersonFill } from 'react-icons/bs'
import supabaseClient from 'lib/supabaseClient'
import { getRoleByDescription } from 'lib/models'
import { AuthError } from '@supabase/supabase-js'

export default function SignUpForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('renter')
  const [submitted, setSubmitted] = useState(false)
  const supabase = createClientComponentClient<Database>()
  const router = useRouter()
  const [newError, setNewError] = useState('')

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()

    const roleId = await getRoleByDescription(role)

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          role_id: roleId,
        },
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    })
    if (error) {
      if (error.status === 429 || error.status === 422) {
        setNewError(
          'There was an error with your email or password, please try again',
        )
      } else {
        // Handle other errors (optional)
        console.log('Error:', error.message)
      }
      return
    }
    setSubmitted(true)
    router.refresh()
  }
  return (
    <main className="fixed flex h-full w-screen pb-20">
      {!submitted ? (
        <Card className="w-8/12 p-4 m-auto">
          <form
            className="flex flex-col w-full placeholder:flex-col gap-4"
            onSubmit={handleSignUp}
          >
            <div className="flex items-center justify-around">
              <div className="text-center" onClick={() => setRole('renter')}>
                <label>
                  <input
                    type="radio"
                    name="role"
                    value="renter"
                    required
                    className="absolute opacity-0"
                    checked
                  />
                  <BsFillPersonFill
                    size={70}
                    className={`m-2 p-2 ${
                      role === 'renter'
                        ? 'bg-white rounded-md drop-shadow-[0px_0px_4px_rgba(255,255,255,0.85)]'
                        : ''
                    }`}
                  />
                </label>
                <Label
                  htmlFor="renter"
                  value="Renter"
                  className={`m-2 p-2 ${role === 'renter' ? '' : 'opacity-50'}`}
                />
              </div>

              <div className="text-center" onClick={() => setRole('landlord')}>
                <label>
                  <input
                    type="radio"
                    name="role"
                    value="landlord"
                    required
                    className="absolute opacity-0"
                  />
                  <BsHouseHeartFill
                    size={70}
                    className={`m-2 p-2 ${
                      role === 'landlord'
                        ? 'bg-white rounded-md drop-shadow-[0px_0px_4px_rgba(255,255,255,0.85)]'
                        : ''
                    }`}
                  />
                </label>
                <Label
                  htmlFor="landlord"
                  value="Landlord"
                  className={`m-2 p-2 ${
                    role === 'landlord' ? '' : 'opacity-50'
                  }`}
                />
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email2" value="Your email" />
              </div>
              <TextInput
                id="email2"
                placeholder="Email"
                required
                shadow
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="email2"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password2" value="Your password" />
              </div>
              <TextInput
                id="password2"
                required
                shadow
                type="password"
                name="password2"
                placeholder="password must be more than 6 characters"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <p className="dark:text-white block">{newError}</p>
            <Button
              as={Link}
              href="/log-in"
              className="self-end"
              gradientDuoTone="success"
              outline
            >
              Already have an account?
            </Button>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Register new account
            </Button>
          </form>
        </Card>
      ) : (
        <div>please check your email</div>
      )}
    </main>
  )
}
