import { RatingDisplay } from '@/components/example2/RatingDisplay'

interface ProductOverviewProps {
  title: string
  description: string
  rating: number
  reviewCount: number
}

export function ProductOverview({
  title,
  description,
  rating,
  reviewCount,
}: ProductOverviewProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <RatingDisplay rating={rating} reviewCount={reviewCount} />
      <p className="text-muted-foreground">{description}</p>
      <button className="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded-md">
        Add to Cart
      </button>
    </div>
  )
}
