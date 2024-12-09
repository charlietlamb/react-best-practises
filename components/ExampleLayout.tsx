interface ExampleLayoutProps {
  children: React.ReactNode
  title: string
  description: string
  bulletPoints: string[]
}

export function ExampleLayout({
  children,
  title,
  description,
  bulletPoints,
}: ExampleLayoutProps) {
  return (
    <div className="container max-w-6xl py-10 px-8 space-y-10">
      <div className="prose prose-invert max-w-none">
        <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
        <ul className="mt-6 space-y-2">
          {bulletPoints.map((point, index) => (
            <li key={index} className="text-base leading-relaxed">
              {point}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        {children}
      </div>
    </div>
  )
}
