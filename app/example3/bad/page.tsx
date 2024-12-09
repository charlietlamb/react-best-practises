'use client'

import { useState } from 'react'
import { ExampleLayout } from '@/components/ExampleLayout'

export default function BadExample() {
  const [count, setCount] = useState(0)

  const handleMultipleIncrements = () => {
    // This will only increment by 1 because it uses the same stale state value
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
  }

  const handleDelayedIncrement = () => {
    // This will use a stale value after the timeout
    setTimeout(() => {
      setCount(count + 1)
    }, 2000)
  }

  return (
    <ExampleLayout
      title="Bad Practice: Stale State in useState"
      description="This example demonstrates common issues that arise when not properly handling state updates in React, leading to unexpected behavior and bugs."
      bulletPoints={[
        "Multiple state updates in the same event handler don't work as expected",
        'State updates in async operations can use stale values',
        'Race conditions can occur with delayed updates',
        'Component behavior becomes unpredictable',
        'Debugging becomes more difficult',
        'Performance optimizations may not work correctly',
      ]}
    >
      <div className="p-8 space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Current Count: {count}</h2>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Multiple Updates Issue
            </h3>
            <p className="text-muted-foreground mb-4">
              This button tries to increment the counter 3 times, but it will
              only increment once because it uses stale state.
            </p>
            <button
              onClick={handleMultipleIncrements}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-md"
            >
              Try to Add 3 (Will Only Add 1)
            </button>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Delayed Update Issue</h3>
            <p className="text-muted-foreground mb-4">
              This button has a delayed increment that will use the stale count
              value from when the button was clicked.
            </p>
            <div className="flex items-center gap-4">
              <button
                onClick={handleDelayedIncrement}
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md"
              >
                Delayed Increment
              </button>
              <button
                onClick={() => setCount(count + 1)}
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md"
              >
                Immediate Increment
              </button>
            </div>
          </div>
        </div>
      </div>
    </ExampleLayout>
  )
}
