import AccountMenu from "../../components/account-menu";
import CurrentOrderCard from "../../components/account/current-order-card";
import Layout from "../../components/layout";

function CurrentOrders() {
  return (
    <div>
      <div className="bg-secondary">
        <div className="container">
          <div className="row py-4 px-2">
            <nav aria-label="breadcrumb col-12">
              <ol className="breadcrumb mb-1">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Current Orders
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="container py-4">
        <div className="row g-3">
          <div className="col-lg-3">
            <AccountMenu current="current-orders" />
          </div>
          <div className="col-lg-9">
            <CurrentOrderCard id={10001} />
            <CurrentOrderCard id={10002} />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

CurrentOrders.getLayout = (page) => {
  return <Layout simpleHeader>{page}</Layout>;
};

export default CurrentOrders;
