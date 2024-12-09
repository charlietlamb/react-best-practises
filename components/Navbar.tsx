'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const examples = [1, 2, 3, 4, 5]

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-2">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              React Best Practices
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {examples.map((example) => (
              <div key={example} className="flex items-center space-x-2">
                <Link
                  href={`/example${example}/bad`}
                  className={cn(
                    'transition-colors hover:text-foreground/80',
                    pathname === `/example${example}/bad`
                      ? 'text-foreground'
                      : 'text-foreground/60'
                  )}
                >
                  Example {example} Bad
                </Link>
                <Link
                  href={`/example${example}/good`}
                  className={cn(
                    'transition-colors hover:text-foreground/80',
                    pathname === `/example${example}/good`
                      ? 'text-foreground'
                      : 'text-foreground/60'
                  )}
                >
                  Example {example} Good
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </nav>
  )
}
