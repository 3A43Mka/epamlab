import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardText, CardTitle, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function WeatherItem({ item }) {
    return (
        <React.Fragment>
            <div className="col-12 mt-5">
                <Media tag="li">
                    <Media left middle>
                        <Media object src={`https://www.metaweather.com/static/img/weather/png/64/${item.weather_state_abbr}.png`} alt={item.applicable_date} />
                    </Media>
                    <Media body className="ml-5">
                        <Media heading>{item.applicable_date} {item.weather_state_name}</Media>
                        <p>Air pressure: {item.air_pressure}</p>
                        <p>Humidity: {item.humidity}</p>
                    </Media>
                </Media>
            </div>
        </React.Fragment>
    );
}

export default WeatherItem;
