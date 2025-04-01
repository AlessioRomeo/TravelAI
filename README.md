# Demo: Video Preview

https://github.com/user-attachments/assets/5b2ba0bc-e951-4395-b79b-04614d83bc59

# Travel AI

A Next.js 14 application that generates custom travel itineraries by harnessing Google’s Generative AI (Gemini). It comes with full user/admin authentication (Argon2-hashed passwords), database-driven itinerary storage, and an interactive questionnaire for personalized travel planning.

## Core Highlights

1. **Cutting-Edge Next.js Structure**  
   - Built with Next.js 14 and the new App Router (e.g., `use server` actions in `src/api/`).  
   - Zero-config TypeScript setup, strict mode, and path aliasing.

2. **Generative AI (Gemini) Integration**  
   - Custom controllers for sending prompts to Google’s Generative AI (@google/generative-ai).  
   - Returns a complete JSON itinerary based on user inputs (destination, dates, budget, etc.).

3. **Full Authentication**  
   - Argon2 for secure password hashing.  
   - Admin and user logins stored separately; admin can manage (view/delete) all user accounts.  
   - Database calls encapsulated in server actions (`"use server"`), reducing boilerplate.

4. **Database Operations**  
   - All user accounts and itineraries are persisted in a remote data service (`shams.cyruscloud.io`).  
   - Includes create/read/update/delete (CRUD) via fetch requests with headers and JSON bodies.

5. **Reusable Components & SCSS Modules**  
   - Modular, typed React components for your itinerary layout: `<Day>`, `<ActivityItem>`, `<TransitItem>`…  
   - Clean SCSS styling with partial usage, SASS variables, and a global reset.
