import React, {PureComponent} from "react";
import {createPost} from "../../../../redux/actions";
import {connect} from "react-redux";

class AddNewProduct extends PureComponent {

    state = {
        nameValue: "",
        countValue: "",
        costValue: "",
        msg: ''
    }

    setValue = (event) => this.setState({[event.target.name]: event.target.value})

    setMsg = (message) => {
        if (message === '') return this.setState({msg: ''})
        this.setState({msg: message})
    }

     btnHandler = (event) =>{
        event.preventDefault()
        const { nameValue,countValue,costValue } = this.state
        const { createPost, close } = this.props
        if (nameValue !== '' && countValue !== '' && costValue !== '' ){
            if (countValue >= 0 && costValue >= 0){
                this.setMsg('')
                createPost(nameValue, countValue, costValue)
                close()
            }else this.setMsg('Значения числовых полей не могут быть отрицательными')
        }else this.setMsg('Введите непустые значения')
    }

    render() {
    return(
        <div className="Modal">
            <div className="Modal-body">
                <button className="Quit" onClick={this.props.close}>X</button>
                <h1>Введите данные</h1>
                <span className="err">{this.state.msg}</span>
                <form className="f" onSubmit={this.btnHandler}>
                    <span className="LabelsInp">Название</span>
                <input className="modal-inp"  placeholder="Название" name='nameValue' value={this.state.nameValue} onChange={this.setValue} required/>
                    <span className="LabelsInp">Количество(шт)</span>
                <input className="modal-inp" type='number'  name='countValue' placeholder="Количество(шт)" value={this.state.countValue} onChange={this.setValue} required/>
                    <span className="LabelsInp">Стоимость(руб)</span>
                <input className="modal-inp" type='number'  name='costValue'placeholder="Стоимость(руб)" value={this.state.costValue} onChange={this.setValue} required/>
                <button type="submit" className="btnInput btn">Добавить</button> </form>
            </div>
        </div>
    )}
}

const StateToProps={ createPost }
export default connect(null,StateToProps)(AddNewProduct)