# REST Express Application

## Overview

This is a full-stack web application built with React, Express.js, and TypeScript. It serves as a personal portfolio website with a modern, responsive design featuring a single-page application architecture. The application showcases personal projects, skills, and professional experience while providing interactive functionality like a contact form and GitHub repository integration.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: In-memory storage with extensible interface
- **API Design**: RESTful endpoints with proper error handling

### UI Component System
- **Component Library**: shadcn/ui built on Radix UI primitives
- **Design System**: Consistent theming with CSS variables
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: ARIA-compliant components from Radix UI

## Key Components

### Client-Side Components
- **Navigation**: Smooth scrolling navigation with active section highlighting
- **Hero Section**: Personal introduction with social links and call-to-action
- **Projects Section**: Dynamic GitHub repository display with real-time data
- **Skills Section**: Categorized skill display with visual grouping
- **Contact Form**: Interactive form with validation and API integration
- **Experience Timeline**: Professional experience with company links

### Server-Side Components
- **GitHub API Proxy**: CORS-friendly GitHub repository fetching
- **Contact Form Handler**: Form submission processing with validation
- **Static File Serving**: Development and production asset serving
- **Error Handling**: Centralized error management with proper HTTP status codes

### Database Schema
- **Users Table**: User authentication and profile management
- **Projects Table**: Project metadata storage with visibility controls
- **Extensible Design**: Easy to add new entities and relationships

## Data Flow

1. **Client Request**: User interacts with React components
2. **State Management**: TanStack Query handles API calls and caching
3. **API Layer**: Express routes process requests and validate data
4. **Database Operations**: Drizzle ORM manages database interactions
5. **Response Handling**: Structured JSON responses with error handling
6. **UI Updates**: React components update based on API responses

### External API Integration
- **GitHub API**: Fetches repository data through server-side proxy
- **Contact Form**: Processes form submissions (ready for email integration)

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Query
- **UI Components**: Radix UI primitives, shadcn/ui components
- **Styling**: Tailwind CSS, class-variance-authority for component variants
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React for consistent iconography

### Backend Dependencies
- **Express.js**: Web framework with middleware support
- **Database**: Neon Database serverless PostgreSQL
- **ORM**: Drizzle ORM with Zod integration
- **Session**: PostgreSQL session store support
- **Development**: TSX for TypeScript execution, Vite for bundling

### Development Tools
- **Build Tools**: Vite, esbuild for production builds
- **Type Checking**: TypeScript with strict configuration
- **Code Quality**: ESLint-ready configuration
- **Development Server**: Hot reload with Vite integration

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with HMR
- **Backend Development**: TSX for TypeScript execution
- **Database**: Neon Database for development and production
- **Environment Variables**: DATABASE_URL for database connection

### Production Build
- **Frontend**: Vite build with optimized bundling
- **Backend**: esbuild compilation to ESM format
- **Static Assets**: Served through Express static middleware
- **Database Migrations**: Drizzle Kit for schema management

### Deployment Configuration
- **Build Command**: `npm run build` for full-stack compilation
- **Start Command**: `npm start` for production server
- **Database Push**: `npm run db:push` for schema updates
- **Environment**: NODE_ENV-based configuration switching

## Changelog

```
Changelog:
- July 07, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```