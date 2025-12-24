import React, {Component} from "react";
import './item-status-filter.css';

export default class ItemStatusFilter extends Component{
    buttons = [
        {name: 'all', label: 'Все'}
        {name: 'active', label: 'Текущие'}
        {name: 'done', label: 'Выполнены'}
    ]

    render(){
        const {filter}
        return(
            <div className="btn-group btng"></div>
        )
    }
}