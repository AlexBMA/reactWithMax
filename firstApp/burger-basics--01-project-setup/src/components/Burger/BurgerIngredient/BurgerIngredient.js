import React from 'react';
import PropTypes from 'prop-types';
import {INGREDIENTS} from '../BurgerConstant/BurgerConstant';
import classes from './BurgerIngredient.css';


class BurgerIngredient extends React.Component{

    createIngredient (){
        let ingredient =  null;
        switch (this.props.type) {
            case(INGREDIENTS.breadBottom):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case (INGREDIENTS.breadTop):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case (INGREDIENTS.meat):
                ingredient = <div className={classes.Meat}></div>
                break;
            case (INGREDIENTS.salad):
                ingredient = <div className={classes.Salad}></div>
                break;
            case (INGREDIENTS.bacon):
                ingredient = <div className={classes.Bacon}></div>
                break;
            case (INGREDIENTS.cheese):
                ingredient = <div className={classes.Cheese}></div>
                break;
            default :
                ingredient = null;
                break;
        }

        return ingredient;
    };

    render(){
        return this.createIngredient();
    }

}

BurgerIngredient.propTypes = {
    type:PropTypes.string.isRequired
};

export default BurgerIngredient;