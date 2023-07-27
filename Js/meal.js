const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(respons => respons.json())
        .then(data => displayMeals(data.meals))
}

// loadMeals()


const displayMeals = meals => {

    // parents mealsContainer 
    const mealsContainer = document.getElementById('meals-Container');
    mealsContainer.innerHTML = '';
    meals.forEach(meal => {
        // console.log(meal.idMeal);

        // crate div
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
            <div class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">This is a longer card with supporting text below as
                        a natural lead-in to additional content. This content is a little
                        bit longer.</p>

                    <button onclick="loadMealDetails(${meal.idMeal})" type="button" class="btn btn-primary d-flex" data-bs-toggle="modal"
                        data-bs-target="#mealDetails">
                        Details
                    </button>
                </div>
            </div>
        
        `;

        // append
        mealsContainer.appendChild(mealDiv);
    });
};


const searchMeals = () => {

    const searchField = document.getElementById('search-Field').value = '';

    loadMeals(searchField)
    // searchField.value = '';
}


const loadMealDetails = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayMealDetails(data.meals[0]))

}


const displayMealDetails = meal => {
    document.getElementById('mealDetailsLabel').innerText = meal.strMeal;
    console.log(meal);
    const mealDetails = document.getElementById('mealDetailsBody');
    mealDetails.innerHTML = `
    <img src="${meal.strMealThumb}" style="height: 250px !important;" class="card-img-top img-fluid" alt="...">
    <p>${meal.strInstructions
        }</p>

 
    
    `;

}


loadMeals('fish');