function capitalize(text) {
    let data = text.split(' ');
    let mappedData = data.map((word) => {
        let char = String.fromCharCode(word.charCodeAt(0) - 32);
        let arr = word.split('');
        arr.splice(0, 1, char);
        return arr.join('');
    });
    return mappedData.join(' ');
}

capitalize('look, it is working');
