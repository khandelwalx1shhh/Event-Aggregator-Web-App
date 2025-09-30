import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const date = searchParams.get('date')
    const eventType = searchParams.get('eventType')
    const collegeName = searchParams.get('collegeName')
    const location = searchParams.get('location')

    const where: any = {}
    if (date) where.date = new Date(date)
    if (eventType) where.eventType = eventType
    if (collegeName) where.collegeName = { contains: collegeName, mode: 'insensitive' }
    if (location) where.location = { contains: location, mode: 'insensitive' }

    const events = await prisma.event.findMany({
      where,
      orderBy: {
        date: 'asc'
      }
    })
    return NextResponse.json(events)
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching events' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const event = await prisma.event.create({
      data: {
        name: body.name,
        description: body.description,
        date: new Date(body.date),
        location: body.location,
        eventType: body.eventType,
        collegeName: body.collegeName,
        link: body.link
      }
    })
    return NextResponse.json(event)
  } catch (error) {
    return NextResponse.json({ error: 'Error creating event' }, { status: 500 })
  }
}
