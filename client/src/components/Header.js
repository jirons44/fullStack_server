import React, { Component} from 'react';
import { connect } from 'react-redux';


class Header extends Component {



    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo">fullstack-server</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            { !this.props.auth &&
                               <li><a href="/auth/google">Login with Google</a></li>
                            }
                            { this.props.auth &&
                               <li><a href="/api/logout">Logout</a></li>
                            }
                        </ul>

                </div>
            </nav>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    return { auth };
}


export default connect(mapStateToProps)(Header);