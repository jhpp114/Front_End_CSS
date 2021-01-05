const addZeros = (poke_id) => {
    if (poke_id <= 9) {
        return `00${poke_id}`;
    } else if (poke_id <= 99) {
        return `0${poke_id}`;
    } else {
        return poke_id;
    }
}

const randomDistribute = (pokecards) => {
    let pokeRandomEven = [];
    let pokeRandomOdd = [];
    let pokecardLength = pokecards.length;
    for (let i = 0; i < pokecardLength; i++) {
        let randomIndex = Math.floor(Math.random() * (pokecardLength - i));
        if (i % 2 === 0) {
            pokeRandomEven.push(pokecards[randomIndex]);
        } else {
            pokeRandomOdd.push(pokecards[randomIndex]);
        }
        pokecards.splice(randomIndex, 1);
    }
    return { pokeRandomEven, pokeRandomOdd };
}

const addAllExperience = (pokecards) => {
    let totalExperience = Number(0);
    console.log("====");
    console.log(pokecards);
    for (let i = 0; i < pokecards.length; i++) {
        totalExperience += Number(pokecards[i].base_experience);
    }
    return Number(totalExperience);
}

export { addZeros, randomDistribute, addAllExperience }; 