//component import

import NoReleasesMusicShowcase from "../../../../ReleaseContent/ReleaseComponents/NoReleases/NoReleasesMusicShowcase";

const AllReleasesPurchased = ({releaseData}) => {

const hasBeenPurchased = (currentValue) => currentValue.purchased === 1;

  return (
    <>{releaseData && releaseData.releases.every(hasBeenPurchased) ? <NoReleasesMusicShowcase/> : ""}</>
  )
}

export default AllReleasesPurchased