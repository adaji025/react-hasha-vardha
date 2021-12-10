import React, { Component } from "react";

export default class Login extends Component {
    constructor() {
        super()

        this.state = {
            email: "",
            password: "",
            message: ""
        }
    }
    handleLogin = async () => {
        // console.log(this.state)
        const response = await fetch(`http://localhost:5000/users?email=${this.state.email}&password=${this.state.password}`, {method: "GET"})
        const body = await response.json()
        console.log(body)
        if(body.length > 0) {
            this.setState({
                message: (<div className="text-success">Login Successful</div>)
            })
        }else {
            this.setState({
                message:( <div className="text-danger"> Invalid Login! please try again</div>)
            })
        }
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <div>
                                <h4 className="border-bottom mt-5 p-2">Login</h4>

                                <div className="row my-2">
                                    <label htmlFor="email" className="col-sm-3">Email</label>
                                    <div className="col-md-6">
                                        <input type="email" className="form-control py-3" value={this.state.email}
                                            onChange={(e) => {
                                                this.setState({ email: e.target.value });
                                                console.log(this.state.email)
                                            }} />
                                    </div>
                                </div>
                                <div className="row my-2">
                                    <label htmlFor="password" className="col-sm-3">Password</label>
                                    <div className="col-md-6">
                                        <input type="password" className="form-control py-3" value={this.state.password}
                                            onChange={(e) => {
                                                this.setState({ password: e.target.value });
                                                console.log(this.state.password)
                                            }} />
                                    </div>
                                </div>
                                <div className="d-flex text-end">
                                    {this.state.message}
                                    <button className="btn btn-success px-4 btn-lg mx-3" onClick={this.handleLogin} >Login</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}