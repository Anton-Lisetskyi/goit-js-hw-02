function getShippingCost(country) {

    country = country.toLowerCase();

    function getPrice(country) {

        switch (country) {
            case 'china':
                return 100;
                break;
            case 'chile':
                return 250;
                break;
            case 'australia':
                return 170;
                break;
            case 'jamaica':
                return 120;
                break;
            default:
                return null;
        }
    }

    const price = getPrice(country)


    if (price !== null) {

        const formattedCountry = country.charAt(0).toUpperCase() + country.slice(1);

    return `Shipping to ${formattedCountry} will cost ${price} credits`;
  } else {
    return 'Sorry, there is no delivery to your country';
  }
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"