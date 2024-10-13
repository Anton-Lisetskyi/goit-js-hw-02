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
    return 'Country not available';
  }
}
