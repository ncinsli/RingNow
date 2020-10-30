import React, { useState } from "react";
import './index.scss';

import historyImage from "../../img/history.jpg";
import logo from "../../img/logo.svg";
import userIcon from "../../img/user-icon.svg";
import {Lesson} from "../../App";
import ChooseClass from "../choose_class/сhoose_class";

type Props = {
    className: string;
    lesson: Lesson;
    onClassChanges: (className:string) => void;
}

const CurrentSubject: React.FC<Props> = ({lesson, className, onClassChanges}) => {
    const styles = {
        current_subject: {
            backgroundImage: `url(${historyImage})`,
        }
    };

    const [classChoosingActive, setClassChoosingActive] = useState(false);

    return <React.Fragment> 
        <div className="current_subject" style={styles.current_subject}>
            <header>
                <div className="logo">
                    <img src={logo} alt="ring now logo" className="logo"/>
                    <h2 id="logo-text">Ring Now</h2>
                </div>
                <div className="class_button" onClick = {() => setClassChoosingActive(true)}>{className}</div>
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

        <ChooseClass className={className} isActive={classChoosingActive} onChoose={(className1 => {
            setClassChoosingActive(false);
            onClassChanges(className1);
        }) }/>

    </React.Fragment> 

}


export default CurrentSubject;