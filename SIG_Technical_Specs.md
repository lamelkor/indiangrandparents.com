**SIG Website Technical Feature List & Specifications**  
**Product Requirements Document (PRD) Extension**  
**Version 1.0**  
**Based on:** Society of Indian Grandparents (SIG) Goals & Objectives Document  
**Current Website Analysis:** www.indiangrandparents.com (single-page static site with basic hero, resources grid, static upcoming events, contact form, and FAQ)  
**Purpose:** Provide a clear, actionable, iterative blueprint for transforming the existing basic site into a full-featured, hybrid community platform.  
**Target:** Use directly with AI coding assistants (e.g., Cursor, Claude, GPT-based builders) for phased development.  

---

### Executive Summary & Current-State Gap Analysis

The existing website at https://www.indiangrandparents.com is a clean but minimal single-page static site focused on GTA Indian grandparents. It effectively introduces the SIG mission and provides static resources and two example events. However, it lacks:
- Dynamic functionality (no RSVPs, no user accounts, no real calendar).
- Community tools (no profiles, directories, forums, or content sharing).
- Accessibility & inclusivity for seniors (no large fonts, multilingual support, voice navigation, or simple navigation).
- Scalability and newcomer onboarding.

This feature list directly maps to the Goals & Objectives Document (Sections 3–4) and builds iteratively on the current site. Development will start by converting the static page into a dynamic, database-driven application while preserving the simple, welcoming design.

**Recommended Tech Stack (Flexible but Optimized for Rapid Iteration & Senior Users):**
- **Frontend:** Next.js 15 (App Router) + Tailwind CSS + shadcn/ui (for accessible, large-font components).
- **Backend & Database:** Supabase (PostgreSQL + Auth + Storage + Realtime) or Firebase (if preferring no-code speed). Supabase is preferred for full control and scalability.
- **Authentication:** Supabase Auth (email + magic links; optional phone OTP for seniors).
- **Hosting:** Vercel (free tier for MVP, auto-deploys).
- **Accessibility:** WCAG 2.2 AA compliance from day one (large default fonts ≥18px, high contrast, ARIA labels, keyboard navigation, screen-reader friendly).
- **Multilingual:** next-intl or i18next (start with English + Hindi; easy to add Punjabi, Tamil, etc.).
- **Analytics:** PostHog or Supabase Edge Functions (track engagement without invading privacy).
- **Why this stack?** AI coding assistants can generate 80–90% of the code quickly; senior-friendly UI is native; low cost; realtime updates for events/chats.

---

### Phased Feature Roadmap

**Phase 1 – MVP (4–6 weeks)**: Convert current static site into a functional community hub. Focus on core event management + basic membership. Launch with existing resources/events intact.  
**Phase 2 (6–8 weeks)**: Add networking, content sharing, and accessibility polish.  
**Phase 3 (8–12 weeks)**: Advanced features, admin tools, and scalability.  
**Future Phases**: Mobile app, partnerships API, AI matchmaking, etc.

---

### 1. Foundation & Site-Wide Features (Phase 1)

**1.1 Responsive, Senior-Friendly UI/UX**  
- **Specs**:  
  - Default font size 18–22px, line height 1.6, high-contrast color scheme (warm Indian-inspired tones: saffron, deep green, cream).  
  - Simple top navigation (Home, Events, Resources, Community, About, Contact).  
  - Mobile-first, touch-friendly buttons (min 48px tap targets).  
  - Dark/light mode toggle with “High Contrast” option.  
  - Voice-read assistance hints (e.g., “Tap here to join event” labels).  
- **Acceptance Criteria**: Lighthouse accessibility score ≥95; tested with real seniors (large text, no tiny icons).  
- **Relation to Goals**: Goal 2 (reduce loneliness), Goal 6 (hybrid platform), 4.4 (accessibility).

**1.2 Multilingual Support**  
- **Specs**: English + Hindi at launch; easy language switcher in header (flag or text). Content stored in database with locale keys.  
- **Acceptance Criteria**: All static text and dynamic content (events, resources) translatable via simple JSON files or Supabase tables.  
- **Nuance**: Allow family members to set language preference on behalf of parents.

**1.3 User Authentication & Profiles (Opt-in)**  
- **Specs**:  
  - Email/password + magic-link login (no complex passwords).  
  - “Family Sponsor” role: adult children create profile for parents (with consent checkbox).  
  - Profile fields: Name, age range, preferred languages (multi-select), interests (tags: yoga, bhajans, cooking, walks, storytelling), GTA neighborhood (dropdown: Scarborough, Brampton, Mississauga, etc.), photo upload, availability (days/times).  
  - Privacy: Profiles hidden by default; opt-in to directory.  
- **Relation**: Goal 1 (peer community), Goal 5 (newcomers), 4.2 (member directory).

---

### 2. Community & Event Management (Phase 1 Core – Highest Priority)

