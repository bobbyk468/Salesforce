'use client'

import dynamic from 'next/dynamic'

export const DeferredStickyContentCta = dynamic(() => import('./StickyContentCta'), { ssr: false })
export const DeferredDesktopSidebarSlot = dynamic(() => import('./DesktopSidebarSlot'), { ssr: false })
export const DeferredChatBot = dynamic(() => import('./ChatBot'), { ssr: false })
export const DeferredFloatingContactButtons = dynamic(() => import('./FloatingContactButtons'), { ssr: false })
