// Single source of truth for "We speak your language" — aligned with Solution section.
// Order: Spanish, Portuguese, Turkish, Russian, German, French, Japanese.
export const STAFF_LANGUAGES = [
  { code: 'es' as const, name: 'Spanish' },
  { code: 'br' as const, name: 'Portuguese' },
  { code: 'tr' as const, name: 'Turkish' },
  { code: 'ru' as const, name: 'Russian' },
  { code: 'de' as const, name: 'German' },
  { code: 'fr' as const, name: 'French' },
  { code: 'jp' as const, name: 'Japanese' },
] as const;

export const STAFF_LANGUAGES_TEXT = 'Spanish, Portuguese, Turkish, Russian, German, French, and Japanese';
