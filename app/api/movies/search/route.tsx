import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const q = searchParams.get('q')?.trim() || ''
  const page = parseInt(searchParams.get('page') || '1', 10)

  // Placeholder response while TMDB integration is implemented
  const dummy = {
    page,
    total_pages: 1,
    total_results: 1,
    results: [
      {
        id: 1,
        title: `Sample movie matching "${q}"`,
        release_date: '2026-01-01',
        overview: 'This is a placeholder movie. Real TMDB integration coming soon.',
        poster_url: '',
        vote_average: 7.2,
      },
    ],
  }

  return NextResponse.json(dummy, { status: 200, headers: { 'x-scaffold':'true' } })
}