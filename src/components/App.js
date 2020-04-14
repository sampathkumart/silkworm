import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import Silk from './silks/silk';
import SilkTwo from './silks/silkTwo';
import SilkThree from './silks/silkThree';
import Header from './header'

const App = () => {
    return (
        <div className="container">
            <BrowserRouter>
                <Header />
                <React.Fragment>
                    <Route path="/" exact component={Silk} />
                    <Route path="/user" component={SilkTwo} />
                    <Route path="/sales" component={SilkThree} />
                </React.Fragment>
            </BrowserRouter>
        </div>
    )
}

export default App;
