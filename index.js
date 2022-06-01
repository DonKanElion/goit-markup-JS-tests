function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
    // Change code below this line
  
    const message =`You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`;
  
    // Change code above this line
    return message;
  } 

  makeOrderMessage(4, 300, 100);

  console.log('Привіт Світ!');