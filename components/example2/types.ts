export type TabId = 'overview' | 'details' | 'reviews'

export interface Review {
  id: number
  author: string
  rating: number
  text: string
}

export interface TabsProps {
  tabs: { id: TabId; label: string; count?: number }[]
  activeTab: TabId
  onTabChange: (tabId: TabId) => void
}
