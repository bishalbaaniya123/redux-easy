import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUser} from "../actions/userActions";
import {funFunction} from "../actions/userActions";
import {fetchTweets} from "../actions/tweetsActions";

class Index extends Component {
    constructor(props){
        super(props);
        console.log("This is working from constructor", this.props);
        this.props.testClick();
    }
    render() {
        console.log("This is working", this.props, this.props.user.state.fetched);
        return (
            <div>
                <h1>This is header </h1>
                <ul>This is ul</ul>
            </div>
        );
    }

}
const mapDispatchToProps = (dispatch) => {
    return{
        // testClick: () => dispatch(funFunction("THIS"))
        testClick: () => {dispatch(funFunction())}
    }
};
const mapStateToProps = (state) => {
    return state;
};
const DefaultIndex = connect(mapStateToProps, mapDispatchToProps)(Index);
export default DefaultIndex;