import React from "react";
import TimePicker from "react-time-picker";

const TimeInput = React.memo(({value,changeInputHandler,saveChanges}) => {
    return (
        <div className="containerInput">
            <form className="inputClass">
                <TimePicker value={value}
                               disableClock
                               onClockClose={saveChanges}
                               onChange={value => changeInputHandler(value)}
                               autoFocus/>
            </form>
        </div>)
})
export default TimeInput