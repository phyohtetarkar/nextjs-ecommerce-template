import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function OrderHistoryItem({ id, cancel }) {
  return (
    <div className="card border-0 shadow-sm mb-3">
      <div className="card-header py-3 bg-white">
        <div className="row">
          <div className="col d-flex">
            <span className="fw-semibold h5 my-auto">Order ID: {id}</span>
          </div>
          <div className="col-auto">
            <button className="btn btn-sm btn-outline-primary">
              View Detail
            </button>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row gx-2 gy-3">
          <div className="col-md-5">
            <h6 className="fw-bold">Shipping Address</h6>
            <div className="vstack text-dark small">
              <span>Milk Mocha</span>
              <span>No. 33, Mocha Street, Milk Township</span>
              <span>Yangon, Myanmar</span>
              <span>Tel: +95911223344</span>
              <span>Email: milkmocha@domain.com</span>
            </div>
          </div>
          <div className="col-md-4">
            <h6 className="fw-bold">Payment Method</h6>
            <div className="text-success">
              {cancel ? (
                <>
                  <span className="fw-bold">
                    <FontAwesomeIcon
                      icon={["fas", "money-bill-wave"]}
                      size="lg"
                    />
                  </span>
                  <span className="ms-2 small">Cash on delivery</span>
                </>
              ) : (
                <>
                  <span className="fw-bold">
                    <FontAwesomeIcon icon={["fab", "cc-visa"]} size="lg" />
                  </span>
                  <span className="ms-2 small">XXXX-XXXX-XXXX-2345</span>
                </>
              )}
            </div>
            <div>Subtotal: 30,000</div>
            <div>Delivery fee: 3,000</div>
            <div className="fw-semibold">Total: 33,000</div>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold">Status</h6>
            <div className={cancel ? "text-danger" : "text-success"}>
              <span className="fw-semibold">
                {cancel ? "CANCELLED" : "DELIVERED"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer small border-0 py-3 text-muted">
        Order Date: {new Date().toDateString()}
      </div>
    </div>
  );
}

export default OrderHistoryItem;
