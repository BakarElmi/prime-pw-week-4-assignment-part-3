console.log('***** Cart Functions *****');
// Bakar Elmi
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


var basket = [];                   //global variable

function addItem(item){            //function to add iteam
    basket.push(item);
    return true;
}

function listItems(basket){        //function to add iteam
    for (let i=0; i < basket.length; i++){
        console.log(basket[i]);
    }
}

function empty(basket){            //function to empty basket
    basket.length = 0;
    return console.log('basket is now empty');
}

// testing code
console.log(`Basket is: ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now: ${basket}`);
console.log('Adding milk (expect true)', addItem('milk'));
console.log('Adding fish (expect true)', addItem('fish'));
console.log(`Basket is now: ${basket}`);
empty(basket);                      // basket reset
console.log(`Basket is: ${basket}`);
console.log('Adding books (expect true)', addItem('books'));
console.log(`Basket is: ${basket}`);