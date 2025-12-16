import Icon from "../Icon/Icon.jsx";
import Button from "../Button/Button.jsx";
import Typography from "../Typography/Typography.jsx";
import "./ContentCard.scss";

const ContentCard = ({
  iconName,
  cardTitle,
  buttonText,
  description,
  className = "",
  buttonLink,
  children,
}) => {
  return (
    <article className={`content-card ${className}`.trim()}>
      <Icon className="content-card__icon" name={iconName} />
      <Typography variant="h3" className="content-card__title">
        {cardTitle}
      </Typography>
      <p className="content-card__description">{description}</p>
      <Button
        className="content-card__button"
        type="button"
        variant="secondary"
        isLink={true}
        to={buttonLink}
      >
        {buttonText}
      </Button>
      {children}
    </article>
  );
};

export default ContentCard;
