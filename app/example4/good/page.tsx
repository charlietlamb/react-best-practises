'use client'

import { createContext, useContext, useState } from 'react'
import { ExampleLayout } from '@/components/ExampleLayout'

interface User {
  name: string
  theme: 'light' | 'dark'
  notifications: boolean
}

interface UserContextType {
  user: User
  toggleTheme: () => void
  toggleNotifications: () => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}

function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>({
    name: 'John Doe',
    theme: 'light',
    notifications: true,
  })

  const toggleTheme = () => {
    setUser((prev) => ({
      ...prev,
      theme: prev.theme === 'light' ? 'dark' : 'light',
    }))
  }

  const toggleNotifications = () => {
    setUser((prev) => ({
      ...prev,
      notifications: !prev.notifications,
    }))
  }

  return (
    <UserContext.Provider value={{ user, toggleTheme, toggleNotifications }}>
      {children}
    </UserContext.Provider>
  )
}

function Header() {
  const { user } = useUser()
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <div className="font-bold">Welcome, {user.name}</div>
      <NavMenu />
    </div>
  )
}

function NavMenu() {
  return (
    <div className="flex items-center space-x-4">
      <SettingsButton />
    </div>
  )
}

function SettingsButton() {
  const { user, toggleTheme, toggleNotifications } = useUser()

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={toggleTheme}
        className="bg-primary text-primary-foreground px-4 py-2 rounded-md"
      >
        Theme: {user.theme}
      </button>
      <button
        onClick={toggleNotifications}
        className="bg-primary text-primary-foreground px-4 py-2 rounded-md"
      >
        Notifications: {user.notifications ? 'On' : 'Off'}
      </button>
    </div>
  )
}

export default function GoodExample() {
  return (
    <ExampleLayout
      title="Good Practice: Using Context API"
      description="This example demonstrates how to use React Context to manage shared state, eliminating prop drilling and creating a more maintainable component structure."
      bulletPoints={[
        'State is managed centrally and accessed directly where needed',
        "Components are decoupled from their parent's implementation",
        'Adding new features only requires modifying relevant components',
        'TypeScript ensures type safety through the context',
        'Components are more reusable and easier to test',
        'Code structure is cleaner and more maintainable',
      ]}
    >
      <div className="p-8 space-y-6">
        <UserProvider>
          <Header />
          <div className="bg-muted/50 rounded-lg p-6">
            <p className="text-muted-foreground">
              Notice how components can now access user data and actions
              directly through the Context, without passing props through every
              level.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Components only need to import the useUser hook to access the
              shared state and actions, regardless of their position in the
              component tree.
            </p>
          </div>
        </UserProvider>
      </div>
    </ExampleLayout>
  )
}
