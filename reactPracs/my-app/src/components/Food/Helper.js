const Choice = (items) => {
    console.log(items);
    console.log(items.length);
    const RandomIndex = Math.floor(Math.random() * items.length);
    return items[RandomIndex];
}

const Remove = (items, item) => {
    console.log("Enter Remove func");
    console.log(items);
    items = items.filter( eachItem => {
        return eachItem !== item;
    })
    return items
    //return updatedFruits;
}

export {Choice, Remove};
