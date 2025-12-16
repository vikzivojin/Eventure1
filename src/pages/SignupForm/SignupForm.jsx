import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import FormStepManager from "../../components/Form/FormStepManager.jsx";
import FormField from "../../components/Form/FormField.jsx";
import FormInput from "../../components/Form/FormInput.jsx";
import Checkbox from "../../components/Checkbox/Checkbox.jsx";
import Select from "../../components/Select/Select.jsx";
import FormSection from "../../components/Form/FormSection.jsx";
import List from "../../components/List/List.jsx";
import ListItem from "../../components/List/ListItem.jsx";
import Typography from "../../components/Typography/Typography.jsx";
import Icon from "../../components/Icon/Icon.jsx";
import {
  validateEmail,
  validatePhone,
  formatPhoneInput,
} from "../../utils/validation.js";
import { formatDate } from "../../utils/date.js";
import "./SignupForm.scss";

const SignupForm = ({ events, attendees, setAttendees }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const STEP_TITLES = {
    PERSONAL_DETAILS: "Personal Details",
    EVENT_DETAILS: "Event Details",
    CONFIRM_RESPONSES: "Confirm Responses",
    SUCCESS: "Responses successfully submitted",
  };

  const steps = [
    STEP_TITLES.PERSONAL_DETAILS,
    STEP_TITLES.EVENT_DETAILS,
    STEP_TITLES.CONFIRM_RESPONSES,
  ];

  const [step, setStep] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    attendingEvents: id ? [id] : [],
    reasonForAttending: "",
  });
  const [errors, setErrors] = useState({});

  const requiredFields = ["firstName", "lastName", "email"];

  const getRequiredFieldError = (name, value) => {
    if (requiredFields.includes(name) && !value) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`;
    }
    return undefined;
  };

  const getNameError = (name, value) => {
    if (name === "firstName" || name === "lastName") {
      const trimmedValue = value.trim();
      if (!trimmedValue) {
        return `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`;
      }
    }
    return undefined;
  };

  const getEmailError = (value) => {
    if (value && !validateEmail(value)) {
      return "Please enter a valid email address.";
    }
    return undefined;
  };

  const getPhoneError = (value) => {
    if (value && !validatePhone(value)) {
      return "Please enter a valid phone number (e.g. 123-456-7890).";
    }
    return undefined;
  };

  const handleChange = (e) => {
    const { name, value, type, checked, dataset } = e.target;
    if (name === "event") {
      const eventId = dataset.eventId;
      setFormData((prev) => ({
        ...prev,
        attendingEvents: checked
          ? [...prev.attendingEvents, eventId]
          : prev.attendingEvents.filter((id) => id !== eventId),
      }));
      return;
    }
    let newValue = value;
    if (name === "phone") {
      newValue = formatPhoneInput(value);
    }
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : newValue,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]:
        getNameError(name, newValue) ||
        getRequiredFieldError(name, newValue) ||
        (name === "email" ? getEmailError(newValue) : undefined) ||
        (name === "phone" ? getPhoneError(newValue) : undefined),
    }));
  };

  const goNext = () => {
    if (step === 0) {
      const newErrors = {};
      requiredFields.forEach((field) => {
        const value = formData[field];
        const error =
          getNameError(field, value) || getRequiredFieldError(field, value);
        if (error) newErrors[field] = error;
      });
      if (formData.email) {
        const emailError = getEmailError(formData.email);
        if (emailError) newErrors.email = emailError;
      }
      if (formData.phone) {
        const phoneError = getPhoneError(formData.phone);
        if (phoneError) newErrors.phone = phoneError;
      }
      setErrors(newErrors);
      if (Object.keys(newErrors).length > 0) {
        return;
      }
    }
    if (step < steps.length - 1) setStep((s) => s + 1);
  };

  const goBack = () => {
    if (step > 0) setStep((s) => s - 1);
    else navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === steps.length - 1) {
      const foundIndex = attendees.findIndex(
        (attendee) => attendee.email === formData.email
      );
      if (foundIndex === -1) {
        setAttendees([
          ...attendees,
          {
            id: uuidv4(),
            ...formData,
          },
        ]);
      } else {
        const updated = attendees.map((attendee, i) =>
          i === foundIndex ? { ...attendee, ...formData } : attendee
        );
        setAttendees(updated);
      }
      setFormSubmitted(true);
    } else {
      goNext();
    }
  };

  const isStep0 = step === 0;
  const isStep0Valid =
    requiredFields.every((field) => {
      const value = formData[field];
      if (field === "firstName" || field === "lastName") {
        return value.trim() && !errors[field];
      }
      return value && !errors[field];
    }) &&
    validateEmail(formData.email) &&
    (!formData.phone || validatePhone(formData.phone));
  const nextDisabled = isStep0 ? !isStep0Valid : false;

  return (
    <div className="signup-form">
      <FormStepManager
        step={step}
        steps={steps}
        goNext={goNext}
        goBack={goBack}
        handleSubmit={handleSubmit}
        formSubmitted={formSubmitted}
        nextDisabled={nextDisabled}
      >
        <FormSection title={steps[0]}>
          <>
            <Typography className="signup-form__description" variant="p">
              Fill out your personal details below to register for an event.
            </Typography>
            <FormField label="First Name" htmlFor="firstName">
              {errors && errors.firstName && (
                <Typography
                  variant="p"
                  style={{ color: "red", marginBottom: 4 }}
                >
                  {errors.firstName}
                </Typography>
              )}
              <FormInput
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="your first name"
                required={true}
                error={!!errors.firstName}
              />
            </FormField>
            <FormField label="Last Name" htmlFor="lastName">
              {errors && errors.lastName && (
                <Typography
                  variant="p"
                  style={{ color: "red", marginBottom: 4 }}
                >
                  {errors.lastName}
                </Typography>
              )}
              <FormInput
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="your last name"
                required={true}
                error={!!errors.lastName}
              />
            </FormField>
            <FormField label="Email address" htmlFor="email">
              {errors && errors.email && (
                <Typography variant="p" className="form__error-text">
                  {errors.email}
                </Typography>
              )}
              <FormInput
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your email"
                required={true}
                error={!!errors.email}
              />
            </FormField>
            <FormField label="Current role (optional)" htmlFor="role">
              <FormInput
                id="role"
                name="role"
                type="text"
                value={formData.role}
                onChange={handleChange}
                placeholder="your current role"
              />
            </FormField>
            <FormField label="Phone number (optional)" htmlFor="phone">
              {errors && errors.phone && (
                <Typography variant="p" className="form__error-text">
                  {errors.phone}
                </Typography>
              )}
              <FormInput
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="your phone number"
                error={!!errors.phone}
              />
            </FormField>
          </>
        </FormSection>
        <FormSection title={steps[1]}>
          <>
            <Typography className="signup-form__description" variant="p">
              If you'd like to register for any additional events, simply select
              the checkboxes and we can reserve your spot for those as well.
            </Typography>
            <List className="event-list">
              {events.map((event) => (
                <ListItem key={event.id} className="event-list__item">
                  <Checkbox
                    id={`event-${event.id}`}
                    className="form__checkbox--custom"
                    name="event"
                    data-event-id={event.id}
                    label={
                      <>
                        <div className="event-list__title">{event.title}</div>
                        <div className="event-list__date">
                          {formatDate(event.date)}
                        </div>
                        <div className="event-list__time">{event.time}</div>
                      </>
                    }
                    onChange={handleChange}
                    checked={formData.attendingEvents.includes(event.id)}
                  />
                </ListItem>
              ))}
            </List>
            <FormField
              label="Primary reason for attending?"
              htmlFor="reasonForAttending"
            >
              <Select
                id="reasonForAttending"
                name="reasonForAttending"
                options={[
                  "Networking",
                  "Professional development",
                  "Job searching",
                  "Hiring",
                  "Just for fun",
                ]}
                value={formData.reasonForAttending}
                onChange={handleChange}
                placeholder="Select your reason..."
              />
            </FormField>
          </>
        </FormSection>
        <FormSection
          title={!formSubmitted ? steps[2] : STEP_TITLES.SUCCESS}
          icon={formSubmitted ? <Icon name="check" variant="inverse" /> : null}
        >
          {!formSubmitted ? (
            <>
              <div className="signup-form__confirm-group confirm-group">
                <Typography className="signup-form__description" variant="p">
                  To edit any of these responses, use the Back button.
                </Typography>

                <Typography variant="h3" className="signup-form__h3">
                  Personal information
                </Typography>
                <Typography variant="h4" className="signup-form__h4">
                  Name
                </Typography>
                <Typography variant="p" className="signup-form__p">
                  {formData.firstName} {formData.lastName}
                </Typography>

                <Typography variant="h4" className="signup-form__h4">
                  Email
                </Typography>
                <Typography variant="p" className="signup-form__p">
                  {formData.email}
                </Typography>
                {formData.phone && (
                  <>
                    <Typography variant="h4" className="signup-form__h4">
                      Phone
                    </Typography>
                    <Typography variant="p" className="signup-form__p">
                      {formData.phone}
                    </Typography>
                  </>
                )}

                <Typography variant="h4" className="signup-form__h4">
                  Reason for attending
                </Typography>
                <Typography variant="p" className="signup-form__p">
                  {formData.reasonForAttending || "Not specified"}
                </Typography>
              </div>

              <Typography variant="h4" className="signup-form__h4">
                Events selected
              </Typography>

              <List className="confirm-group__event-list">
                {events
                  .filter((event) =>
                    formData.attendingEvents.includes(event.id)
                  )
                  .map((event) => (
                    <ListItem key={event.id}>
                      <Typography type="p" className="signup-form__p">
                        <span className="confirm-group__event-title">
                          {event.title}
                        </span>
                        <span className="confirm-group__event-date">
                          {formatDate(event.date)}
                        </span>
                        <span className="confirm-group__event-time">
                          {event.time}
                        </span>
                      </Typography>
                    </ListItem>
                  ))}
              </List>
            </>
          ) : (
            <Typography className="signup-form__description" variant="p">
              Need to make changes? We totally understand things come up.
              Luckily, you're in control of your events and you can easily
              change your registration, guest info, or preferences whenever you
              need to.
            </Typography>
          )}
        </FormSection>
      </FormStepManager>
    </div>
  );
};

export default SignupForm;
