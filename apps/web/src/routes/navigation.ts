export type NavigationItem = {
  label: string
  path: string
}

export const navigationItems: NavigationItem[] = [
  { label: 'Dashboard', path: '/' },
  { label: 'Workflows', path: '/workflows' },
  { label: 'Executions', path: '/executions' },
  { label: 'Settings', path: '/settings' },
]