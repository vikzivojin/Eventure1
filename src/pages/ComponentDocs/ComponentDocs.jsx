import "./ComponentDocs.scss";

import Attendee from "../../components/Attendee/Attendee.jsx";
import Avatar from "../../components/Avatar/Avatar.jsx";
import Button from "../../components/Button/Button.jsx";
import Checkbox from "../../components/Checkbox/Checkbox.jsx";
import ContentCard from "../../components/ContentCard/ContentCard.jsx";
import EventGraphic from "../../components/EventGraphic/EventGraphic.jsx";
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
import Select from "../../components/Select/Select.jsx";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Typography from "../../components/Typography/Typography.jsx";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";

const ComponentDocs = () => {
  const [selectedRadio, setSelectedRadio] = useState("radio-button-1");
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Option 1");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const avatarImages = [
    "https://unit-3-api-6b6268be0363.herokuapp.com/avatars/b835f6db-9340-4458-ae15-ea382ccc5c7f.jpg",
    "https://unit-3-api-6b6268be0363.herokuapp.com/avatars/4cb928d2-9853-45c5-bd93-5c37741e567a.jpg",
    "https://unit-3-api-6b6268be0363.herokuapp.com/avatars/9554ff3f-840f-4027-b656-508485f0d102.jpg",
    "https://unit-3-api-6b6268be0363.herokuapp.com/avatars/646daee5-3598-4ecc-b644-932b6009d38f.jpg",
    "https://unit-3-api-6b6268be0363.herokuapp.com/avatars/7d7ae252-a724-4cbd-98d9-4b18f93d5a0a.jpg",
    "https://unit-3-api-6b6268be0363.herokuapp.com/avatars/4dc727a2-a940-43dc-9c0c-d8bd8444731e.jpg",
    "https://unit-3-api-6b6268be0363.herokuapp.com/avatars/98d6a02c-c101-4473-9a07-337b5d67c31a.jpg",
    "https://unit-3-api-6b6268be0363.herokuapp.com/avatars/18b8b13a-8c77-4864-87f9-cd02ba78ea54.jpg",
    "https://unit-3-api-6b6268be0363.herokuapp.com/avatars/c45c9284-6299-475a-bd51-1a0f16782b29.jpg",
    "https://unit-3-api-6b6268be0363.herokuapp.com/avatars/c60d6e84-ad08-4c88-b0f1-493492d9f1cf.jpg",
    "https://unit-3-api-6b6268be0363.herokuapp.com/avatars/40e841bc-1860-4128-8c57-5ffaa590812a.jpg",
    "https://unit-3-api-6b6268be0363.herokuapp.com/avatars/82c2b9c6-7785-4294-925e-ccdc6ff71030.jpg",
    "https://unit-3-api-6b6268be0363.herokuapp.com/avatars/6ff8dfc3-d1ca-4602-88a1-ebf355e35ef0.jpg",
    "https://unit-3-api-6b6268be0363.herokuapp.com/avatars/41bf5cca-1f91-4b89-9374-58c1ef9b0e12.jpg",
    "https://unit-3-api-6b6268be0363.herokuapp.com/avatars/1ad2a80a-283e-480a-bf6c-bee28427a052.jpg",
    "https://unit-3-api-6b6268be0363.herokuapp.com/avatars/d183df23-3cf4-408b-bdf9-b42e866dedd8.jpg",
    "https://unit-3-api-6b6268be0363.herokuapp.com/avatars/a39ad947-66ee-4295-8bad-2b79a3e408d8.jpg",
    "https://unit-3-api-6b6268be0363.herokuapp.com/avatars/9097bd35-29cd-4c9d-843d-65402d971306.jpg",
    "https://unit-3-api-6b6268be0363.herokuapp.com/avatars/8f819e96-b42d-41ec-a5ea-d42b6f245e0d.jpg",
    "https://unit-3-api-6b6268be0363.herokuapp.com/avatars/c968b861-f8ab-4d33-bf72-530db6a4d476.jpg",
  ];

  const randomAvatar = () =>
    avatarImages[Math.floor(Math.random() * avatarImages.length)];

  const navigationSections = [
    { id: "typography", label: "Typography", category: "Foundation" },
    { id: "icon", label: "Icon", category: "Foundation" },
    { id: "page-header", label: "Page Header", category: "Layout" },
    { id: "page-footer", label: "Page Footer", category: "Layout" },
    { id: "button", label: "Button", category: "Basic UI" },
    { id: "avatar", label: "Avatar", category: "Basic UI" },
    { id: "list", label: "List", category: "Basic UI" },
    { id: "radio-button", label: "Radio Button", category: "Form" },
    { id: "checkbox", label: "Checkbox", category: "Form" },
    { id: "select", label: "Select", category: "Form" },
    { id: "form-input", label: "Form Input", category: "Form" },
    { id: "form-field", label: "Form Field", category: "Form" },
    { id: "form-textarea", label: "Form Textarea", category: "Form" },
    { id: "form-section", label: "Form Section", category: "Form" },
    { id: "form", label: "Form", category: "Form" },
    { id: "form-step-manager", label: "Form Step Manager", category: "Form" },
    { id: "event-graphic", label: "Event Graphic", category: "Event" },
    { id: "content-card", label: "Content Card", category: "Event" },
    { id: "attendee", label: "Attendee", category: "Event" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "auto" });
    }
  };

  const Navigation = () => (
    <nav className="component-docs__navigation">
      <div className="component-docs__nav-content">
        <Typography variant="h3" className="component-docs__nav-title">
          Components
        </Typography>
        <div className="component-docs__nav-sections">
          {navigationSections.map((section) => (
            <button
              key={section.id}
              className="component-docs__nav-item"
              onClick={() => scrollToSection(section.id)}
            >
              <span className="component-docs__nav-category">
                {section.category}
              </span>
              <span className="component-docs__nav-label">{section.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
  };

  const handleCheckboxChange = (value) => {
    setSelectedCheckboxes((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  const handleSelectChange = (value) => {
    setSelectedOption(value);
  };

  const handleFormInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleStepSubmit = (e) => {
    e.preventDefault();
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else {
      setFormSubmitted(true);
    }
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const attendee = {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    avatar: randomAvatar(),
  };

  const typographyCode = `<Typography variant="h1">h1</Typography>
<Typography variant="h2">h2</Typography>
<Typography variant="h3">h3</Typography>
<Typography variant="h4">h4</Typography>
<Typography variant="h5">h5</Typography>
<Typography variant="h6">h6</Typography>
<Typography variant="p">p</Typography>`;

  const buttonCode = `<Button>Button</Button>
<Button isLink={true} to="/">Link</Button>`;

  const radioButtonCode = `const [selectedRadio, setSelectedRadio] = useState("radio-button-1");

const handleRadioChange = (value) => {
  setSelectedRadio(value);
};

<RadioButton
  id="radio-button-1"
  name="radio-button"
  label="Radio Button 1"
  value="radio-button-1"
  checked={selectedRadio === "radio-button-1"}
  onChange={handleRadioChange}
/>
<RadioButton
  id="radio-button-2"
  name="radio-button"
  label="Radio Button 2"
  value="radio-button-2"
  checked={selectedRadio === "radio-button-2"}
  onChange={handleRadioChange}
/>
<RadioButton
  id="radio-button-3"
  name="radio-button"
  label="Radio Button 3"
  value="radio-button-3"
  checked={selectedRadio === "radio-button-3"}
  onChange={handleRadioChange}
/>`;

  const checkboxCode = `const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

const handleCheckboxChange = (value) => {
  setSelectedCheckboxes((prev) => {
    if (prev.includes(value)) {
      return prev.filter((item) => item !== value);
    } else {
      return [...prev, value];
    }
  });
};

<Checkbox
  id="checkbox-1"
  name="checkbox"
  label="Checkbox 1"
  value="checkbox-1"
  checked={selectedCheckboxes.includes("checkbox-1")}
  onChange={() => handleCheckboxChange("checkbox-1")}
/>
<Checkbox
  id="checkbox-2"
  name="checkbox"
  label="Checkbox 2"
  value="checkbox-2"
  checked={selectedCheckboxes.includes("checkbox-2")}
  onChange={() => handleCheckboxChange("checkbox-2")}
/>
<Checkbox
  id="checkbox-3"
  name="checkbox"
  label="Checkbox 3"
  value="checkbox-3"
  checked={selectedCheckboxes.includes("checkbox-3")}
  onChange={() => handleCheckboxChange("checkbox-3")}
/>`;

  const selectCode = `const [selectedOption, setSelectedOption] = useState("option-1");

const handleSelectChange = (value) => {
  setSelectedOption(value);
};

<Select
  id="select-1"
  name="select"
  label="Select 1"
  options={["Option 1", "Option 2", "Option 3"]}
  value={selectedOption}
  onChange={handleSelectChange}
/>`;

  const formCode = `<Form onSubmit={handleFormSubmit}>
  <FormField label="Name" htmlFor="name">
    <FormInput
      id="name"
      name="name"
      type="text"
      placeholder="Enter your name"
      value={formData.name}
      onChange={(e) => handleFormInputChange("name", e.target.value)}
      required
    />
  </FormField>
  <FormField label="Email" htmlFor="email">
    <FormInput
      id="email"
      name="email"
      type="email"
      placeholder="Enter your email"
      value={formData.email}
      onChange={(e) => handleFormInputChange("email", e.target.value)}
      required
    />
  </FormField>
  <Button type="submit">Submit</Button>
</Form>`;

  const formInputCode = `<FormInput
  id="text-input"
  name="text"
  type="text"
  placeholder="Text input"
  value={formData.name}
  onChange={(e) => handleFormInputChange("name", e.target.value)}
/>

<FormInput
  id="email-input"
  name="email"
  type="email"
  placeholder="Email input"
  value={formData.email}
  onChange={(e) => handleFormInputChange("email", e.target.value)}
  required
/>

<FormInput
  id="error-input"
  name="error"
  type="text"
  placeholder="Input with error"
  error={true}
/>`;

  const formFieldCode = `<FormField label="Name" htmlFor="name">
  <FormInput
    id="name"
    name="name"
    type="text"
    placeholder="Enter your name"
  />
</FormField>

<FormField label="Email" htmlFor="email">
  <FormInput
    id="email"
    name="email"
    type="email"
    placeholder="Enter your email"
  />
</FormField>`;

  const formTextareaCode = `<FormField label="Message" htmlFor="message">
  <FormTextarea
    id="message"
    name="message"
    placeholder="Enter your message"
    rows="4"
    value={formData.message}
    onChange={(e) => handleFormInputChange("message", e.target.value)}
  />
</FormField>

<FormField label="Message with Error" htmlFor="message-error">
  <FormTextarea
    id="message-error"
    name="message-error"
    placeholder="Textarea with error state"
    rows="4"
    error={true}
  />
</FormField>`;

  const formSectionCode = `<FormSection title="Personal Information" icon={<Icon name="user" />}>
  <FormField label="Name" htmlFor="name">
    <FormInput
      id="name"
      name="name"
      type="text"
      placeholder="Enter your name"
    />
  </FormField>
  <FormField label="Email" htmlFor="email">
    <FormInput
      id="email"
      name="email"
      type="email"
      placeholder="Enter your email"
    />
  </FormField>
</FormSection>

<FormSection title="Additional Information">
  <FormField label="Message" htmlFor="message">
    <FormTextarea
      id="message"
      name="message"
      placeholder="Enter your message"
      rows="4"
    />
  </FormField>
</FormSection>`;

  const formStepManagerCode = `const [currentStep, setCurrentStep] = useState(0);
const [formSubmitted, setFormSubmitted] = useState(false);

const handleStepSubmit = (e) => {
  e.preventDefault();
  if (currentStep < 2) {
    setCurrentStep(currentStep + 1);
  } else {
    setFormSubmitted(true);
  }
};

const goBack = () => {
  if (currentStep > 0) {
    setCurrentStep(currentStep - 1);
  }
};

const steps = [
  <div key="step1">
    <FormField label="Name" htmlFor="name">
      <FormInput
        id="name"
        name="name"
        type="text"
        placeholder="Enter your name"
        required
      />
    </FormField>
  </div>,
  <div key="step2">
    <FormField label="Email" htmlFor="email">
      <FormInput
        id="email"
        name="email"
        type="email"
        placeholder="Enter your email"
        required
      />
    </FormField>
  </div>,
  <div key="step3">
    <FormField label="Message" htmlFor="message">
      <FormTextarea
        id="message"
        name="message"
        placeholder="Enter your message"
        rows="4"
      />
    </FormField>
  </div>
];

<FormStepManager
  step={currentStep}
  steps={steps}
  goBack={goBack}
  handleSubmit={handleStepSubmit}
  formSubmitted={formSubmitted}
>
  {steps}
</FormStepManager>`;

  const avatarCode = `<Avatar />
<Avatar imageSrc="path/to/image.jpg" altText="User avatar" />
<Avatar userInitials="JD" />`;

  const listCode = `<List variant="unordered">
  <ListItem>First item</ListItem>
  <ListItem>Second item</ListItem>
  <ListItem>Third item</ListItem>
</List>

<List variant="ordered">
  <ListItem>First item</ListItem>
  <ListItem>Second item</ListItem>
  <ListItem>Third item</ListItem>
</List>

<List className="custom-list">
  <ListItem className="custom-item">Custom styled item</ListItem>
</List>`;

  const eventGraphicCode = `<EventGraphic date="2024-01-15" />
<EventGraphic date="2024-12-25" />
<EventGraphic date="2024-06-10" />`;

  const contentCardCode = `<ContentCard
  iconName="calendar"
  cardTitle="Event Management"
  description="Manage your events with ease"
  buttonText="Learn More"
  buttonLink="/events"
/>

<ContentCard
  iconName="user"
  cardTitle="User Profile"
  description="Update your profile information"
  buttonText="Edit Profile"
  buttonLink="/profile"
  className="custom-card"
/>`;

  const attendeeCode = `const attendee = {
  id: "1",
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  avatar: "path/to/avatar.jpg", 
};

<Attendee attendee={attendee} />`;

  const pageHeaderCode = `<PageHeader title="Page Title" />
<PageHeader 
  title="Page Title" 
  subtitle="Page subtitle"
>
  <Button>Action Button</Button>
</PageHeader>`;

  const pageFooterCode = `<PageFooter />`;

  const iconCode = `<Icon name="calendar" />
<Icon name="user" />
<Icon name="pencil" />
<Icon name="check" />`;

  return (
    <div className="component-docs">
      <PageHeader title="Component Docs"></PageHeader>
      <div className="component-docs__container">
        <Navigation />
        <main className="component-docs__wrapper">
          {/* Introduction Section */}
          <section className="component-docs__section">
            <Typography variant="h2">Getting Started</Typography>
            <Typography variant="p">
              Welcome to the Eventure Component Library! This documentation
              provides comprehensive examples and usage patterns for all
              available components. Each component section includes live
              examples, code snippets, and implementation details to help you
              integrate them into your project.
            </Typography>
            <Typography variant="p">
              To use a component in your project, copy the component folder from
              the <code>src/components/</code> directory and include it in your
              project's components folder. Then import the component into the
              file where you want to use it. For example:{" "}
              <code>import Button from './components/Button/Button.jsx';</code>.
              Each component is self-contained with its own styles.
            </Typography>
          </section>
          {/* Foundation Components */}
          <section id="typography" className="component-docs__section">
            <Typography variant="h2">Typography</Typography>
            <Typography variant="h1">h1</Typography>
            <Typography variant="h2">h2</Typography>
            <Typography variant="h3">h3</Typography>
            <Typography variant="h4">h4</Typography>
            <Typography variant="h5">h5</Typography>
            <Typography variant="h6">h6</Typography>
            <Typography variant="p">p</Typography>
            <SyntaxHighlighter
              language="jsx"
              style={tomorrow}
              customStyle={{
                borderRadius: "8px",
                fontSize: "14px",
                lineHeight: "1.5",
              }}
            >
              {typographyCode}
            </SyntaxHighlighter>
          </section>

          <section id="icon" className="component-docs__section">
            <Typography variant="h2">Icon</Typography>
            <Icon name="calendar" />
            <Icon name="user" />
            <Icon name="pencil" />
            <Icon name="check" />
            <SyntaxHighlighter
              language="jsx"
              style={tomorrow}
              customStyle={{
                borderRadius: "8px",
                fontSize: "14px",
                lineHeight: "1.5",
              }}
            >
              {iconCode}
            </SyntaxHighlighter>
          </section>

          {/* Layout Components */}
          <section id="page-header" className="component-docs__section">
            <Typography variant="h2">Page Header</Typography>
            <PageHeader title="Page Title" />
            <PageHeader title="Page Title" subtitle="Page subtitle">
              <Button>Action Button</Button>
            </PageHeader>
            <SyntaxHighlighter
              language="jsx"
              style={tomorrow}
              customStyle={{
                borderRadius: "8px",
                fontSize: "14px",
                lineHeight: "1.5",
              }}
            >
              {pageHeaderCode}
            </SyntaxHighlighter>
          </section>

          <section id="page-footer" className="component-docs__section">
            <Typography variant="h2">Page Footer</Typography>
            <PageFooter />
            <SyntaxHighlighter
              language="jsx"
              style={tomorrow}
              customStyle={{
                borderRadius: "8px",
                fontSize: "14px",
                lineHeight: "1.5",
              }}
            >
              {pageFooterCode}
            </SyntaxHighlighter>
          </section>

          {/* Basic UI Components */}
          <section id="button" className="component-docs__section">
            <Typography variant="h2">Buttons</Typography>
            <Button>Button</Button>
            <Button isLink={true} to="/">
              Link
            </Button>

            <Button variant="disabled">Disabled</Button>
            <SyntaxHighlighter
              language="jsx"
              style={tomorrow}
              customStyle={{
                borderRadius: "8px",
                fontSize: "14px",
                lineHeight: "1.5",
              }}
            >
              {buttonCode}
            </SyntaxHighlighter>
          </section>

          <section id="avatar" className="component-docs__section">
            <Typography variant="h2">Avatar</Typography>
            <Avatar />
            <Avatar imageSrc={randomAvatar()} altText="User avatar" />
            <Avatar userInitials="JD" />
            <SyntaxHighlighter
              language="jsx"
              style={tomorrow}
              customStyle={{
                borderRadius: "8px",
                fontSize: "14px",
                lineHeight: "1.5",
              }}
            >
              {avatarCode}
            </SyntaxHighlighter>
          </section>

          <section id="list" className="component-docs__section">
            <Typography variant="h2">List</Typography>
            <List variant="unordered">
              <ListItem>First item</ListItem>
              <ListItem>Second item</ListItem>
              <ListItem>Third item</ListItem>
            </List>
            <List variant="ordered">
              <ListItem>First item</ListItem>
              <ListItem>Second item</ListItem>
              <ListItem>Third item</ListItem>
            </List>
            <List className="custom-list">
              <ListItem className="custom-item">Custom styled item</ListItem>
            </List>
            <SyntaxHighlighter
              language="jsx"
              style={tomorrow}
              customStyle={{
                borderRadius: "8px",
                fontSize: "14px",
                lineHeight: "1.5",
              }}
            >
              {listCode}
            </SyntaxHighlighter>
          </section>

          {/* Form Components */}
          <section id="radio-button" className="component-docs__section">
            <Typography variant="h2">Radio Buttons</Typography>
            <RadioButton
              id="radio-button-1"
              name="radio-button"
              label="Radio Button 1"
              value="radio-button-1"
              checked={selectedRadio === "radio-button-1"}
              onChange={handleRadioChange}
            />
            <RadioButton
              id="radio-button-2"
              name="radio-button"
              label="Radio Button 2"
              value="radio-button-2"
              checked={selectedRadio === "radio-button-2"}
              onChange={handleRadioChange}
            />
            <RadioButton
              id="radio-button-3"
              name="radio-button"
              label="Radio Button 3"
              value="radio-button-3"
              checked={selectedRadio === "radio-button-3"}
              onChange={handleRadioChange}
            />
            <SyntaxHighlighter
              language="jsx"
              style={tomorrow}
              customStyle={{
                borderRadius: "8px",
                fontSize: "14px",
                lineHeight: "1.5",
              }}
            >
              {radioButtonCode}
            </SyntaxHighlighter>
          </section>

          <section id="checkbox" className="component-docs__section">
            <Typography variant="h2">Checkboxes</Typography>
            <Checkbox
              id="checkbox-1"
              name="checkbox"
              label="Checkbox 1"
              value="checkbox-1"
              checked={selectedCheckboxes.includes("checkbox-1")}
              onChange={() => handleCheckboxChange("checkbox-1")}
            />
            <Checkbox
              id="checkbox-2"
              name="checkbox"
              label="Checkbox 2"
              value="checkbox-2"
              checked={selectedCheckboxes.includes("checkbox-2")}
              onChange={() => handleCheckboxChange("checkbox-2")}
            />
            <Checkbox
              id="checkbox-3"
              name="checkbox"
              label="Checkbox 3"
              value="checkbox-3"
              checked={selectedCheckboxes.includes("checkbox-3")}
              onChange={() => handleCheckboxChange("checkbox-3")}
            />
            <SyntaxHighlighter
              language="jsx"
              style={tomorrow}
              customStyle={{
                borderRadius: "8px",
                fontSize: "14px",
                lineHeight: "1.5",
              }}
            >
              {checkboxCode}
            </SyntaxHighlighter>
          </section>

          <section id="select" className="component-docs__section">
            <Typography variant="h2">Select</Typography>
            <Select
              id="select-1"
              name="select"
              label="Select 1"
              options={["Option 1", "Option 2", "Option 3"]}
              value={selectedOption}
              onChange={handleSelectChange}
            />
            <SyntaxHighlighter
              language="jsx"
              style={tomorrow}
              customStyle={{
                borderRadius: "8px",
                fontSize: "14px",
                lineHeight: "1.5",
              }}
            >
              {selectCode}
            </SyntaxHighlighter>
          </section>

          <section id="form-input" className="component-docs__section">
            <Typography variant="h2">Form Input</Typography>
            <FormInput
              id="text-input"
              name="text"
              type="text"
              placeholder="Text input"
              value={formData.name}
              onChange={(e) => handleFormInputChange("name", e.target.value)}
            />
            <FormInput
              id="email-input"
              name="email"
              type="email"
              placeholder="Email input"
              value={formData.email}
              onChange={(e) => handleFormInputChange("email", e.target.value)}
              required
            />
            <FormInput
              id="error-input"
              name="error"
              type="text"
              placeholder="Input with error"
              error={true}
            />
            <SyntaxHighlighter
              language="jsx"
              style={tomorrow}
              customStyle={{
                borderRadius: "8px",
                fontSize: "14px",
                lineHeight: "1.5",
              }}
            >
              {formInputCode}
            </SyntaxHighlighter>
          </section>

          <section id="form-field" className="component-docs__section">
            <Typography variant="h2">Form Field</Typography>
            <FormField label="Name" htmlFor="name">
              <FormInput
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
              />
            </FormField>
            <FormField label="Email" htmlFor="contactEmail">
              <FormInput
                id="contactEmail"
                name="email"
                type="email"
                placeholder="Enter your email"
              />
            </FormField>
            <SyntaxHighlighter
              language="jsx"
              style={tomorrow}
              customStyle={{
                borderRadius: "8px",
                fontSize: "14px",
                lineHeight: "1.5",
              }}
            >
              {formFieldCode}
            </SyntaxHighlighter>
          </section>

          <section id="form-textarea" className="component-docs__section">
            <Typography variant="h2">Form Textarea</Typography>
            <FormField label="Message" htmlFor="message">
              <FormTextarea
                id="message"
                name="message"
                placeholder="Enter your message"
                rows="4"
                value={formData.message}
                onChange={(e) =>
                  handleFormInputChange("message", e.target.value)
                }
              />
            </FormField>
            <FormField label="Message with Error" htmlFor="message-error">
              <FormTextarea
                id="message-error"
                name="message-error"
                placeholder="Textarea with error state"
                rows="4"
                error={true}
              />
            </FormField>
            <SyntaxHighlighter
              language="jsx"
              style={tomorrow}
              customStyle={{
                borderRadius: "8px",
                fontSize: "14px",
                lineHeight: "1.5",
              }}
            >
              {formTextareaCode}
            </SyntaxHighlighter>
          </section>

          <section id="form-section" className="component-docs__section">
            <Typography variant="h2">Form Section</Typography>
            <FormSection
              title="Personal Information"
              icon={<Icon name="user" />}
            >
              <FormField label="Name" htmlFor="firstName">
                <FormInput
                  id="firstName"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                />
              </FormField>
              <FormField label="Email" htmlFor="email">
                <FormInput
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </FormField>
            </FormSection>
            <FormSection title="Additional Information">
              <FormField label="Message" htmlFor="formMessage">
                <FormTextarea
                  id="formMessage"
                  name="message"
                  placeholder="Enter your message"
                  rows="4"
                />
              </FormField>
            </FormSection>
            <SyntaxHighlighter
              language="jsx"
              style={tomorrow}
              customStyle={{
                borderRadius: "8px",
                fontSize: "14px",
                lineHeight: "1.5",
              }}
            >
              {formSectionCode}
            </SyntaxHighlighter>
          </section>

          <section id="form" className="component-docs__section">
            <Typography variant="h2">Form</Typography>
            <Form onSubmit={handleFormSubmit}>
              <FormField label="Name" htmlFor="name">
                <FormInput
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    handleFormInputChange("name", e.target.value)
                  }
                  required
                />
              </FormField>
              <FormField label="Email" htmlFor="userEmail">
                <FormInput
                  id="userEmail"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    handleFormInputChange("email", e.target.value)
                  }
                  required
                />
              </FormField>
              <Button type="submit">Submit</Button>
            </Form>
            <SyntaxHighlighter
              language="jsx"
              style={tomorrow}
              customStyle={{
                borderRadius: "8px",
                fontSize: "14px",
                lineHeight: "1.5",
              }}
            >
              {formCode}
            </SyntaxHighlighter>
          </section>

          <section id="form-step-manager" className="component-docs__section">
            <Typography variant="h2">Form Step Manager</Typography>
            <FormStepManager
              step={currentStep}
              steps={[
                <div key="step1">
                  <FormField label="Name" htmlFor="name">
                    <FormInput
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                    />
                  </FormField>
                </div>,
                <div key="step2">
                  <FormField label="Email" htmlFor="email">
                    <FormInput
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </FormField>
                </div>,
                <div key="step3">
                  <FormField label="Message" htmlFor="message">
                    <FormTextarea
                      id="message"
                      name="message"
                      placeholder="Enter your message"
                      rows="4"
                    />
                  </FormField>
                </div>,
              ]}
              goBack={goBack}
              handleSubmit={handleStepSubmit}
              formSubmitted={formSubmitted}
            >
              {[
                <div key="step1">
                  <FormField label="Name" htmlFor="name">
                    <FormInput
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                    />
                  </FormField>
                </div>,
                <div key="step2">
                  <FormField label="Email" htmlFor="email">
                    <FormInput
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </FormField>
                </div>,
                <div key="step3">
                  <FormField label="Message" htmlFor="userMessage">
                    <FormTextarea
                      id="userMessage"
                      name="message"
                      placeholder="Enter your message"
                      rows="4"
                    />
                  </FormField>
                </div>,
              ]}
            </FormStepManager>
            <SyntaxHighlighter
              language="jsx"
              style={tomorrow}
              customStyle={{
                borderRadius: "8px",
                fontSize: "14px",
                lineHeight: "1.5",
              }}
            >
              {formStepManagerCode}
            </SyntaxHighlighter>
          </section>

          <section id="event-graphic" className="component-docs__section">
            <Typography variant="h2">Event Graphic</Typography>
            <EventGraphic date="2024-01-15" />
            <EventGraphic date="2024-12-25" />
            <EventGraphic date="2024-06-10" />
            <SyntaxHighlighter
              language="jsx"
              style={tomorrow}
              customStyle={{
                borderRadius: "8px",
                fontSize: "14px",
                lineHeight: "1.5",
              }}
            >
              {eventGraphicCode}
            </SyntaxHighlighter>
          </section>

          <section id="content-card" className="component-docs__section">
            <Typography variant="h2">Content Card</Typography>
            <ContentCard
              iconName="calendar"
              cardTitle="Event Management"
              description="Manage your events with ease"
              buttonText="Learn More"
              buttonLink="/events"
            />
            <ContentCard
              iconName="user"
              cardTitle="User Profile"
              description="Update your profile information"
              buttonText="Edit Profile"
              buttonLink="/profile"
              className="custom-card"
            />
            <SyntaxHighlighter
              language="jsx"
              style={tomorrow}
              customStyle={{
                borderRadius: "8px",
                fontSize: "14px",
                lineHeight: "1.5",
              }}
            >
              {contentCardCode}
            </SyntaxHighlighter>
          </section>

          <section id="attendee" className="component-docs__section">
            <Typography variant="h2">Attendee</Typography>
            <Attendee attendee={attendee} />
            <SyntaxHighlighter
              language="jsx"
              style={tomorrow}
              customStyle={{
                borderRadius: "8px",
                fontSize: "14px",
                lineHeight: "1.5",
              }}
            >
              {attendeeCode}
            </SyntaxHighlighter>
          </section>

          <section className="component-docs__section"></section>
        </main>
      </div>
    </div>
  );
};
export default ComponentDocs;
