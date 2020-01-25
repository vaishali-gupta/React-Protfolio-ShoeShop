import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './AboutUsComponent';
import Contact from './ContactUsComponent';
import ProductDetails from './ProductDetailComponent';
import Shop from './ShoppingListComponent';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { };
        
    }

    render() {
        return (
            <div className="container-fluid">
                <Header />
               
                <Switch>
                        <Route path='/home' component={Home} />
                        <Route path='/aboutus' component={About} />
                        <Route path='/contactus' component={Contact} />
                        <Route path='/shopping' component={Shop} />
                        <Route path='/productdetails' component={ProductDetails} />
                        <Redirect to='/home' />
                </Switch>
            </div>
        );
    }
}

export default Main;