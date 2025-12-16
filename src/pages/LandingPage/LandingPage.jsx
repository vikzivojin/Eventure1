import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import List from "../../components/List/List.jsx";
import ListItem from "../../components/List/ListItem.jsx";
import EventCard from "../../components/EventCard/EventCard.jsx";
import ContentCard from "../../components/ContentCard/ContentCard.jsx";
import "./LandingPage.scss";

const LandingPage = ({ events }) => {
  return (
    <div>
      <PageHeader title="Events">
        <List className="eventcard-list">
          {events.map((event) => (
            <ListItem key={event.id} className="eventcard-list__item">
              <EventCard
                id={event.id}
                title={event.title}
                date={event.date}
                time={event.time}
                description={event.description}
              />
            </ListItem>
          ))}
        </List>
      </PageHeader>

      <section className="manage-events-section">
        <div className="content-cards">
          <ContentCard
            iconName="calendar"
            cardTitle="Attending an event?"
            description="Stay organized and in the loop. Check upcoming event registrations and view schedules, updates, and important info. Everything you need to know is all in one place."
            buttonText="View events"
            buttonLink="/manage-events"
          />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
