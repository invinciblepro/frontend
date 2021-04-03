import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShowMoreText from 'react-show-more-text';
import './home.css'
import { getByDisplayValue } from '@testing-library/dom';
import { withRouter } from "react-router";
import Product from './products';
import { Link } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

 class Home extends Component {
     
    constructor(props)
    {
        super(props)

        this.state={
            items : []
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
      display = (id,title,data) =>
      {
        <Link
        to={{
          pathname: "/product",
          state: [id,title,data]
        }}
        />
        this.props.history.push({
            pathname: '/product',
              state: [id,title,data] 
          })
      }
    render() {
        const { items } = this.state;
          return (
            <>
            <Navbar/>
            <ul style={{justifyContent:'center',paddingLeft:'5%'}}>
              {items.map(item => (
                <div className="div" onClick={()=>this.display('item.id','item.title','item.data')}>
                <div key={item.id}>
                    <Card className="card">
                    <CardActionArea>
                    <CardMedia className="media"
                        component="img"
                        alt="Furniture"
                        height="140"
                        image="../assets/images/fur1.jpg"
                        title={item.title}
                        style={{height:'10rem'}}
                    />
                    <CardContent style={{height:'12rem'}}>
                        <Typography gutterBottom variant="h5" component="h2">
                            <ShowMoreText
                                lines={1}
                                more=''
                                less=''
                                className='content-css'
                                anchorClass='my-anchor-css-class'
                                onClick={this.executeOnClick}
                                expanded={false}
                                width={300}
                                
                            >{item.title}</ShowMoreText>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <ShowMoreText
                                lines={2}
                                more=''
                                less=''
                                className='content-css'
                                anchorClass='my-anchor-css-class'
                                onClick={this.executeOnClick}
                                expanded={false}
                                width={300}
                                >
                            {item.body}
                            </ShowMoreText>
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                </Card>
                </div>
                </div>
              ))}
            </ul>
            </>
          );
        }
}

export default Home