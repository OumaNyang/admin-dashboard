import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';

class SignIn extends Component {
    componentWillMount(){
        document.getElementById('body').className='bg-gradient-primary'
      }

      handleSignIn = () => {
        this.props.history.push("/dashboard");
    }

    render() {
        return (
            <div className="container">
            {/* <!-- Outer Row --> */}
            <div className="row justify-content-center">
        
              <div className="col-xl-10 col-lg-12 col-md-9">
        
                <div className="card o-hidden border-0 shadow-lg my-5">
                  <div className="card-body p-0">
                    {/* <!-- Nested Row within Card Body --> */}
                    <div className="row">
                      <div className="col-lg-6 d-none d-lg-block bg-login-image  "></div>
                      <div className="col-lg-6">
                        <div className="p-5">
                          <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                          </div>
                          {/* <div className='alert alert-danger rounded-0'>Incorrect username or password</div>
                          <div className='alert alert-success rounded-0'>Login successfull .Redirecting after 2 minutes</div> */}

                          <form onSubmit={this.handleSignIn} className="user">
                            <div className="form-group">
                              <input required type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..."/>
                            </div>
                            <div className="form-group">
                              <input required type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password"/>
                            </div>
                            <button  type="submit" className="btn btn-primary btn-user btn-block">
                              LOGIN
                            </button>                        
                          </form>
                          <hr/>
                          <div className="text-center">
                            <Link className=" " to="/forgot-password">Forgot Password?</Link>
                          </div>
                          <div className="text-center">
                            <Link className=" " to="/signup">Create an Account!</Link>
                          </div>
                        </div>
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

export default withRouter(SignIn);