import { useParams } from "react-router-dom"

const ChangeUserInfo = () => {
    const { ID } = useParams();
    return (
        <div div style={{ color: "white" }}> {ID}</div >
    )
}

export default ChangeUserInfo