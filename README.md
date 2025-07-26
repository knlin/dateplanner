# DatePlanner

DatePlanner is an AI-powered web application that creates personalized date plans with one-click booking links. Skip the hassle of browsing multiple platforms - get curated recommendations and book directly on native platforms.

## Features

- **Personalized Recommendations**: AI-powered suggestions based on your cuisine and activity preferences
- **One-Click Booking**: Direct deep links to Resy, OpenTable, Eventbrite, and other booking platforms
- **Complete Date Plans**: Full itineraries with restaurants, events, and activities
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/knlin/dateplanner.git
   cd dateplanner
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the backend server**
   ```bash
   cd packages/backend
   npm start
   ```

4. **Start the frontend development server**
   ```bash
   cd packages/frontend
   npm run dev
   ```

5. **Visit the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001

## How it works

DatePlanner uses AI to analyze your preferences and generate personalized date recommendations. The application:

1. **Collects your preferences** through an onboarding flow (cuisine types, activities, budget)
2. **Aggregates data** from restaurant and event platforms to find available options
3. **Generates AI-powered plans** that match your preferences and desired date/time
4. **Provides direct booking links** to native platforms (Resy, OpenTable, Eventbrite, etc.)
5. **Eliminates browser automation** - you book directly on the platforms you trust

## Architecture

- **Frontend**: React + TypeScript + Vite web application
- **Backend**: Express API server with AI planning engine
- **Database**: Prisma + SQLite (development) / PostgreSQL (production)
- **Integration**: Deep links to booking platforms instead of browser automation

## Development Status

See [PROGRESS.md](PROGRESS.md) for current development status and completed features.
