import React,{PureComponent} from 'react';
import ItemsProduct from "./Content/Content";
import {getData} from "../../redux/actions";
import {connect} from "react-redux";
import './styleContent.css'
import {getList} from "../../API/api";
import AddForm from "./SearchAndAdd/Modal/AddForm";
import Header from "./Header/Header";
import Search from "./SearchAndAdd/Search";


class Products extends PureComponent {

    componentDidMount() {
        getList().then(request =>  this.props.getData(request.data))
    }

    render() {
        return (
            <div className="content">
                <Header/>
                <div className="searchAdd block">
                    <Search/>
                    <AddForm/>
                </div>
                <div className="mainContent block">
                    <ItemsProduct/>
                </div>
            </div>
        );
    }
}

const getActionAuth={ getData }

export default connect(null,getActionAuth)(Products)
