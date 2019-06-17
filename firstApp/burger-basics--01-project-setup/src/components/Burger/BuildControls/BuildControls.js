import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
import {ingredientsConst} from '../BurgerConstant/BurgerConstant';

const controls =[
    {label:'Salad',type:ingredientsConst.salad},
    {label:'Bacon',type:ingredientsConst.bacon},
    {label:'Cheese',type:ingredientsConst.cheese},
    {label:'Meat',type:ingredientsConst.meat}
];

const buildControls =(props)=>{

    const  controlsMap = controls.map(ctrl=>{
       return <BuildControl key={ctrl.label} label={ctrl.label}/>
    });

    return <div className={classes.BuildControls}>
        {controlsMap}
    </div>
};

export default buildControls;