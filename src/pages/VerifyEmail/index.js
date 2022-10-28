import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';

class VerifyEmail extends Component {
    componentWillMount(){
        document.getElementById('body').className='bg-gradient-primary'
      }

      handleEmailVerify = () => {
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
                             <div className='alert alert-success rounded-0'>Email Verified.Please Login</div>

                          </div>
                          <form onSubmit={this.handleEmailVerify} className="user">
                            {/* <div className="form-group">
                              <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..."/>
                            </div>
                            <div className="form-group">
                              <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password"/>
                            </div> */}
                           <Link className=" " to="./"> <button  type="button" className="btn btn-primary btn-user btn-block">
                              Login
                            </button>   </Link>                     
                          </form>
                          <hr/>
                         
                    
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

export default withRouter(VerifyEmail);