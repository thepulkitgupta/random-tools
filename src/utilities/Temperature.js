import React from 'react';
class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onTemperatureChange(event.target.value);//passing back the temperature value to the calculator
    }
    render() {
        let temp = this.props.temp;//try const here for both
        let scale = this.props.scale;
        let placevalue = scale === "c" ? "celsius" : (scale === "k" ? "kelvin" : "fahrenheit");
        return (
            <div>
                <div className="input-group">
                    <input className="form-control form-control-lg  p-1" type="text" placeholder={placevalue} value={temp} onChange={this.handleChange} autoFocus={scale === 'c' ? true : false} />
                    <span className="input-group-text">{'\u00B0' + scale.toUpperCase()}</span>
                </div>
            </div>
        )
    }
}

class Temperature extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: "",
            scale: "c"
        }
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.handleKelvinChange = this.handleKelvinChange.bind(this);
    }

    handleCelsiusChange(temps) {
        this.setState({ scale: 'c', temp: temps })
    }
    handleFahrenheitChange(temps) {
        this.setState({ scale: 'f', temp: temps })
    }
    handleKelvinChange(temps) {
        this.setState({ scale: 'k', temp: temps });
    }
    convertTemp(value, scaleFrom, scaleTo) {
        //if scale is same for ex. Celsius to Celsius no need to convert 
        if (value === "")
            return "";
        else if (scaleFrom === scaleTo)
            return value;
        //parse the value to convert string to floating point number
        else if (isNaN(value) === false) {
            let temp = parseFloat(value);
            let ans;
            //celsius cases
            if (scaleFrom === 'c' && scaleTo === "f")
                ans = (temp * 9 / 5) + 32;
            else if (scaleFrom === "c" && scaleTo === "k")
                ans = 273 + temp;
            //fahrenheit cases
            else if (scaleFrom === 'f' && scaleTo === "c")
                ans = (temp - 32) * 5 / 9; //fahrenheit calculation
            else if (scaleFrom === "f" && scaleTo === "k")
                ans = (temp - 32) * 5 / 9 + 273;
            //kelvin cases
            else if (scaleFrom === "k" && scaleTo === 'c')
                ans = temp - 273;
            else if (scaleFrom === "k" && scaleTo === 'f')
                ans = ((temp - 273) * 9 / 5 + 32);

            return ans.toPrecision(5);
        }
        else
            return "Wrong";
    }
    render() {
        let displayErrorFlag = false;
        let displayErrorMessage = "";
        let temp = this.state.temp;
        let scale = this.state.scale;
        let celsius = this.convertTemp(temp, scale, 'c')//change to c if temp in f
        let fahrenheit = this.convertTemp(temp, scale, 'f')//change to f if temp in c
        let kelvin = this.convertTemp(temp, scale, 'k');
        //to check for errors.
        if (kelvin < 0) {
            displayErrorFlag = true;
            displayErrorMessage = "Beyond Absolute Zero!";
            scale === "c" ? kelvin = fahrenheit = "" : scale === "k" ? celsius = fahrenheit = "" : celsius = kelvin = "";
        }
        else if (kelvin === "Wrong" || celsius === "Wrong" || fahrenheit === "Wrong") {
            displayErrorFlag = true;
            displayErrorMessage = "Wrong Temperature!";
            scale === "c" ? kelvin = fahrenheit = "" : scale === "k" ? celsius = fahrenheit = "" : celsius = kelvin = "";
        }
        return (
            <div className="d-flex flex-column justify-content-center align-items-center bg-warning text-dark" style={{ height: "100vh", fontFamily: 'Rakkas', fontSize: "5vmax" }}>
                <div >KELVIN  </div>
                <TemperatureInput temp={kelvin} onTemperatureChange={this.handleKelvinChange} scale='k' />
                <div className="mt-4">CELSIUS</div>
                <TemperatureInput temp={celsius} onTemperatureChange={this.handleCelsiusChange} scale='c' />
                <div className="mt-4">FAHRENHEIT</div>
                <TemperatureInput temp={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} scale='f' />
                <div className=" text-center text-danger px-2 mt-5">{displayErrorFlag === true ? displayErrorMessage : null}</div>
            </div>
        )
    }
}

export default Temperature;