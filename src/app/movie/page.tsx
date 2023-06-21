import React from "react";
import MovieCard from "../components/MovieCard";
import styles from "../styles/common.module.css";

 async function Movie() {
    const headers = {
        "X-RapidAPI-Key": "38ef098b73mshb08ebc1bda11256p16d24cjsn6b000a95cd37",
        "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    };

    const responce = await fetch("https://netflix54.p.rapidapi.com/search/", {
        headers: headers,
    });

    const res = await responce.json();
    const main_data = res.titles || [];
    console.log("data:-", main_data);
    
   return res;
}

export default async function Page(){
    const data = await Movie();
    console.log("Log"+data);
    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series &amp; Movie</h1>
                    <div className={styles.card_section}>
                        {Array.isArray(data) && data.map((curElem:any) => {
                            return <MovieCard key={curElem.id} {...curElem} />
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
