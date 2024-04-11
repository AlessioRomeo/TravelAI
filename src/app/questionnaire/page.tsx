import React from 'react';
import styles from "./page.module.scss";
import Link from "next/link";

function Page() {
    return (
        <main className={styles.main}>
            <nav>
                <Link href={"/auth/login"}>ALESSIO ROMEO</Link>
            </nav>
            <form className={styles.questionnaire}>
                <div className={styles.question}>
                    <h2>1. Where are you travelling to?</h2>
                    <input type="text"/>
                </div>
                <div className={styles.question}>
                    <h2>2. What season are you planning on going?</h2>
                    <input type="text"/>
                </div>
                <div className={styles.question}>
                    <h2>3. What is your top three favorite hobbies?</h2>
                    <input type="text"/>
                </div>
                <div className={styles.question}>
                    <h2>4. Do you like to do active or chill activities?</h2>
                    <input type="text"/>
                </div>
                <div className={styles.question}>
                    <h2>5. Are you interested by history, art, etc?</h2>
                    <input type="text"/>
                </div>
                <div className={styles.question}>
                    <h2>6. Do you prefer walking or use transportation?</h2>
                    <input type="text"/>
                </div>
                <button>SUBMIT</button>
            </form>
        </main>
    );
}

export default Page;