import Link from "next/link";

function ProductSimpleCard({ id, title }) {
  return (
    <div className="card h-100 border-0 shadow-sm">
      <div>
        <img
          className="card-img-top"
          src={`https://source.unsplash.com/random/200x300?random=${Math.floor(
            Math.random() * 100
          )}`}
          width={200}
          height={240}
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

        <h6 className="mb-0 fw-semibold">2450 Ks</h6>
      </div>
    </div>
  );
}

export default ProductSimpleCard;
