let searchText = document.getElementById("buscar")

const cleaner = (parentId)=>{
   let childs = document.querySelectorAll(`#${parentId} > *`);
   childs.forEach(e => e.remove())
}

const inyector = (data , parentId)=>{
  
  cleaner(parentId)
  
  if (!data.meals){
    let h1 = document.createElement("h4")
    h1.innerText = "No Data"
    document.getElementById(parentId).appendChild(h1)
    return 
  }
  
   /*manera simple y rapido*/
  data.meals.forEach(meal =>{
  let div = document.createElement("div")
  div.innerHTML = `
  <h2>${meal.strMeal}</h2>
  <p>${meal.strInstructions}</p>
  `
  document.getElementById(parentId).appendChild(div)
  })
  

  
}

searchText.addEventListener("click", () =>{
  let input = document.getElementById("search")
  let data = input.value
  input.value = ""
  
  /*busqueda*/
  
  let ApiQuery = `https://www.themealdb.com/api/json/v1/1/search.php?s=${data}`
  
  fetch(ApiQuery)
  .then(data => data.json())
  .then(data => inyector(data,"results"))
  .catch(e => console.log(e))
  
} )

