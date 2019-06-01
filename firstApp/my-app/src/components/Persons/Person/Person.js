import React,{Component,Fragment} from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import Auxillary from '../../../hoc/Auxillary';
import withClass from '../../../hoc/WithClass'

class Person extends Component{
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount(){
        this.inputElementRef.current.focus();
    }

    render(){
    console.log('[Person.js] rendering...');
    return <Fragment>
            <p onClick={this.props.click}>
                I'm  {this.props.name} and I am {this.props.age} years old!
            </p>
            <p>{this.props.children}</p>
            <input 
             type="text"
             ref={this.inputElementRef} 
             onChange={this.props.changed}
             value={this.props.name}
             />
        </Fragment>
        
    };
}
/** Prop type it gives you a warning 
 *  when you pass wrong argument to 
 *  class component 
 *  or functional component
 */
Person.prototype = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func    
};
    
export default withClass(Person,classes.Person);