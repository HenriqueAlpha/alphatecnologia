# WhatsApp Contact Landing Page

## Overview

This is a React-based landing page application focused on driving WhatsApp contact conversions. The application features a modern, responsive design with WhatsApp-branded styling and multiple call-to-action buttons to encourage users to initiate contact through WhatsApp.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom WhatsApp color scheme
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **State Management**: React Query (@tanstack/react-query) for server state
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Session Management**: Connect-pg-simple for PostgreSQL-based sessions
- **Development**: Hot module replacement via Vite middleware integration

## Key Components

### Frontend Components
- **Landing Page**: Hero section with WhatsApp contact buttons and feature highlights
- **UI Library**: Complete Shadcn/ui component set including buttons, cards, forms, and navigation
- **WhatsApp Integration**: Custom WhatsApp button components with deep linking
- **Responsive Design**: Mobile-first approach with Tailwind responsive utilities

### Backend Components
- **Express Server**: RESTful API structure with middleware for logging and error handling
- **Database Layer**: Drizzle ORM with PostgreSQL adapter (Neon Database)
- **Storage Interface**: Abstracted storage layer with in-memory fallback
- **Route Registration**: Centralized route management system

### Database Schema
- **Users Table**: Basic user management with username/password fields
- **Schema Validation**: Zod integration for type-safe database operations
- **Migration System**: Drizzle Kit for database schema management

## Data Flow

1. **Client Requests**: Frontend makes API calls using React Query
2. **Server Processing**: Express middleware handles authentication and request processing
3. **Database Operations**: Drizzle ORM manages database interactions
4. **Response Handling**: Structured JSON responses with error handling
5. **WhatsApp Integration**: Client-side deep linking to WhatsApp with pre-configured phone number

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **@tanstack/react-query**: Server state management
- **drizzle-orm**: Database ORM and query builder
- **express**: Web application framework
- **react**: UI library
- **tailwindcss**: Utility-first CSS framework
- **vite**: Build tool and development server

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives
- **lucide-react**: Icon library
- **class-variance-authority**: Type-safe CSS class variants
- **clsx**: Conditional class name utility

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Database Migration**: Drizzle Kit handles schema migrations

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment mode (development/production)
- **REPL_ID**: Replit-specific environment detection

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database (configured for Neon Database)
- Environment variable support
- Static file serving capability

## Changelog

Changelog:
- July 08, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.