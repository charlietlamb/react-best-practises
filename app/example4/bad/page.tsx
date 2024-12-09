'use client'

import { useState } from 'react'
import { ExampleLayout } from '@/components/ExampleLayout'

interface User {
  name: string
  theme: 'light' | 'dark'
  notifications: boolean
}

interface HeaderProps {
  user: User
  onThemeToggle: () => void
  onNotificationsToggle: () => void
}

function Header({ user, onThemeToggle, onNotificationsToggle }: HeaderProps) {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <div className="font-bold">Welcome, {user.name}</div>
      <NavMenu
        theme={user.theme}
        notifications={user.notifications}
        onThemeToggle={onThemeToggle}
        onNotificationsToggle={onNotificationsToggle}
      />
    </div>
  )
}

interface NavMenuProps {
  theme: 'light' | 'dark'
  notifications: boolean
  onThemeToggle: () => void
  onNotificationsToggle: () => void
}

function NavMenu({
  theme,
  notifications,
  onThemeToggle,
  onNotificationsToggle,
}: NavMenuProps) {
  return (
    <div className="flex items-center space-x-4">
      <SettingsButton
        theme={theme}
        notifications={notifications}
        onThemeToggle={onThemeToggle}
        onNotificationsToggle={onNotificationsToggle}
      />
    </div>
  )
}

interface SettingsButtonProps {
  theme: 'light' | 'dark'
  notifications: boolean
  onThemeToggle: () => void
  onNotificationsToggle: () => void
}

function SettingsButton({
  theme,
  notifications,
  onThemeToggle,
  onNotificationsToggle,
}: SettingsButtonProps) {
  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={onThemeToggle}
        className="bg-primary text-primary-foreground px-4 py-2 rounded-md"
      >
        Theme: {theme}
      </button>
      <button
        onClick={onNotificationsToggle}
        className="bg-primary text-primary-foreground px-4 py-2 rounded-md"
      >
        Notifications: {notifications ? 'On' : 'Off'}
      </button>
    </div>
  )
}

export default function BadExample() {
  const [user, setUser] = useState<User>({
    name: 'John Doe',
    theme: 'light',
    notifications: true,
  })

  const handleThemeToggle = () => {
    setUser((prev) => ({
      ...prev,
      theme: prev.theme === 'light' ? 'dark' : 'light',
    }))
  }

  const handleNotificationsToggle = () => {
    setUser((prev) => ({
      ...prev,
      notifications: !prev.notifications,
    }))
  }

  return (
    <ExampleLayout
      title="Bad Practice: Prop Drilling"
      description="This example demonstrates the problems that arise when passing props through multiple levels of components, leading to tightly coupled and hard-to-maintain code."
      bulletPoints={[
        "Props must be passed through intermediate components that don't use them",
        "Components become tightly coupled to their parent's implementation",
        'Adding new features requires modifying multiple components',
        'Code becomes harder to refactor and maintain',
        'Component reusability is limited by prop dependencies',
        'TypeScript interfaces become increasingly complex',
      ]}
    >
      <div className="p-8 space-y-6">
        <Header
          user={user}
          onThemeToggle={handleThemeToggle}
          onNotificationsToggle={handleNotificationsToggle}
        />
        <div className="bg-muted/50 rounded-lg p-6">
          <p className="text-muted-foreground">
            Notice how we had to pass the theme and notifications props through
            multiple components that don&apos;t actually need this data, just to
            reach the component that uses it.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Try following the props through the component hierarchy to see how
            they are passed down through each level.
          </p>
        </div>
      </div>
    </ExampleLayout>
  )
}
