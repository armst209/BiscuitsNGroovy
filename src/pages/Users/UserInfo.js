import React from 'react'
import styles from "./Users.module.scss"

const UserInfo = ({ user }) => {

    return (
        <div className={styles["user-info"]}>
            {/* <img src={user.picture.large} alt={user.name.first + user.name.last} />
            <ul>
                <li>Gender: {user.gender}</li>
                <li>Full Name: {user.name.title + " " + user.name.first + " " + user.name.last}</li>
                <li>Phone: {user.phone}</li>
                <li>Nationality: {user.nat}</li>
                <li>DOB: {user.dob.date.toLocaleString()}</li>
                <li>Age: {user.dob.age}</li>
            </ul> */}
            <p>This is a USER</p>
        </div>)
}


export default UserInfo