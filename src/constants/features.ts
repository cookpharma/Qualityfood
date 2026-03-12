import { ElementType } from 'react'
import { Leaf, Factory, ShoppingCart, Users, Monitor } from 'lucide-react'

export type Feature = {
    id: string
    icon: ElementType
    title: string
    desc: string
}

export const FEATURES: Feature[] = [
    {
        id: 'farmer',
        icon: Leaf,
        title: 'Farmer Digital Companion',
        desc: 'Crop registration, AI disease detection, price prediction and direct selling.'
    },
    {
        id: 'franchise',
        icon: Factory,
        title: 'Franchise Control Panel',
        desc: 'Production tracking, farmer sourcing, compliance, inventory & finance.'
    },
    {
        id: 'customer',
        icon: ShoppingCart,
        title: 'Smart Customer App',
        desc: 'Healthy groceries, hyperlocal delivery, farmer traceability, subscriptions.'
    },
    {
        id: 'network',
        icon: Users,
        title: 'Align Business Network',
        desc: 'Chakki, Kolhu, SHGs onboarding, direct procurement and upgrade support.'
    },
    {
        id: 'control',
        icon: Monitor,
        title: 'Central Control Tower',
        desc: 'SOP management, franchise development, ecosystem monitoring and analytics.'
    }
]

export default FEATURES
