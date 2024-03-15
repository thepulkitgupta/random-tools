import React from 'react';
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true, isColor:"success"};
    this.handleClick = this.handleClick.bind(this);
    this.color="success";
    //this binding here is to make sure that the 'this' in function is the class object 'this' not the component from which it was called
  }

  handleClick(e) {
    e.preventDefault();
    //here prevState is a variable that is used to represt the prevstate of the state variable 
    //it is done to prevent async integreity problems and to make sure that updates are pereformed properly 
    this.setState( prevState => ({
      isToggleOn:!prevState.isToggleOn,
      isColor:!prevState.isToggleOn?"success":"danger"
    }))
  }

  render() {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center bg-warning" style={{height:"100vh"}}>
        <button className={"btn btn-" + this.state.isColor} onClick={this.handleClick}>
          <span style={{fontSize:"15vmin"}}>
            {this.state.isToggleOn?'ON':'OFF'}
          </span>
        </button>
      </div>
    );
  }
}

export default Toggle;