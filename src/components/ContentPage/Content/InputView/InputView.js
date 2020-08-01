import React, {PureComponent} from "react";
import {changeData} from "../../../../redux/actions";
import {connect} from "react-redux";
import {CHANGE_COST, CHANGE_COUNT, CHANGE_DATE, CHANGE_NAME, CHANGE_TIME} from "../../../../redux/Types";
import moment from "moment"
import DateInput from "./DateInput";
import TimeInput from "./TimeInput";


class InputView extends PureComponent{

    state = { value: '', msg: '' }

    changeType = () => this.props.type === CHANGE_NAME ?  'text' :  'number';

    saveChanges = () => {
        if (this.state.value!==""){
            let value = this.state.value;
            if (this.props.type === CHANGE_DATE) value = moment(value).format ('DD.MM.YYYY');
            this.props.changeData(this.props.type, this.props.id, value)
        }
        this.props.change()
    }
    checkValue = () => {
        const {type} = this.props;
        const {value} = this.state;
        if ((type === CHANGE_COST || type === CHANGE_COUNT) && value < 0) return this.setState({ msg: 'Число не может быть < 0', value: ''});
        if ((type !== CHANGE_NAME && value.length >= 9) ||
            (type === CHANGE_NAME && value.length >= 15)) {
             this.setState({ msg: 'Было введено слишком длинное значение', value: ''}) }
        else{ this.saveChanges() }

    };

    changeInputHandler = value => this.setState(prev => ({...prev,...{ value: value } }) );

    render(){
        switch (this.props.type) {
            case CHANGE_DATE:
                return <DateInput value={this.state.value} changeInputHandler = {this.changeInputHandler} saveChanges={this.saveChanges}/>
            case CHANGE_TIME:
                return <TimeInput value={this.state.value} changeInputHandler = {this.changeInputHandler} saveChanges={this.saveChanges}/>
            default:
                return <div><input type={this.changeType(this.props.type)}
                                      placeholder={this.props.plh}
                                      value={this.state.value}
                                      onBlur={this.checkValue}
                                      onChange={event => this.changeInputHandler(event.target.value)} className="inp" autoFocus/>
                    { this.state.msg !== '' && <div className='err itemErr' >{this.state.msg}</div>}
                        </div>
        }
    }
}
const getActionAuth={ changeData }
export default connect(null,getActionAuth)(InputView)
