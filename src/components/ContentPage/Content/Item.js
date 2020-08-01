import React, {PureComponent} from 'react';
import InputViewRecord from "./InputView/InputView";

class Item extends PureComponent {

    state ={ onClick : false }

    Clicked = () => this.setState( this.state.onClick ? { onClick: false } : { onClick: true })

    render() {
        return (
            this.state.onClick ?
                <InputViewRecord id={this.props.id} plh={this.props.value} change={this.Clicked} type={this.props.type}/> :
                <div className="item" onClick={this.Clicked}> { this.props.value } </div> )
    }
}

export default Item