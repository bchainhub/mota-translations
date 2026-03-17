# Translations for MOTA DApp

Default translations for the MOTA DApp and related SvelteKit projects.

## Repository layout

All translations live under the **`i18n/`** folder: one subfolder per locale (e.g. `i18n/ja/`, `i18n/pt-br/`, `i18n/en/`). Each locale folder contains an `index.ts` that exports the merged translation.

## How to contribute

1. **Fork** this repository and clone your fork.
2. **Pick a locale**: create a new folder under `i18n/` (e.g. `i18n/de/` for German) or **edit an existing** one (e.g. `i18n/ja/`, `i18n/pt-br/`, `i18n/zh-cn/`).
3. Add or update the translation file `index.ts` in that locale folder so it exports a merge with the base (English) and includes all **required fields** (see below).
4. **Open a Pull Request** with a short description of the locale and any notes (e.g. regional variant, RTL).

We welcome new languages and fixes to existing ones. Please keep translations in the **native language** for the locale (e.g. "日本語" for Japanese, "Português (Brasil)" for Brazilian Portuguese).

## Required fields in translations

Each locale file must define a **`language`** block at the top level (in the **native language**). This block is required for the language switcher and UI:

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `language.name` | string | Yes | Short name of the language in its own language (e.g. "日本語", "Español"). |
| `language.fullName` | string | Yes | Full name in the native language (e.g. "Português do Brasil"). |
| `language.descriptiveName` | string | Yes | Short label for menus (e.g. "English (Int)", "中文 (简体)"). |
| `language.code` | string | Yes | BCP 47 / locale code (e.g. `en`, `pt-br`, `zh-cn`). Must match the locale folder name under `i18n/`. |
| `language.icon` | string | No | Emoji or icon identifier (e.g. `🇯🇵`, `🇧🇷`). |
| `language.rtl` | boolean | No | `true` for right-to-left languages (e.g. Arabic), otherwise `false`. |

Example (in the locale’s native language):

```ts
language: {
  name: '日本語',
  fullName: '日本語',
  descriptiveName: '日本語',
  code: 'ja',
  icon: '🇯🇵',
  rtl: false
},
```

All other keys (e.g. `common`, `navbar`, `footer`, `site`, `helpers`, etc.) should follow the same structure as the base locale. Omitted keys fall back to the base translation.

## Best practices for translating

- **Use the native language** for the `language.*` fields and for all user-facing strings in that locale.
- **Keep tone and register consistent** with the rest of the app (e.g. formal vs informal “you”).
- **Preserve placeholders** such as `{year}` or `{name}` exactly; only translate the surrounding text.
- **Match length where possible**: very long strings can break layout; very short ones may look odd. When in doubt, stay close to the length of the source string.
- **Avoid translating** brand names, product names, or technical terms that are commonly used in English (unless there is a standard local term).
- **Test in the app** after merging: switch to your locale and check navbar, footer, forms, and error messages.
- **RTL**: If the language is right-to-left, set `language.rtl: true` and ensure the consuming app supports RTL layout.
- **Locale code**: Use lowercase, hyphenated BCP 47 codes (e.g. `pt-br`, `zh-cn`) and match the folder name.

## Base scaffold

Each locale file uses the same pattern: import the base (English) and types, define a **partial** with only the keys you translate, then merge and export.

**Imports and partial:**

```ts
import type { Translation } from '../i18n-types';
import type { DeepPartial } from '$lib/helpers/i18n';
import { deepMergeDict } from '$lib/helpers/i18n';
import en from '../en/index';

const esPartial: DeepPartial<Translation> = {
  language: { /* required: name, fullName, descriptiveName, code, icon, rtl */ },
  common: { /* only keys you translate */ },
  navbar: { /* ... */ },
  // ... other sections
};
```

**Merge and export:**

```ts
const es: Translation = deepMergeDict(en as any, esPartial as DeepPartial<Translation>);
export default es;
```

- `en` is the base locale (English - International). It is provided by the consuming project (e.g. sveltekit-mota).
- `esPartial` (or `jaPartial`, `ptBRPartial`, etc.) contains only the keys you override; nested objects are merged with the base.
- `deepMergeDict(base, partial)` produces the final translation: your partial overrides the base, and any key you omit stays from the base.

### How to modify the scaffold

- **New locale:** Copy an existing locale folder under `i18n/` (e.g. `i18n/es/`), rename it to your locale code (e.g. `i18n/de/`), rename the partial variable (e.g. `dePartial`), translate the `language` block and as many keys as you want, and export the merged result (e.g. `const de: Translation = deepMergeDict(...); export default de;`).
- **Existing locale:** Edit the partial inside that locale’s `index.ts` under `i18n/<code>/`. Add or change only the keys you need; structure (e.g. `common.account`, `navbar.home`) must match the base. Do not remove the imports or the final `deepMergeDict` + `export default` lines.
- **New keys:** When the base adds new keys, add them to your partial only if you want to translate them; otherwise they will fall back to English (see below).

### Fallback to English (International)

Any phrase or key that you **do not** include in your partial is taken from the base locale **English - International**. You do not need to translate every key: missing keys are filled automatically from the default. This keeps partials small and allows gradual translation.

## Repository structure

- **`i18n/`** – all translations live here.
- One subfolder per locale (e.g. `i18n/ja/`, `i18n/pt-br/`, `i18n/zh-cn/`, `i18n/en/`).
- Each locale folder contains `index.ts` exporting the merged translation (base + partial).
- The base (English - International) is in `i18n/en/`; this repo holds **partials** that override or add keys per locale.

## License

This project is under the **CORE License**. See [LICENSE](./LICENSE) for details.
