import React from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

const DateInput = React.memo(({value,changeInputHandler,saveChanges}) => {
    return (
    <div className="containerInput">
        <form className="inputClass">
            <DatePicker  selected={value}
                        dateFormat='dd.MM.yyyy'
                        maxDate={new Date()}
                        onChange={value => changeInputHandler(value)}
                        onCalendarClose={saveChanges}
                        autoFocus/>
        </form>
    </div> )
})
export default DateInput