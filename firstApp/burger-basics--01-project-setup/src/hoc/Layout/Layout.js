import React, {Component} from 'react';
import Aux from '../Auxi/Auxi';
import classes from './layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import  SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component{
    state ={
        showSideDrawer: true
    }

    sideDrawerClosedHandler =() =>{
        this.setState({showSideDrawer:false});
    }

    sideDrawerToggleHandler = ()=>{
        const showSideDrawer = this.state.showSideDrawer;
        this.setState({showSideDrawer:!showSideDrawer});
    }


    render() {
        return(
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;
