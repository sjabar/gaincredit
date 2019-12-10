import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {Row,Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {SearchBar} from './SearchBar';
import {SortBar} from './SortBar';
import axios from 'axios';
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
   constructor(props){
      super(props)
      this.state = {
        employees: []
      }
    }
    async componentDidMount() {
      axios({
         url: 'http://dummy.restapiexample.com/api/v1/employees',
         method: 'get',
         
      })
      .then(response => {
         console.log(response)
         this.setState({employees:response.data});
      }) 
      .catch(err => {
         console.log(err);
      });
    }
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
                        {this.state.employees.map((employee, index) => {                           
                        return (<div key={index} className="col-sm-5" >
                           <Card value={employee}/>
                        </div>)
                        })}  
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
            <div className="card mb-3" >
            <div className="row no-gutters">
                        <div className="col-md-4">
                           <img src={this.props.value.profile_image} className="card-img" alt="Profile Picture"/>
                        </div>
                        <div className="col-md-6">
                           <div className="card-body">
                           <p className="card-text">ID:{this.props.value.employee_id}</p>
                           <p className="card-text">Name:{this.props.value.employee_name}</p>
                           <p className="card-text">Age:{this.props.value.employee_age}</p>
                           <p className="card-text">Salary:{this.props.value.employee_salary}</p>
                           </div>
                        </div>
                        <div className="col-md-2">
                           <a href="#" className="btn btn-primary">Delete</a>
                        </div>
            </div>
</div>
      );
   }
}

export default App;
