import React from  "react";
import './index.scss';

import historyImage from "../../img/history.jpg";
import logo from "../../img/logo.svg";
import userIcon from "../../img/user-icon.svg";

class CurrentSubject extends  React.Component<any, any> {

    render() {

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
                <div className="class_button">8A</div>
            </header>

            <div className="subject">
                <h1>История</h1>
                <p id="cabinet">304 кабинет</p>
            </div>

            <div className="teacher">
                <img src={userIcon} alt="user-icon"/>
                <p id="name">Маргарита Леонидовна</p>
            </div>

        </div>
    }
}

export default  CurrentSubject;