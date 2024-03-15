import React from 'react';

class Colors extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={fcolor:"black",red:false,rstate:false,blue:false,bstate:false,yellow:false,ystate:false};
        this.handleBlue=this.handleBlue.bind(this);
        this.handleRed=this.handleRed.bind(this);
        this.handleYellow=this.handleYellow.bind(this);
    }

    handleRed()
    {
        this.setState(prevState=>(
            {
                red:!prevState.red,
                rstate:!prevState.rstate
            }
        ))
    }

    handleBlue()
    {
        this.setState(prevState=>(
            {
                blue:!prevState.blue,
                bstate:!prevState.bstate
            }
        ))
    }

    handleYellow()
    {
        this.setState(prevState=>(
            {
                yellow:!prevState.yellow,
                ystate:!prevState.ystate

            }
        ))
    }

    
    render()
    {   
        let clr,cvalue;
        let red=this.state.red;
        let blue=this.state.blue;
        let yellow=this.state.yellow;
        //triplecolors
        if(red && blue && yellow) 
            {clr="white"; cvalue="White"}
        //doublecolors
        else if(red && blue)
           { clr="violet"; cvalue="Purple"}
        else if(red && yellow)
           { clr="orange"; cvalue="Orange"}
        else if(yellow && blue)
            {clr="green"; cvalue="Green"}
        //singlecolors
        else if(red )
           { clr="red"; cvalue="Red"}
        else if(blue)
           { clr="blue";  cvalue="Blue"}
        else if(yellow)
           { clr="yellow"; cvalue="Yellow"}
        else 
            {clr="black"; cvalue="Black"}

        return (
            <div className="d-flex justify-content-between" style={{height:"100vh"}}>
                <div className="d-flex flex-column justify-content-around align-items-center bg-dark w-50">
                   
                    <div>
                        <button style={{fontSize:"8vmin"}} className={(this.state.rstate?"btn btn-danger":"btn btn-light") }  onClick={this.handleRed} >Red</button>
                    </div>

                    <div>
                        <button style={{fontSize:"8vmin"}} className={(this.state.bstate?" btn btn-primary ":"btn btn-light")  } onClick={this.handleBlue} >Blue</button>
                    </div>
                    <div>
                        <button style={{fontSize:"8vmin"}} className={(this.state.ystate?"btn btn-warning":" btn btn-light ")  } onClick={this.handleYellow} >Yellow</button>
                    </div>

                </div>

                <div className="w-50" style={{backgroundColor:clr}}>
                    <div className="d-flex justify-content-center align-items-center text-white" style={{height:"100%"}}>
                        <span style={{fontSize:"10vmin",color: cvalue!=="Black"?"black":"white" }}>{cvalue}</span>
                    </div>
                </div>
            </div>
        )

        

    }
}

export default Colors;
