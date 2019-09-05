import React from 'react';
import { connect } from 'react-redux';
import Player from './PlayerCard';
import { reduxForm, Field } from 'redux-form';
import { FetchStartingNotes } from 'actions';
import _ from 'lodash';


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
                    { AlliedTeam!=player.teamId && <Field name='opponent' component='input' type='radio' value={`${player.summonerId}`} /> }
                    <Player player={player} />
                </div>
            );
        })
    };

    onSubmit = (values) => {
        const { participants } = this.props; 
        const { summoner } = this.props
        

        //  -----this is for testing purpose-----

        const player = participants[/*_.findIndex(participants, {'summonerId': summoner.id})*/5];

        //---------------------------------------------
        const opponent = participants[_.findIndex(participants, {'summonerId': values.opponent})];
        
        this.props.FetchStartingNotes(player, opponent);
        
    }
    
    render() {
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
})(connect(mapStateToProps, { FetchStartingNotes })(MatchBoard));