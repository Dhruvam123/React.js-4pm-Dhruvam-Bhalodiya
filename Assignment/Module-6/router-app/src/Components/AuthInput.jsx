import './AuthInput.css'
const AuthInput=()=>{
    return(
        <>
  {/* Section: Design Block */}
  <section className="text-center text-lg-start">
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n    .cascading-right {\n      margin-right: -50px;\n    }\n\n    @media (max-width: 991.98px) {\n      .cascading-right {\n        margin-right: 0;\n      }\n    }\n  "
      }}
    />
    {/* Jumbotron */}
    <div className="container py-4">
      <div className="row g-0 align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <div
            className="card cascading-right bg-body-tertiary"
            style={{ backdropFilter: "blur(30px)" }}
          >
            <div className="card-body p-5 shadow-5 text-center">
              <h2 className="fw-bold mb-5 heading ">Sign up now</h2>
              <form>
                {/* 2 column grid layout with text inputs for the first and last names */}
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div data-mdb-input-init="" className="form-outline">
                    
                      <input
                        type="text"
                        id="form3Example1"
                        className="form-control shadow"
                        placeholder="First name"
                      />
                     
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div data-mdb-input-init="" className="form-outline">
                    
                      <input
                        type="text"
                        id="form3Example2"
                        className="form-control shadow"
                        placeholder="Last name"
                      />
                     
                    </div>
                  </div>
                </div>
                {/* Email input */}
                <div data-mdb-input-init="" className="form-outline mb-4">
                
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control shadow"
                    placeholder=" Email address"
                  />
                 
                </div>
                {/* Password input */}
                <div data-mdb-input-init="" className="form-outline mb-4">
                
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control shadow"
                    placeholder="Password"
                  />
                 
                </div>
                {/* Checkbox */}
                <div className="form-check d-flex justify-content-center mb-4">
                  <input
                    className="form-check-input me-2 shadow"
                    type="checkbox"
                    defaultValue=""
                    id="form2Example33"
                    defaultChecked=""
                  />
                  <label className="form-check-label" htmlFor="form2Example33">
                    Subscribe to our newsletter
                  </label>
                </div>
                {/* Submit button */}
                <button
                  type="submit"
                  data-mdb-button-init=""
                  data-mdb-ripple-init=""
                  className="btn btn-primary btn-block mb-4 "
                >
                  Sign up
                </button>
                {/* Register buttons */}
                <div className="text-center">
                  <p>or sign up with:</p>
                  <button
                    type="button"
                    data-mdb-button-init=""
                    data-mdb-ripple-init=""
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="bi bi-facebook" />
                  </button>
                  <button
                    type="button"
                    data-mdb-button-init=""
                    data-mdb-ripple-init=""
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="bi bi-google" />
                  </button>
                  <button
                    type="button"
                    data-mdb-button-init=""
                    data-mdb-ripple-init=""
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="bi bi-twitter" />
                  </button>
                  <button
                    type="button"
                    data-mdb-button-init=""
                    data-mdb-ripple-init=""
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="bi bi-github" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-5 mb-lg-0">
          <img
            src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
            className="w-100 rounded-4 shadow-4"
            alt=""
          />
        </div>
      </div>
    </div>
    {/* Jumbotron */}
  </section>
  {/* Section: Design Block */}
</>

        
        
       
    )
}
export default AuthInput;