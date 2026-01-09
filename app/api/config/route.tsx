import { NextResponse } from 'next/server'

export async function GET() {
  // Minimal config placeholder; in real implementation we'll call TMDB /configuration
  const cfg = {
    images: {
      base_url: 'https://image.tmdb.org/t/p/',
      secure_base_url: 'https://image.tmdb.org/t/p/',
      poster_sizes: ['w92','w154','w185','w342','w500','w780','original'],
      backdrop_sizes: ['w300','w780','w1280','original'],
      "cast": [
    { "id": 1, "name": "Brad Pitt", "profile_url": "https://image.tmdb.org/t/p/w185/123XYZ.jpg" }
  ]
    }
  }
  return NextResponse.json(cfg, { status: 200, headers: { 'cache-control':'public, max-age=86400' } })
}