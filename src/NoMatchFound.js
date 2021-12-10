import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NoMatchFound extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center align-items-center no-match-height">
                <div>
                    <h1 className="text-center">No Match Found</h1>
                    <Link to="/">
                        <h4 className="text-center">Go back to Home</h4>
                    </Link>
                </div>
            </div>
        )
    }
}