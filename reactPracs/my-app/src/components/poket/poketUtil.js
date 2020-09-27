const ID_Converter = (id) => {
   let data = `${id}`;
    if (id < 10) {
       return data = `00${id}`;
    } else if (id < 100) {
        return data = `0${id}`;
    } else {
        return data;
    }
}

const Random_Assign = (poketmons) => {
    const totalPoketmons = poketmons;
    const RandomIndex = [0,1,2,3,4,5,6,7];
    let returnData = [];
    for (let i = 0; i < RandomIndex.length; i++) {
        let randomIndex = Math.floor(Math.random() * totalPoketmons.length);
        returnData.push(totalPoketmons[randomIndex]);
        totalPoketmons.splice(randomIndex, 1);
    }
    console.log(returnData);
    return returnData;
}
export default ID_Converter
export {Random_Assign};