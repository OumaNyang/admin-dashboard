import React, { Component } from 'react';

//Cards
import CardBasic from '../../components/Cards/Basic';
import PageHeading from '../../components/PageHeading';
//Navigation
import Sidebar from '../../components/Navigation/Sidebar';
import Topbar from '../../components/Navigation/Topbar';
//  import Table from '../../components/Tables';


class Donations extends Component {
    render() {
        return (
            <div>
                <div id="wrapper">

                    <Sidebar />
                    <div id="content-wrapper" className="d-flex flex-column">

                        <div id="content">

                            <Topbar />

                            <div className="container-fluid">
                                <PageHeading title="Donations" />

                                <div className="row">
                                    <div class="col-lg-12">
                                        <CardBasic title="Card Basic Example">
                                        <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>id</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Age</th>
                                            <th>Amount</th>
                                            <th>Country</th>
                                        </tr>
                                    </thead>
                               
                                    <tbody>                                
                                    
                                        <tr>
                                            <td>Serge Baldwin</td>
                                            <td>Data Coordinator</td>
                                            <td>Singapore</td>
                                            <td>64</td>
                                            <td>2012/04/09</td>
                                            <td>$138,575</td>
                                        </tr>
                                        
                                        <tr>
                                            <td>Zorita Serrano</td>
                                            <td>Software Engineer</td>
                                            <td>San Francisco</td>
                                            <td>56</td>
                                            <td>2012/06/01</td>
                                            <td>$115,000</td>
                                        </tr>
                                      
                                      </tbody>
                                </table>
                            </div>
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

export default Donations;