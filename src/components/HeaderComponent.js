import React , {Component} from 'react';
import {Modal, ModalHeader, ModalBody,ListGroup, ListGroupItem} from 'reactstrap';
import { Link } from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            isModalOpen : false,
        };
        this.toggleModal = this.toggleModal.bind(this);
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render(){
        return(
            <header className="row clearfix main-header">
                <div className="col-md-12">
                    <span className="side_menu" onClick={this.toggleModal}><i class="fa fa-bars "></i> Menu </span>
                    <h3 className="text-center"><Link to="/home"> ShoeShop </Link></h3> 
                </div>
                
                <Modal  className="menu" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>  </ModalHeader>
                    <ModalBody>
                        <ListGroup>
                            <ListGroupItem><Link to="/home">Home</Link></ListGroupItem>
                            <ListGroupItem><Link to="/shopping">Shop</Link></ListGroupItem>
                            <ListGroupItem><Link to="/aboutus">About Us</Link></ListGroupItem>
                            <ListGroupItem><Link to="/contactus">Contact Us</Link></ListGroupItem>
                         </ListGroup>
                    </ModalBody>
                </Modal>
            </header>
        );
    }
}

export default Header;