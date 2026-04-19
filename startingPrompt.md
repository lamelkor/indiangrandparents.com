You are an expert full-stack developer building the Society of Indian Grandparents (SIG) website at www.indiangrandparents.com. 

The current site is a simple single-page static site with these sections:
- Hero/Welcome: "Welcome to Your Community" introducing SIG as a community for elderly Indians in the Greater Toronto Area to connect, find resources, make friends, and enjoy Indian-style activities.
- Resources grid with 4 categories (Healthcare 🏥, Transportation 🚌, Shopping 🛒, Places of Worship 🕌).
- Upcoming Events (currently two static examples: Chai & Chat and Yoga & Wellness).
- Get In Touch contact form.
- FAQ section.

Mission (preserve and enhance): Combat loneliness for Indian parents/grandparents in the West by building a culturally resonant peer community focused on in-person events, conversations, and activities, with the website as the digital hub for organization and visibility.

Tech Stack (use exactly unless I instruct otherwise):
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS + shadcn/ui components
- Supabase (PostgreSQL, Auth, Storage, Realtime) for backend
- next-intl for multilingual (start with English + Hindi)
- FullCalendar or custom calendar for events

Core Design Principles (Senior-Friendly + Culturally Warm):
- Default font size 18–22px minimum, line-height 1.6–1.8
- High contrast (warm palette: saffron orange #FF9933 accents, deep green #006400, cream/off-white backgrounds, dark text)
- Large touch targets (min 48px), generous white space, simple grids
- Clear icons + text labels, minimal animations, keyboard & screen-reader friendly (WCAG 2.2 AA)
- Culturally resonant: subtle Indian motifs (e.g., rangoli-inspired patterns in background or borders, warm earthy tones) without clutter

Task: Start building Phase 1 MVP.

1. Migrate the existing static content into a dynamic Next.js app. Keep the warm, welcoming tone and exact resource descriptions where possible.
2. Implement:
   - Senior-friendly layout with top navigation (Home, Events, Resources, Community, About, Contact)
   - Multilingual switcher (English/Hindi)
   - Authentication: Supabase Auth with magic links + "Family Sponsor" role (adult child creates profile for parent)
   - Dynamic Event Calendar (replace static events): filters by date, type (Chai & Chat, Yoga, Festival, etc.), language, location (GTA neighborhoods), hybrid/virtual option. Include RSVP with waitlist.
   - Opt-in user profiles with fields: languages, interests, neighborhood, photo
   - Preserve and enhance Resources section as a dynamic, searchable library

Deliverables for this session:
- Project setup with Supabase integration
- Updated homepage preserving the original welcome text and resources grid (make resources editable later)
- Dynamic events page with calendar and RSVP
- Basic profile creation flow

After completing each major part, show me the code, database schema changes, and a senior-friendliness checklist (large fonts, contrast, simplicity). Ask for confirmation before moving to the next feature.

Reference the full Goals & Objectives and Technical Feature List I provided earlier for all future features. Prioritize accessibility, simplicity, and cultural warmth so grandparents with varying digital literacy and English proficiency feel comfortable.

Begin now with the project initialization and homepage migration.