import React, { Component } from 'react';

//Cards
import CardInfo from '../../components/Cards/Info';
import CardBasic from '../../components/Cards/Basic';
import PageHeading from '../../components/PageHeading';
//Navigation
import Sidebar from '../../components/Navigation/Sidebar';
import Topbar from '../../components/Navigation/Topbar';

class Cards extends Component {
    render() {
        return (
            <div>
                <div id="wrapper">

                    <Sidebar />
                    <div id="content-wrapper" className="d-flex flex-column">

                        <div id="content">

                            <Topbar />

                            <div className="container-fluid">


                                <PageHeading title="Cards" />


                                <div className="row">
                                    <CardInfo title="Donations"
                                        icon="calendar"
                                        color="primary"
                                        value="KSH.0" />

                                    <CardInfo title="Users"
                                        icon="calendar"
                                        color="success"
                                        value="0" />

                                    <CardInfo title="PVL"
                                        icon="clipboard"
                                        color="info"
                                        value="" />

                                    <CardInfo title="Pending Requests"
                                        icon="comments"
                                        color="warning"
                                        value="18" />
                                </div>
                              
                                <div className="row">
                                    <div class="col-lg-12">
                                        <CardBasic title="Card Basic Example">
                                            The styling for this basic card example is created by using default Bootstrap utility classes. By using utility classes, the style of the card component can be easily modified with no need for any custom CSS!                                        
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

export default Cards;