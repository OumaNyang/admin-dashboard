import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';

class SignUp extends Component {
    componentWillMount(){
        document.getElementById('body').className='bg-gradient-primary'
      }

      handleSignUp = () => {
        this.props.history.push("/dashboard");
    }

    render() {
        return (
            <div className="container">

            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* <!-- Nested Row within Card Body --> */}
                <div className="row">
                  <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                  <div className="col-lg-7">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                      </div>
                      <form onSubmit={this.handleSignUp} className="user">
                      <div className="form-group">
                            <input type="text" className="form-control form-control-user" id="fistname" placeholder="First Name" />
                          </div>
                          <div className="form-group">
                            <input type="text" className="form-control form-control-user" id="lastname" placeholder="Last Name" />
                          </div>
                        <div className="form-group">
                          <input type="email" className="form-control form-control-user" id="email" placeholder="Email Address" />
                        </div>
                        <div className="form-group">
                          <input type="email" className="form-control form-control-user" id="email" placeholder="Phonenumber" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control form-control-user" id="passwd" placeholder="Password" />
                          </div>
                          <div className="form-group">
                            <input type="password" className="form-control form-control-user" id="conf_passwd" placeholder="Repeat Password" />
                          </div>
                        <button  type="submit" className="btn btn-primary btn-user btn-block">
                              SIGNUP
                          </button>
                      </form>
                      <hr/>
                      
                      <div className="text-center">
                        <Link className=" " to="/">Already have an account? Login!</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
          </div>
        )
    }
}

export default withRouter(SignUp);