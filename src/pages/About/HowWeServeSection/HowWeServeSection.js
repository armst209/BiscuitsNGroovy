//react imports
import { useReducer } from 'react';

//reducer imports
import { howWeServeAboutReducer } from '../../../utils/reducers/reducers';

//component imports
import ArtistInformationHWS from '../FanArtistInformation/ArtistInformationHWS';
import FansInformationHWS from '../FanArtistInformation/FansInformationHWS';


const HowWeServeSection = () => {

    const initialHwsState = {
        showFansInfo: false,
        showArtistsInfo: false,
        isFanButtonSelected: false,
        isArtistButtonSelected: false,
    }

    const [hwsState, dispatch] = useReducer(howWeServeAboutReducer, initialHwsState)

    return (
        <div className="artist-fans-serve-main-wrapper ">
            <div className="artists-fans-serve-container">
                <div className="artists-fans-serve-header">
                    <h1>How We Serve:</h1>
                    <div className="artists-fans-serve-button-container">
                        <button
                            onClick={() => dispatch({ type: "SHOW_FANS_INFO" })}
                            className={`${hwsState.isFanButtonSelected ? "selected-button" : ""} _button`}
                        >
                            Fans
                        </button>
                        <button
                            onClick={() => dispatch({ type: "SHOW_ARTIST_INFO" })}
                            className={`${hwsState.isArtistButtonSelected ? "selected-button" : ""} _button`}
                        >
                            Artists
                        </button>
                    </div>
                </div>
                {hwsState.showFansInfo && (
                    <FansInformationHWS />
                )}
                {hwsState.showArtistsInfo && (
                    <ArtistInformationHWS />
                )}
            </div>
        </div>
    )
}

export default HowWeServeSection