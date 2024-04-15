import React from 'react';
import styles from "@/app/itinerary/(components)/actionButtons.module.scss";

function ActionButtons() {
    return (
        <div className={styles.container}>
            <button className={styles.regenerate}>Generate Again</button>
            <button className={styles.save}>Save</button>
            <button className={styles.cancel}>Cancel</button>
        </div>
    );
}

export default ActionButtons;