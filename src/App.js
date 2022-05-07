import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { Navbar, Homepage, Cryptocurrencies, CryptoDetails, News } from "./components";
import './App.css';

function year(){
    return new Date().getFullYear();
}


const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Routes>
                            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
                            {/* <Route path="/exchanges" element={<Exchanges />} /> */}
                            <Route path="/news" element={<News />} />
                            <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                            <Route path="/" element={<Homepage />} />
                        </Routes>
                    </div>
                </Layout>

                <div className="footer">
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                        CRYPBASE © {year()}
                    </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                        <Link to="/news">News</Link>
                    </Space>
                </div>
            </div>
        </div>
    );
}

export default App