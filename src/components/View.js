import React from "react";

const View = (props) => {
    return (
        <div>
            <h3>{props.passedName}</h3>
            <h3>{props.passedAge}</h3>
            <h3>{props.passedHobbies}</h3>
        </div>
    )
}

export default View;