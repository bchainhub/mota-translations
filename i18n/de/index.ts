import type { Translation } from "../i18n-types";
import type { DeepPartial } from "$lib/helpers/i18n";
import { deepMergeDict } from "$lib/helpers/i18n";
import en from "../en/index";

const dePartial: DeepPartial<Translation> = {
	language: {
		name: "Deutsch",
		fullName: "Deutsch (DACH)",
		descriptiveName: "Deutsch",
		code: "de",
		icon: "🇩🇪"
	},

	common: {
		account: "Konto",
		loading: "Lädt…",
		error: "Fehler",
		success: "Erfolg",
		cancel: "Abbrechen",
		confirm: "Bestätigen",
		close: "Schließen",
		back: "Zurück",
		menu: "Menü",
		next: "Weiter",
		submit: "Absenden",
		save: "Speichern",
		edit: "Bearbeiten",
		delete: "Löschen",
		logout: "Abmelden",
		online: "Online",
		offline: "Offline",
		theme: {
			light: "Hell",
			dark: "Dunkel",
			system: "System"
		}
	},

	helpers: {
		coreIdValidation: {
			error: "Bitte geben Sie eine gültige Core ID ein",
			enterpriseError: "Unternehmensnetzwerk-Adressen können nicht für Zahlungen verwendet werden",
			requiredError: "Core ID ist erforderlich"
		},
		wallet: {
			walletNotConfigured: "Wallet ist nicht konfiguriert.",
			walletNotInstalled: "Wallet ist nicht installiert oder aktiviert.",
			walletCannotConnect: "Verbindung zum Wallet nicht möglich.",
			walletConnected: "Wallet verbunden.",
			walletDisconnected: "Wallet getrennt."
		}
	},

	navbar: {
		home: "Startseite",
		support: "Support",
		register: "Registrieren",
		login: "Anmelden",
		logout: "Abmelden",
		connect: "Verbinden",
		disconnect: "Trennen",
		profile: "Profil",
		settings: "Einstellungen"
	},

	footer: {
		home: "Startseite",
		ecosystem: "Ökosystem",
		applications: "Anwendungen",
		developers: "Entwickler",
		contact: "Kontakt",
		termsOfService: "Nutzungsbedingungen",
		privacyPolicy: "Datenschutzrichtlinie",
		keyRegistry: "Schlüsselregister",
		copyright: "© 2025–{year} MOTA"
	},

	modules: {},
	content: {}
};

const de: Translation = deepMergeDict(en as any, dePartial as DeepPartial<Translation>);
export default de;
