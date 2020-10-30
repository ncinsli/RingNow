import React, { useState } from "react";
import './index.scss';

import logo from "../../img/logo.svg";
import userIcon from "../../img/user-icon.svg";
import {getCabinet, Lesson} from "../../App";
import ChooseClass from "../choose_class/сhoose_class";

type Props = {
    className: string;
    lesson: Lesson;
    onClassChanges: (className:string) => void;
}

const CurrentSubject: React.FC<Props> = ({lesson, className, onClassChanges}) => {
    const styles = {
        current_subject: {
            backgroundImage: `url(${getBg(lesson?.title)})`,
        }
    };

    const [classChoosingActive, setClassChoosingActive] = useState(false);

    return <React.Fragment> 
        <div className="current_subject" style={styles.current_subject}>
           <div className="blur">
               <header>
                   <div className="logo">
                       <img src={logo} alt="ring now logo" className="logo"/>
                       <h2 id="logo-text">Ring Now</h2>
                   </div>
                   <div className="class_button" onClick = {() => setClassChoosingActive(true)}>{className}</div>
               </header>

               <div className = "subject">
                   <h1>{lesson.title}</h1>
                   <p id="cabinet">{getCabinet(lesson.cabinet)}</p>
               </div>


               <div className = "teacher">
                   <img src={userIcon} alt="user-icon"/>
                   <p id="name">{lesson.teacher}</p>
               </div>
           </div>
        </div>

        <ChooseClass className={className} isActive={classChoosingActive} onChoose={(className1 => {
            setClassChoosingActive(false);
            onClassChanges(className1);
        }) }/>

    </React.Fragment> 

}

const getBg = (lesson: string) : string => {
// return "https://www.centrattek.ru/media/cache/01/67/0167fbd454316504924858b88e8ebf1b.jpg";
    switch (lesson) {

        case "Алгебра":
            return "https://undark.org/wp-content/uploads/2020/01/GettyImages-154932300.jpg";
        case "Геометрия":
            return "https://undark.org/wp-content/uploads/2020/01/GettyImages-154932300.jpg";
        case "Физика":
            return "https://sun9-21.userapi.com/VmLnE5-VzQuhRjMOWgs04TDaorvZm7oZHGwCLw/IhaI7QIgYRA.jpg";
        case "Химия":
            return "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        case "Русский язык":
            return "https://sun9-42.userapi.com/twN6Uug8iwlcIlr2f_aXWy2NViZT8BKXmR-qlA/e1xL-tPkjGc.jpg"
        case "Литература":
            return "https://sun9-42.userapi.com/twN6Uug8iwlcIlr2f_aXWy2NViZT8BKXmR-qlA/e1xL-tPkjGc.jpg"
        case "Информатика":
            return "https://images.unsplash.com/photo-1550645612-83f5d594b671?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        case "Физкультура":
            return "https://sun9-12.userapi.com/Ej4RmEjCGE4n-GWEjTkdnfTPWtMRIxOnb0OEdw/2mlmrGbWS4Y.jpg"
        case "История":
            return "https://images.unsplash.com/photo-1509024644558-2f56ce76c490?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
        case "Обществознание":
            return "https://images.unsplash.com/photo-1509024644558-2f56ce76c490?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
        case "Биология":
            return "https://www.science.edu/acellus/wp-content/uploads/2016/12/Biology-Gen-Honors.jpg";
        case "География":
            return  "https://natworld.info/wp-content/uploads/2019/06/Geografija-v-drevnosti-900x500.jpg";
        case "Английский язык":
            return "https://tritec-education.ru/wp-content/uploads/2015/09/english_all_stars.jpg";
        case "Музыка":
            return "https://www.classicalmusicnews.ru/wp-content/uploads/2014/03/klassicheskaya-muzyika.jpg";
        case "ИЗО":
            return "https://dom-mol.ru/wp-content/uploads/2017/01/%D0%98%D0%B7%D0%BE-%D0%BD%D0%B0-%D1%81%D0%B0%D0%B9%D1%82.jpg"
        case "ОБЖ":
            return "https://www.centrattek.ru/media/cache/01/67/0167fbd454316504924858b88e8ebf1b.jpg";
        default:
            return "https://images.unsplash.com/photo-1509024644558-2f56ce76c490?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
    }
}


export default CurrentSubject;