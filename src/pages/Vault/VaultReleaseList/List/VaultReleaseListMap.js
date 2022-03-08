//component imports
import VaultCard from "../../VaultCard/VaultCard";

const VaultReleaseListMap = ({ releaseData }) => {
    return (
        <>
            {releaseData.map((release) => {
                return <VaultCard key={release.release_id} release={release} />;
            })}
        </>

    )
}

export default VaultReleaseListMap