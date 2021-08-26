let images = ['v', 'e', 'n', 'a-1', 's', 'h', 'i', 'a-2', 'l'];
let current_image = 0;

setInterval(function () {
	if (typeof document !== 'undefined') {
		if (document.querySelector("link[rel='icon']") !== null)
			document.querySelector("link[rel='icon']").remove();
		if (document.querySelector("link[rel='shortcut icon']") !== null)
			document.querySelector("link[rel='shortcut icon']").remove();

		const next_image = current_image + 1 === images.length ? 0 : current_image + 1;

		document
			.querySelector('head')
			.insertAdjacentHTML(
				'beforeend',
				`<link rel="icon" href="/favicons/${images[next_image]}.png" type="image/png">`
			);

		current_image = next_image;
	}
}, 700);
