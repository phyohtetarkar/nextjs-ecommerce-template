import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProductRating() {
  return (
    <div className="hstack">
      <FontAwesomeIcon
        icon={["fas", "star"]}
        size="sm"
        className="text-warning"
      />
      <FontAwesomeIcon
        icon={["fas", "star"]}
        size="sm"
        className="text-warning"
      />
      <FontAwesomeIcon
        icon={["fas", "star"]}
        size="sm"
        className="text-warning"
      />
      <FontAwesomeIcon
        icon={["fas", "star"]}
        size="sm"
        className="text-warning"
      />
      <FontAwesomeIcon
        icon={["fas", "star-half-alt"]}
        size="sm"
        className="text-warning"
      />
    </div>
  );
}

export default ProductRating;
