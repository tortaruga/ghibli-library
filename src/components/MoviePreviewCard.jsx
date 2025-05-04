import { Link, useNavigate } from "react-router-dom"

export default function MoviePreviewCard(props) {
  
    return (
      <Link to={`/details/${props.title}`}  style={{ textDecoration: "none", color: "inherit"}}>
      <div className="preview-card">
      <div className="img-wrapper">
        <img src={props.img} alt="movie poster" />
      </div>

      <div className="text">
        <p>{props.title} ({props.date})</p>
      </div>
    </div>
    </Link>
    )
}