import React, { Component } from "react";
import {Button, Form, FormGroup, Input, Col, FormFeedback } from 'reactstrap';
class Contact extends Component{
    constructor(props){
        super(props);
        this.state ={
            firstName:'',
            email:'',
            subject:'',
            message:'',
            touched:{
                firstName: false,
                email: false,
                subject: false,
                message: false
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }
    validate(firstName, email, subject, message) {

        const errors = {
            firstName: '',
            subject: '',
            message: '',
            email: ''
        };

        if (this.state.touched.firstName) {
            if (firstName.length < 2) {
                errors.firstName = 'Name must be at least 2 characters.';
            } else if (firstName.length > 15) {
                errors.firstName = 'Name must be 15 or less characters.';
            }
        }

        if (this.state.touched.subject) {
            if (subject.length < 2) {
                errors.subject = 'Subject must be at least 2 characters.';
            } else if (subject.length > 15) {
                errors.subject = 'Subject must be 15 or less characters.';
            }
        }

        if (this.state.touched.message) {
            if (message.length < 2) {
                errors.message = 'Message must be at least 2 characters.';
            } else if (message.length > 15) {
                errors.message = 'Message must be 15 or less characters.';
            }
        }

        if (this.state.touched.email && !email.includes('@')) {
            errors.email = 'Email should contain a @';
        }

        return errors;
    }
    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }
    render(){
        const errors = this.validate(this.state.firstName, this.state.email, this.state.subject, this.state.message);

        return(
            <div className="contactUs">
                <h1 className="main_heading">Contact Us</h1>
                <div className="text-danger text-center small_text"> We are happy to hear from you .</div>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Col md={6}>
                                    <Input type="text" id="firstName" name="firstName"
                                        placeholder="Name"
                                        value={this.state.firstName}
                                        invalid={errors.firstName}
                                        onBlur={this.handleBlur("firstName")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.firstName}</FormFeedback>
                                </Col>
                                <Col md={6}>
                                    <Input type="text" id="email" name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        invalid={errors.email}
                                        onBlur={this.handleBlur("email")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={12}>
                                    <Input type="text" id="subject" name="subject"
                                        placeholder="Subject"
                                        value={this.state.subject}
                                        invalid={errors.subject}
                                        onBlur={this.handleBlur("subject")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.subject}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={12}>
                                    <Input type="textarea" id="message" name="message"
                                        rows="12"
                                        placeholder="Type a message here..."
                                        value={this.state.message}
                                        onChange={this.handleInputChange}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 3, offset: 9}} className="text-right">
                                    <Button type="submit" color="primary" className="">
                                        Send a Message
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>

            </div>

        );
    }

}
export default Contact;