import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { Navbar, Exchanges, Homepage, Cryptocurrencies, CryptoDetails, News } from "./components";
import './App.css';

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Switch>
                            <Route extact path="/">
                                <Homepage />
                            </Route>
                            <Route extact path="/exchanges">
                                <Exchanges />
                            </Route>
                            <Route extact path="/cryptocurrencies">
                                <Cryptocurrencies />
                            </Route>
                            <Route extact path="/crypto/:coinId">
                                <CryptoDetails />
                            </Route>
                            <Route extact path="/news">
                                <News />
                            </Route>
                        </Switch>
                    </div>
                </Layout>

                <div className="footer">
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                        CRYPBASE <br />
                        All rights reserved
                    </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/exchanges">Exchanges</Link>
                        <Link to="/news">News</Link>
                    </Space>
                </div>
            </div>
        </div>
    );
}

export default App