import { useParams } from "react-router-dom"
import { getAllFilms } from "../functions";
import { useEffect, useState } from "react";
import DetailsCard from "./DetailsCard";

export default function DetailPage(props) {
    const {id} = useParams();
    const [allFilms, setAllFilms] = useState([]);

    useEffect(() => {
        async function setFilms() {
            const films = await getAllFilms();
            setAllFilms(films);
        }

        setFilms();
    }, []);

    const selectedMovie = allFilms.filter(film => film.title === id);
    console.log(selectedMovie)

    return (
        <div className="detail-page">
           {selectedMovie ? <DetailsCard {... selectedMovie[0]} /> : <p>not found</p> } 
        </div>
    )
}