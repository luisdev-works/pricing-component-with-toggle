const switchButton = document.getElementById('switch');
const pricingTags = document.querySelectorAll('p.main__card-price-number');
const priceMonthly = [19.99, 24.99, 39.99];
const priceAnnually = [199.99, 249.99, 399.99];

switchButton.onclick = () => {
	switchButton.classList.toggle('monthly');
	if (!switchButton.classList.contains('monthly')) {
		pricingTags.forEach((pricingTag, index) => {
			pricingTag.textContent = priceAnnually[index];
		});
	} else {
		pricingTags.forEach((pricingTag, index) => {
			pricingTag.textContent = priceMonthly[index];
		});
	}
};
