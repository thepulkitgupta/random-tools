import React from 'react';
class Counter extends React.Component
{   constructor(props)
    {
        super(props);
        this.state={value:0};
        this.incHandle=this.incHandle.bind(this);
        this.decHandle=this.decHandle.bind(this);
        this.clrHandle=this.clrHandle.bind(this);
    }

    incHandle(e)
    {
        this.setState(prevState => ({
                    value:prevState.value+1
                }
            ))       
    }

    decHandle(e)
    {
        this.setState(prevState => ({
                    value:prevState.value-1
                }
            ))       
    }

    clrHandle(e)
    {
        this.setState({
            value:0
        })
    }

    render(){
        return (
           <div className="bg-info d-flex flex-column align-items-center" style={{height:"100vh",fontSize:"15vmin"}}>
            

                <div className="mt-5" style={{height:"50vh"}}>
                        {this.state.value}
                </div>

                <div style={{height:"50vh"}} className="d-flex justify-content-center align-items-center">
                    <button onClick={this.incHandle} style={{fontSize:"8vmin"}} className="btn btn-outline-dark">+</button>
                    <button onClick={this.clrHandle} style={{fontSize:"8vmin"}} className="mx-5 btn btn-outline-dark">CLR</button>
                    <button onClick={this.decHandle} style={{fontSize:"8vmin"}} className="btn btn-outline-dark px-3">-</button>
                </div>

           </div>
        );
      }
}

export default Counter;
