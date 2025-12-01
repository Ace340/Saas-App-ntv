import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
        <h1 className='text-2xl underline'>Popular Companions</h1>

        <section className='home-section'>
          <CompanionCard
            id="123"
            name="Neura The Brainy Explorer"
            topic="Neuroscience"
            subject="science"
            duration={45}
            color="#ffda6e"
          />
          <CompanionCard
            id="456"
            name="Neura The Brainy Explorer"
            topic="Neuroscience"
            subject="science"
            duration={45}
            color="#ffda6e"
          />
          <CompanionCard
            id="789"
            name="Neura The Brainy Explorer"
            topic="Neuroscience"
            subject="science"
            duration={45}
            color="#ffda6e"
          />
        </section>

        <section className='home-section'>
          <CompanionList 
            title="Your Recent Sessions"
            companions={recentSessions}
            classNames="w-2/3 max-lg:w-full"
          />
          <CTA />
        </section>
    </main>
    
  )
}

export default Page