import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom"
import { ResultContextProvider } from "./context/ResultContextProvider";
import './css/global.css';
import App from './App';

ReactDOM.render(<ResultContextProvider><Router><App /></Router></ResultContextProvider>, document.getElementById('root'));