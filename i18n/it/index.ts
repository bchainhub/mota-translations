const itPartial: DeepPartial<Translation> = {
	language: {
		name: "Italiano",
		fullName: "Italiano - Internazionale",
		descriptiveName: "Italiano",
		code: "it",
		icon: "🇮🇹"
	},

	common: {
		account: "Account",
		loading: "Caricamento…",
		error: "Errore",
		success: "Successo",
		cancel: "Annulla",
		confirm: "Conferma",
		close: "Chiudi",
		back: "Indietro",
		menu: "Menu",
		next: "Avanti",
		submit: "Invia",
		save: "Salva",
		edit: "Modifica",
		delete: "Elimina",
		logout: "Disconnetti",
		online: "Online",
		offline: "Offline",
		theme: {
			light: "Chiaro",
			dark: "Scuro",
			system: "Sistema"
		}
	},

	helpers: {
		coreIdValidation: {
			error: "Inserisci un Core ID valido",
			enterpriseError: "Gli indirizzi di rete aziendali non possono essere usati per i pagamenti",
			requiredError: "Il Core ID è obbligatorio"
		},
		wallet: {
			walletNotConfigured: "Il wallet non è configurato.",
			walletNotInstalled: "Il wallet non è installato o abilitato.",
			walletCannotConnect: "Impossibile connettersi al wallet.",
			walletConnected: "Wallet connesso.",
			walletDisconnected: "Wallet disconnesso."
		}
	},

	navbar: {
		home: "Home",
		support: "Supporto",
		register: "Registrati",
		login: "Accedi",
		logout: "Esci",
		connect: "Connetti",
		disconnect: "Disconnetti",
		profile: "Profilo",
		settings: "Impostazioni"
	},

	footer: {
		home: "Home",
		ecosystem: "Ecosistema",
		applications: "Applicazioni",
		developers: "Sviluppatori",
		contact: "Contatto",
		termsOfService: "Termini di servizio",
		privacyPolicy: "Informativa sulla privacy",
		keyRegistry: "Registro delle chiavi",
		copyright: "© 2025–{year} MOTA",
		poweredBy: "Powered by MOTA"
	}
};
