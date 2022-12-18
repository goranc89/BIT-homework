// 1. Create an object that represents your favourite coffee. Please include coffee name,
// strength, flavour, milk, sugar, … everything you like!

var coffee = {
    name: "turkish",
    strength: "strong",
    flavour: "caramel",
    milk: "no",
    sugar: "no"
}
console.log(coffee);


// 2. Create an object that represents your favourite movie. Please include title, actors,
// director, genre, popularity.

var movie = {
    title: "Titanic",
    actors: "Leonardo di Caprio & Kate Winslet",
    director: "James Cameron",
    genre: "drama",
    popularity: "90%"
}
console.log(movie);

// 3. Write a function that creates an object that represents a project. Each project is
// described by: description, programming language, git repository, boolean status that
// says if the project is in development or not. Add a method that prints out the project's repository, 
// a method that checks if the project is written in JavaScript as well as a method that checks if the project is in development or not.


function createProject (desc, lang, gitUrl, status){
    return {
    description : desc,
    programingLanguage : lang,
    gitRepository : gitUrl,
    developmentStatus : status,
    printRepository() {
        return gitUrl;
    },
    isJavaScript: function () {
        if (lang == "JavaScript") {
            return  "using JavaScript"
        }else {
            return "not using JavaScript"
        }
    },
    isInDevelopment() {
        return status;
    }
    }
}
var project = createProject("calculator","JavaScript","https://github.com/aldinam", true)
console.log(project);
project.printRepository();
console.log(project.printRepository());
project.isJavaScript();
console.log(project.isJavaScript());
project.isInDevelopment();
console.log(project.isInDevelopment());
  


// 4. Write a function that creates an object that represents a culinary recipe. Each recipe is
// described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
// preparing time, preparing instruction.
// ○ Add a method that prints out all the ingredients necessary for the meal
// preparation.
// ○ Add a method that checks if a meal can be prepared in under 15 minutes.
// ○ Add a method that changes the type of cuisine to the given value.
// ○ Add a method that delete a given ingredient from the list of ingredients.

function createRecipe (name, cuisine, complex, ing, time, instruction) {

    var recipe = {

        name: name,
        typeOfCuisine: cuisine,
        complexity: complex,
        ingridients: ing,
        preparingTime: time,
        preparingInstruction: instruction,

        printAllIngridients: function () {
            return recipe.ingridients;
        },
        canBePrepareFor15Min: function () {
            if (recipe.time <= 15) {
                return 'Yes, meal can be prepare for 15 min.'
            } else {
                return 'No, meal can\'t be prepare for 15 min.'
            }
        },
        changeCuisine: function (cuis) {
            return recipe.typeOfCuisine = cuis;
        },
        deleteIngridient: function (ing) {

            var newIngrid = [];

            for (i = 0; i < recipe.ingridients.length; i++) {
                if (recipe.ingridients[i] !== ing) {
                    newIngrid[newIngrid.length] = recipe.ingridients[i];
                }   
            }
            recipe.ingridients = newIngrid;
        }

    };
    return recipe;
}

var beanSoup = createRecipe('Bean soup', 'Serbian', 'Hard', ['Bean', 'Water', 'Salt', 'Carrot', 'Pepper', 'Onion'], 150, 'All ingredients add in sickle and cook');

console.log(beanSoup);
console.log(beanSoup.printAllIngridients());
beanSoup.changeCuisine('France');
beanSoup.deleteIngridient('Pepper');
console.log(beanSoup);
console.log(beanSoup.printAllIngridients());
console.log(beanSoup.canBePrepareFor15Min());


