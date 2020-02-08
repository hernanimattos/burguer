import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

console.log(classes)

const controls = [
  {
    label: 'Salad',
    type: 'salad'
  },
  {
    label: 'Bacon',
    type: 'bacon'
  },
  {
    label: 'Meat',
    type: 'meat'
  },
  {
    label: 'Cheese',
    type: 'cheese'
  }
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        add={() => props.addIndredient(ctrl.type)}
        remove={()=> props.removeIngredient(ctrl.type)}/>
    ))}
  </div>
);

export default buildControls;
