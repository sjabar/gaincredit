import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {SearchBar} from './SearchBar';
class Header extends React.Component {
  render() {
     return (
        <div>
           <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">Classic Music Library</span>
            </nav>
        </div>
     );
  }
}
class Content extends React.Component {
  render() {
     return (
          <div className="container-fluid">
            <div className="row">
            <div className="col-sm-12">
                <h2>Music Online: Classical Music Library</h2>
               <div className="viewtable">
                  <div className="left-content">
                  Level 2: .col-8 .col-sm-6
                  </div>
                  <div className="right-content">
                  <SearchBar/>
                  </div>
               </div>
            </div>
            </div>
         </div>
     );
  }
}

class App extends React.Component {
  render() {
     return (
        <div>
           <Header/>
           <Content/>
        </div>
     );
  }
}
class Card extends React.Component{
   render(){
      return (
         <div>
            <div className="card" style="width: 18rem;">
            <img className="card-img-top" src=".../100px180/" alt="Card image cap"/>
               <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
               </div>
            </div>
         </div>
      );
   }
}

export default App;
