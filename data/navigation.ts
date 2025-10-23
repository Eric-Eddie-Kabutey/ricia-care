import {
    Info,
    FileText,
    Newspaper,
    Calendar,
    Users,
    Rocket,
} from 'lucide-react'
import { NavItem } from '../types/navigation'

export const navigationData: NavItem[] = [
    {
        label: 'Individuals',
        href: '#',
        isDropdown: true,
        dropdownContent: {
            type: 'simple',
            items: [
                {
                    title: 'About Us',
                    href: '/about-us',
                    description:
                        'Innovative solutions, exceptional value, industry expertise.',
                    icon: Info,
                },
                {
                    title: 'Management',
                    href: '/management',
                    description: 'Experienced leaders driving growth and innovation.',
                    icon: Users,
                },
                {
                    title: 'Join Us',
                    href: '/join-us',
                    description: 'Great careers, competitive benefits, dynamic team.',
                    icon: Rocket,
                },
            ],
        },
    },
    {
        label: 'Organization',
        href: '#',
        isDropdown: true,
        dropdownContent: {
            type: 'simple',
            items: [
                {
                    title: 'Blog',
                    href: '/blog',
                    description: 'Industry insights, expert tips, and company updates.',
                    icon: Newspaper,
                },
                {
                    title: 'Events',
                    href: '/events',
                    description: 'Upcoming conferences, workshops, and networking.',
                    icon: Calendar,
                },
                {
                    title: 'Case Studies',
                    href: '/case-studies',
                    description: 'Real client success stories and proven results.',
                    icon: FileText,
                },
            ],
        },
    },
    {
        label: 'Clinical',
        href: '#',
        isDropdown: true,
        dropdownContent: {
            type: 'simple',
            items: [
                {
                    title: 'Blog',
                    href: '/blog',
                    description: 'Industry insights, expert tips, and company updates.',
                    icon: Newspaper,
                },
                {
                    title: 'Events',
                    href: '/events',
                    description: 'Upcoming conferences, workshops, and networking.',
                    icon: Calendar,
                },
                {
                    title: 'Case Studies',
                    href: '/case-studies',
                    description: 'Real client success stories and proven results.',
                    icon: FileText,
                },
            ],
        },
    },    
]
