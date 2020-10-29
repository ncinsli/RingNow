import React from "react";
import './index.scss';
import {Lesson, LessonTime, Time} from "../../App";

type Props = {
    lessons: Lesson[],
    times: LessonTime[],
    currentLessonIndex: number;
}

const TimeTable: React.FC<Props> = ({lessons, times, currentLessonIndex}) => {
    return <
        div className="time_table">
        <h2>Уроки</h2>
        <div className="lessons">

            <div className="time">
                {
                    lessons.map((e, i) => {
                        return <div className="time-group">
                            <p className="start_time">{_formatTime(times[i].from)}</p>
                            <p className="end_time">{_formatTime(times[i].to)}</p>
                        </div>
                    })
                }
            </div>

            <div className="divider"/>

            <div className="cards">

                {
                    lessons.map((e, i) => {
                        return <div className={`card ${i === currentLessonIndex ? "active" : ""}`}>
                            <span className="lesson">{e.title}</span>
                            <p className="teacher">{e.teacher}</p>
                            <div className="info cabinet">
                                <MapPinIcon/>
                                <p className="cabinet">{e.cabinet} кабинет</p>
                            </div>
                            <div className="info lesson_time">
                                <ClockIcon/>
                                <p className="clock">{_formatTime(times[i].from)} - {_formatTime(times[i].to)}</p>
                            </div>
                        </div>
                    })
                }


            </div>
        </div>
    </div>
}

const _formatTime = (time: Time): string => {
    let h = time.h.toString(), m = time.m.toString();
    if (h.length === 1) h = "0" + h;
    if (m.length === 1) m = "0" + m;
    return `${h}:${m}`;
};

const MapPinIcon: React.FC = () => {
    return <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M5.00008 0.166656C2.74258 0.166656 0.916748 1.99249 0.916748 4.24999C0.916748 7.31249 5.00008 11.8333 5.00008 11.8333C5.00008 11.8333 9.08342 7.31249 9.08342 4.24999C9.08342 1.99249 7.25758 0.166656 5.00008 0.166656ZM5.00008 5.70832C4.61331 5.70832 4.24238 5.55468 3.96888 5.28119C3.69539 5.0077 3.54175 4.63676 3.54175 4.24999C3.54175 3.86322 3.69539 3.49228 3.96888 3.21879C4.24238 2.9453 4.61331 2.79166 5.00008 2.79166C5.38686 2.79166 5.75779 2.9453 6.03128 3.21879C6.30477 3.49228 6.45842 3.86322 6.45842 4.24999C6.45842 4.63676 6.30477 5.0077 6.03128 5.28119C5.75779 5.55468 5.38686 5.70832 5.00008 5.70832V5.70832Z"
            fill="white"/>
    </svg>;
}

const ClockIcon: React.FC = () => {
    return <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M10 5C10 6.32608 9.47322 7.59785 8.53553 8.53553C7.59785 9.47322 6.32608 10 5 10C3.67392 10 2.40215 9.47322 1.46447 8.53553C0.526784 7.59785 0 6.32608 0 5C0 3.67392 0.526784 2.40215 1.46447 1.46447C2.40215 0.526784 3.67392 0 5 0C6.32608 0 7.59785 0.526784 8.53553 1.46447C9.47322 2.40215 10 3.67392 10 5V5ZM5 2.1875C5 2.10462 4.96708 2.02513 4.90847 1.96653C4.84987 1.90792 4.77038 1.875 4.6875 1.875C4.60462 1.875 4.52513 1.90792 4.46653 1.96653C4.40792 2.02513 4.375 2.10462 4.375 2.1875V5.625C4.37502 5.68008 4.38959 5.73418 4.41725 5.78182C4.44491 5.82945 4.48467 5.86893 4.5325 5.89625L6.72 7.14625C6.79179 7.18505 6.8759 7.19423 6.95437 7.17183C7.03283 7.14943 7.09942 7.09722 7.13991 7.02637C7.18039 6.95553 7.19156 6.87165 7.17102 6.79268C7.15048 6.71371 7.09987 6.6459 7.03 6.60375L5 5.44375V2.1875Z"
              fill="white"/>
    </svg>;
}

export default TimeTable;