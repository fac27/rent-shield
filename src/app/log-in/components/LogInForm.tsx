'use client';

import { Button, Card, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';

export default function SignInForm() {
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
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Your password" />
            </div>
            <TextInput id="password2" required shadow type="password" />
          </div>
          <Button className="self-end" color="purple">
            <Link href="/sign-up"> Don&apos;t have an account yet? </Link>
          </Button>
          <Button type="submit">Log In</Button>
        </form>
      </Card>
    </main>
  );
}
