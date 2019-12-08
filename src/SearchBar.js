import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
export class SearchBar extends React.Component {
  render() {
     return (
         <div className="input-group">
            <input type="text" className="form-control" aria-label="Text input with dropdown button"/>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
                <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
                <div role="separator" className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Separated link</a>
                </div>
            </div>
        </div>
     );
  }
}
