import React from 'react';

class Tables extends React.Component{
    
    constructor(props)
    {
        super(props);
        this.state={mul:10}
        this.incHandle=this.incHandle.bind(this);
        this.decHandle=this.decHandle.bind(this);
    }

    incHandle()
    {
        this.setState(state=>({
            mul:state.mul+  1
        }))
    }

    decHandle()
    {
        this.setState(state=>({
            mul:state.mul-1
        }))
    }

    render()
    {   let mul=this.state.mul;
        let num=[1,2,3,4,5,6,7,8,9,10];
        return(
           <div style={{height:"100vh"}} className="d-flex flex-column justify-content-center bg-success align-items-center" >
               {/* table content */}
               <div style={{fontSize:"2em"}} className="m-2 text-center" >
                    {num.map((x)=><div key={mul+""+x} >{mul} x {x} =  {x*mul}</div>)}
                </div>
               {/* table value increase decrease */}
               <div className="d-flex justify-content-center">
                    <button style={{fontSize:"2em"}} onClick={this.incHandle} className="btn btn-dark mx-1 ">+</button>
                    <button style={{fontSize:"2em"}}  onClick={this.decHandle} className="btn btn-dark mx-1 ">-</button>
                </div>            
               
           </div>
        )
    }

}

export default Tables;
