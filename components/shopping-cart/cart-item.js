import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

function CartItem() {
  const getQtyInput = () => {
    return (
      <div className="input-group input-group-sm">
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
    <div className="d-flex py-2">
      <div className="flex-shink-0">
        <img
          className="rounded"
          src={`https://source.unsplash.com/random/100x100?random=${Math.floor(
            Math.random() * 10
          )}`}
          width={100}
          height={100}
          alt="Product image."
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="ms-3 me-md-2 flex-grow-1">
        <Link href="/product/1">
          <a className="text-dark text-decoration-none">Product name here</a>
        </Link>
        <small className="d-flex flex-wrap text-muted">
          <span>Medium</span>
          <div className="vr mx-2"></div>
          <span>Pearl White</span>
        </small>
        <h5 className="fw-semibold mt-2">10000Ks</h5>
        <div className="d-inline-block d-sm-none mt-2">{getQtyInput()}</div>
      </div>
      <div className="flex-shrink-0 d-none d-sm-inline ms-3">
        {getQtyInput()}
      </div>
      <div className="flex-shrink-0 ms-4">
        <button className="btn btn-sm btn-outline-danger" type="button">
          <FontAwesomeIcon icon={["fas", "trash-alt"]} />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
