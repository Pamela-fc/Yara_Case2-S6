import './styles/Card.css'
import { Link } from 'react-router-dom';



function Card({title, imageURL, body}) {
    return ( 
        <div className="cardContainer">
            <div className="image-container">
            <img src={imageURL} alt='' />
            </div>
            <div className="card-content">
            <div className="card-title">
                <h3>{title}</h3>
            </div>
            <div className="card-body">
                <p>{body}</p>
            </div>
            <div className="btn-card">
                <button>
                   <Link to="/">
                        Se inscreva
                    </Link>
                </button>
            </div>
            </div>
        </div>


     );
}

export default Card;