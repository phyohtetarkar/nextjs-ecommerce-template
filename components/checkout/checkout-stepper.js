import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const stepClass =
  "p-0 position-absolute rounded-circle btn btn-primary fw-bold";

function CheckoutStepper({ step = 1 }) {
  let progress = 0;
  if (step == 2) {
    progress = 50;
  } else if (step == 3) {
    progress = 100;
  }

  return (
    <>
      <div className="position-relative mt-3 mb-4 mx-5 text-light">
        <div className="progress" style={{ height: 6 }}>
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <button
          disabled={step < 1}
          className={stepClass + " top-50 start-0 translate-middle"}
          style={{ width: 40, height: 40 }}
        >
          <FontAwesomeIcon icon={["fas", step > 1 ? "check" : "truck"]} />
        </button>
        <button
          disabled={step < 2}
          className={stepClass + " top-50 start-50 translate-middle"}
          style={{ width: 40, height: 40 }}
        >
          <FontAwesomeIcon icon={["fas", step > 2 ? "check" : "credit-card"]} />
        </button>
        <button
          disabled={step < 3}
          className={stepClass + " top-50 start-100 translate-middle"}
          style={{ width: 40, height: 40 }}
        >
          <FontAwesomeIcon
            icon={["fas", step > 3 ? "check" : "clipboard-check"]}
          />
        </button>
      </div>
      <div className="position-relative mb-4 mx-5" style={{ height: 20 }}>
        <span className="position-absolute top-50 start-0 translate-middle">
          Delivery
        </span>
        <span className="position-absolute top-50 start-50 translate-middle">
          Payment
        </span>
        <span className="position-absolute top-50 start-100 translate-middle">
          Confirmed
        </span>
      </div>
    </>
  );
}

export default CheckoutStepper;
