import React from 'react';
import { connect } from 'react-redux';
import { FetchLiveMatch } from 'actions';

import MatchBoard from './MatchBoard';

class LiveMatch extends React.Component {
    componentDidMount() {
        this.props.FetchLiveMatch(this.props.summoner.puuid);
    };

    render() {
        return (
            <div>
                <MatchBoard />
            </div>
        );
    };
}

const mapStateToProps = ( state ) => {
    return  { summoner: state.summoner };
}

export default connect(mapStateToProps, { FetchLiveMatch })(LiveMatch);