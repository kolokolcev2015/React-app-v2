import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {getSearchName} from "../../../API/api";
import {getData} from "../../../redux/actions";

class Search extends PureComponent{

    state= {
        name: ''
    }

    submitHandler = event => {
        event.preventDefault()
        getSearchName(this.state.name).then(request => this.props.getData(request.data))
    }

    changeInputHandler = value => {
        this.setState(prev => ({...prev,...{ name: value }}),
            () => { getSearchName(this.state.name).then(request => this.props.getData(request.data) ) }
        )
    }

    render() {
        return(
            <div className="search">
                <form onSubmit={this.submitHandler}>
                    <input
                        type="text"
                        className="inputSearch"
                        value={this.state.name}
                        placeholder="Искать..."
                        onChange={event => this.changeInputHandler(event.target.value)}/>
                </form>
            </div>
        )
    }
}

const getActions = {
    getData
}

export default connect(null,getActions)(Search)