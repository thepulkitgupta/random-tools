import React from 'react';

class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = { submitFlag: false, name: "", cont: "Asia", fttd: "" }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onlyForm = this.onlyForm.bind(this);
        this.finalOutput = this.finalOutput.bind(this);
    }

    handleChange(event) {

        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState(state => ({
            submitFlag: !state.submitFlag
        }))
    }

    onlyForm() {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center bg-info" style={{ height: "100vh", fontSize: "1.5em", padding: "100px" }}>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label for="name"><b>Name</b></label>
                        <input className="form-control form-control-lg" type="text" name="name" autoComplete="off" placeholder="Name" value={this.state.name} onChange={this.handleChange} required />

                    </div>
                    <div className="form-group">
                        <label for="cont"><b>Continent</b></label>
                        <select className="form-control form-control-lg" name="cont" value={this.state.cont} onChange={this.handleChange} required>
                            <option value="Asia">Asia</option>
                            <option value="Africa">Africa</option>
                            <option value="North America">North America</option>
                            <option value="South America">South America</option>
                            <option value="Antartica">Antartica</option>
                            <option value="Europe">Europe</option>
                            <option value="Australia">Australia</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="fttd"><b>Favorite Thing To Do</b></label>
                        <textarea wrap="hard" className="form-control form-control-lg" rows="4" placeholder="drink beer or watch movies" value={this.state.fttd} name="fttd" onChange={this.handleChange} required />

                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-lg btn-success mt-2">Submit</button>
                    </div>
                </form>
            </div>
        )
    }

    finalOutput() {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center bg-info p-1" style={{ height: "100vh", fontSize: "1.5em" }}>
                <ul className="list-group">
                    <li className="list-group-item list-group-item-success">Hello, <b>{this.state.name}</b> </li>
                    <li className="list-group-item list-group-item-danger">You live in <b>{this.state.cont} </b></li>
                    <li className="list-group-item list-group-item-primary" style={{ wordBreak: 'break-word' }}>You like to <b>{this.state.fttd}</b> </li>
                </ul>
                <button className="btn btn-danger btn-lg mt-2" onClick={this.handleSubmit}>Refill</button>
            </div>

        )
    }

    render() {

        if (!this.state.submitFlag) { return <this.onlyForm />; }
        else { return <this.finalOutput /> };
    }
}

export default Forms;


