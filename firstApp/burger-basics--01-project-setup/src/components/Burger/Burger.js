import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient.js';
import {INGREDIENTS} from '../Burger/BurgerConstant/BurgerConstant';

import classes from './Burger.css';

const burger = (props) =>{

    let transformIngredients = Object.keys(props.ingredients)
        .map((igKey) =>{
            return [...Array(props.ingredients[igKey])]
                .map((_,index)=>{
                  return <BurgerIngredient key={igKey+index} type={igKey}/>
                });
        }).reduce((arr,el)=>{
            return arr.concat(el);
        },[]);

    //console.log(transformIngredients);
    if(transformIngredients.length === 0){
        transformIngredients = <p>Please start adding ingredients!</p>;
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type={INGREDIENTS.breadTop}/>
            {transformIngredients}
            <BurgerIngredient type={INGREDIENTS.breadBottom}/>
        </div>
    );
};

export default burger;