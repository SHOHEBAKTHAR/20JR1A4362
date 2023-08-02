import React, { useEffect, useState } from 'react'; 
import axios from 'axios';
 import { Link } from 'react-router-dom';
  import { List, ListItem, ListItemText } from '@mui/material';
   const API_URL = 'https://api.johndoerailways.com';
    // Replace with the actual API URL const authToken = 'YOUR_AUTH_TOKEN'; 
    // Replace with the actual authentication token const headers = { Authorization: `Bearer ${authToken}`, };
     const AllTrainsPage = () => { 
        const [trains, setTrains] = useState([]); 
        useEffect(() => {
             axios.get(`${'http://20.244.56.144:80/train/trains}/trains`, {  treain})
              .then((response) => { setTrains(response.data); })
               .catch((error) => { console.error(error.message); }); 
            }, []);
             return (
                 <div> 
                    <h1>All Trains Schedule</h1> 
                    <List> {trains.map((train) => ( 
                    <ListItem key={train.id} button component={Link} to={`/train/${train.id}`}> 
                    <ListItemText primary={train.name} /> </ListItem> ))} 
                    </List> </div> ); 
                    };
                    export default AllTrainsPage;