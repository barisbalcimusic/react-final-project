import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useProductsContext } from "../../contexts/ProductsContext";
import { Link } from "react-router-dom";

const Sidebar = ({ reference, handleSidebarClick }) => {
  const { categories } = useProductsContext();

  return (
    <aside ref={reference}>
      <FontAwesomeIcon
        onClick={() => handleSidebarClick()}
        className="close-icon"
        icon={faX}
      />
      <ul>
        {categories ? (
          categories.map((category, index) => (
            <li key={index}>
              <Link
                onClick={() => handleSidebarClick()}
                className="category"
                to={`/store/${category}`}>
                {category}
              </Link>
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
