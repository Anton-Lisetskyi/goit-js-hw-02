function formatMessage(message, maxLength) {

    const messageLength = message.length;

    if (messageLength <= maxLength) {
        return message;    
    } else {
        return message.slice(0, maxLength) + '...';
    }
}
