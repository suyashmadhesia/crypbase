import React from "react";
import { Provider } from 'react-redux';
import ReactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./app/store";

import App from "./App";
import 'antd/dist/antd.css';

ReactDom.render(<Router>
    <Provider store={store}>
        <App />
    </Provider>
</Router>, document.getElementById('root'));