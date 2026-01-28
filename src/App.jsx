import "./App.scss";
import { useParams, useNavigate, BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import HomePage from "./pages/HomePage/HomePage.jsx";



let currentPage = "SignupForm";


const API_URL = "https://unit-3-api-6b6268be0363.herokuapp.com/docs";
const API_KEY = "30a3d253-8e5a-4cf9-89ad-f222ec88de08";
const EVENTS_URL = "https://unit-3-api-6b6268be0363.herokuapp.com/docs/events";


const fetchEvents = async () => {
    
   

  const response = await axios.get(EVENTS_URL, {

        headers: {
            "X-API_Key" : API_KEY
            
        }

    });
  console.log(response.data);
};

// call the async function that we just created
fetchEvents();



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

const App = () => {

  return(

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path={`/${currentPage}`} element={'<${currentPage} />'} />

        

        

      </Routes>
    </BrowserRouter>
  
)};

export default App;
