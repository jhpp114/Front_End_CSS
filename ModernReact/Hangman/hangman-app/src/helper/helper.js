let words = [
    'apple'
,   'banana'
,   'happy'
,   'love'
];

const randomIndex = () => {
    const index = Math.floor(Math.random() * words.length);
    return words[index];
}

export { randomIndex };
