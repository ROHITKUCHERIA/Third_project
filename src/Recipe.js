import React from 'react';
import style from './recipe.module.css';
const Recipe = ({ title, calories, image,ingredients,source,dietLabels,cautions }) => {
    return (
        <div  className={style.recipe}> 
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredients =>(
                    
                    <li>{ingredients.text}</li>
                
                ))}
            </ol>
           <ul> 
                <h5><li>Cautions => {cautions}</li></h5>
                <h5><li>Calories => {calories}</li></h5>
                <h5><li>Source => {source}</li></h5>
                <h5><li>Diet-Labels => {dietLabels} </li></h5>
            </ul>
            <img className={style.image} src={image} alt="" />
        </div>
    );
};

export default Recipe;
