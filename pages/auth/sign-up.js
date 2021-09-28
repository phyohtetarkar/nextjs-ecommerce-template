import Link from "next/link";
import Layout from "../../components/layout";

const cities = ["Yangon", "Mandalay", "Kalaw"];

const states = ["Thar Kay Ta", "Daw Pon", "San Chaung"];

function SignUp() {
  return (
    <div className="container py-3">
      <div className="row my-4">
        <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body px-4">
              <h4 className="card-title fw-bold mt-2 mb-4">Sign Up</h4>
              <form className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">First Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Last Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-12">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" />
                </div>
                <div className="col-md-12">
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" />
                    <label className="form-check-label">Male</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" />
                    <label className="form-check-label">Female</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">City</label>
                  <select className="form-select">
                    {cities.map((e, i) => {
                      return <option key={i}>{e}</option>;
                    })}
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">States</label>
                  <select className="form-select">
                    {states.map((e, i) => {
                      return <option key={i}>{e}</option>;
                    })}
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Confirm Password</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="col-md-12 mt-4">
                  <button className="btn btn-primary w-100">Register</button>
                </div>
                <div className="col-md-12">
                  <div className="text-muted bg-light rounded p-3 border small">
                    By clicking the &lsquo;Sign Up&lsquo; button, you confirm
                    that you accept our{" "}
                    <a href="#">Terms of use and Privacy Policy</a>.
                  </div>
                </div>
              </form>
              <hr className="text-muted" />
              <div className="text-center">
                Already have an account?{" "}
                <Link href="/auth/login">
                  <a className="text-decoration-none fw-medium">Login</a>
                </Link>
              </div>
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

SignUp.getLayout = (page) => {
  return (
    <Layout simpleHeader hideAuth>
      {page}
    </Layout>
  );
};

export default SignUp;
