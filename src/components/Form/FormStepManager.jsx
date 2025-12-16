import Button from "../Button/Button.jsx";
import Form from "./Form.jsx";
import PageHeader from "../PageHeader/PageHeader.jsx";
import Typography from "../Typography/Typography.jsx";

const FormStepManager = ({
  children,
  step,
  steps,
  goBack,
  handleSubmit,
  formSubmitted,
  nextDisabled = false,
}) => {
  return (
    <>
      <PageHeader title="Event">
        <Typography className="form-steps" variant="p">
          Step {step + 1} of {steps.length}
        </Typography>
      </PageHeader>
      <Form
        className={`form ${
          formSubmitted === true ? "form--confirmation" : null
        }`}
        onSubmit={handleSubmit}
      >
        {children[step]}
        <div className="form__navigation">
          {step !== steps.length && !formSubmitted && (
            <Button
              type="button"
              variant="secondary"
              className="form__back"
              onClick={goBack}
            >
              Back
            </Button>
          )}

          {!formSubmitted ? (
            <Button
              type="submit"
              className="form__next"
              disabled={nextDisabled}
            >
              {step === steps.length - 1 ? "Submit" : "Next"}
            </Button>
          ) : (
            <Button isLink={true} to="/">
              Back to events
            </Button>
          )}
        </div>
      </Form>
    </>
  );
};

export default FormStepManager;
