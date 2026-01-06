import "./EventList.scss";
import EventGraphic from "../../components/EventGraphic/EventGraphic.jsx";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton.jsx";
import Button from "../../components/Button/Button.jsx";

const EventList = () => {
  
  
  const events = {
    
    title: "Code Horizon",
    date: "2024-01-15",
    time: "7:00 PM - 9:00 PM",
    description: "Join us for a future-forward summit exploring the next frontiers in AI, quantum computing, and decentralized infrastructure over drinks and light bites",
  };
  
  
  return (
    <>
      <div className="event-list">
          <div className="event-card">
            <div className="event-card-date">
              <EventGraphic date={events.date} />
            </div>
            <div className="event-card-description">
              <div className="event-card-description-title">
                {events.title}
              </div>
              <div className="event-card-description-date">
                {events.date} | {events.time}
              </div>
              <div className="event-card-description-details">
                {events.description}
              </div>
              <div className="event-card-description-buttons">
                <SecondaryButton>Learn More</SecondaryButton>
                <Button>Register Now</Button>
              </div>

            </div>
          
          </div>

      </div>
    </>
  );
};

export default EventList;
