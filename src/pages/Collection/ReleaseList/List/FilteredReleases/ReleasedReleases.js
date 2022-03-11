//styles
import styles from "../../CollectionReleases.module.scss"

//useModal
import useModal from "../../../../../hooks/Modal/useModal"

//component imports
import ExpiredInfoModal from "../ExpiredRelease/Modals/ExpiredInfoModal/ExpiredInfoModal";
import ReleasedReleasesMap from "./ReleasedReleasesMap";

//svg imports
import { ReactComponent as QuestionIcon } from '../../../../../assets/images/help_question_yellow.svg'


const ReleasedReleases = ({ filteredReleasedReleases }) => {

    const { isModalShowing, toggleModal, Modal } = useModal("modal-overlay-root");

    return (
        <>
            <h1 className={styles["h1-title"]}>
                <div>Expired Biscuits</div>
            </h1>
            <div
                className={
                    styles["collection-release-list-released-releases-container"]
                }
            >
                <div
                    onClick={() => toggleModal()}
                    className={styles["cant-play-releases-container"]}
                >
                    <QuestionIcon />
                    <p>Why can't I play my releases?</p>
                </div>
                <ReleasedReleasesMap filteredReleasedReleases={filteredReleasedReleases} />
            </div>
            <Modal isModalShowing={isModalShowing}>
                <ExpiredInfoModal closeExpiredInfoModal={toggleModal} />
            </Modal>
        </>
    )
}
export default ReleasedReleases