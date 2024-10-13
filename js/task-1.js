function makeTransaction(quantity, pricePerDroid, customerCredits) {

  const totalPrice = quantity * pricePerDroid

  if (totalPrice <= customerCredits) {
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`
  } else {
    return 'Insufficient funds!'
  }
}

