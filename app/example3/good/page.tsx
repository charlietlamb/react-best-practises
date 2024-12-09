'use client'

import { useState } from 'react'
import { ExampleLayout } from '@/components/ExampleLayout'

export default function GoodExample() {
  const [count, setCount] = useState(0)

  const handleMultipleIncrements = () => {
    // Using functional updates ensures each update uses the latest state
    setCount((prev) => prev + 1)
    setCount((prev) => prev + 1)
    setCount((prev) => prev + 1)
  }

  const handleDelayedIncrement = () => {
    // Using a functional update ensures we always use the latest state
    setTimeout(() => {
      setCount((prev) => prev + 1)
    }, 2000)
  }

  return (
    <ExampleLayout
      title="Good Practice: Functional Updates in useState"
      description="This example demonstrates how to properly handle state updates using functional updates, ensuring reliable and predictable behavior in all scenarios."
      bulletPoints={[
        'Functional updates guarantee access to the latest state',
        'Multiple updates in the same event handler work correctly',
        'Async operations always use current state values',
        'Race conditions are prevented',
        'Code behavior is predictable and easier to debug',
        "Works correctly with React's batching optimizations",
      ]}
    >
      <div className="p-8 space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Current Count: {count}</h2>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Multiple Updates Working
            </h3>
            <p className="text-muted-foreground mb-4">
              This button correctly increments the counter 3 times using
              functional updates.
            </p>
            <button
              onClick={handleMultipleIncrements}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-md"
            >
              Add 3 (Works Correctly)
            </button>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Delayed Update Working
            </h3>
            <p className="text-muted-foreground mb-4">
              This button has a delayed increment that will always use the
              current state value when it executes.
            </p>
            <div className="flex items-center gap-4">
              <button
                onClick={handleDelayedIncrement}
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md"
              >
                Delayed Increment
              </button>
              <button
                onClick={() => setCount((prev) => prev + 1)}
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md"
              >
                Immediate Increment
              </button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Try clicking the immediate increment button during the 2-second
              delay. The delayed increment will still work correctly!
            </p>
          </div>
        </div>
      </div>
    </ExampleLayout>
  )
}
