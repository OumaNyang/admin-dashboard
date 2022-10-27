import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Boostrap Libs
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//SBAdmin2 Style
import './styles/scss/sb-admin-2.scss';
 
//datatable

// import "jquery/dist/jquery.min.js";
// import "datatables.net-dt/js/dataTables.dataTables";
// import "datatables.net-dt/css/jquery.dataTables.min.css";
// import "datatables.net-buttons/js/dataTables.buttons.js";
// import "datatables.net-buttons/js/buttons.colVis.js";
// import "datatables.net-buttons/js/buttons.flash.js";
// import "datatables.net-buttons/js/buttons.html5.js";
// import "datatables.net-buttons/js/buttons.print.js";
//Redux
import { Provider } from 'react-redux';
import { Store } from './redux/store';
// import datatable from 'datatable';

ReactDOM.render(
<Provider store={Store}>
    <App /> 
</Provider> , document.getElementById('root'));