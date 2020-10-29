import React from "react";
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


    return <div className="current_subject" style={styles.current_subject}>
        <header>
            <div className="logo">
                <img src={logo} alt="ring now logo" className="logo"/>
                <h2 id="logo-text">Ring Now</h2>
            </div>
            <div className="class_button">{className}</div>
        </header>

        <div className="subject">
            <h1>{lesson.title}</h1>
            <p id="cabinet">{lesson.cabinet} кабинет</p>
        </div>

        <div className="teacher">
            <img src={userIcon} alt="user-icon"/>
            <p id="name">{lesson.teacher}</p>
        </div>

    </div>
}


export default CurrentSubject;