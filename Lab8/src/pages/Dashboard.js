
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











// import React from 'react';
// import List from '../components/List';
// import WithLoading from '../components/WithLoading';
// const ListWithLoading = WithLoading(List);
// class Dashboard extends React.Component {
//   state = {
//     loading: false,
//     items: null
//   }
//   componentDidMount() {
//     this.setState({ loading: true });
//     console.log("didmount");
//     const proxyurl = "http://localhost:8080/";
//     const url = "https://www.metaweather.com/api/location/924938/";

//     fetch(proxyurl + url)
//       .then(json => json.json())
//       .then(items => {
//         console.log(items.consolidated_weather);
//         this.setState({ loading: false, items: items.consolidated_weather });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }
//   render() {
//     return (
//       <ListWithLoading isLoading={this.state.loading} items={this.state.items} />
//     )
//   }
// }

// export default Dashboard;


















// import React from 'react';
// import WeatherItem from '../components/WeatherItem';
// import { Button } from "../components/AuthForm";
// import { useAuth } from "../context/auth";



// const items = [{
//   id: '1',
//   weather_state_name: 'Perviy',
// },
// {
//   id: '2',
//   weather_state_name: 'Vtoroi',
// },

// ];

// class Dashboard extends React.Component {
//     state = {
//         items: null,
//         error: false
//     };

//     componentDidMount() {
//       setTimeout(() => {
//         this.setState({
//           items: [{
//             id: '1',
//             weather_state_name: 'Perviy',
//           },
//           {
//             id: '2',
//             weather_state_name: 'Vtoroi',
//           },

//           ],
//           error: !items
//       });
//       }, 1000);

//     }

//     render() {
//         const { project, error } = this.state;

//         if (error)
//             return <div className='container'>Что-то пошло не так...</div>;

//         if (!items) return <div className='container'>Loading...</div>;

//         return (
//           <div>
//                  <div>Dashboard</div>
//                  <div className='portfolio'>
//                                <div className='container'>
//                                    {items.map((item) => (
//                                       <WeatherItem key={item.id} item={item} />
//                                    ))}
//                                </div>
//                            </div>
//                  {/* <Button onClick={logOut}>Log out</Button> */}
//                </div>
//         );
//     }
// }

// export default Dashboard;




















// import React from "react";
// import { Button } from "../components/AuthForm";
// import { useAuth } from "../context/auth";
// import WeatherItem from '../components/WeatherItem';
// import axios from 'axios';

// function Dashboard(props) {
//   const { setAuthTokens } = useAuth();

// const items = [{
//   id: '1',
//   weather_state_name: 'Perviy',
// },
// {
//   id: '2',
//   weather_state_name: 'Vtoroi',
// },

// ];

//   function logOut() {
//     setAuthTokens('');

//   }

//   function GetWeather() {
//     const proxyurl = "https://cors-anywhere.herokuapp.com/";
//     const url = "https://www.metaweather.com/api/location/924938/";
//     axios.get(proxyurl + url).then(result => {
//       if (result.status === 200) {
//         console.log(result.data);
//       } else {
//         console.log("else error");
//       }
//     }).catch(e => {
//       console.log("error");
//     });
//   }

//   GetWeather();
//   return (
//     <div>
//       <div>Dashboard</div>
//       <div className='portfolio'>
//                     <div className='container'>
//                         {items.map((item) => (
//                             <WeatherItem key={item.id} item={item} />
//                         ))}
//                     </div>
//                 </div>
//       <Button onClick={logOut}>Log out</Button>
//     </div>
//   );
// }

// export default Dashboard;
