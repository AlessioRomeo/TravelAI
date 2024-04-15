import React from 'react';
import styles from './page.module.scss';
import Link from "next/link";
import ActionButtons from "@/app/itinerary/(components)/ActionButtons";
import Day from "@/app/itinerary/(components)/Day";

function Page() {
    return (
        <main className={styles.main}>
            <nav>
                <Link href={"/auth/login"}>ALESSIO ROMEO</Link>
            </nav>
            <div className={styles.container}>
                <Day date={"04/13/2024"}/>
                <Day date={"04/13/2024"}/>
            </div>
            <ActionButtons/>
        </main>
    );
}

export default Page;