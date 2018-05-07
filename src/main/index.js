import React, {Component} from 'react';
import {Alert, UncontrolledAlert, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class AlertExample extends React.Component {
    render() {
        return (
            <div>
                <Breadcrumb>
                    <BreadcrumbItem active>Home</BreadcrumbItem>
                </Breadcrumb>
                <Breadcrumb>
                    <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                    <BreadcrumbItem active>Library</BreadcrumbItem>
                </Breadcrumb>
                <Breadcrumb>
                    <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                    <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
                    <BreadcrumbItem active>Data</BreadcrumbItem>
                </Breadcrumb>
            </div>
        );
    }
}

export default AlertExample;