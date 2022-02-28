


/**
 * How We Serve Section Reducer - About Page
 * @param {*} state 
 * @param {*} action 
 * @returns new state or original state depending on action passed
 */
export const howWeServeAboutReducer = (state, action) => {
    switch (action.type) {
        case "SHOW_ARTIST_INFO":
            return {
                ...state,
                showFansInfo: false,
                showArtistsInfo: true,
                isFanButtonSelected: false,
                isArtistButtonSelected: true,
            }
        case "SHOW_FANS_INFO":
            return {
                ...state,
                showFansInfo: true,
                showArtistsInfo: false,
                isFanButtonSelected: true,
                isArtistButtonSelected: false,
            }
        default:
            return state;
    }
}
