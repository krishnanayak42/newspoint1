import './App.css';
import React, { Component } from 'react'
import NavBar from './Componants/Navbar';
import News from './Componants/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 5;
  api="08b63f5c7221412abe7bba34e2bc4abd";
  state={
     progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

 

  render() {
    return (
      <div>
        <Router>
        <NavBar/> 
        <LoadingBar hight= {3}color="#f11946" progress={this.state.progress}  />
        <Switch>
          <Route exact path="/"><News setProgress={this.setProgress}  key="general" pageSize={this.pageSize} country="us"  apikey ={this.api}  category="general"/></Route> 
          <Route exact path="/business"><News setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in"  apikey ={this.api} category="business"/></Route> 
          <Route exact path="/entertainment"><News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in"  apikey ={this.api} category="entertainment"/></Route> 
          <Route exact path="/general"><News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in"  apikey ={this.api} category="general"/></Route> 
          <Route exact path="/health"><News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="in"  apikey ={this.api} category="health"/></Route> 
          <Route exact path="/science"><News setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="in"  apikey ={this.api} category="science"/></Route> 
          <Route exact path="/sports"><News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="in"  apikey ={this.api} category="sports"/></Route> 
          <Route exact path="/technology"><News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="in"  apikey ={this.api} category="technology"/></Route> 
          
        </Switch>
        </Router>
      </div>
    )
  }
}