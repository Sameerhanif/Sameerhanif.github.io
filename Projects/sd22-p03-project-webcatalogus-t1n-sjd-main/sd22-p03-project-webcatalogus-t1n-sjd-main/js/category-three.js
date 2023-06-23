console.log('File is loaded');

fetch('https://mbo-sd.nl/period3-fetch/food-snack-united-states')
    .then(myData => myData.json(myData))
    .then(usData => snackUnitedStates(usData))

function snackUnitedStates(unitedStatesData){
    console.log(unitedStatesData);
    for (let i = 0; i < unitedStatesData.length; i++) {
        const unitedStates = unitedStatesData[0];
        console.log(unitedStates);
        const imageUS = document.querySelector('img.food-image-US-1')
        const h4View = document.querySelector('h4.title-1');
        const pIngredients = document.querySelector('p.ingredients-1');
        const pDescription = document.querySelector('p.description-price-1');
        const title = unitedStates.title;
        const ingredients = unitedStates.ingredients;
        const description = unitedStates.description;
        const price = unitedStates.price;
        imageUS.src = unitedStates.imageUrl;
        h4View.innerHTML = `Food name: ${title}`
        pIngredients.textContent = `Ingredienst for ${title}: ${ingredients}`
            pDescription.textContent = `Description of ${title}: ${description} and Price of ${title} ${price}`
    }
    for (let i = 0; i < unitedStatesData.length; i++) {
        const unitedStates = unitedStatesData[1];
        console.log(unitedStates);
        const imageUS = document.querySelector('img.food-image-US-2')
        const h4View = document.querySelector('h4.title-2');
        const pIngredients = document.querySelector('p.ingredients-2');
        const pDescription = document.querySelector('p.description-price-2');
        const title = unitedStates.title;
        const ingredients = unitedStates.ingredients;
        const description = unitedStates.description;
        const price = unitedStates.price;
        imageUS.src = unitedStates.imageUrl;
        h4View.innerHTML = `Food name: ${title}`
        pIngredients.textContent = `Ingredienst for ${title}: ${ingredients}`
            pDescription.textContent = `Description of ${title}: ${description} and Price of ${title} ${price}`
    }
    for (let i = 0; i < unitedStatesData.length; i++) {
        const unitedStates = unitedStatesData[2];
        console.log(unitedStates);
        const imageUS = document.querySelector('img.food-image-US-3')
        const h4View = document.querySelector('h4.title-3');
        const pIngredients = document.querySelector('p.ingredients-3');
        const pDescription = document.querySelector('p.description-price-3');
        const title = unitedStates.title;
        const ingredients = unitedStates.ingredients;
        const description = unitedStates.description;
        const price = unitedStates.price;
        imageUS.src = unitedStates.imageUrl;
        h4View.innerHTML = `Food name: ${title}`
        pIngredients.textContent = `Ingredienst for ${title}: ${ingredients}`
            pDescription.textContent = `Description of ${title}: ${description} and Price of ${title} ${price}`
    } 
}


