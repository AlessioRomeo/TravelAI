import React from 'react';
import styles from './itineraryItem.module.scss';
import {FaTrashCan} from "react-icons/fa6";

function ItineraryItem({number, location}:{number:number, location:string}) {
    return (
        <div className={styles.container}>
            <div className={styles.label}>
                <h2>ITINERARY {number}</h2>
                <h1>{location}</h1>
            </div>
            <button>
                <FaTrashCan/>
            </button>
        </div>
    );
}

export default ItineraryItem;