import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const url = new URL(req.url)
  const id = url.pathname.split('/').pop() || ''
  const numeric = Number(id)
  if (!numeric || numeric <= 0) return NextResponse.json({ error: 'Invalid id' }, { status: 400 })

  // Placeholder detail
  const movie = {
    id: numeric,
    title: 'Sample Movie',
    overview: 'Placeholder details for movie',
    release_date: '2026-01-01',
    genres: [{ id: 18, name: 'Drama' }],
    runtime: 120,
    rating: 7.3,
    cast: [ { id: 1, name: 'Actor One', character: 'Lead', profile_url: '' } ],
    trailers: [],
    poster_url: '',
    backdrop_url: '',
  }

  return NextResponse.json(movie)
}