import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function Header({ simple, hideAuth }) {
  let title = process.env.APP_NAME;
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">
              {/* <FontAwesomeIcon
                icon={["fas", "shopping-basket"]}
                className="d-inline-block"
              /> */}
              <span className="ms-2 mb-0 h4 text-primary fw-bold">
                Mocha Mart
              </span>
            </a>
          </Link>
          <div className="collapse navbar-collapse">
            <form className="d-flex">
              <div className="input-group">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"
                  size="32"
                />
                <button type="button" className="btn btn-primary">
                  <FontAwesomeIcon icon={["fas", "search"]} />
                </button>
              </div>
            </form>
          </div>
          <div className="d-flex">
            {!hideAuth && (
              <>
                <Link href="/auth/login">
                  <a className="btn btn-outline-primary d-none d-md-block">
                    Login
                  </a>
                </Link>
                <Link href="/auth/sign-up">
                  <a className="btn btn-primary d-none d-md-block ms-2">
                    Sign up
                  </a>
                </Link>
              </>
            )}
            <Link href="/shopping-cart">
              <a className="btn btn-light border position-relative ms-2 fw-normal">
                <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
                &nbsp;Cart
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger my-auto">
                  3
                </span>
              </a>
            </Link>
          </div>
        </div>
      </nav>
      {!simple && (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
          <div className="container">
            <button
              className="navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/explore">
                    <a className="nav-link">All Categories</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/explore">
                    <a className="nav-link">Electronics</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/explore">
                    <a className="nav-link">Clothing</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/explore">
                    <a className="nav-link">Furnitures</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/explore">
                    <a className="nav-link">Medicines</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/explore">
                    <a className="nav-link">Cosmetics</a>
                  </Link>
                </li>
              </ul>
              <ul className="ms-auto navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    id="languageMenuLink"
                  >
                    English
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-macos dropdown-menu-end"
                    aria-labelledby="languageMenuLink"
                  >
                    <li>
                      <a href="#" className="dropdown-item">
                        English
                      </a>
                    </li>
                    <li>
                      <a href="#" className="dropdown-item mt-1">
                        Myanmar
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
