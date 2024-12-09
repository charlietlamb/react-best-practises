'use client'

import { useState } from 'react'
import { ExampleLayout } from '@/components/ExampleLayout'
import { Tabs } from '@/components/example2/Tabs'
import { ProductOverview } from '@/components/example2/ProductOverview'
import { ProductDetails } from '@/components/example2/ProductDetails'
import { ReviewList } from '@/components/example2/ReviewList'
import { TabId, Review } from '@/components/example2/types'

export default function GoodExample() {
  const [activeTab, setActiveTab] = useState<TabId>('overview')
  const [reviews] = useState<Review[]>([
    { id: 1, author: 'John', rating: 5, text: 'Great product!' },
    { id: 2, author: 'Sarah', rating: 4, text: 'Pretty good!' },
    { id: 3, author: 'Mike', rating: 5, text: 'Excellent!' },
  ])

  const specifications = [
    'Bluetooth 5.0',
    'Active Noise Cancellation',
    '40mm Drivers',
    '30-hour Battery Life',
  ]

  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length

  const tabs = [
    { id: 'overview' as TabId, label: 'Overview' },
    { id: 'details' as TabId, label: 'Details' },
    { id: 'reviews' as TabId, label: 'Reviews', count: reviews.length },
  ]

  const tabContent = {
    overview: (
      <ProductOverview
        title="Premium Headphones"
        description="High-quality wireless headphones with noise cancellation."
        rating={averageRating}
        reviewCount={reviews.length}
      />
    ),
    details: <ProductDetails specifications={specifications} />,
    reviews: <ReviewList reviews={reviews} />,
  }

  return (
    <ExampleLayout
      title="Good Practice: Composed Components"
      description="This example demonstrates how to break down a monolithic component into smaller, focused components that are easier to maintain and reuse."
      bulletPoints={[
        'Each component has a single responsibility',
        'Components are reusable across different contexts',
        'TypeScript interfaces ensure proper props usage',
        'Code is easier to test and maintain',
        'Changes can be made without affecting other components',
        'New features can be added by composing existing components',
      ]}
    >
      <div className="p-8 space-y-6">
        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={(tab) => setActiveTab(tab)}
        />
        {tabContent[activeTab]}
      </div>
    </ExampleLayout>
  )
}
