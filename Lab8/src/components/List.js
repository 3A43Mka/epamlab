import React from 'react';
import WeatherItem from './WeatherItem';
import './List.css';
const List = props => {
    const { items } = props;

    if (!items) return null;
    if (!items.length) return (<p>No items, sorry</p>)
    return (
        <div class="list-container">
            <ul>
                {
                    items.map(item => {
                        return (
                            <WeatherItem key={item.id} item={item}></WeatherItem>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default List;