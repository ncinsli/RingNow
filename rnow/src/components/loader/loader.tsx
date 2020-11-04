import React from "react";
import "./index.css";

class Loader extends React.Component {
    render() {
        return <div className="loading">
            <div className="lds-ellipsis">
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
            
        </div>
    }
}

export default Loader;