import Link from 'next/link'

const examples = [
  {
    id: 1,
    title: 'Using map for reusable components',
    description:
      'Learn how to avoid component duplication by using map to render components dynamically.',
  },
  {
    id: 2,
    title: 'Composing components',
    description:
      'See how breaking down a large monolithic component into smaller, reusable pieces improves maintainability.',
  },
  {
    id: 3,
    title: 'Functional updates in useState',
    description:
      'Understand how to avoid stale state issues by using functional updates with the useState hook.',
  },
  {
    id: 4,
    title: 'Context API vs Prop Drilling',
    description:
      'Learn when and how to use React Context API to avoid excessive prop drilling.',
  },
  {
    id: 5,
    title: 'Memoizing expensive calculations',
    description:
      'Optimize performance by memoizing expensive calculations with useMemo.',
  },
]

export default function Home() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1>React Best Practices with TypeScript</h1>
      <p className="lead">
        Explore common React patterns and learn how to improve your code quality
        with TypeScript.
      </p>

      <div className="grid gap-6 mt-8">
        {examples.map((example) => (
          <div
            key={example.id}
            className="not-prose rounded-lg border bg-card p-6"
          >
            <h2 className="text-2xl font-bold mb-2">
              Example {example.id}: {example.title}
            </h2>
            <p className="text-muted-foreground mb-4">{example.description}</p>
            <div className="flex gap-4">
              <Link
                href={`/example${example.id}/bad`}
                className="text-primary hover:underline"
              >
                View Bad Practice →
              </Link>
              <Link
                href={`/example${example.id}/good`}
                className="text-primary hover:underline"
              >
                View Good Practice →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
