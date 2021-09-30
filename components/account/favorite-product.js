import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import ProductRating from "../product-rating";

function FavoriteProduct({ id }) {
  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body">
        <div className="d-flex py-2">
          <div className="flex-shink-0" style={{ height: 80 }}>
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
          </div>
          <div className="d-flex flex-column flex-grow-1 ms-3">
            <Link href="/product/1">
              <a className="text-dark text-decoration-none fw-semibold">
                Product name here
              </a>
            </Link>
            <small>
              <ProductRating />
            </small>
            <h6 className="mb-0 fw-semibold mt-2">15000Ks</h6>
            <div className="mb-2 text-truncate" style={{ maxHeight: 44 }}>
              <div className="small text-muted text-wrap">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </div>
            </div>
            <div className="hstack gap-2">
              <button className="btn btn-sm btn-secondary text-primary">
                <FontAwesomeIcon icon={("fas", "cart-plus")} />
                &nbsp;Add to cart
              </button>
              <button className="btn btn-sm btn-outline-light text-danger border">
                <FontAwesomeIcon icon={("fas", "trash-alt")} fixedWidth />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavoriteProduct;