**2.1 Dynamic Event Calendar & Management**  
- **Specs**:  
  - FullCalendar or custom React calendar view (monthly/weekly/list).  
  - Filters: Date, language, type (Chai & Chat, Yoga, Festival, Cooking, Walks, Bhajan/Kirtan, Newcomer Welcome), location (GTA neighborhoods + virtual), accessibility (wheelchair, low mobility).  
  - Event creation form (for verified members/admins): title, description, date/time, location (Google Maps embed), capacity, hybrid/virtual option, languages spoken.  
  - RSVP system with waitlist and reminders (email + optional SMS via Twilio integration).  
  - Past events archive with photos/recaps.  
- **Data Model (Supabase)**: `events` table (id, title, description, start_time, end_time, location, type, languages[], capacity, rsvps[]).  
- **Acceptance Criteria**: Members can discover, RSVP, and see “Who’s attending” (opt-in). Admin approval workflow for public events.  
- **Relation**: Goal 1, Goal 3, 4.1 (directly replaces static “Upcoming Events”).

**2.2 In-Person + Hybrid Event Support**  
- **Specs**: Live-stream option (YouTube embed or Supabase realtime video placeholder). Post-event feedback form (simple 3-question emoji survey).  
- **Edge Case**: Weather cancellation notices pushed to RSVPed users.

---

### 3. Member Directory & Networking (Phase 2)

**3.1 Opt-in Member Directory**  
- **Specs**: Searchable grid/list with filters (language, interests, neighborhood). “Connect” button → private message or interest-based group chat.  
- **Privacy Controls**: Granular (visible to all / members only / nobody).  

**3.2 Buddy Matching & Interest Groups**  
- **Specs**: Simple algorithm (or manual admin match) based on shared languages/interests. Auto-created WhatsApp-style group chats for recurring activities (e.g., “Monday Morning Walkers – Brampton”).  
- **Relation**: Goal 1, Goal 4 (independence).

---

### 4. Content & Knowledge Sharing (Phase 2)

**4.1 Member Stories & Testimonials**  
- **Specs**: Moderated feed where members post short text + photo/video stories (e.g., “How I made my first friend at SIG”).  

**4.2 Resource Library (Dynamic Upgrade)**  
- **Specs**: Expand current static resources into searchable, user-contributable database. Categories: Healthcare, Transportation, Shopping, Worship, Government Services, Cultural Tips.  
- **Features**: User-submitted resources (with admin moderation), bookmarking, Hindi translations.  

**4.3 Community Forum / “Ask the Community”**  
- **Specs**: Simple threaded discussions (categorized: Newcomer Questions, Cultural Tips, Health, Events). Realtime replies via Supabase.  

**Relation**: Goal 5 (newcomers), Goal 6 (knowledge base).

---

### 5. Accessibility, Inclusivity & Safety (Cross-Cutting – Phase 1)

**5.1 Full Accessibility Layer**  
- **Specs**: ARIA labels, focus management, skip-to-content, screen-reader optimized. VoiceOver/TalkBack tested. Simple one-click “Enlarge Text” and “Read Aloud” (Web Speech API).  

**5.2 Safety & Moderation**  
- **Specs**: Community guidelines displayed on signup. Report button on every post/profile. Photo ID verification option for in-person event hosts (stored encrypted). Admin dashboard for moderation.  

**5.3 Family Integration**  
- **Specs**: Adult children can view public events and sponsor profiles without full access to private chats.

---

### 6. Growth, Admin & Analytics (Phase 3)

**6.1 Public Visibility & Landing Page**  
- **Specs**: SEO-optimized homepage mirroring current site but with dynamic event feed and “Join Now” CTA.  

**6.2 Admin Dashboard**  
- **Specs**: Manage events, users, resources, analytics (active members, event attendance, newcomer retention).  

**6.3 Success Metrics Tracking**  
- **Specs**: Built-in optional survey after events (“How lonely did you feel this week?” 1–10 scale). Exportable reports.

---

### 7. Non-Functional Requirements (All Phases)

- **Performance**: Page load < 2 seconds; lighthouse score ≥90.  
- **Security**: GDPR/PIPEDA compliant; data minimization for seniors.  
- **Scalability**: Designed for 500 → 5,000+ users.  
- **SEO & Discoverability**: Static generation where possible; meta tags for “Indian grandparents Toronto community”.  
- **Testing**: Unit + integration tests; manual senior-user testing rounds.  
- **Edge Cases Handled**: Low digital literacy (guided onboarding tour), mobility issues (virtual-first filters), cultural sensitivities (dietary/religious filters), offline fallback for resources.

---

### Implementation Guidelines for AI Coding Assistants

1. **Start Here (Week 1)**: Migrate current single-page content into Next.js + Supabase. Implement 1.1, 1.2, 1.3, and 2.1 (dynamic calendar + RSVP replacing static events).  
2. **Use Existing Content**: Copy exact resource descriptions and mission text from current site.  
3. **Iterate in Small PRs**: One feature per branch (e.g., “add-event-calendar”).  
4. **Senior Testing Prompt**: After each major feature, generate a “senior-friendliness checklist” and simulate UX.  

