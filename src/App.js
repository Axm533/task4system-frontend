import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import ListUsers from './components/ListUsers';
import LoadFile from './components/LoadFile';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component {
    render() {
        return <div>
            <Router>
                <div className='container'>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={ListUsers} />
                        <Route exact path="/userlist" component={ListUsers} />
                        <Route exact path="/loadfile" component={LoadFile} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        </div>
    }
}
export default App;
