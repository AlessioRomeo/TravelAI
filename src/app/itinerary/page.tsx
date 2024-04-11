import React from 'react';
import styles from './page.module.scss';
import Link from "next/link";
import ItineraryDay from "@/app/itinerary/(components)/ItineraryDay";
import Chat from "@/app/itinerary/(components)/Chat";

function Page() {
    return (
        <main className={styles.main}>
            <nav>
                <Link href={"/auth/login"}>ALESSIO ROMEO</Link>
            </nav>
            <div className={styles.container}>
                <ItineraryDay day={1}
                              morning={"Arrival & hotel check-in"}
                              afternoon={"Visit the Eiffel Tower & grab some lunch at Le Bistrot de la Montagne"}
                              evening={"Explore the Louvre Museum & have dinner at Les Bayx de Paris"}
                />
                <ItineraryDay day={2}
                              morning={"Arrival & hotel check-in"}
                              afternoon={"Visit the Eiffel Tower & grab some lunch at Le Bistrot de la Montagne"}
                              evening={"Explore the Louvre Museum & have dinner at Les Bayx de Paris"}
                />
                <ItineraryDay day={3}
                              morning={"Arrival & hotel check-in"}
                              afternoon={"Visit the Eiffel Tower & grab some lunch at Le Bistrot de la Montagne"}
                              evening={"Explore the Louvre Museum & have dinner at Les Bayx de Paris"}
                />
                <ItineraryDay day={4}
                              morning={"Arrival & hotel check-in"}
                              afternoon={"Visit the Eiffel Tower & grab some lunch at Le Bistrot de la Montagne"}
                              evening={"Explore the Louvre Museum & have dinner at Les Bayx de Paris"}
                />
                <ItineraryDay day={5}
                              morning={"Arrival & hotel check-in"}
                              afternoon={"Visit the Eiffel Tower & grab some lunch at Le Bistrot de la Montagne"}
                              evening={"Explore the Louvre Museum & have dinner at Les Bayx de Paris"}
                />
                <ItineraryDay day={6}
                              morning={"Arrival & hotel check-in"}
                              afternoon={"Visit the Eiffel Tower & grab some lunch at Le Bistrot de la Montagne"}
                              evening={"Explore the Louvre Museum & have dinner at Les Bayx de Paris"}
                />
                <ItineraryDay day={7}
                              morning={"Arrival & hotel check-in"}
                              afternoon={"Visit the Eiffel Tower & grab some lunch at Le Bistrot de la Montagne"}
                              evening={"Explore the Louvre Museum & have dinner at Les Bayx de Paris"}
                />
            </div>
            <Chat/>
        </main>
    );
}

export default Page;