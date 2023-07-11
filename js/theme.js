var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
var themeToggleBtn = document.getElementById('theme-toggle');
var themeToggleText = document.querySelector('#theme-toggle span');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
	themeToggleDarkIcon.classList.remove('hidden');
	themeToggleText.innerHTML = 'Dark';
} else {
	themeToggleLightIcon.classList.remove('hidden');
	themeToggleText.innerHTML = 'Light';
}

themeToggleBtn.addEventListener('click', function () {
	// toggle icons inside button
	themeToggleDarkIcon.classList.toggle('hidden');
	themeToggleLightIcon.classList.toggle('hidden');

	// change text based on icon
	if (themeToggleDarkIcon.classList.contains('hidden')) {
		themeToggleText.innerHTML = 'Light';
	} else if (themeToggleLightIcon.classList.contains('hidden')) {
		themeToggleText.innerHTML = 'Dark';
	}

	// if set via local storage previously
	if (localStorage.getItem('color-theme')) {
		if (localStorage.getItem('color-theme') === 'light') {
			document.documentElement.classList.add('dark');
			localStorage.setItem('color-theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('color-theme', 'light');
		}

		// if NOT set via local storage previously
	} else {
		if (document.documentElement.classList.contains('dark')) {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('color-theme', 'light');
		} else {
			document.documentElement.classList.add('dark');
			localStorage.setItem('color-theme', 'dark');
		}
	}
});
