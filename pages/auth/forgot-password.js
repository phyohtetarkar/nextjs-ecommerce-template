import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Layout from "../../components/layout";

function ForgotPassword() {
  return (
    <div className="container py-3">
      <div className="row my-4">
        <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body px-4">
              <h4 className="card-title fw-bold mt-2 mb-3">Forgot Password</h4>
              <form className="row g-3">
                <div className="col-md-12">
                  <label className="form-label">Your email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="name@gmail.com"
                  />
                </div>
                <div className="col-md-12 mt-3">
                  <button className="btn btn-primary w-100">Reset</button>
                </div>
                <div className="col-md-12">
                  <div className="border border-1 rounded bg-light px-3 py-2 small">
                    Password reset link will be sent to this email.
                  </div>
                </div>
              </form>
            </div>
            <hr className="text-muted my-0" />
            <div className="text-center p-3">
              Don&lsquo;t hanve an account?{" "}
              <Link href="/auth/sign-up">
                <a className="text-decoration-none fw-medium">Register</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

ForgotPassword.getLayout = (page) => {
  return (
    <Layout simpleHeader hideAuth>
      {page}
    </Layout>
  );
};

export default ForgotPassword;
