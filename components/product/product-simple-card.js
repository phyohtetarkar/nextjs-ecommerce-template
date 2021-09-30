import Link from "next/link";
import ProductRating from "../product-rating";

function ProductSimpleCard({ id, title }) {
  return (
    <div className="card h-100 border-0 shadow-sm">
      <div className="ratio ratio-1x1">
        <img
          className="card-img-top"
          src={`https://source.unsplash.com/random/200x200?random=${Math.floor(
            Math.random() * 100
          )}`}
          alt="Product image."
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="card-body">
        <Link href="/product/1">
          <a className="mb-1 text-dark text-decoration-none stretched-link">
            Product name here
          </a>
        </Link>

        <ProductRating />

        <h6 className="mb-0 fw-semibold mt-2">15000 Ks</h6>
      </div>
    </div>
  );
}

export default ProductSimpleCard;
