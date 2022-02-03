function capitalize(text) {
    const words = [];
    for (let word of text.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }

    return words.join(' ');
}

capitalize('A short story')