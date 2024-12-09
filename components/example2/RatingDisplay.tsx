interface RatingDisplayProps {
  rating: number
  reviewCount: number
}

export function RatingDisplay({ rating, reviewCount }: RatingDisplayProps) {
  return (
    <div className="flex items-center mb-4">
      <div className="text-yellow-500 text-xl mr-2">
        {'\u2605'.repeat(Math.round(rating))}
      </div>
      <span className="text-muted-foreground">{reviewCount} reviews</span>
    </div>
  )
}
