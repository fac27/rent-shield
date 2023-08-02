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

export default function SignUpForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('renter')
  const supabase = createClientComponentClient<Database>()
  const router = useRouter()

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
    if (error) return // revisit (error handling)

    //  KEEP THIS FOR NOW

    // const user = data.user as any; // revisit
    // const uid = user.identities[0]?.user_id;

    // if (!uid) return; //revisit
    // console.log(user, uid);

    // const { error: insertError } = await supabaseClient
    //   .from('user')
    //   .insert({ user_id: uid, role_id: roleId[0].id });

    // console.log(insertError);
    router.refresh()
  }
  return (
    <main className="fixed flex h-full w-screen pb-20">
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
                className={`m-2 p-2 ${role === 'landlord' ? '' : 'opacity-50'}`}
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
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
    </main>
  )
}
