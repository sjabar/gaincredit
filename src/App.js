import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {Row,Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {SearchBar} from './SearchBar';
import {SortBar} from './SortBar';
class Header extends React.Component {
  render() {
     return (
        <div>
           <nav className="navbar navbar-light bg-light">
            <span style={{width:'100%'}} className="text-center navbar-brand mb-0">GC Employee Portal</span>
            </nav>
        </div>
     );
  }
}
class Content extends React.Component {
  render() {
     return (
          <div className="container-fluid">
             <div className="row justify-content-center">
               <div className="col-sm-6" > <Form>
                     <Form.Row>
                     <Col sm="3">
                     <button type="button" className="btn btn-link">Add Employees</button>
                        </Col>                        
                        <Col sm="4">
                           <SearchBar/>
                        </Col>
                        <Col sm="5">
                           <SortBar/>
                        </Col>
                     </Form.Row>
                     </Form></div>
            </div>
            <div className="row justify-content-center">
               <div className="col-sm-8" > 
                 <Row>
                        <Col sm="6">
                           <Card/>
                        </Col>
                        <Col sm="6">
                           <Card/>
                        </Col>
                 </Row>                     
                  </div>
            </div>
            <div className="row justify-content-center">
               <div className="col-sm-8" > 
                 <Row>
                        <Col sm="6">
                           <Card/>
                        </Col>
                        <Col sm="6">
                           <Card/>
                        </Col>
                 </Row>                     
                  </div>
            </div>
            <div className="row justify-content-center">
               <div className="col-sm-8" > 
                 <Row>
                        <Col sm="6">
                           <Card/>
                        </Col>
                        <Col sm="6">
                           <Card/>
                        </Col>
                 </Row>                     
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
            <div className="card mb-3">
            <div className="row no-gutters">
                        <div className="col-md-4">
                           <img src="..." className="card-img" alt="..."/>
                        </div>
                        <div className="col-md-6">
                           <div className="card-body">
                           <p className="card-text">ID:1234</p>
                           <p className="card-text">Name:1234</p>
                           <p className="card-text">Age:1234</p>
                           <p className="card-text">Salary:1234</p>
                           </div>
                        </div>
                        <div className="col-md-2">
                           <a href="#" class="btn btn-primary">Delete</a>
                        </div>
            </div>
</div>
      );
   }
}

export default App;
