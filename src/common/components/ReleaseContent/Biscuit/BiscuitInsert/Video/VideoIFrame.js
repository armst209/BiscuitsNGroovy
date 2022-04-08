

//styles
import styles from "../BiscuitInsert.module.scss"

const VideoIFrame = ({insertLink, className, title}) => {
    
    return (
        <div className={styles[className]}>
            <iframe
                src={`${insertLink}&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={title}
            >
            </iframe>
        </div>
    );
};

export default VideoIFrame;