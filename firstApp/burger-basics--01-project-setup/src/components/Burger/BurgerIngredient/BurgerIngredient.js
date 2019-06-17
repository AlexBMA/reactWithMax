import React from 'react';
import PropTypes from 'prop-types';
import {ingredientsConst} from '../BurgerConstant/BurgerConstant';
import classes from './BurgerIngredient.css';


class BurgerIngredient extends React.Component{

    createIngredient (){
        let ingredient =  null;
        console.log(this.props.type);
        console.log(ingredientsConst);

        switch (this.props.type) {
            case(ingredientsConst.breadBottom):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case (ingredientsConst.breadTop):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case (ingredientsConst.meat):
                ingredient = <div className={classes.Meat}></div>
                break;
            case (ingredientsConst.salad):
                ingredient = <div className={classes.Salad}></div>
                break;
            case (ingredientsConst.bacon):
                ingredient = <div className={classes.Bacon}></div>
                break;
            case (ingredientsConst.cheese):
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