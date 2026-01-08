import React from 'react'

export default function MovieCard({ movie }: { movie: any }) {
  return (
    <a className="card" href={`/movie/${movie.id}`}>
      {movie.poster_path ? <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} /> : <div style={{height:270,background:'#041022',borderRadius:6}} />}
      <h3>{movie.title}</h3>
      <div className="small">{movie.release_date} • ⭐ {movie.vote_average ?? '—'}</div>
    </a>
  )
}