import React, {useEffect, useState} from 'react'; 
import Recipe from './Recipe';
import "./App.css";

const App =() => {
  const APP_ID ="c49ab79a";
  const APP_KEY ="28676f76cdcacc9efccfe73614fb2a19";
  
  const [recipes, setRecipes] = useState([]); 
  const [search,setSearch] = useState('');
  const [query, setQuery] =useState('chicken');


   useEffect(() => {
   getRecipes();
 }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&count=20`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits); 
  };

  const updateSearch = e => {
     setSearch(e.target.value);
     
  }
  const getSearch = e => {

     e.preventDefault();
     setQuery(search);
     setSearch('');
  };
  
return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input 
         className="search-bar"
         type="text" 
         value={search} 
         onChange={updateSearch}
         
         />
        <button className="search-button" class="btn btn-outline-primary"type="submit">
         Search
        </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe 
           key={recipe.recipe.label}
           title={recipe.recipe.label} 
           calories={recipe.recipe.calories} 
           image={recipe.recipe.image}
           ingredients={recipe.recipe.ingredients}
           source={recipe.recipe.source}
           dietLabels={recipe.recipe.dietLabels}
           cautions={recipe.recipe.cautions}
        />
      ))}
      </div>
     </div>
  );   
};
export default App;
