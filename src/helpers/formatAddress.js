export function formatAddress(address, locale) {
	if (!address) {
		return null;
	}
	var components = [address.name, address.street, address.city, address.postcode];
	components = components.map(component => {
		if (typeof component === "string") {
			return component;
		} else if (!!component) {
			return component[locale || "en"];
		}
	});
	var filteredComponents = components.filter(Boolean);
	return filteredComponents.join(", ");
}