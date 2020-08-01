import React, {PureComponent} from 'react';
import './Modal.css'
import AddNewProduct from "./AddNewProduct";

class AddForm extends PureComponent {

    state ={ isOpen: false }

    Clicked = () => this.setState( this.state.isOpen ? { isOpen: false } : { isOpen: true })

    render() {
        return (
                <div className="btnAdd">
                    <button className="opnModal btn" onClick={this.Clicked}>Добавить</button>
                    { this.state.isOpen && <AddNewProduct close={this.Clicked}/> }
                </div>
        );
    }
}

export default AddForm;