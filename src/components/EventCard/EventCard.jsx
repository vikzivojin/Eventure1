import "./EventCard.scss";
import { formatEventDate } from "../../utils/date.js";
import EventGraphic from "../EventGraphic/EventGraphic";
import Button from "../Button/Button.jsx";

const EventCard = ({information} ) => {
  
  
  
  
  
  const formattedDate = formatEventDate(information.date);
  console.log(formattedDate);
  return (
    <>
        <div className="event-card">
          <div className="event-card-date">
            <EventGraphic date={information.date} />
          </div>
          <div className="event-card-description">
            <div className="event-card-description-title">
              {information.title}
            </div>
            <div className="event-card-description-date">
              {formattedDate}
            </div>
            <div className="event-card-description-details">
              {information.description}
            </div>
            <div className="event-card-description-buttons">
              <Button>Register Now</Button>
            </div>

          </div>
        </div>
    
    </>
    
  );
};

export default EventCard;
