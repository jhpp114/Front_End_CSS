import React, { Component } from 'react';
import { Choice, Remove } from '../helper/helper';


const Food = () => {
    const foodItems = [
        'apple', 'melon', 'kiwee', 'water-melon',
        'mango', 'avocado', 'pineapple'
    ];
    let pickedItem = Choice(foodItems);
    console.log(`I'd like one ${pickedItem}`);
    console.log(`Here you go ${pickedItem}`);
    let afterRemove = Remove(foodItems, pickedItem);
    console.log(`Now we have ${afterRemove}`);
    return (
        <div>
            
        </div>
    )
}

export default Food;
