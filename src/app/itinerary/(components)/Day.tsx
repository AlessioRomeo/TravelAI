import React from 'react';
import styles from './day.module.scss';
import ActivityItem from "@/app/itinerary/(components)/ActivityItem";
import TransitItem from "@/app/itinerary/(components)/TransitItem";

function Day({date}:{date: string}) {
    return (
        <div className={styles.container}>
            <h1>Date: {date}</h1>
            <ActivityItem name={"Empire State Building Tour"}
                          description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequuntur incidunt saepe"}
                          start={"12:30 PM"}
                          end={"1:45 PM"}
            />
            <TransitItem name={"Subway"}
                         description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequuntur incidunt saepe"}
                         start={"12:30 PM"}
                         end={"1:45 PM"}
            />
            <ActivityItem name={"Empire State Building Tour"}
                          description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequuntur incidunt saepe"}
                          start={"12:30 PM"}
                          end={"1:45 PM"}
            />
        </div>
    );
}

export default Day;