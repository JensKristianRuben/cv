import { browser } from '$app/environment';

class LanguageState {
	current = $state<'da' | 'en'>('da');

	constructor() {
		if (browser) {
			const saved = localStorage.getItem('language');
			if (saved === 'da' || saved === 'en') {
				this.current = saved;
			}
		}
	}

	set(lang: 'da' | 'en') {
		this.current = lang;
		if (browser) {
			localStorage.setItem('language', lang);
			document.documentElement.lang = lang;
		}
	}

	toggle() {
		this.set(this.current === 'da' ? 'en' : 'da');
	}
}

export const lang = new LanguageState();
