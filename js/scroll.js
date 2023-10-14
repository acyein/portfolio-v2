let sections = document.querySelectorAll('#about, #projects');
let navLinks = document.querySelectorAll('#nav-main a');

if (window.matchMedia('(min-width: 1024px)').matches) {
	window.onscroll = () => {
		sections.forEach((section) => {
			let top = window.scrollY; // vertical scroll
			let offset = section.offsetTop - 150;
			let height = section.offsetHeight;
			let id = section.getAttribute('id');

			if (top >= offset && top < offset + height) {
				navLinks.forEach((links) => {
					links.classList.remove('active');
					document.querySelector(`#nav-main a[href*=${id}]`).classList.add('active');
				});
			}
		});
	};
}
