// import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
// import { NextResponse, NextRequest } from 'next/server'
// import type { Database } from './types/supabase'

// export const middleware = async (req: NextRequest) => {
//   const res = NextResponse.next()
//   const supabase = createMiddlewareClient<Database>({ req, res })
//   const {
//     data: { session },
//   } = await supabase.auth.getSession()
//   if (!session) {
//     return NextResponse.redirect('/log-in')
//   }
//   return res
// }
