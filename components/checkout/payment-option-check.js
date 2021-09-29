function PaymentOptionCheck({ name, title, checked, onCheckedChanged }) {
  let checkedCss = "";
  if (checked) {
    checkedCss = " border-primary";
  }

  return (
    <div
      role="button"
      className={
        "border border-2 rounded px-3 py-2 hover-border-primary" + checkedCss
      }
      onClick={() => onCheckedChanged(name)}
    >
      <div className="fw-medium">{title}</div>
      {/* <div className="form-check">
        <input
          className="form-check-input d-none"
          type="radio"
          checked={checked}
          name={name}
          onChange={onCheckedChanged}
        />
        <label className="form-check-label fw-medium">{title}</label>
      </div> */}
    </div>
  );
}

export default PaymentOptionCheck;
