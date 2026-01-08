export type MovieSummary = {
  id: number
  title: string
  release_date: string
  overview: string
  poster_url?: string
  vote_average?: number
}

export type SearchResponse = {
  page: number
  total_pages: number
  total_results: number
  results: MovieSummary[]
}