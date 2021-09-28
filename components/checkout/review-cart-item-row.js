import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

function ReviewCartItemRow() {
  return (
    <tr>
      <td scope="row">
        <div className="hstack">
          <img
            className="rounded"
            src={`https://source.unsplash.com/random/100x100?random=${Math.floor(
              Math.random() * 10
            )}`}
            width={80}
            height={80}
            alt="Product image."
            style={{ objectFit: "cover" }}
          />
          <div className="ms-3">
            <span className="h5">Product name here</span>
            <small className="d-flex text-muted" style={{ fontSize: 12 }}>
              <span>Medium</span>
              ,&nbsp;
              <span>White</span>
            </small>
          </div>
        </div>
      </td>
      <td className="text-end">
        <span>1 &times; 10000Ks</span>
      </td>
    </tr>
  );
}

export default ReviewCartItemRow;
