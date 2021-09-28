import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

function CartItemRow() {
  const getQtyInput = () => {
    return (
      <div className="input-group input-group-sm" style={{ width: 100 }}>
        <button className="btn btn-outline-primary" type="button">
          <FontAwesomeIcon icon={["fas", "minus"]} />
        </button>
        <input
          type="text"
          className="form-control text-center border-primary"
          placeholder=""
          defaultValue="1"
          size="2"
        />
        <button className="btn btn-outline-primary" type="button">
          <FontAwesomeIcon icon={["fas", "plus"]} />
        </button>
      </div>
    );
  };

  return (
    <tr>
      <td scope="row">
        <div className="hstack">
          <img
            className="rounded"
            src={`https://source.unsplash.com/random/100x100?random=${Math.floor(
              Math.random() * 50
            )}`}
            width={80}
            height={80}
            alt="Product image."
            style={{ objectFit: "cover" }}
          />
          <div className="ms-3">
            <span className="h5">
              <Link href="/product/1">
                <a className="link-dark text-decoration-none">
                  Product name here
                </a>
              </Link>
            </span>
            <small className="d-flex text-muted" style={{ fontSize: 12 }}>
              <span>Medium</span>
              ,&nbsp;
              <span>White</span>
            </small>
          </div>
        </div>
      </td>
      <td>
        <h6 className="mb-0">10000Ks</h6>
      </td>
      <td>
        <div className="d-flex">
          <div>{getQtyInput()}</div>
        </div>
      </td>
      <td>
        <button className="btn btn-sm btn-danger" type="button">
          <FontAwesomeIcon icon={["fas", "trash-alt"]} />
        </button>
      </td>
    </tr>
  );
}

export default CartItemRow;
