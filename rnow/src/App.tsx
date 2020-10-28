import React from "react";
import "./style.css";
import historyImage from "./img/history.jpg";
import { url } from "inspector";
class App extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className = "UpperDIV">
                    <div className = "subjectPic" style = {{backgroundImage : `url(${historyImage})`}}>
                        <h1 className = "title">Ring Now</h1> 
                        <h2 className = "nowSubj"><b>Сейчас идёт:</b> история</h2>
                        <h2 className = "subjInfo">кабинет: 205</h2>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default App;