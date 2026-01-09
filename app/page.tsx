import React from 'react'
import SearchForm from '../components/SearchForm'
import MovieCard from '../components/MovieCard'
import Pagination from '../components/Pagination'
import { notFound } from 'next/navigation'
import { headers } from 'next/headers'

type Props = {
  searchParams: { q?: string; page?: string }
}

export default async function Page({ searchParams }: Props) {
  let {q,page} = await searchParams;

  if (!q || q.length < 2) {
    return (
      <>
        <SearchForm initialQuery={q} />
        <p style={{marginTop:20}}>Enter at least 2 characters to search for movies.</p>
      </>
    )
  }

  // Server-side fetch to internal route handler
  // Use Vercel URL if available, otherwise construct from headers
  let baseUrl: string
  baseUrl = `https://${process.env.VERCEL_URL}`
  console.log(`${baseUrl}/api/movies/search?query=${q}&page=${page || '1'}`);
  const res = await fetch(`${baseUrl}/api/movies/search?query=${q}&page=${page || '1'}`, {
    cache: 'no-store',
  })

  if (res.status === 404) return notFound()
  if (res.status === 429) {
    throw new Error("Too many requests")
  }
  if (!res.ok) {
    return (
      <>
        <SearchForm initialQuery={q} />
        <p style={{marginTop:20}}>Error: {res.status} {res.statusText}</p>
      </>
    )
  }

  const data = await res.json()
  return (
    <>
      <SearchForm initialQuery={q} />
      {data.results?.length ? (
        <>
          <div className="movie-grid">
            {data.results.map((m: any) => (
              <MovieCard key={m.id} movie={m} />
            ))}
          </div>
          <Pagination page={data.page} total_pages={data.total_pages} q={q} />
        </>
      ) : (
        <p style={{marginTop:20}}>No results found.</p>
      )}
    </>
  )
}