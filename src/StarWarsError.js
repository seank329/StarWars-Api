import React, { Component } from 'react'

class StarWarsError extends Component {

    constructor(props) {
        super(props);
        this.state = {
          hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
      }

    render() {

        if (this.state.hasError) {      
            return (
              <h2>Could not display requested information.</h2>
            );
          }
        return this.props.children;
    }

} 

export default StarWarsError