import {action, observable} from "mobx";
import axios from "axios";

class Controller {

    @observable className: string = "8A";
    @observable loading: boolean = true;
    @observable currentLesson: number = 0;
    @observable lessons: Lesson[] = [];

    private _mapIndexToDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    public fetchLessons = async (): Promise<void> => {
        if (!this.loading) this.loading = true;

        await action(async () => {
            this.loading = false;
            this.lessons = await this._fetchLessons(this.className).catch(() => []);
            this.currentLesson = this._calcCurrentLesson(this.lessons);
        })();
    }

    private _fetchLessons = async (className: string): Promise<Lesson[]> => {
        const data = await axios.get(`https://ring-now.tk/class/${className}`)
            .then((res) => res.data)
            .catch((e) => e.responce);

        const dayIndex: number = new Date().getDay();
        return data[this._mapIndexToDay[dayIndex]];
    };

    private _calcCurrentLesson = (lessons: Lesson[]): number => {
        const now = {h: new Date().getHours(), m: new Date().getMinutes()};
        let start = {h: 9, m: 0}, end = {h: 9, m: 45};

        for (let i = 0; i < lessons.length; i++) {

            if (this._isBetween(start, end, now)) {
                return i;
            }

            if (i == 0) {
                start = this._add(start, 45);
                end = this._add(end, 45);
            } else if (i == 2 || i == 3) {
                start = this._add(start, 65)
                end = this._add(end, 65)
            } else {
                start = this._add(start, 55)
                end = this._add(end, 55)
            }
        }

        return lessons.length - 1;
    };

    private _add = (time: Time, add: number): Time => {
        const min = time.h * 60 + time.m + add;
        return {h: Math.trunc(min / 60), m: min % 60};
    }

    private _isBetween = (time1: Time, time2: Time, time3: Time): boolean => {
        return time1.h <= time3.h && time2.h >= time3.h && time1.m <= time3.m && time2.m >= time3.m;
    }
}

export type Lesson = {
    name: string;
    cabinet: number;
    teacherName: string;
};

type Time = {
    h: number;
    m: number;
}

export default new Controller();