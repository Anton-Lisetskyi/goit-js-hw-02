function checkForSpam(message) {

    message = message.toLowerCase();

    if (message.includes('spam') || message.includes('sale')) {
        return true;
    } else {
        return false;
    }
}
