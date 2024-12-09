import { Review } from './types'

interface ReviewListProps {
  reviews: Review[]
}

export function ReviewList({ reviews }: ReviewListProps) {
  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="border-b pb-4 last:border-b-0 last:pb-0"
        >
          <div className="flex items-center mb-2">
            <span className="font-semibold mr-2">{review.author}</span>
            <div className="text-yellow-500">
              {'\u2605'.repeat(review.rating)}
            </div>
          </div>
          <p className="text-muted-foreground">{review.text}</p>
        </div>
      ))}
    </div>
  )
}
