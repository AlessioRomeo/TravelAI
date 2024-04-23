'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from "./page.module.scss";
import Link from "next/link";

function Page() {
    const [formData, setFormData] = useState({
        destination: "New York",
        season: "",
        hobbies: "handball,video games,walking",
        activityPreference: "chill",
        interests: "no",
        // variables added by chandler
        theme: "scenic views",
        time: "11am-7pm",
        dates: "4/25-4/27",
        area: "queens",
        budget: "100",
        //was here before
        transportationPreference: "public transportation",
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          const response = await fetch('/api/generate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              prompt: formData,
            }),
          });
    
          const data = await response.json();
          console.log(data); // Handle or display the response as needed
        } catch (error) {
          console.error('Error submitting form:', error);
        }
    };


    return (
        <main className={styles.main}>
            <nav>
                <Link href={"/auth/login"}>ALESSIO ROMEO</Link>
            </nav>
            <form className={styles.questionnaire} onSubmit={handleSubmit}>
                <div className={styles.question}>
                    <h2>1. Where are you traveling to?</h2>
                    <input type="text" name="destination" value={formData.destination} onChange={handleInputChange}/>
                </div>

                <div className={styles.question}>
                    <h2>Dates of stay? Example: 2/25-2/27</h2>
                    <input type="text" name="dates" value={formData.dates} onChange={handleInputChange}/>
                </div>
                <div className={styles.question}>
                    <h2>Area your going to stay in?</h2>
                    <input type="text" name="area" value={formData.area} onChange={handleInputChange}/>
                </div>
                <div className={styles.question}>
                    <h2>start and end time of schedule for the day? Example: 11am-7pm</h2>
                    <input type="text" name="time" value={formData.time} onChange={handleInputChange}/>
                </div>

                <div className={styles.question}>
                    <h2>2. What season are you planning on going?</h2>
                    <input type="text" name="season" value={formData.season} onChange={handleInputChange}/>
                </div>
                <div className={styles.question}>
                    <h2>3. What is your top three favorite hobbies?</h2>
                    <input type="text" name="hobbies" value={formData.hobbies} onChange={handleInputChange}/>
                </div>
                <div className={styles.question}>
                    <h2>4. Do you like to do active or chill activities?</h2>
                    <input type="text" name="activityPreference" value={formData.activityPreference} onChange={handleInputChange}/>
                </div>
                {/*questions added by chandler */}
                <div className={styles.question}>
                    <h2>5. Are you interested by history, art, etc?</h2>
                    <input type="text" name="interests" value={formData.interests} onChange={handleInputChange}/>
                </div>
                <div className={styles.question}>
                    <h2>6. What theme of activities you prefer? Museums, views, chill or fun?</h2>
                    <input type="text" name="theme" value={formData.theme} onChange={handleInputChange}/>
                </div>
                <div className={styles.question}>
                    <h2>Budget per day</h2>
                    <input type="text" name="budget" value={formData.budget} onChange={handleInputChange}/>
                </div>
                <div className={styles.question}>
                    <h2>For transportation are you going to use a car or public transportation</h2>
                    <input type="text" name="transportationPreference" value={formData.transportationPreference} onChange={handleInputChange}/>
                </div>

                <button type="submit">SUBMIT</button>
            </form>
        </main>
    );
}

export default Page;
