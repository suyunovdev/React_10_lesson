import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faCartShopping,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const IconsCopm = () => {
  return (
    <div className="header__icons">
      <FontAwesomeIcon icon={faUser} className="icon" />
      <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
      <FontAwesomeIcon icon={faHeart} className="icon" />
      <Link to="/cart">
        <FontAwesomeIcon icon={faCartShopping} className="icon" />
      </Link>
    </div>
  );
};

export default IconsCopm;
