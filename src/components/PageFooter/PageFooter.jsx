import "./PageFooter.scss";

import List from "../List/List.jsx";
import ListItem from "../List/ListItem.jsx";
import Typography from "../Typography/Typography.jsx";

const PageFooter = () => {
  return (
    <footer className="page-footer">
      <List variant="unordered" className="page-footer__list">
        <ListItem className="page-footer__item">
          <a className="page-footer__link" to="#">
            Terms and conditions
          </a>
        </ListItem>
        <ListItem className="page-footer__item">
          <a className="page-footer__link" to="#">
            Privacy policy
          </a>
        </ListItem>
      </List>

      <Typography variant="p" className="page-footer__copy">
        &copy; {new Date().getFullYear()} Event sign-up page. All rights
        reserved.
      </Typography>
    </footer>
  );
};

export default PageFooter;
