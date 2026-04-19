# Translation System Documentation

## Overview

This directory contains JSON translation files for the multilingual support system. The system uses a key-based approach where each piece of text is referenced by a unique key (e.g., `nav.home`, `hero.heading`).

## File Structure

```
translations/
├── en.json     # English translations
├── hi.json     # Hindi translations
└── README.md   # This file
```

## How It Works

1. **Translation Files**: Each language has its own JSON file with all translations organized by section
2. **Key-Based Access**: HTML elements use `data-i18n="key.path"` to reference translations
3. **Dynamic Loading**: JavaScript loads the appropriate JSON file based on user's language preference
4. **Persistence**: Language choice is saved in localStorage

## JSON Structure

Translations are organized hierarchically by section:

```json
{
  "meta": {
    "title": "Page title",
    "description": "Meta description"
  },
  "nav": {
    "home": "Home",
    "events": "Events",
    ...
  },
  "hero": {
    "heading": "Welcome message",
    "description": "Description text"
  },
  ...
}
```

## Adding a New Language

To add a new language (e.g., Punjabi):

1. **Create a new JSON file**: `translations/pa.json`
2. **Copy the structure** from `en.json`
3. **Translate all values** (keep the keys the same)
4. **Update script.js**: Add the new language to the `loadTranslations()` function
5. **Update language toggle**: Modify the toggle logic to include the new language

Example for Punjabi (`pa.json`):

```json
{
  "meta": {
    "title": "ਟੋਰਾਂਟੋ ਵਿੱਚ ਭਾਰਤੀ ਦਾਦਾ-ਦਾਦੀ",
    "description": "..."
  },
  "nav": {
    "home": "ਘਰ",
    "events": "ਸਮਾਗਮ",
    ...
  }
}
```

## HTML Usage

### Text Content

Use `data-i18n` attribute with the translation key:

```html
<h1 data-i18n="header.title">Indian Grandparents in Toronto</h1>
<p data-i18n="hero.description">Welcome message...</p>
```

### Aria Labels

Use `data-i18n-aria` for accessibility labels:

```html
<a href="#home" data-i18n="nav.home" data-i18n-aria="nav.ariaHome">Home</a>
```

### Form Placeholders

Placeholders are automatically translated:

```html
<input type="text" data-i18n="contact.form.namePlaceholder" placeholder="Your name">
```

## Dynamic Content (Future)

The JSON structure is designed to support dynamic content from a database:

```json
{
  "events": {
    "heading": "Upcoming Events",
    "event1": {
      "title": "Event Title",
      "description": "Event Description"
    }
  }
}
```

When integrating with Supabase or another database:
1. Store event data with language-specific fields
2. Fetch events based on current language
3. Render dynamically using the same `data-i18n` pattern

## Translation Guidelines

When adding or updating translations:

1. **Keep keys consistent** across all language files
2. **Maintain hierarchy** - use dot notation for nested keys
3. **Be descriptive** - key names should indicate what they're for
4. **Include context** - aria labels should be descriptive for screen readers
5. **Test thoroughly** - verify all text switches correctly

## Supported Languages

Currently supported:
- English (`en`)
- Hindi (`hi`)

Planned:
- Punjabi (`pa`)
- Gujarati (`gu`)
- Tamil (`ta`)
- Urdu (`ur`)

## Maintenance

When updating content:
1. Update the English version first (`en.json`)
2. Update all other language files with equivalent translations
3. Test language switching to ensure all keys are present
4. Verify no keys are missing (check browser console for warnings)

## Technical Details

- **Format**: JSON (JavaScript Object Notation)
- **Encoding**: UTF-8 (supports all Unicode characters)
- **Loading**: Asynchronous fetch on page load
- **Caching**: Browser caches JSON files for performance
- **Fallback**: If a key is missing, the key name is displayed
