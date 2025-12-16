import { useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import Form from "../../components/Form/Form.jsx";
import FormField from "../../components/Form/FormField.jsx";
import FormInput from "../../components/Form/FormInput.jsx";
import Button from "../../components/Button/Button.jsx";
import EventCard from "../../components/EventCard/EventCard";
import List from "../../components/List/List.jsx";
import ListItem from "../../components/List/ListItem.jsx";
import { validateEmail } from "../../utils/validation.js";
import Typography from "../../components/Typography/Typography.jsx";
import "./ManageEvents.scss";

const ManageEvents = ({ events, attendees, onUpdateAttendees }) => {
  const [searchEmail, setSearchEmail] = useState("");
  const [error, setError] = useState("");
  const [foundAttendee, setFoundAttendee] = useState(null);
  const [attendance, setAttendance] = useState({}); // { [eventId]: 'attending' | 'notAttending' }

  // Handle input change and validate email
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchEmail(value);
    if (!value) {
      setError("");
    } else if (!validateEmail(value)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
    }
  };

  // Find attendee by email
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(searchEmail)) {
      setError("Please enter a valid email address.");
      setFoundAttendee(null);
      setAttendance({});
      return;
    }
    setError("");
    const found = attendees.find((a) => a.email === searchEmail);
    setFoundAttendee(found || null);
    if (found) {
      // Initialize attendance state for found events
      const att = {};
      found.attendingEvents.forEach((eventId) => {
        att[eventId] = "attending";
      });
      setAttendance(att);
    } else {
      setError(`No attendees found with the email ${searchEmail}`);
      setAttendance({});
    }
  };

  // Handle attendance toggle
  const handleAttendanceChange = (eventId, status) => {
    setAttendance((prev) => ({ ...prev, [eventId]: status }));
  };

  const handleSave = () => {
    if (!foundAttendee) return;
    // Only keep events marked as attending
    const updatedAttendingEvents = Object.entries(attendance)
      .filter(([, status]) => status === "attending")
      .map(([eventId]) => eventId);
    const updatedAttendees = attendees.map((attendee) =>
      attendee.email === foundAttendee.email
        ? { ...attendee, attendingEvents: updatedAttendingEvents }
        : attendee
    );
    if (onUpdateAttendees) {
      onUpdateAttendees(updatedAttendees);
    } else {
      console.log("Updated attendees:", updatedAttendees);
    }
    // Update local state
    setFoundAttendee({
      ...foundAttendee,
      attendingEvents: updatedAttendingEvents,
    });
    // TODO test patch attendee with API
    const patchAttendee = async () => {
      console.log("patch attendee data", {
        ...foundAttendee,
        attendingEvents: updatedAttendingEvents,
      });
    };
    patchAttendee();
    // Remove events no longer attended from attendance state
    setAttendance((prev) => {
      const newAtt = { ...prev };
      Object.keys(newAtt).forEach((eventId) => {
        if (!updatedAttendingEvents.includes(eventId)) {
          delete newAtt[eventId];
        }
      });
      return newAtt;
    });
  };

  const filteredEvents = foundAttendee
    ? events.filter((event) => foundAttendee.attendingEvents.includes(event.id))
    : [];

  return (
    <div className="manage-events">
      <PageHeader title="Manage Events">
        <Form
          className="manage-events__form"
          wrapper={false}
          onSubmit={handleSearchSubmit}
        >
          <div className="manage-events__input-wrapper">
            <FormField className="manage-events__form-field">
              <FormInput
                className="manage-events__input"
                type="search"
                placeholder="Search by email"
                name="email"
                value={searchEmail}
                onChange={handleInputChange}
                required={true}
                aria-invalid={!!error}
                aria-describedby={error ? "email-error" : undefined}
              />
            </FormField>
            <Button className="manage-events__button" type="submit">
              Submit
            </Button>
          </div>
          {error && (
            <Typography variant="p" className="manage-events__error">
              {error}
            </Typography>
          )}
        </Form>
      </PageHeader>

      <div className="manage-events__wrapper">
        <div className="manage-events__button-group">
          <Button isLink={true} to="/" variant="secondary">
            Back
          </Button>
          <Button onClick={handleSave}>Save</Button>
        </div>

        <List className="manage-events__list">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <ListItem key={event.id} className="manage-events__item">
                <EventCard
                  variant="manage-attending"
                  id={event.id}
                  title={event.title}
                  description={event.description}
                  date={event.date}
                  time={event.time}
                  attendanceValue={attendance[event.id]}
                  onAttendanceChange={(value) =>
                    handleAttendanceChange(event.id, value)
                  }
                />
              </ListItem>
            ))
          ) : (
            <div className="manage-events__empty-state">
              <Typography variant="p">
                Search for events using the attendee's email address
              </Typography>
              <Typography variant="p">
                Enter an email above to find and manage event attendance
              </Typography>
            </div>
          )}
        </List>
      </div>
    </div>
  );
};

export default ManageEvents;
