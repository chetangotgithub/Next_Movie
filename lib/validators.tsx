export function validateQuery(q: string, page: number): string | null {
  if (!q) return 'q is required'
  if (q.trim().length < 2) return 'q must be at least 2 characters'
  if (!Number.isFinite(page) || page < 1) return 'page must be >= 1'
  return null
}