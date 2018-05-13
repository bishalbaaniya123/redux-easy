import React, {Component} from 'react';
import connect from 'redux-connect-decorator';
import {fetchUser} from "../actions/userActions";
import {fetchTweets} from "../actions/tweetsActions";

@connect((store) => {
    return {
        user: store.user.user,
        userFetched: store.user.fetched,
        tweets: store.tweets.tweets,
    };
})
class Index extends Component {
    componentWillMount(){
        this.props.dispatch(fetchUser())
    }
    fetchTweets(){
        this.props.dispatch(fetchTweets())
    }
    render() {
        const {user, tweets} = this.props;
        if(!tweets.length){
            return <button onClick={this.fetchTweets.bind(this)}>Load Tweets</button>
        }
        const mappedTweets = tweets.map(tweet => <li>{tweet.text}</li>);
        return (
            <div>
                <h1>{user.name}</h1>
                <ul>{mappedTweets}</ul>
            </div>
        );
    }

}

export default Index;