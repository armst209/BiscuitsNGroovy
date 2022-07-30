
//react imports
import { Link } from "react-router-dom"

const ArtistInformationHWS = () => {
    return (
        <ul>
            <li>
                Biscuits n Groovy helps artists earn more for their
                recorded music. Each biscuit is a blank canvas to share
                unique content with their superfans and bring them
                closer together. We’re committed to treating our artists
                right and empowering them to grow and thrive where other
                music platforms can’t
            </li>
            <li>
                <div>Why release with BnG?</div>
                <ol>
                    <li>Make more money</li>
                    <li>Connect with your top fans</li>
                    <li>Stand out from the crowd</li>
                </ol>
                <div className="read-more-container">
                    Read more <Link to="/artists">here</Link>
                </div>
            </li>
        </ul>
    )
}

export default ArtistInformationHWS