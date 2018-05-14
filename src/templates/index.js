import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUser} from "../actions/userActions";
import {funFunction} from "../actions/userActions";
import {fetchTweets} from "../actions/tweetsActions";
import './index.css';

class Index extends Component {
    constructor(props) {
        super(props);
        console.log("This is working from constructor", this.props);
        this.state = {
            loggedIn: false,
            currentState: "not-panic",
        };
        this.props.testClick();
        this.props.fetchUser();
    }

    handleUsers = () => {
        if (typeof this.props.user.user === 'undefined') {
            console.log("This user is undefined");
            return;
        } else {
            console.log("The user IS defined", this.props.user.user);
            return (<ul className="ul-class">
                    {this.props.user.user.map(function (item, i) {
                        console.log('test', item.name, i);
                        if (item.name !== "") {
                            return <li key={i}><h1>Name: {item.name}</h1> <br/>
                                <p>
                                    AGE: {item.age <= 30 ? item.age : item.age % 30}
                                </p>
                            </li>;
                        }
                    })
                    }
                </ul>
            );
        }
    };

    render() {
        console.log("Render is working", this.props, "this is the state ", this.state);

        return (
            <div>
                <h1>This is
                    header</h1>
                {this.handleUsers()}
            </div>
        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        // testClick: () => dispatch(funFunction("THIS"))
        testClick: () => {
            dispatch(funFunction())
        },
        fetchUser: () => {
            dispatch(fetchUser())
        }
    }
};
const mapStateToProps = (state) => {
    return state;
};
const DefaultIndex = connect(mapStateToProps, mapDispatchToProps)(Index);
export default DefaultIndex;