function showAll() {
  $.get("https://dummyjson.com/recipes", (data) => {
    // console.log(data)
    recipes = data.recipes;
    // console.log(recipes);
    recipes.forEach((element) => {
      $(".container").append(`
        <div class="details">
            <div class="images"><img src="${element.image}" alt="${element.name}" width="300px"></div>
            <div class="name-rating">
                <div class="names">${element.name}</div>
                <div class="ratings">${element.rating}</div>
            </div>
        </div>`);
    });
  });
}

$(".mealtype a").on("click",(e)=>{
  console.log(e.target)
  $(".container .details").hide()
  $.get("https://dummyjson.com/recipes",(data)=>{
    receipes=data.recipes;
    console.log(data)
    let one=receipes.filter(recipe=>{
      return recipe.mealType[0].toLowerCase()===$(e.target).text().toLowerCase()})
      console.log(one)

      one.forEach(e=>{
        console.log(e)
        addDiv(e)
      })
  })

})



function addDiv(e){
  $(".container").append(`
        <div class="details">
            <div class="images"><img src="${e.image}" alt="${e.name}" width="300px"></div>
            <div class="name-rating">
                <div class="names">${e.name}</div>
                <div class="ratings">${e.rating}</div>
            </div>
        </div>`);
}




// $.get('https://dummyjson.com/recipes',(data)=>{
//   recipes=data.recipes;
//   recipes.forEach((element)=>{
//     console.log(element.mealType)
//   })
// }
// ) 




// function add() {
//   $.get("https://dummyjson.com/recipes", (data) => {
//     recipes = data.recipes;
//     recipes.forEach((element) => {
//       $(".container").append(`
//         <div class="details" data-recipe-id="${element.id}">
//             <div class="images"><img src="${element.image}" alt="${element.name}" width="300px"></div>
//             <div class="name-rating">
//                 <div class="names">${element.name}</div>
//                 <div class="ratings">${element.rating}</div>
//             </div>
//         </div>`);
//     });

//     // Add click event listener to each details card
//     $(".details").on("click", function() {
//       const recipeId = $(this).data("recipe-id");
//       const recipe = recipes.find(r => r.id === recipeId);
//       showPopup(recipe);
//     });
//   });
// }

// function showPopup(recipe) {
//   const popupHtml = `
//     <div class="popup">
//       <div class="popup-content">
//         <h2>${recipe.name}</h2>
//         <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
//         <p><strong>Instructions:</strong> ${recipe.instructions}</p>
//         <p><strong>Cooking Hour:</strong> ${recipe.cookingMinutes}</p>  
//         <button class="close-popup">Close</button>
//       </div>
//     </div>
//   `;

//   $("body").append(popupHtml);
//   $(".close-popup").on("click", function() {
//     $(".popup").remove();
//   });
// }

// // ... existing code ...