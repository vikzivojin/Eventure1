import "./EventList.scss";
import EventGraphic from "../../components/EventGraphic/EventGraphic.jsx";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton.jsx";
import Button from "../../components/Button/Button.jsx";
import { useParams, useNavigate, BrowserRouter, Routes, Route, Link } from "react-router-dom";

const EventList = ({events}) => {
  
  console.log(events[0]);
  
  return (
    <>
      <div className="event-list">

        {events.map((event) => (
              <div className="event-card">
                <div className="event-card-date">
                  <EventGraphic date={event.date} />
                </div>
                <div className="event-card-description">
                  <div className="event-card-description-title">
                    {event.title}
                  </div>
                  <div className="event-card-description-date">
                    {events.date} | {event.time}
                  </div>
                  <div className="event-card-description-details">
                    {event.description}
                  </div>
                  <div className="event-card-description-buttons">
                    <Link to={`/LandingPage/`} ><SecondaryButton>Learn More</SecondaryButton></Link>
                    <Link to={`/SignupForm/`} ><Button>Register Now</Button></Link>
                  </div>

                </div>
              
              </div>

        ))}

      </div>
    </>
  );
};

export default EventList;
