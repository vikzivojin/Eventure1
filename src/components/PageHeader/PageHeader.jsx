import "./PageHeader.scss";
import Typography from "../Typography/Typography.jsx";

const PageHeader = ({ title, subtitle, children }) => {
  return (
    <header className="page-header">
      <Typography variant="h1" className="page-header__title">
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="h2" className="page-header__subtitle">
          {subtitle}
        </Typography>
      )}
      {children && children}
    </header>
  );
};

export default PageHeader;
