import "./HomePage.scss";

import Attendee from "../../components/Attendee/Attendee.jsx";
import Avatar from "../../components/Avatar/Avatar.jsx";
import Button from "../../components/Button/Button.jsx";
import Checkbox from "../../components/Checkbox/Checkbox.jsx";
import ContentCard from "../../components/ContentCard/ContentCard.jsx";
import EventCard from "../../components/EventCard/EventCard.jsx";
import EventGraphic from "../../components/EventGraphic/EventGraphic.jsx";
import EventList from "../../components/EventList/EventList.jsx";
import Form from "../../components/Form/Form.jsx";
import FormField from "../../components/Form/FormField.jsx";
import FormInput from "../../components/Form/FormInput.jsx";
import FormSection from "../../components/Form/FormSection.jsx";
import FormStepManager from "../../components/Form/FormStepManager.jsx";
import FormTextarea from "../../components/Form/FormTextarea.jsx";
import Icon from "../../components/Icon/Icon.jsx";
import List from "../../components/List/List.jsx";
import ListItem from "../../components/List/ListItem.jsx";
import PageFooter from "../../components/PageFooter/PageFooter.jsx";
import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import RadioButton from "../../components/RadioButton/RadioButton.jsx";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton.jsx";
import Select from "../../components/Select/Select.jsx";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Typography from "../../components/Typography/Typography.jsx";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";
import { useParams, useNavigate, BrowserRouter, Routes, Route } from "react-router-dom";

const HomePage = () => {
  

  const events = {
    
    title: "Code Horizon",
    date: "2024-01-15",
    time: "7:00 PM - 9:00 PM",
    description: "Join us for a future-forward summit exploring the next frontiers in AI, quantum computing, and decentralized infrastructure over drinks and light bites",
  };


  return (
    <div className="component-docs">
      <PageHeader title="Events"></PageHeader>

      <EventList/>

      
    </div>
  );
};
export default HomePage;
