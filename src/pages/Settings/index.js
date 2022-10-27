
import React, { Component } from 'react';

//Cards
import CardBasic from '../../components/Cards/Basic';
//Navigation
import Sidebar from '../../components/Navigation/Sidebar';
import Topbar from '../../components/Navigation/Topbar';

class Settings extends Component {
    render() {
        return (
            <div>
                <div id="wrapper">

                    <Sidebar />
                    <div id="content-wrapper" className="d-flex flex-column">

                        <div id="content">

                            <Topbar />

                            <div className="container-fluid">
                      
                                <div className="row">
                                    <div class="col-lg-12">
                                        <CardBasic title="Setting">
                                        
                                           These are app settings                                      
                                        </CardBasic>
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

export default Settings;