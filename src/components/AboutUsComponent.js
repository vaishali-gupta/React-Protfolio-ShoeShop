import React,{Component} from 'react';
import { Link } from 'react-router-dom';
class About extends Component {
    constructor(props){
        super(props);
        this.state ={};
    };
    render(){
        return(
            <div className="aboutUs">
                <h1 className="main_heading">About US</h1>
                <div className="col-12  text-center social_icons ">
                        <Link className="btn btn-social-icon btn-facebook" to="http://www.facebook.com/"><i className="fa fa-facebook" /></Link>
                        <Link className="btn btn-social-icon btn-pinterest" to="http://pinterest.com/"><i className="fa fa-pinterest" /></Link>
                        <Link className="btn btn-social-icon btn-google" to="http://google.com/"><i className="fa fa-google" /></Link> 
                    </div>
                <p className="about_description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
                    Cum sociis natoque penatibus et magnis dis parturient montes,nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
                    Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim 
                    justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer 
                    tincidunt. Cras dapibus. Vivamus elementum semper nisi.</p>
            </div>
        );
    }
}
export default About;