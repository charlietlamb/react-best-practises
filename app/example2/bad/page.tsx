'use client'

import { useState } from 'react'
import { ExampleLayout } from '@/components/ExampleLayout'

export default function BadExample() {
  const [activeTab, setActiveTab] = useState<
    'overview' | 'details' | 'reviews'
  >('overview')
  const [reviews] = useState([
    { id: 1, author: 'John', rating: 5, text: 'Great product!' },
    { id: 2, author: 'Sarah', rating: 4, text: 'Pretty good!' },
    { id: 3, author: 'Mike', rating: 5, text: 'Excellent!' },
  ])

  return (
    <ExampleLayout
      title="Bad Practice: Monolithic Component"
      description="This example shows a problematic monolithic component that handles multiple responsibilities, making it difficult to maintain and reuse."
      bulletPoints={[
        'Component handles too many responsibilities (tabs, product info, reviews)',
        'Logic is tightly coupled and hard to test',
        'Code is difficult to understand and maintain',
        'Reusing parts of the functionality is impossible',
        'Changes require modifying a large, complex component',
        'Risk of introducing bugs when making changes',
      ]}
    >
      <div className="p-8 space-y-6">
        <div className="flex space-x-4 border-b mb-6">
          <button
            className={`pb-2 ${
              activeTab === 'overview'
                ? 'border-b-2 border-primary font-semibold'
                : ''
            }`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            className={`pb-2 ${
              activeTab === 'details'
                ? 'border-b-2 border-primary font-semibold'
                : ''
            }`}
            onClick={() => setActiveTab('details')}
          >
            Details
          </button>
          <button
            className={`pb-2 ${
              activeTab === 'reviews'
                ? 'border-b-2 border-primary font-semibold'
                : ''
            }`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews ({reviews.length})
          </button>
        </div>

        {activeTab === 'overview' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Premium Headphones</h2>
            <div className="flex items-center mb-4">
              <div className="text-yellow-500 text-xl mr-2">
                {'\u2605'.repeat(
                  Math.round(
                    reviews.reduce((acc, review) => acc + review.rating, 0) /
                      reviews.length
                  )
                )}
              </div>
              <span className="text-muted-foreground">
                {reviews.length} reviews
              </span>
            </div>
            <p className="text-muted-foreground">
              High-quality wireless headphones with noise cancellation.
            </p>
            <button className="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded-md">
              Add to Cart
            </button>
          </div>
        )}

        {activeTab === 'details' && (
          <div>
            <h3 className="font-semibold mb-2">Technical Specifications</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Bluetooth 5.0</li>
              <li>Active Noise Cancellation</li>
              <li>40mm Drivers</li>
              <li>30-hour Battery Life</li>
            </ul>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div>
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
          </div>
        )}
      </div>
    </ExampleLayout>
  )
}
