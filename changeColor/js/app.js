const changeColor = () => {
    const color_array = [
        'black', 'red', 'green'
    ,   'blue', 'yellow',   'purple'
    ,   'pink', 'skyblue', 'orange'
    ];
    let randomColorIndex = Math.floor(Math.random() * Math.floor(color_array.length));
    return color_array[randomColorIndex];
}

const applyChangeColor = () => {
    const body = document.querySelector('body');
    const colorValueDisplay = document.querySelector('.color_value');
    const changeColorBtn = document.querySelector('.main .change_color button');
    changeColorBtn.onclick = () => {
        let colorValue = changeColor();
        body.style.backgroundColor = colorValue;
        colorValueDisplay.textContent = colorValue.toUpperCase();
        
        console.log(colorValue);
    };
}

applyChangeColor();

