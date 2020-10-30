import React from "react";
import "./indec.scss";

type Props = {
    className: string;
    isActive: boolean;
    onChoose: (className: string) => void;
}


const classNames = ["7А", "7Б", "8А", "8Б", "8В", "9А", "9Б", "9В", "10А", "10Б", "10В", "11А", "11Б", "11В"];

const ChooseClass: React.FC<Props> = ({className, isActive, onChoose}) => {

    console.log(className);

    return <React.Fragment>
        <div id={isActive ? "wrapper" : "wrapperHidden"}
             onClick={() => onChoose(className)}/>


        <div className={isActive ? "chooseClass" : "chooseClass hidden"}>
            {/* Разметка внутри - разметка выбора класса */}
            <h1 style={{paddingTop: "1.75vh"}}>Выбери класс</h1>


            <div className="classGridView">

                {
                    classNames.map((e, i) => <div  onClick={() => onChoose(e)} key={e} className={`classChooseLabel ${className === e ? "active" : ""}`}>{e}</div>)
                }

            </div>
        </div>
    </React.Fragment>;
}

export default ChooseClass;