import { NextResponse } from 'next/server'
    import { PrismaClient } from '@prisma/client'

    const prisma = new PrismaClient()

    export async function GET(request: Request) {
      const { searchParams } = new URL(request.url)
      const date = searchParams.get('date')
      const eventType = searchParams.get('eventType')
      const collegeName = searchParams.get('collegeName')
      const location = searchParams.get('location')

      let whereClause = {}

      if (date) {
        whereClause = {
          ...whereClause,
          date: {
            gte: new Date(date),
            lt: new Date(new Date(date).setDate(new Date(date).getDate() + 1))
          }
        }
      }

      if (eventType) {
        whereClause = {
          ...whereClause,
          eventType
        }
      }

      if (collegeName) {
        whereClause = {
          ...whereClause,
          collegeName: {
            contains: collegeName,
            mode: 'insensitive'
          }
        }
      }

      if (location) {
        whereClause = {
          ...whereClause,
          location: {
            contains: location,
            mode: 'insensitive'
          }
        }
      }

      try {
        const events = await prisma.event.findMany({
          where: whereClause,
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
          data: body
        })
        return NextResponse.json(event)
      } catch (error) {
        return NextResponse.json({ error: 'Error creating event' }, { status: 500 })
      }
    }