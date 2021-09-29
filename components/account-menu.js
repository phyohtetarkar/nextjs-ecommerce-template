import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const itemCss = "px-3 py-2 my-list-item";

function AccountMenu({ current }) {
  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body">
        <div className="d-flex flex-column gap-2">
          <Link href="/account/profile">
            <a className={itemCss + (current == "profile" ? " active" : "")}>
              <FontAwesomeIcon
                icon={["fas", "user-alt"]}
                className="me-2"
                fixedWidth
              />
              My profile
            </a>
          </Link>

          <Link href="/account/current-orders">
            <a
              className={
                itemCss + (current == "current-orders" ? " active" : "")
              }
            >
              <FontAwesomeIcon
                icon={["fas", "shopping-bag"]}
                className="me-2"
                fixedWidth
              />
              Current orders
            </a>
          </Link>

          <Link href="/account/profile">
            <a className={itemCss}>
              <FontAwesomeIcon
                icon={["fas", "truck"]}
                className="me-2"
                fixedWidth
              />
              Orders history
            </a>
          </Link>

          <Link href="/account/profile">
            <a className={itemCss}>
              <FontAwesomeIcon
                icon={["fas", "heart"]}
                className="me-2"
                fixedWidth
              />
              My favorites
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AccountMenu;
