import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import type { Database } from '../../../../types/supabase'

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    const supabase = createRouteHandlerClient<Database>({ cookies })
    const { data: session, error } = await supabase.auth.exchangeCodeForSession(
      code,
    )

    if (session) {
      const response = new NextResponse('')
      response.cookies.set('session', JSON.stringify(session), {
        httpOnly: true,
      })
      return response
    }
  }
  // create user entry
  // await createUser(uuid)

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(requestUrl.origin)
}
