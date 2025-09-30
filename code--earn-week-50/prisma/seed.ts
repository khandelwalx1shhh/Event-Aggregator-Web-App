import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Delete existing records
  await prisma.event.deleteMany()

  // Create mock events
  const events = [
    {
      name: 'Web3 Development Workshop',
      description: 'Learn the basics of Web3 development with hands-on exercises',
      date: new Date('2025-10-15'),
      location: 'Online',
      eventType: 'workshop',
      collegeName: 'MIT',
      link: 'https://mit.edu/web3-workshop'
    },
    {
      name: 'AI/ML Hackathon',
      description: 'Build innovative AI/ML solutions in this 48-hour hackathon',
      date: new Date('2025-10-20'),
      location: 'Stanford Campus',
      eventType: 'hackathon',
      collegeName: 'Stanford University',
      link: 'https://stanford.edu/ai-hackathon'
    },
    {
      name: 'Future of Blockchain Tech Talk',
      description: 'Industry experts discuss the future of blockchain technology',
      date: new Date('2025-10-25'),
      location: 'Harvard Business School',
      eventType: 'tech-talk',
      collegeName: 'Harvard University',
      link: 'https://harvard.edu/blockchain-talk'
    },
    {
      name: 'Full Stack Development Workshop',
      description: 'Comprehensive workshop on modern full stack development',
      date: new Date('2025-11-01'),
      location: 'Berkeley Campus',
      eventType: 'workshop',
      collegeName: 'UC Berkeley',
      link: 'https://berkeley.edu/fullstack-workshop'
    },
    {
      name: 'Startup Innovation Hackathon',
      description: 'Build and pitch your startup idea in this entrepreneurship focused hackathon',
      date: new Date('2025-11-05'),
      location: 'CMU Campus',
      eventType: 'hackathon',
      collegeName: 'Carnegie Mellon University',
      link: 'https://cmu.edu/startup-hackathon'
    }
  ]

  for (const event of events) {
    await prisma.event.create({
      data: event
    })
  }

  console.log('Mock data seeded successfully')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
