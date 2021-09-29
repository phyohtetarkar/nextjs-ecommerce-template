import Link from "next/link";

function ReviewCartItem({ id }) {
  return (
    <div className="d-flex">
      <div className="flex-shink-0">
        <img
          className="rounded"
          src={`https://source.unsplash.com/random/80x80?random=${Math.floor(
            Math.random() * 50
          )}`}
          width={80}
          height={80}
          alt="Product image."
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex-grow-1 ms-3 h-100">
        <div className="vstack">
          <Link href="/product/1">
            <a className="text-dark text-decoration-none">Product name here</a>
          </Link>
          <small className="text-muted mb-2" style={{ fontSize: 12 }}>
            <span>Medium</span>
            ,&nbsp;
            <span>White</span>
          </small>
          <h6 className="mb-0">1 &times; 10,000</h6>
        </div>
      </div>
    </div>
  );
}

export default ReviewCartItem;
