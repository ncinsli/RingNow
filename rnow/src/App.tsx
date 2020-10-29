import React from "react";
import CurrentSubject from "./components/current_subject/current_subject";
import "./main.css";

class App extends React.Component{
    render(){
        return(
            <React.Fragment>
                <CurrentSubject/>
            </React.Fragment>
        );
    }
}

export default App;