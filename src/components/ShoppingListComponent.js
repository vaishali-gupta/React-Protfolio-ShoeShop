import React, { Component } from "react";
import { shoeLists } from '../shared/shoeList';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import { Link } from 'react-router-dom';
//import ProductDetails from "./ProductDetailComponent";

class Shop extends Component{
    constructor(props){
        super(props);
        this.state ={
            shoeLists: shoeLists
        };
    };
    render(){

        const shoeList = this.state.shoeLists.map(shoeList => {
            return (
                <div key={shoeList.id} className="col-4">
                    <Card>
                        <Link to="/productdetails"><CardImg src={shoeList.src} alt={shoeList.altText} /></Link>
                        <CardBody>
                            <CardTitle>{shoeList.caption}</CardTitle>
                            <CardSubtitle>{shoeList.price}</CardSubtitle>
                        </CardBody>
                    </Card>
                </div>
            );
        });
        return(
            <div className="row clearfix shoelist mt-4">
                {shoeList}
            </div>
            
        );
    }
}
export default Shop;