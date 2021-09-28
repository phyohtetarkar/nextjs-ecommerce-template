function PaymentOptionCheck({ name, title, checked, onCheckedChanged }) {
  let checkedCss = "";
  if (checked) {
    checkedCss = " border-primary";
  }

  return (
    <div
      className={
        "border border-2 bg-light rounded px-3 py-2 hover-border-primary" +
        checkedCss
      }
    >
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          checked={checked}
          name={name}
          onChange={onCheckedChanged}
        />
        <label className="form-check-label fw-medium">{title}</label>
      </div>
    </div>
  );
}

export default PaymentOptionCheck;
