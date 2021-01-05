const Choice = (items) => {
    console.log(items.length);
    const randomIndex = Math.floor(Math.random() * items.length);
    console.log(randomIndex);
    return items[randomIndex];
}

const Remove = (items, item) => {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === item) {
            items.splice(i, 1);
            return items;
        }
    }
}

export { Choice, Remove };
