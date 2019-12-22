import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
        item: [],
        isLoaded: false
      }
    }
    
    componentDidMount() {

      fetch('https://github.com/artsy/metaphysics/blob/master/_schema.graphql') //im facing problem with this url
          .then(res => res.json())
          .then(json => {
            this.setState({
                isLoaded: true,
                items: json,
            })
          });
    }


   render() {

       var { isLoaded, items } = this.state;

       if (!isLoaded) {
         return <div>Loading...</div>;
       }
      
       else {
       
      
   return (
    <div className="App">
        
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} | {item.artists}
            </li>
          ))}
        </ul>

    </div>
      );
   }
}


}
export default App;