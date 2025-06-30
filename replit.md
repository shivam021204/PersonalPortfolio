# Portfolio Application

## Overview

This is a modern full-stack web application built as a personal portfolio for Kumar Shivam, a Computer Science student at VIT Bhopal. The application showcases a clean, professional design with a dark theme and serves as a platform to display personal information, skills, and contact details.

## System Architecture

The application follows a full-stack architecture with clear separation between client and server components:

- **Frontend**: React-based single-page application with TypeScript
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui components
- **Build Tool**: Vite for frontend bundling and development
- **Deployment**: Built for production with esbuild for server bundling

## Key Components

### Frontend Architecture
- **React 18** with TypeScript for type safety
- **Wouter** for client-side routing (lightweight alternative to React Router)
- **TanStack Query** for server state management and caching
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom dark theme
- **React Hook Form** with Zod validation for form handling

### Backend Architecture
- **Express.js** server with TypeScript
- **Drizzle ORM** for database operations with PostgreSQL
- **RESTful API** design pattern (routes prefixed with `/api`)
- **In-memory storage** fallback with interface-based storage abstraction
- **Session management** with connect-pg-simple for PostgreSQL sessions

### UI Component System
- Comprehensive component library using Radix UI primitives
- Consistent design system with CSS variables for theming
- Dark theme optimized for professional appearance
- Responsive design with mobile-first approach
- Accessibility features built into all components

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **Server Processing**: Express routes handle requests and interact with storage layer
3. **Data Storage**: Drizzle ORM manages database operations with type-safe queries
4. **Response Handling**: Server returns JSON responses with proper error handling
5. **State Management**: TanStack Query manages caching and synchronization

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Neon database connection for PostgreSQL
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight routing for React

### UI/UX Dependencies
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **react-icons**: Icon library including Font Awesome and Simple Icons

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **esbuild**: Fast bundler for production server build

## Deployment Strategy

### Development Environment
- Vite dev server for frontend with HMR (Hot Module Replacement)
- Express server with tsx for TypeScript execution
- Database migrations handled through Drizzle Kit
- Replit-specific development tooling integration

### Production Build
1. **Frontend**: Vite builds optimized React bundle to `dist/public`
2. **Backend**: esbuild bundles Express server to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command
4. **Environment**: Production server serves both API and static files

### Database Management
- PostgreSQL as primary database with connection pooling
- Drizzle migrations stored in `./migrations` directory
- Schema definitions in `shared/schema.ts` for type sharing
- Environment-based database URL configuration

## Changelog

- June 30, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.