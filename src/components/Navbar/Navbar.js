import React, { Component } from 'react';
import { NavItem } from 'react-bootstrap';
import {MenuItems} from './MenueItems';
import './Navbar.css';
import 'font-awesome/css/font-awesome.min.css';
import {Button} from "../Button";
class Navbar extends Component
{
    state = { clicked : false}

    handleClick = () =>
    {
        this.setState({
            clicked:!this.state.clicked
        })
    }

    render()
    {
        return(
            <nav className="NavbarItems">
                <h2 className="navbar-logo">
                    Furniture Store
                    <i className="fab fa-react">

                    </i>
                </h2>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fa fa-times' : 'fa fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item,index)=>{
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                {/* <Button>Sign up</Button> */}
            </nav>
        )
    }
}
export default Navbar;