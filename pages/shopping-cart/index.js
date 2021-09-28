import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartItemRow from "../../components/shopping-cart/cart-item-row";
import PricingCard from "../../components/shopping-cart/pricing-card";

function ShoppingCart() {
  return (
    <div className="container py-4">
      <div className="row g-3">
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white">
              <h5 className="my-2">Shopping Cart</h5>
            </div>
            <div className="card-body p-2">
              {/* <CartItem />
              <hr className="text-muted my-1" />
              <CartItem />
              <hr className="text-muted my-1" />
              <CartItem /> */}
              <div className="table-responsive">
                <table className="table table-borderless align-middle mb-0">
                  {/* <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Price</th>
                      <th scope="col">Qty</th>
                      <th scope="col"></th>
                    </tr>
                  </thead> */}
                  <tbody>
                    <CartItemRow />
                    <CartItemRow />
                    <CartItemRow />
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card-footer py-3">
              <small>
                <FontAwesomeIcon
                  icon={["fas", "truck"]}
                  className="text-success me-2"
                />
                Delivery within 1-2 weeks
              </small>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card mb-3 border-0 shadow-sm">
            <div className="card-body">
              <div className="input-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Coupon code here"
                />
                <button type="button" className="btn btn-primary">
                  Apply
                </button>
              </div>
            </div>
          </div>
          <PricingCard />
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default ShoppingCart;
