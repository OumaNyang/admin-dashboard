import React, { Component } from 'react';

//Navigation
import Sidebar from '../../components/Navigation/Sidebar';
import Topbar from '../../components/Navigation/Topbar';

import CardInfo from '../../components/Cards/Info';
import ChartDonut from '../../components/Charts/Donut';
import ChartLine from '../../components/Charts/Line';
import PageHeading from '../../components/PageHeading';

class Dashboard extends Component {
  componentWillMount() {
    document.getElementById('body').className = 'page-top'
  }

  render() {
    return (
      <div>
         <div id="wrapper">

           <Sidebar />
 
           <div id="content-wrapper" className="d-flex flex-column">

             <div id="content">

               <Topbar />
 
                <div className="container-fluid">


                <PageHeading title="Dashboard" />

                <div className="row">
                  <CardInfo title="Recent Reportings"
                    icon="pin"
                    color="primary"
                    value="15,480" />

                  <CardInfo title="Donations"
                    icon="users"
                    color="success"
                    value="TSH 56,215,000" />

                  <CardInfo title="Donations"
                    icon="care"
                    color="info"
                    value="KSH. 8750000" />

                  <CardInfo title="Users"
                    icon="graph"
                    color="warning"
                    value="895" />
                </div>
                <div className="row">
                  <div className="col-xl-8 col-lg-6">
                    <ChartLine />
                  </div>
                  <div className="col-xl-4 col-lg-6">
                    <ChartDonut />
                  </div>

                </div>

              </div>

            </div>

            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright &copy;Moringa-School- Phase 5 Project 2022</span>
                </div>
              </div>
            </footer>

          </div>

        </div>

        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a></div>
    )
  }
}

export default Dashboard;