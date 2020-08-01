import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import Item from "./Item";
import {deletePost} from "../../../redux/actions";
import {CHANGE_COST, CHANGE_COUNT, CHANGE_DATE, CHANGE_NAME, CHANGE_TIME} from "../../../redux/Types";

class ItemsRow extends PureComponent {
    state = {
        list: this.props.list,
        types: [
            {type: CHANGE_NAME, value: this.props.list.name},
            {type: CHANGE_COUNT, value: this.props.list.count},
            {type: CHANGE_COST, value: this.props.list.cost},
            {type: CHANGE_DATE, value: this.props.list.date},
            {type: CHANGE_TIME, value: this.props.list.time} ]
    }

    static getDerivedStateFromProps(props,state) {
        if (props.list !== state.list) return {
            types: [
                {type: CHANGE_NAME, value: props.list.name},
                {type: CHANGE_COUNT, value: props.list.count},
                {type: CHANGE_COST, value: props.list.cost},
                {type: CHANGE_DATE, value: props.list.date},
                {type: CHANGE_TIME, value: props.list.time} ]
        }
        return null
    }

    render() {
        return (
            <div className="fromServer">
                <div className="rows items">
                    {this.state.types.map((item, index) => <Item key={index} type={item.type} value={item.value} id={this.props.list.id}/>)}
                     <button className="delProduct item" onClick={() => this.props.deletePost(this.props.list.id)}>X</button>
                </div>
            </div>
        );

    }
}

const getList = state => { return{ row: state.posts.posts }}
const getActions={ deletePost }

export default connect(getList,getActions)(ItemsRow);