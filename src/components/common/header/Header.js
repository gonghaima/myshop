
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import * as stuffActions from '../../actions/stuffActions';
import * as stuffActions from '../../../actions/stuffActions';

import React, { Component } from 'react';
class Header extends Component {
    constructor(props, context) {
        super(props, context);
        this.updateShopTitle = this.updateShopTitle.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }
    // componentWillMount() { // HERE WE ARE TRIGGERING THE ACTION
    //     this.props.stuffActions.initStuff();
    //   }
    updateShopTitle() {
        this.props.stuffActions.updateStuff('uShop');
    };

    fetchData() {
        this.props.stuffActions.fetchStuff();
    };
    render() {
        console.log(this.props);
        return (
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <strong>{this.props.rdStore.stuff}</strong>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home
                            <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Contact</a>
                            </li>
                            {/* <li className="nav-item btn-group">
                                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                                    <button className="dropdown-item" onClick={this.updateShopTitle}>Action</button>
                                    <button className="dropdown-item" onClick={this.fetchData}>Another action</button>
                                    <a className="dropdown-item" href="/">Something else here</a>
                                </div>
                            </li> */}
                        </ul>
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="text" placeholder={this.props.rdStore.stuffApiData[0] ? this.props.rdStore.stuffApiData[0].body : 'Search'} aria-label="Search" />
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}


function mapStateToProps(state) {
    debugger;
    return {
        rdStore: state.stuff
    };
}

function mapDispatchToProps(dispatch) {
    return {
        stuffActions: bindActionCreators(stuffActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);