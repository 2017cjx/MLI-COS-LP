// Single source of truth for "We speak your language" — aligned with Solution section.
// Order: Spanish, Portuguese, Turkish, Russian. (German, Japanese excluded — ESTA countries typically don't need COS.)
export const STAFF_LANGUAGES = [
  { code: 'es' as const, name: 'Spanish' },
  { code: 'br' as const, name: 'Portuguese' },
  { code: 'tr' as const, name: 'Turkish' },
  { code: 'ru' as const, name: 'Russian' },
] as const;

export const STAFF_LANGUAGES_TEXT = 'Spanish, Portuguese, Turkish, and Russian';
