import "./App.scss";
import { useParams, useNavigate, BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import HomePage from "./pages/HomePage/HomePage.jsx";
import SignupForm from "./pages/SignupForm/SignupForm.jsx";
import { useState, useEffect } from "react";





const App = () => {

  let currentPage = "HomePage";


  const API_URL = "https://unit-3-api-6b6268be0363.herokuapp.com";
  const API_KEY = "30a3d253-8e5a-4cf9-89ad-f222ec88de08";
  const EVENTS_URL = "https://unit-3-api-6b6268be0363.herokuapp.com/events";

  let [events, setEvents] = useState([]);

  useEffect(() => {

    const fetchEvents = async () => {
      
    
    
    const RESPONSE_URL = EVENTS_URL + "?api_key=" + API_KEY;

    const response = await axios.get(RESPONSE_URL);
    setEvents(response.data);


  


  };

  // call the async function that we just created
  fetchEvents();
  

  }, []);

  





  /*async function fetchEvents(){

      let eventList;

      while(!category_index) {
          console.log("The categories are: \n1. pokemon \n2. pokemon species \n3. ability \n4. type")
          category_index = prompt("Please enter what you want to search: ");
      }

      try{
      const category = categories[category_index - 1];
      CATEGORY_URL = await BASE_URL + `/${category}`;
      console.log(CATEGORY_URL);


      } catch(error){
          console.log("error");
      }

      return eventList;
  }
  */

  


    return(

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<HomePage events={events}/>} />
          <Route path="/SignupForm" element={<SignupForm events={events}/>} />


          {/* <Route path={`/SignupForm`} element={<SignupForm />} /> */}

          {/* <Route path={`/${currentPage}`} element={<currentPage />} />

          */}

          

        </Routes>
      </BrowserRouter>
    
)};

export default App;
