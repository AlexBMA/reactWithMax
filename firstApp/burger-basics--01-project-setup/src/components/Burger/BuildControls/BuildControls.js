import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
import {INGREDIENT_CONTROLS} from '../BurgerConstant/BurgerConstant';

const buildControls =(props)=>{

    const  controlsMap = INGREDIENT_CONTROLS.map(ctrl=>{
       return <BuildControl key={ctrl.label}
                            label={ctrl.label}
                            added={()=>props.ingredientAdded(ctrl.type)}
                            removed={()=>props.ingredientRemove(ctrl.type)}
                            disabled ={props.disabled(ctrl.type)}
       />
    });

    return <div className={classes.BuildControls}>
        <p>Current Price:<strong>{props.price.toFixed(2)}</strong></p>
        {controlsMap}
        <button className={classes.OrderButton}
        disabled={!props.purchasable}>ORDER NOW</button>
    </div>
};

export default buildControls;