import React from 'react';
import styles from './itineraryDay.module.scss';

function ItineraryDay({day, morning, afternoon, evening}: {day: number, morning: string, afternoon: string, evening: string}) {
    return (
        <div className={styles.container}>
            <div>
                <h1>DAY {day}</h1>
            </div>
            <div>
                <span>
                    <b>MORNING:</b> {morning}
                </span>
                <span>
                    <b>AFTERNOON:</b> {afternoon}
                </span>
                <span>
                    <b>EVENING:</b> {evening}
                </span>
            </div>
        </div>
    );
}

export default ItineraryDay;