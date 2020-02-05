import React, { Component } from 'react';
import Search from './Search'
import StarWarsError from './StarWarsError'
import './App.css';

class App extends Component {
    
  render(){
  
      return (
        <div className="App">
          <header>
            <h1> Welcome to the Star Wars Search API</h1>
          </header>
          <StarWarsError>
              <Search />
          </StarWarsError>          
        </div>
      );

  }

}

export default App;
