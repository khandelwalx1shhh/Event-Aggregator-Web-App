# Event Aggregator Web App

A platform for viewing and managing tech events from various colleges, including hackathons, tech talks, and workshops.

## Features

- View upcoming tech events in a clean, organized dashboard
- Filter events by date, type, college name, and location
- Submit new events with details like name, date, location, and link
- Responsive design with modern UI
- MongoDB backend for data persistence

## Tech Stack

- Next.js 13 with App Router
- TypeScript
- Tailwind CSS
- MongoDB with Prisma ORM
- React DatePicker

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Update `DATABASE_URL` with your MongoDB connection string

4. Generate Prisma client:
   ```bash
   npm run prisma:generate
   ```

5. Seed the database with sample events:
   ```bash
   npm run seed
   ```

6. Start the development server:
   ```bash
   npm run dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

```env
DATABASE_URL="mongodb://localhost:27017/your-database-name"
```

## API Routes

- `GET /api/events` - Get all events with optional filters
  - Query params: date, eventType, collegeName, location
- `POST /api/events` - Create a new event

## Contact Information

- Telegram: @your_telegram_id
- Twitter: @your_twitter_id
- Contact Number: +1234567890

## Contributing

Feel free to submit issues and enhancement requests.

## License

MIT
