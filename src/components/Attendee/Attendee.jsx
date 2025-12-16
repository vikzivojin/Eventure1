import { useState } from "react";
import Avatar from "../../components/Avatar/Avatar.jsx";
import Typography from "../Typography/Typography.jsx";
import Checkbox from "../../components/Checkbox/Checkbox.jsx";
import "./Attendee.scss";

const Attendee = ({ attendee }) => {
  const [isAttending, setIsAttending] = useState(true);

  const handleCheckboxChange = () => {
    setIsAttending(!isAttending);
    console.log("checkbox changed");
  };

  return (
    <article className="attendee">
      <Typography className="attendee__first-name" variant="p">
        {attendee.firstName}
      </Typography>
      <Typography className="attendee__last-name" variant="p">
        {attendee.lastName}
      </Typography>
      <Typography className="attendee__email" variant="p">
        {attendee.email}
      </Typography>

      <Checkbox
        id={attendee.id}
        name="attending"
        className="attendee__checkbox"
        label="Attending"
        checked={isAttending}
        onChange={handleCheckboxChange}
      />
      <Avatar className="attendee__avatar" imageSrc={attendee.avatar} />
    </article>
  );
};

export default Attendee;
