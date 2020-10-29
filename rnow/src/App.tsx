import React from "react";
import CurrentSubject from "./components/current_subject/current_subject";
import TimeTable from "./components/time_table/time_table";
import "./main.css";

class App extends React.Component{
    render(){
        return(
            <React.Fragment>
                <CurrentSubject/>
                <TimeTable/>
            </React.Fragment>
        );
    }
}

export default App;