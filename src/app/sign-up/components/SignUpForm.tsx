'use client';

import { Button, Card, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import type { Database } from '../../../../types/supabase';

export default function SignUpForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const supabase = createClientComponentClient<Database>()
  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    })
    router.push('/')
  }
  return (
    <main className="fixed flex h-full w-screen pb-20">
      <Card className="w-8/12 p-4 m-auto">
        <form className="flex flex-col w-full placeholder:flex-col gap-4">
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
              onChange={(e)=> setEmail(e.target.value)}
              value={email}
              name='email'
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Your password" />
            </div>
            <TextInput id="password2" required shadow type="password" name="password" onChange={(e)=> setPassword(e.target.value)}/>
          </div>
          {/* <div>
            <div className="mb-2 block">
              <Label htmlFor="repeat-password" value="Repeat password" />
            </div>
            <TextInput id="repeat-password" required shadow type="password" />
          </div> */}
          <Button className="self-end" color="purple">
            <Link href="/log-in"> Already have an account? </Link>
          </Button>
          <Button onClick={handleSignUp} type="submit">Register new account</Button>
        </form>
      </Card>
    </main>
  );
}
