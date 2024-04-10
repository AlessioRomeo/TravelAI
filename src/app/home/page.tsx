import React from 'react';
import styles from './page.module.scss';
import Link from "next/link";
import ItineraryItem from "@/app/home/(components)/ItineraryItem";

function Page() {
    return (
        <main className={styles.main}>
            <nav>
                <Link href={"/auth/login"}>ALESSIO ROMEO</Link>
            </nav>
            <div className={styles.history}>
                <ItineraryItem number={1} location={"New York"}/>
                <ItineraryItem number={2} location={"Italy"}/>
                <ItineraryItem number={3} location={"Las Vegas"}/>
                <ItineraryItem number={4} location={"France"}/>
                <ItineraryItem number={5} location={"Spain"}/>
            </div>
            <div className={styles.generate}>
                <Link href={"/questionnaire"}>START NEW ITINERARY</Link>
            </div>
        </main>
    );
}

export default Page;