import type { Metadata } from 'next'

import { fetchMe } from '@cloud/_api/fetchMe.js'
import { mergeOpenGraph } from '@root/seo/mergeOpenGraph.js'
import { redirect } from 'next/navigation'

import { Signup } from './page_client.js'

export default async () => {
  const { user } = await fetchMe()

  if (user) {
    redirect(`/cloud?error=${encodeURIComponent('You must be logged out to sign up')}`)
  }

  return <Signup />
}

export const metadata: Metadata = {
  description: 'Signup for Payload Cloud',
  openGraph: mergeOpenGraph({
    title: 'Signup | Payload Cloud',
    url: '/signup',
  }),
  title: 'Signup | Payload Cloud',
}
