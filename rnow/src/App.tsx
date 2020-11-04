import React, {useEffect, useState} from "react";
import CurrentSubject from "./components/current_subject/current_subject";
import TimeTable from "./components/time_table/time_table";
import "./main.css";
import Loader from "./components/loader/loader";
import axios from "axios";


const App: React.FC = () => {

    const [className, setClassName] = useState("8А");
    const [loading, setLoading] = useState(true);
    const [currentLesson, setCurrentLesson] = useState(0);
    const [lessons, setLessons] = useState<Lesson[]>([]);
    const [lessonsTime, setLessonsTime] = useState<LessonTime[]>([]);

    const classNamesToEng = {
        "7A": "7A",
        "7Б": "7B",
        "8А": "8A",
        "8Б": "8B",
        "8В": "8C",
        "9А": "9A",
        "9Б": "9B",
        "9В": "9C",
        "10А": "10A",
        "10Б": "10B",
        "10В": "10C",
        "11А": "11A",
        "11Б": "11B",
        "11В": "11C",
    };

    const fetchLessons = (className: string) => {

        // @ts-ignore
        console.log(`http://ring-now.tk/class/${classNamesToEng[className]}`);

        // @ts-ignore
        axios.get(`http://ring-now.tk/class/${classNamesToEng[className]}`)
            .then((res) => {
                console.log(res.data);
                if (res.data && res.data.code === "fail") return ;
                const date = new Date().getDay();
                setLessons(res.data[_mapIndexToDay[date]]);
                const [lessonIndex, lessonsTime] = _calcCurrentLesson(res.data[_mapIndexToDay[date]]);
                setCurrentLesson(lessonIndex);
                setLessonsTime(lessonsTime);
                setLoading(false);
            })
            .catch((e) => {

            })
    }


    useEffect(() => {
        fetchLessons(className);
    }, []);



    return <React.Fragment>
        {
            !loading
                ? <React.Fragment>
                    <CurrentSubject onClassChanges={(className1 ) => {
                        setClassName(className1);
                        fetchLessons(className1);
                    }} className={className} lesson={lessons[currentLesson]}/>
                    <TimeTable lessons={lessons} times={lessonsTime} currentLessonIndex={currentLesson}/>
                </React.Fragment>
                : <Loader/>
        }
    </React.Fragment>

}

const _mapIndexToDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

export const _calcCurrentLesson = (lessons: Lesson[]): [number, LessonTime[]] => {
    let lessonIndex = lessons.length - 1;
    const now = {h: new Date().getHours(), m: new Date().getMinutes()};
    let start = {h: 9, m: 0}, end = {h: 9, m: 45};
    const lessonsTimes_: LessonTime[] = [];

    for (let i = 0; i < lessons.length; i++) {

        if (_isBetween(start, end, now)) {
            lessonIndex = i;
        }

        lessonsTimes_.push({
            from: start,
            to: end,
        });

        // if (i == 0) {
        //     start = _add(start, 55);
        //     end = _add(end, 45);
        // } else
        if (i === 2 || i === 3) {
            start = _add(start, 65)
            end = _add(end, 65)
        } else {
            start = _add(start, 55)
            end = _add(end, 55)
        }
    }

    if (lessonIndex > lessons.length) lessonIndex = lessonIndex - 1;

    return [lessonIndex, lessonsTimes_];
};
const _add = (time: Time, add: number): Time => {
    const min = time.h * 60 + time.m + add;
    return {h: Math.trunc(min / 60), m: min % 60};
}

const _isBetween = (time1: Time, time2: Time, time3: Time): boolean => {
    return time1.h <= time3.h && time2.h >= time3.h && time1.m <= time3.m && time2.m >= time3.m;
}



export const getCabinet = (cab: string) : string => {
    if (cab === "0") return "Спортзал";
    return `${cab} кабинет`;
}

export type Lesson = {
    title: string;
    cabinet: string;
    teacher: string;
};

export type Time = {
    h: number;
    m: number;
}

export type LessonTime = {
    from: Time;
    to: Time;
}


export default App;