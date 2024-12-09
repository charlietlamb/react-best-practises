interface ProductDetailsProps {
  specifications: string[]
}

export function ProductDetails({ specifications }: ProductDetailsProps) {
  return (
    <div>
      <h3 className="font-semibold mb-2">Technical Specifications</h3>
      <ul className="space-y-2 text-muted-foreground">
        {specifications.map((spec, index) => (
          <li key={index}>{spec}</li>
        ))}
      </ul>
    </div>
  )
}
