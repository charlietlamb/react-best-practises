import { TabsProps } from './types'

export function Tabs({ tabs, activeTab, onTabChange }: TabsProps) {
  return (
    <div className="flex space-x-4 border-b mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`pb-2 ${
            activeTab === tab.id
              ? 'border-b-2 border-primary font-semibold'
              : ''
          }`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label} {tab.count !== undefined && `(${tab.count})`}
        </button>
      ))}
    </div>
  )
}
