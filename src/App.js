import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Home from "./components/home.component";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/products";
import Cart from "./components/Cart";
import Order from "./components/Order";
import AdminProducts from "./components/AdminProducts";
import AdminOrder from "./components/AdminOrder";
import AdminEdit from "./components/AdminEdit";
import AdminInsert from "./components/AdminInsert";
function App() {
  return (
    <div className="App">
    {/* <Navbar /> */}
    <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/home" component={Home} />
            <Route path="/product" component={Product} />
            <Route path="/cart" component={Cart} />
            <Route path="/order" component={Order} />
            <Route path="/admin-products" component={AdminProducts} />
            <Route path="/admin-order" component={AdminOrder} />
            <Route path="/edit" component={AdminEdit} />
            <Route path="/insert" component={AdminInsert} />
          </Switch>
    </Router> 
    </div>
  );
}

export default App;
