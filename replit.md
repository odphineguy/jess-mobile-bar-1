# Jess's Mobile Bar - Replit Project Guide

## Overview

This is a modern full-stack web application for Jess's Mobile Bar, a premium mobile bartending service. The application features a professional landing page with service information, portfolio gallery, and contact form functionality. Built with React, TypeScript, and Express.js, it uses a modern tech stack optimized for performance and user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for component-based UI development
- **Vite** as the build tool and development server for fast hot module replacement
- **Wouter** for lightweight client-side routing
- **shadcn/ui** component library built on Radix UI primitives for accessible, customizable components
- **Tailwind CSS** for utility-first styling with a custom purple theme
- **TanStack Query** for server state management and API communication

### Backend Architecture
- **Express.js** server with TypeScript for RESTful API endpoints
- **Node.js** runtime environment
- **Drizzle ORM** configured for PostgreSQL database operations
- **Neon Database** as the PostgreSQL provider
- **In-memory storage** fallback for development (MemStorage class)

### Key Components

#### Frontend Components
- **Navigation**: Fixed header with smooth scroll navigation
- **Hero Section**: Full-screen landing with call-to-action
- **About Section**: Company information and value proposition
- **Services Section**: Three-tier service offerings
- **Gallery Section**: Image showcase with Instagram integration
- **Contact Form**: Lead capture with form validation
- **Footer**: Contact information and social links

#### Backend Components
- **Contact API**: POST endpoint for form submissions
- **Storage Interface**: Abstracted data layer supporting both memory and database storage
- **Validation**: Zod schema validation for form inputs
- **Error Handling**: Centralized error middleware

## Data Flow

### Contact Form Submission
1. User fills out contact form with event details
2. Frontend validates input using Zod schemas
3. Form data sent to `/api/contact` endpoint via POST request
4. Backend validates data against shared schema
5. Submission stored in database (or memory for development)
6. Success response returned with submission ID
7. User sees success toast notification

### Schema Design
The application uses a shared schema (`shared/schema.ts`) defining:
- Contact submission table with fields for event details
- Type-safe interfaces for database operations
- Validation schemas for form inputs

## External Dependencies

### UI and Styling
- **Radix UI**: Comprehensive primitive components for accessibility
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Type-safe variant styling

### Development Tools
- **TypeScript**: Static type checking across the entire stack
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind integration

### Database and Validation
- **Drizzle ORM**: Type-safe database operations
- **Drizzle Kit**: Database migration and schema management
- **Zod**: Runtime type validation and schema definition

## Deployment Strategy

### Build Process
- Frontend builds to `dist/public` using Vite
- Backend bundles to `dist/index.js` using ESBuild
- Static assets served from the build directory

### Environment Requirements
- **DATABASE_URL**: PostgreSQL connection string (required for production)
- **NODE_ENV**: Environment flag for development/production modes

### Development Workflow
- `npm run dev`: Starts development server with hot reload
- `npm run build`: Creates production builds for both frontend and backend
- `npm run start`: Runs production server
- `npm run db:push`: Pushes database schema changes

### Production Considerations
- Database migrations handled through Drizzle Kit
- Static file serving configured for production builds
- Error handling includes proper HTTP status codes
- Environment-specific logging and debugging tools

The application is designed to be easily deployable to platforms like Replit, Vercel, or any Node.js hosting environment with PostgreSQL support.