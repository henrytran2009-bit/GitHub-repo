# TempMail - Anonymous Temporary Email Service

## Overview

TempMail is a full-stack web application that provides users with anonymous temporary email addresses for privacy and security. The service automatically generates disposable email addresses that expire after 10 minutes, allowing users to receive emails without revealing their real email addresses. The application features multi-service email support with automatic domain switching, real-time message notifications, email forwarding capabilities, and a clean, modern user interface designed to bypass website blocking mechanisms.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: shadcn/ui components built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom design tokens and dark mode support
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form management

### Backend Architecture
- **Runtime**: Node.js with Express.js for REST API endpoints
- **Language**: TypeScript with ES modules for modern JavaScript development
- **Real-time Communication**: WebSocket server for live email notifications and updates
- **API Design**: RESTful endpoints with consistent error handling and logging middleware
- **Development Tools**: tsx for TypeScript execution and hot reloading

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database for serverless PostgreSQL hosting
- **Schema Management**: Drizzle Kit for migrations and schema evolution
- **In-Memory Fallback**: Memory-based storage implementation for development/testing
- **Session Storage**: PostgreSQL-based session storage using connect-pg-simple

### Database Schema Design
- **Temporary Emails Table**: Stores email addresses, expiration times, forwarding settings, and activation status
- **Messages Table**: Contains received emails with sender, subject, content, and read status
- **Relationships**: Foreign key relationship between messages and temporary emails for data integrity

### Authentication and Security
- **Session Management**: Express sessions with PostgreSQL storage for user state persistence
- **Data Validation**: Zod schemas for runtime type checking and validation
- **CORS Configuration**: Proper cross-origin resource sharing setup for API access
- **Input Sanitization**: Validation on both client and server sides

### Real-time Features
- **WebSocket Integration**: Bidirectional communication for instant message notifications
- **Client Management**: Connection tracking and subscription-based message delivery
- **Automatic Reconnection**: Client-side reconnection logic with exponential backoff
- **Live Updates**: Real-time inbox updates without page refreshes

### UI/UX Architecture
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts
- **Component System**: Modular, reusable components following atomic design principles
- **Accessibility**: ARIA compliance and keyboard navigation support through Radix UI
- **Toast Notifications**: User feedback system for actions and errors
- **Loading States**: Skeleton loaders and proper loading indicators

### Development Environment
- **Hot Reloading**: Vite HMR for instant development feedback
- **Type Checking**: Comprehensive TypeScript configuration with strict mode
- **Code Organization**: Monorepo structure with shared types and utilities
- **Path Aliases**: Simplified imports using TypeScript path mapping

## External Dependencies

### Core Infrastructure
- **Neon Database**: Serverless PostgreSQL hosting for production data storage
- **WebSocket Protocol**: Native WebSocket implementation for real-time communication

### Development and Build Tools
- **Vite**: Frontend build tool and development server with React plugin
- **Drizzle Kit**: Database migration and schema management tooling
- **TSX**: TypeScript execution environment for Node.js development

### UI and Styling Libraries
- **Radix UI**: Headless UI primitives for accessible component foundations
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Lucide React**: Consistent icon library for user interface elements
- **Embla Carousel**: Touch-friendly carousel component for content display

### Data Management
- **TanStack Query**: Server state management with caching and synchronization
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: Runtime type validation and schema definition library
- **date-fns**: Modern date utility library for time calculations

### Fonts and Assets
- **Google Fonts**: Inter font family for clean, readable typography
- **Custom Font Stack**: Multiple fallback fonts including Geist Mono and DM Sans

### Active Integrations
- **Google AdSense**: Fully integrated monetization system with 4 strategic ad placements for optimal revenue
  - Header banner ads (728x90) - High-impact above-the-fold placement
  - Banner ads below inbox sections (728x90) - Original placement
  - Inbox banner ads between email display and inbox (728x90) - Content integration
  - Footer banner ads above site footer (728x90) - Final engagement point
  - Environment variable configuration for easy deployment setup
  - Real Google AdSense integration with client ID ca-pub-9284100006131640 and ad slot 3797119016
  - Realistic simulation ads with custom SVG graphics (Cloud Storage, NordVPN, Microsoft Azure, Google AdSense) as fallback
  - Professional ad styling with gradients, imagery, and authentic branding
  - Mobile-optimized with 3 ads maximum, desktop with 4 ads for clean user experience

- **Google Analytics 4**: Complete visitor tracking and analytics integration
  - Automatic page view tracking for all routes
  - Custom event tracking for user actions (email generation, copying, downloads, deletions, forwards)
  - Real-time visitor monitoring and behavior analytics
  - Geographic and demographic visitor data collection
  - Traffic source attribution and conversion tracking
  - Environment variable configuration (VITE_GA_MEASUREMENT_ID)
  - TypeScript integration with proper type definitions
  - Ready for immediate deployment once Measurement ID is provided

- **SEO and Structured Data**: Complete search engine optimization setup
  - JSON-LD structured data for FAQ and HowTo schema markup
  - FAQ page schema with 5 common questions and answers
  - HowTo schema with step-by-step usage instructions
  - Support contact email integration (TempMail10Min@proton.me)
  - Rich snippets for better search engine visibility
  - Professional FAQ/Help section with responsive design
  - Contact support functionality throughout the application
  - XML sitemap with proper URL priorities and change frequencies
  - Robots.txt file for search engine crawling guidelines
  - SEO-optimized URL structure for tempmail10min.org domain

### Potential Future Integrations
- **Email Service Provider**: Enhanced email receiving capabilities beyond current Yopmail integration
- **Analytics Platform**: User behavior tracking and application metrics