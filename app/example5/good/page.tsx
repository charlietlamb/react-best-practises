'use client'

import { useState, useMemo } from 'react'
import { ExampleLayout } from '@/components/ExampleLayout'

function generateRandomNumbers(count: number): number[] {
  return Array.from({ length: count }, () => Math.floor(Math.random() * 1000))
}

function findPrimes(numbers: number[]): number[] {
  function isPrime(num: number): boolean {
    if (num <= 1) return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false
    }
    return true
  }

  // Artificially slow down the calculation to demonstrate the issue
  const start = performance.now()
  while (performance.now() - start < 100) {
    // Simulate heavy computation
  }

  return numbers.filter(isPrime)
}

export default function GoodExample() {
  const [numbers] = useState(() => generateRandomNumbers(100))
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null)
  const [count, setCount] = useState(0)

  // Memoize the expensive calculation so it only runs when numbers changes
  const primes = useMemo(() => findPrimes(numbers), [numbers])

  return (
    <ExampleLayout
      title="Good Practice: Using useMemo"
      description="This example demonstrates how to optimize performance by memoizing expensive calculations, ensuring they only run when their dependencies change."
      bulletPoints={[
        'Expensive calculations are cached and reused',
        'UI remains responsive during re-renders',
        'Calculations only run when dependencies change',
        'Better resource utilization',
        'Improved user experience with instant feedback',
        "Works seamlessly with React's rendering optimizations",
      ]}
    >
      <div className="p-8 space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Prime Number Finder</h2>
          <p className="text-muted-foreground mb-6">
            Click the increment button and notice how it responds immediately
            because we&apos;re using memoization to cache the prime calculation.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Counter: {count}</h3>
            <button
              onClick={() => setCount((c) => c + 1)}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-md"
            >
              Increment Counter (Fast)
            </button>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Prime Numbers Found:</h3>
            <div className="grid grid-cols-5 gap-2">
              {primes.slice(0, 10).map((prime) => (
                <button
                  key={prime}
                  onClick={() => setSelectedNumber(prime)}
                  className={`p-2 rounded-md ${
                    selectedNumber === prime
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary'
                  }`}
                >
                  {prime}
                </button>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Showing first 10 primes of {primes.length} found. The counter
              updates instantly because the prime calculation is memoized.
            </p>
          </div>
        </div>
      </div>
    </ExampleLayout>
  )
}
