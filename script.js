function changeText() {
    document.getElementById('show').innerHTML = ''; // Clear previous result when textarea clicked
}

function countWords(n) {
    let message = document.getElementById('message').value.trim();
    let words = message.split(/\s+/);
    let result = `Number of ${n === 1 ? 'word' : `${n} words`} : ${words.length}`;
    document.getElementById('show').innerHTML = result;
}

function countCharacters() {
    let message = document.getElementById('message').value;
    let result = `Number of characters: ${message.length}`;
    document.getElementById('show').innerHTML = result;
}
