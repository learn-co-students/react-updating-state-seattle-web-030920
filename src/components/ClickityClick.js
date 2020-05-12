import React from 'react';
 
class ClickityClick extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      //hasBeenClicked: false
      toggled: false
    };
  }
 
//   handleClick = () => {
//     this.setState({
//         hasBeenClicked: true
//     }, () => console.log(this.state.hasBeenClicked))    
//   };

  handleClick = () =>
  {
      this.setState(previousState => {
          return { 
              toggled: !previousState.toggled
          }
      })
  }

  render() {
    return (
      <div>
        <p>I have {this.state.toggled ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
 
export default ClickityClick;