import React, { Component } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AdminNavbar from "./AdminNavbar/AdminNavbar"
import './AdminProducts.css'
class AdminProducts extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            items:[]
        };
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(res => res.json())
          .then(result => {
            this.setState({
              items: result
            });
          });
    }
    move = (items) =>
    {
        <Link
        to={{
          pathname: "/order",
          state: items
        }}
        />
        this.props.history.push({
            pathname: '/order',
            state: items 
        })
    }
    edit = (items) =>
    {
        <Link
        to={{
          pathname: "/edit",
          state: items
        }}
        />
        this.props.history.push({
            pathname: '/edit',
            state: items 
        })
    }
    insert = (items) =>
    {
        <Link
        to={{
          pathname: "/insert",
          state: items
        }}
        />
        this.props.history.push({
            pathname: '/insert',
            state: items 
        })
    }
    header()
    {
        return (
            <>
            <TableCell className="hc" style={{textAlign:'center'}}><h4>ID</h4></TableCell>
            <TableCell className="hc" style={{textAlign:'center'}}><h4>Title</h4></TableCell>
            <TableCell className="hc" style={{textAlign:'center'}}><h4>Body</h4></TableCell>
            <TableCell className="hc" style={{textAlign:'center'}}><h4>Delete</h4></TableCell>
            <TableCell className="hc" style={{textAlign:'center'}}><h4>Edit</h4></TableCell>
            </>
        );
    }
    delete = itemId => {
        const items = this.state.items.filter(item => item.id !== itemId);
        this.setState({ items: items });
        };
    body(){
        return this.state.items.map((item) => {
            const {id,title,body} = item;
            return (
                <>
                <TableRow className="br" key={id}>
                <TableCell className="bc" component="th" scope="row">{id}</TableCell>
                <TableCell className="bc" align="center">{title}</TableCell>
                <TableCell className="bc" align="center">{body}</TableCell>
                <TableCell className="bc" align="center"><Button color="danger" onClick={()=>{this.delete(id)}}><DeleteIcon /></Button></TableCell>
                <TableCell className="bc" align="center"><Button color="danger" onClick={()=>{this.edit(this.items)}}><CreateIcon /></Button></TableCell>
                </TableRow>
                </>
            )
        })
    }
    render()
    {
        const {items} = this.state;
        return (
            <>
            <AdminNavbar/>
            <div className="ap">
                <Button className="btn" variant="contained" color="primary" onClick={()=>{this.insert(this.items)}}>
                    <ShoppingCartIcon/>Add Products
                </Button>
                <TableContainer className="table">
                <Table className="style" aria-label="customized table" style={{alignSelf:"center"}}>
                <TableHead className="head">
                    <TableRow className="hr">
                        {this.header()}
                    </TableRow>
                </TableHead>
                <TableBody className="body">
                    {this.body()}
                </TableBody>
                </Table>
            </TableContainer>
            </div>
            </>
        );
    }
}
export default AdminProducts
