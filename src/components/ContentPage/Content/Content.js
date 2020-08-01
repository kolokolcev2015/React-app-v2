import React from 'react';
import {connect} from "react-redux";
import ItemsRow from "./ItemsRow";

const Content = React.memo(({list}) => {
        return (
            <div>
                <div className="rows rowHead">
                    <div className="item">Название</div>
                    <div className="item">Количество (шт)</div>
                    <div className="item">Цена (руб)</div>
                    <div className="item">Дата добавления</div>
                    <div className="item">Время добавления</div>
                    <div className="item">Удалить</div>
                </div>
                { list.map(todo => <ItemsRow key = { todo.id } list = { todo } /> )}

            </div>
        );
})

const getList = state => {
    return{ list: state.posts.posts }
}

export default connect(getList,null)(Content)