fetch('https://mbo-sd.nl/period3-fetch/food-snack-the-netherlands')
    .then(myData => myData.json(myData))
    .then(nedData => SnackNetherlands(nedData))

    function SnackNetherlands(snackNetherlandsData){
        for (let i = 0; i < snackNetherlandsData.length; i++) {
            const netherlands = snackNetherlandsData[0]
            console.log(netherlands);
            const imageUS = document.querySelector('img.food-image-ned-4')
            const h4View = document.querySelector('h4.title-4');
            const pIngredients = document.querySelector('p.ingredients-4');
            const pDescription = document.querySelector('p.description-price-4');
            const title = netherlands.title;
            const ingredients = netherlands.ingredients;
            const description = netherlands.description;
            const price = netherlands.price;
            imageUS.src = netherlands.imageUrl;
            h4View.innerHTML = `Food name: ${title}`
            pIngredients.textContent = `Ingredienst for ${title}: ${ingredients}`
            pDescription.textContent = `Description of ${title}: ${description} and Price of ${title} ${price}`
        }
        for (let i = 0; i < snackNetherlandsData.length; i++) {
            const netherlands = snackNetherlandsData[1]
            console.log(netherlands);
            const imageUS = document.querySelector('img.food-image-ned-5')
            const h4View = document.querySelector('h4.title-5');
            const pIngredients = document.querySelector('p.ingredients-5');
            const pDescription = document.querySelector('p.description-price-5');
            const title = netherlands.title;
            const ingredients = netherlands.ingredients;
            const description = netherlands.description;
            const price = netherlands.price;
            imageUS.src = netherlands.imageUrl;
            h4View.innerHTML = `Food name: ${title}`
            pIngredients.textContent = `Ingredienst for ${title}: ${ingredients}`
            pDescription.textContent = `Description of ${title}: ${description} and Price of ${title} ${price}`
        }
        for (let i = 0; i < snackNetherlandsData.length; i++) {
            const netherlands = snackNetherlandsData[2]
            console.log(netherlands);
            const imageUS = document.querySelector('img.food-image-ned-6')
            const h4View = document.querySelector('h4.title-6');
            const pIngredients = document.querySelector('p.ingredients-6');
            const pDescription = document.querySelector('p.description-price-6');
            const title = netherlands.title;
            const ingredients = netherlands.ingredients;
            const description = netherlands.description;
            const price = netherlands.price;
            imageUS.src = netherlands.imageUrl;
            h4View.innerHTML = `Food name: ${title}`
            pIngredients.textContent = `Ingredienst for ${title}: ${ingredients}`
            pDescription.textContent = `Description of ${title}: ${description} and Price of ${title} ${price}`
        }

    }
fetch('https://mbo-sd.nl/period3-fetch/food-snack-germany') 
    .then(myData => myData.json(myData))
    .then(germanyData => snackGermary(germanyData))

function snackGermary(germData){
console.log(germData);
for (let i = 0; i < germData.length; i++) {
    const germany = germData[0];
    console.log(germany);
    const imageUS = document.querySelector('img.food-image-ger-7')
    const h4View = document.querySelector('h4.title-7');
    const pIngredients = document.querySelector('p.ingredients-7');
    const pDescription = document.querySelector('p.description-price-7');
    const title = germany.title;
    const ingredients = germany.ingredients;
    const description = germany.description;
    const price = germany.price;
    imageUS.src = germany.imageUrl;
    h4View.innerHTML = `Food name: ${title}`
    pIngredients.textContent = `Ingredienst for ${title}: ${ingredients}`
            pDescription.textContent = `Description of ${title}: ${description} and Price of ${title} ${price}`
}
for (let i = 0; i < germData.length; i++) {
    const germany = germData[1];
    console.log(germany);
    const imageUS = document.querySelector('img.food-image-ger-8')
    const h4View = document.querySelector('h4.title-8');
    const pIngredients = document.querySelector('p.ingredients-8');
    const pDescription = document.querySelector('p.description-price-8');
    const title = germany.title;
    const ingredients = germany.ingredients;
    const description = germany.description;
    const price = germany.price;
    imageUS.src = germany.imageUrl;
    h4View.innerHTML = `Food name: ${title}`
    pIngredients.textContent = `Ingredienst for ${title}: ${ingredients}`
    pDescription.textContent = `Description of ${title}: ${description} and Price of ${title} ${price}`
}
for (let i = 0; i < germData.length; i++) {
    const germany = germData[2];
    console.log(germany);
    const imageUS = document.querySelector('img.food-image-ger-9')
    const h4View = document.querySelector('h4.title-9');
    const pIngredients = document.querySelector('p.ingredients-9');
    const pDescription = document.querySelector('p.description-price-9');
    const title = germany.title;
    const ingredients = germany.ingredients;
    const description = germany.description;
    const price = germany.price;
    imageUS.src = germany.imageUrl;
    h4View.innerHTML = `Food name: ${title}`
    pIngredients.textContent = `Ingredienst for ${title}: ${ingredients}`
    pDescription.textContent = `Description of ${title}: ${description} and Price of ${title} ${price}`
}
}
