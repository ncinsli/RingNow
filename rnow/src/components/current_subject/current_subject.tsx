import React, { useState } from "react";
import './index.scss';

import historyImage from "../../img/history.jpg";
import logo from "../../img/logo.svg";
import userIcon from "../../img/user-icon.svg";
import {observer} from "mobx-react";
import {Lesson} from "../../App";

type Props = {
    className: string;
    lesson: Lesson;
}

const CurrentSubject: React.FC<Props> = ({lesson, className}) => {
    const styles = {
        current_subject: {
            backgroundImage: `url(${historyImage})`,
        }
    };

    const [classChoosingActive, setClassChoosing] = useState(false);

    let state = {
      classChoosingActive : false,
      classChoosed : "8A"   
    };

    return <React.Fragment> 
        <div className="current_subject" style={styles.current_subject}>
            <header>
                <div className="logo">
                    <img src={logo} alt="ring now logo" className="logo"/>
                    <h2 id="logo-text">Ring Now</h2>
                </div>
                <div className="class_button" onClick = {() => setClassChoosing(true)}>{className}</div>
            </header>

            <div className = "subject">
                <h1>{lesson.title}</h1>
                <p id="cabinet">{lesson.cabinet} кабинет</p>
            </div>

            
            <div className = "teacher">
                <img src={userIcon} alt="user-icon"/>
                <p id="name">{lesson.teacher}</p>
            </div>
        </div>

        <div id = { classChoosingActive ? "wrapper" : "wrapperHidden"} 
            onClick = {() => setClassChoosing(false)}> </div>
        <div className = { classChoosingActive? "chooseClass" : "chooseClassHidden"}>
            {/* Разметка внутри - разметка выбора класса */}
            <h1 style = {{paddingTop: "1.75vh"}}>Выбери класс</h1>
            <div id = "classGridView">
                <div className = "classChooseLabel">7A</div> <div className = "classChooseLabel">7Б</div>        
                <div className = "classChooseLabel">8A</div> <div className = "classChooseLabel">8Б</div>                
                <div className = "classChooseLabel">8B</div> <div className = "classChooseLabel">9A</div>                
                <div className = "classChooseLabel">9Б</div> <div className = "classChooseLabel">9В</div>   
                <div className = "classChooseLabel">10А</div> <div className = "classChooseLabel">10Б</div>
                <div className = "classChooseLabel">10В</div> <div className = "classChooseLabel">11А</div> 
                <div className = "classChooseLabel">11Б</div> <div className = "classChooseLabel">11В</div>                                                            
            </div>
        </div>
    </React.Fragment> 

}


export default CurrentSubject;