
import React, { useEffect, useState } from 'react'
import List from '../components/List';
import WithLoading from '../components/WithLoading';

const ListWithLoading = WithLoading(List);


function Dashboard(props) {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState(null);
  useEffect(() => {
    // this.setState({ loading: true });
    setLoading(true);
    console.log("didmount");
    const proxyurl = "http://localhost:8080/";
    const url = "https://www.metaweather.com/api/location/924938sas/";

    fetch(proxyurl + url)
      .then(json => json.json())
      .then(items => {
        console.log(items.consolidated_weather);
        // this.setState({ loading: false, items: items.consolidated_weather });
        setLoading(false);
        setItems(items.consolidated_weather);
      })
      .catch(err => {
        console.log(err);
      });
}, [])
    return (
      <ListWithLoading isLoading={loading} items={items} />
    )

}
export default Dashboard
