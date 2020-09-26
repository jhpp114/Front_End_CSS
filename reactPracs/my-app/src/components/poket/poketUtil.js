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
export default ID_Converter