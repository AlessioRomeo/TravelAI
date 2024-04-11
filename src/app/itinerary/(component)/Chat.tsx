import React from 'react';
import styles from "@/app/itinerary/(component)/chat.module.scss";
import {BsFillSendFill} from "react-icons/bs";

function Chat() {
    return (
        <div className={styles.container}>
            <div className={styles.message}>

            </div>
            <div className={styles.inputBar}>
                <input type="text" placeholder={"Ask any question about the itinerary..."}/>
                <button>
                    <BsFillSendFill/>
                </button>
            </div>
        </div>
    );
}

export default Chat;