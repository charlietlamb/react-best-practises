'use client'

import { useState } from 'react'
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

export default function BadExample() {
  const [numbers] = useState(() => generateRandomNumbers(100))
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null)
  const [count, setCount] = useState(0)

  // This expensive calculation runs on every render, even when numbers hasn't changed
  const primes = findPrimes(numbers)

  return (
    <ExampleLayout
      title="Bad Practice: No Memoization"
      description="This example shows the performance impact of not memoizing expensive calculations, causing unnecessary recalculations on every render."
      bulletPoints={[
        'Expensive calculations are performed on every render',
        'UI becomes unresponsive during calculations',
        'CPU resources are wasted on redundant operations',
        'Performance degrades as data size increases',
        'User experience suffers from unnecessary delays',
        "React's rendering optimizations are bypassed",
      ]}
    >
      <div className="p-8 space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Prime Number Finder</h2>
          <p className="text-muted-foreground mb-6">
            Click the increment button and notice how it&apos;s slow to respond
            because we&apos;re recalculating primes on every render.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Counter: {count}</h3>
            <button
              onClick={() => setCount((c) => c + 1)}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-md"
            >
              Increment Counter (Slow)
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
              Showing first 10 primes of {primes.length} found. Try clicking the
              counter button to see how the entire component slows down.
            </p>
          </div>
        </div>
      </div>
    </ExampleLayout>
  )
}
