interface CardProps {
  title: string
  description: string
  imageUrl: string
}

export function Card({ title, description, imageUrl }: CardProps) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h3 className="text-2xl font-semibold leading-none tracking-tight mb-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
