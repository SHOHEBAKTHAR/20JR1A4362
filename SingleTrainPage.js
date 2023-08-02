import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';
 import axios from 'axios'; import { List, ListItem, ListItemText } from '@mui/material'; 
 const API_URL = 'http://20.244.56.144:80/train/trains';
  
     function SingleTrainPage () { 
    const { trainId } = useParams(); 
    const [train, setTrain] = useState(null);
     useEffect(() => { axios.get(`${'http://20.244.56.144:80/train/trains'}`, {  train})
     .then((response) => { setTrain(response.data); }) 
     .catch((error) => { console.error(error.message); }); }, [trainId]); 
     return ( <div> {train ? ( 
     <div> <h1>{train.name}</h1> <p>Seats Available (Sleeper): {train.seatsSleeper}</p> 
     <p>Seats Available (AC): {train.seatsAC}</p> 
     <p>Price (Sleeper): {train.pricesSleeper}</p>
     </div>
     ):(
        <p>loading...</p>

     )}
     </div>
     );
   };
   export default SingleTrainPage;