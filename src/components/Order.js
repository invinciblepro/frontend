import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Navbar from './Navbar/Navbar';
import './Order.css'
class Order extends Component
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
    header()
    {
        return (
            <>
            <TableCell className="hc" style={{textAlign:'center'}}><h4>ID</h4></TableCell>
            <TableCell className="hc" style={{textAlign:'center'}}><h4>Title</h4></TableCell>
            <TableCell className="hc" style={{textAlign:'center'}}><h4>Body</h4></TableCell>
            <TableCell className="hc" style={{textAlign:'center'}}><h4>Total</h4></TableCell>
            </>
        );
    }
    body(){
        return this.state.items.map((item) => {
            const {id,title,body} = item;
            return (
                <>
                <TableRow className="br" key={id}>
                <TableCell className="bc" component="th" scope="row">{id}</TableCell>
                <TableCell className="bc" align="center">{title}</TableCell>
                <TableCell className="bc" align="center">{body}</TableCell>
                <TableCell className="bc" align="center">Total</TableCell>
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
            <Navbar/>
            <div>
                <TableContainer className="table">
                <Table className="style" aria-label="customized table">
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
export default Order
