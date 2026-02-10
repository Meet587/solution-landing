import type { Metadata } from 'next'
import { ServicesContent } from '@/components/sections/services-content'

export const metadata: Metadata = {
    title: 'Services | Private AI Agents for Enterprises',
    description: 'We design, build, and deploy private AI agents that run entirely on your infrastructure and are trained exclusively on your data.',
}

export default function ServicesPage() {
    return <ServicesContent />
}
