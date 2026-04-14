import type { Translation } from '../i18n-types';
import type { DeepPartial } from '$lib/helpers/i18n';
import { deepMergeDict } from '$lib/helpers/i18n';
import en from '../en/index';

const frPartial: DeepPartial<Translation> = {
	language: {
		name: "Français",
		fullName: "Français - International",
		descriptiveName: "Français (Int)",
		code: "fr",
		icon: "🇫🇷"
	},

	common: {
		account: "Compte",
		loading: "Chargement…",
		error: "Erreur",
		success: "Succès",
		cancel: "Annuler",
		confirm: "Confirmer",
		close: "Fermer",
		back: "Retour",
		menu: "Menu",
		next: "Suivant",
		submit: "Soumettre",
		save: "Enregistrer",
		edit: "Modifier",
		delete: "Supprimer",
		logout: "Se déconnecter",
		online: "En ligne",
		offline: "Hors ligne",
		theme: {
			light: "Clair",
			dark: "Sombre",
			system: "Système"
		}
	},

	helpers: {
		coreIdValidation: {
			error: "Veuillez entrer un Core ID valide",
			enterpriseError: "Les adresses réseau d’entreprise ne peuvent pas être utilisées pour les paiements",
			requiredError: "Le Core ID est requis"
		},
		wallet: {
			walletNotConfigured: "Le portefeuille n’est pas configuré.",
			walletNotInstalled: "Le portefeuille n’est pas installé ou activé.",
			walletCannotConnect: "Impossible de se connecter au portefeuille.",
			walletConnected: "Portefeuille connecté.",
			walletDisconnected: "Portefeuille déconnecté."
		}
	},

	navbar: {
		home: "Accueil",
		support: "Support",
		register: "S’inscrire",
		login: "Connexion",
		logout: "Déconnexion",
		connect: "Connecter",
		disconnect: "Déconnecter",
		profile: "Profil",
		settings: "Paramètres"
	},

	footer: {
		home: "Accueil",
		ecosystem: "Écosystème",
		applications: "Applications",
		developers: "Développeurs",
		contact: "Contact",
		termsOfService: "Conditions d’utilisation",
		privacyPolicy: "Politique de confidentialité",
		keyRegistry: "Registre des clés",
		copyright: "© 2025–{year} MOTA",
		poweredBy: "Propulsé par MOTA"
	}
};

const fr: Translation = deepMergeDict(en as any, frPartial as DeepPartial<Translation>);
export default fr;
