import React from 'react';
import { connect } from 'react-redux';
import Player from './PlayerCard';
import { reduxForm, Field } from 'redux-form';
import _ from 'lodash';
import champions from 'lol-champions';
import spells from 'lol-spells';

class MatchBoard extends React.Component {

    renderList() {
        let summonerPosition;
         summonerPosition = _.findIndex(this.props.participants, {'summonerId': this.props.summoner.id}); 
        
        if (summonerPosition = -1) summonerPosition=5;

        const summoner = this.props.participants[summonerPosition];
        const AlliedTeam = summoner.teamId;

        return this.props.participants.map((player) =>{
            return (
                <div>
                    { AlliedTeam!=player.teamId && <Field name={`team${player.teamId}`} component='input' type='radio' value={`${player.summonerId}`} /> }
                    <Player player={player} />
                </div>
            );
        })
    };

    onSubmit = (values) => {
        const { participants } = this.props; 
        const team1 = participants[_.findIndex(participants, {'summonerId': values.team100})];
        const team2 = participants[_.findIndex(participants, {'summonerId': values.team200})];
        
    }
    
    render() {
        console.log(spells);
        console.log(champions);
        if (!this.props.participants) {
            return (
                <div>Loading...</div>
            );
        }
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} >
                    {this.renderList()}
                    <button>Get Notes</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { participants: state.liveMatch.participants,
                summoner: state.summoner }
}

export default reduxForm({
    form: 'matchUpForm'
})(connect(mapStateToProps)(MatchBoard));