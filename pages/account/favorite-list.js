import AccountMenu from "../../components/account-menu";
import FavoriteProduct from "../../components/account/favorite-product";
import Layout from "../../components/layout";

function FavoriteList() {
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
                  My Favorites
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="container py-4">
        <div className="row g-3">
          <div className="col-lg-3">
            <AccountMenu current="favorite-list" />
          </div>
          <div className="col-lg-9">
            <div className="row row-cols-1 row-cols-md-2 g-3">
              <div className="col">
                <FavoriteProduct />
              </div>
              <div className="col">
                <FavoriteProduct />
              </div>
              <div className="col">
                <FavoriteProduct />
              </div>
              <div className="col">
                <FavoriteProduct />
              </div>
              <div className="col">
                <FavoriteProduct />
              </div>
            </div>
            <nav className="float-end mt-3">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#">
                    Prev
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

FavoriteList.getLayout = (page) => {
  return <Layout simpleHeader>{page}</Layout>;
};

export default FavoriteList;
