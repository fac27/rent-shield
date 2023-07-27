'use client';

import { Button, Card, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';
// import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
// import type { Database } from '../../../../types/supabase';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import supabaseCompClient from 'lib/supabaseCompClient';

export default function SignInForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()



  const handleLogin = async () => {
    await supabaseCompClient.auth.signInWithPassword({
      email,
      password,
    })
    router.refresh()
  }


  return (
    <main className="fixed flex h-full w-screen pb-20">
      <Card className="w-8/12 p-4 m-auto">
        <form className="flex flex-col w-full placeholder:flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              placeholder="name@flowbite.com"
              required
              shadow
              type="email"
              name='email'
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Your password" />
            </div>
            <TextInput name='password' value={password} onChange={(e)=> setPassword(e.target.value)} id="password2" required shadow type="password" />
          </div>
          <Button className="self-end" color="purple" >
            <Link href="/sign-up"> Don&apos;t have an account yet? </Link>
          </Button>
          <Button type="submit" onClick={handleLogin}>Log In</Button>
        </form>
      </Card>
    </main>
  );
}
