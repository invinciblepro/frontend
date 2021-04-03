import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios'
import './AdminEdit.css'
import AdminNavbar from "./AdminNavbar/AdminNavbar"
class AdminEdit extends Component {
    update()
    {
        const pn = document.getElementById("furnitureName").value
        const pp = document.getElementById("furniturePrice").value
        const pd = document.getElementById("FurnitureDiscription").value
        const pi = document.getElementById("furnitureImageURL").value
        const pq = document.getElementById("furnitureQuantity").value
        
        axios.post('',JSON.stringify({
            name:pn,
            price:pp,
            discription:pd,
            url:pi,
            quantity:pq
        }
        )).then(response => {
            console.log(response)
        }).catch(e=>{
            console.log(e)
        })
    }
    back()
    {
        <Link
        to={{
            pathname:'/admin-products'
        }}
        />
        this.props.history.push({
            pathname:'/admin-products'
        })
    }
    render() {
        return (
            <>
            <AdminNavbar/>
            <div className="admin-body">
            <div className="auth-wrapper" id="addFurnitureBody">
                <div  className="auth-inner" id="addFurnitureBody">
                    <form onSubmit={()=>this.update()} id="addFurnitureBody">
                        <h3 className="heading">Edit Product</h3>

                        <div className="form-group" >
                            <label>Product Name</label>
                            <input id="furnitureName" type="email" className="form-control" placeholder="Enter furniture fame" />
                        </div>

                        <div className="form-group">
                            <label>Product Price</label>
                            <input id="furniturePrice" type="price" className="form-control" placeholder="Enter price" />
                        </div>

                        <div className="form-group">
                            <label>Product Discription</label>
                            <input id="FurnitureDiscription" type="discription" className="form-control" placeholder="Enter product discription" />
                        </div>
                        
                        <div className="form-group">
                            <label>Image URL</label>
                            <input id="furnitureImageURL" type="URL" className="form-control" placeholder="Enter image URL" />
                        </div>
                        
                        <div className="form-group">
                            <label>Product Quantity</label>
                            <input id="furnitureQuantity" type="quantity" className="form-control" placeholder="Enter quantity" />
                        </div>
                        

                        <button id="editFurnitureButton" type="submit" className="btn btn-primary btn-block">Edit</button>
                        <button type="back" className="btn btn-primary btn-block" onClick={()=>{this.back()}}>Go back</button>
                        
                    
                    </form>
                    <br></br>
                </div>
            </div>
            </div>
            </>
        );
    }
}
export default AdminEdit