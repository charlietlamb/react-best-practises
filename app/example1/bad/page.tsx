import { Card } from '@/components/Card'
import { ExampleLayout } from '@/components/ExampleLayout'

export default function BadExample() {
  return (
    <ExampleLayout
      title="Bad Practice: Duplicating Components"
      description="This example shows the problematic approach of manually duplicating components instead of using map to render them dynamically."
      bulletPoints={[
        'Code duplication makes maintenance difficult',
        'Changes need to be made in multiple places',
        'Increased chance of inconsistencies and errors',
        'Poor scalability when adding new items',
        "Violates the DRY (Don't Repeat Yourself) principle",
      ]}
    >
      <div className="p-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Mountain View"
            description="A beautiful mountain landscape"
            imageUrl="https://images.unsplash.com/photo-1519681393784-d120267933ba"
          />
          <Card
            title="Ocean Sunset"
            description="Stunning sunset over the ocean"
            imageUrl="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          />
          <Card
            title="Forest Path"
            description="A serene path through the forest"
            imageUrl="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
          />
          <Card
            title="Desert Dunes"
            description="Rolling sand dunes at sunset"
            imageUrl="https://images.unsplash.com/photo-1682686580024-580519d4b2d2"
          />
          <Card
            title="Northern Lights"
            description="Aurora Borealis in the night sky"
            imageUrl="https://images.unsplash.com/photo-1483347756197-71ef80e95f73"
          />
          <Card
            title="City Lights"
            description="Urban landscape at night"
            imageUrl="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df"
          />
        </div>
      </div>
    </ExampleLayout>
  )
}
