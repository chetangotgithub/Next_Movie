import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'

type Props = { params: { id: string } }

export default async function MoviePage({ params }: Props) {
  const {id} = await params
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`,{
          cache: "no-store",
          headers: {
            Authorization: `Bearer ${process.env.READ_ACCESS_TOKEN}`,
            Accept: "application/json",
          },
        })
  if (res.status === 404) return notFound()
  if (!res.ok) {
    return <p>Failed to load movie: {res.status}</p>
  }
  const movie = await res.json()

  return (
    <article>
      <h2>{movie.title}</h2>
      <p className="small">{movie.release_date} • {movie.runtime} min</p>
      {movie.genres?.length && (
        <p className="small">
          Genres: {movie.genres.map((g: any) => g.name).join(', ')}
        </p>
      )}
      <p>Rating {movie.vote_average} ⭐</p>
      <div style={{display:'flex',gap:16,marginTop:12}}>
        {movie.poster_path && <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="poster" style={{width:240,borderRadius:8}} />}
        <div>
          <p>{movie.overview}</p>
          <h4>Top Cast</h4>
          <ul>
            {movie.cast?.slice(0,5).map((c: any)=> (
              <li key={c.id}>{c.name} as {c.character}</li>
            ))}
          </ul>
        </div>
        
        </div>
    </article>
  )
}