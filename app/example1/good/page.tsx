import { Card } from '@/components/Card'
import { ExampleLayout } from '@/components/ExampleLayout'

interface CardData {
  id: number
  title: string
  description: string
  imageUrl: string
}

const cardData: CardData[] = [
  {
    id: 1,
    title: 'Mountain View',
    description: 'A beautiful mountain landscape',
    imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
  },
  {
    id: 2,
    title: 'Ocean Sunset',
    description: 'Stunning sunset over the ocean',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
  },
  {
    id: 3,
    title: 'Forest Path',
    description: 'A serene path through the forest',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
  },
  {
    id: 4,
    title: 'Desert Dunes',
    description: 'Rolling sand dunes at sunset',
    imageUrl: 'https://images.unsplash.com/photo-1682686580024-580519d4b2d2',
  },
  {
    id: 5,
    title: 'Northern Lights',
    description: 'Aurora Borealis in the night sky',
    imageUrl: 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73',
  },
  {
    id: 6,
    title: 'City Lights',
    description: 'Urban landscape at night',
    imageUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df',
  },
]

export default function GoodExample() {
  return (
    <ExampleLayout
      title="Good Practice: Using Map for Components"
      description="This example demonstrates the better approach of using map to render components dynamically, following the DRY principle and improving maintainability."
      bulletPoints={[
        'Code is more maintainable and follows DRY principles',
        'Changes only need to be made in one place',
        'TypeScript ensures data consistency',
        'Easy to add, remove, or modify items',
        'Data can be moved to an external source without changing the component',
        'Improved performance through better memory usage',
      ]}
    >
      <div className="p-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cardData.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
            />
          ))}
        </div>
      </div>
    </ExampleLayout>
  )
}
