'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from "./page.module.scss";
import Link from "next/link";

function Page() {
    const [formData, setFormData] = useState({
        destination: "",
        season: "",
        hobbies: "",
        activityPreference: "",
        interests: "",
        transportationPreference: "",
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
                    <h2>1. Where are you travelling to?</h2>
                    <input type="text" name="destination" value={formData.destination} onChange={handleInputChange}/>
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
                <div className={styles.question}>
                    <h2>5. Are you interested by history, art, etc?</h2>
                    <input type="text" name="interests" value={formData.interests} onChange={handleInputChange}/>
                </div>
                <div className={styles.question}>
                    <h2>6. Do you prefer walking or use transportation?</h2>
                    <input type="text" name="transportationPreference" value={formData.transportationPreference} onChange={handleInputChange}/>
                </div>

                <button type="submit">SUBMIT</button>
            </form>
        </main>
    );
}

export default Page;
