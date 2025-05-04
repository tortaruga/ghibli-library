export default function DetailsCard(props) {
    return (
        <div className="details-card">
            <div className="img-wrapper">
              <img src={props.movie_banner} alt="movie image" />
            </div>
            
            <div className="info">
            <h1>{props.title}</h1>
            <h2 className="original-title">Original title: {props.original_title} ({props.original_title_romanised})</h2>

            <p className="desc">{props.description}</p>

            <div className="other-info">
             <p>Duration <span>{props.running_time} min</span></p>

             <p>Release date <span>{props.release_date}</span></p>

             <p>Director <span>{props.director}</span></p>

            </div>
             </div>
            
        </div>
    )
}