import React, {Component} from 'react';
import {Alert, Breadcrumb, BreadcrumbItem, UncontrolledAlert} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class AlertExample extends React.Component {
    constructor(props){
      super(props);
      console.log("Hello from constructor");
      this.state = {date: new Date()};
    };
    test = (a) => {
        let date = new Date;
        this.setState({
            date: date.getSeconds()
        });
        console.log("This is test", this.state);
    };
    render() {
        return (
            <div>
                <Alert>This is just a freaking alert</Alert>
                <UncontrolledAlert>This is an uncontrolled alert</UncontrolledAlert>
                <Breadcrumb>
                    <BreadcrumbItem active>
                        <a href="#" onClick={this.test}>This is item</a>
                    </BreadcrumbItem>
                    <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
                </Breadcrumb>
            </div>
        );
    }
}

export default AlertExample;