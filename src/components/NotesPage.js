import React from 'react';
import { fetchLiveMatch } from 'actions';
import Player from './PlayerCard';
import _ from 'lodash';
import { connect } from 'react-redux';


class NotesPage extends React.Component {

    grantNotificationPermission = () => {
        if (!('Notification' in window)) {
          alert('This browser does not support system notifications');
          return;
        }

        if (Notification.permission === 'granted') {
          //new Notification('You are already subscribed to message notifications');
          return;
        }

        if (
          Notification.permission !== 'denied' ||
          Notification.permission === 'default'
        ) {
          Notification.requestPermission().then(result => {
            if (result === 'granted') {
              new Notification(
                'Awesome! You will start receiving notifications shortly'
              );
            }
          });
        }
      };

    componentDidUpdate() {
        this.props.fetchLiveMatch();
    }

    renderNotes() {
        let Note;
        const notes = _.get(this.props.notes, this.props.timeStamp, 'none');

        if (notes === 'none') {
          return;
        }
          return notes.map( note => {
                Note = new Notification('', {
                    body: `${note}`,
                })
                Note.onClick = () => {
                    Note.close.bind(Note);
                }
                setTimeout(Note.close.bind(Note), 3000);
                return;
          })
    }

    renderPlayerInfo() {
        const { participants } = this.props;
        return (
          <div>
            <Player player={_.find(participants, { 'summonerName': `${this.props.match.params.name}`})} />
          </div>
        );
    }

    renderAllNotes() {
        const { notes } = this.props;
        return (
            <div>
              asdasdsad
            </div>
        );
    }
    
    renderInitialNotes() {
        let Note;
        const { initialNotes } = this.props.notes;
        return initialNotes.map((note) => {
                
                Note = new Notification('', {
                    body: `${note}`,
                })
                Note.onClick = () => {
                    Note.close.bind(Note);
                }
                setTimeout(Note.close.bind(Note), 3000);
                return;
            }
        )
    }

    render() {
        if (!this.props.notes) {
            return <div>Loading...</div>
        }
        {
            this.grantNotificationPermission();
            return (
                <div>
                    { this.props.timeStamp == 0 ? this.renderInitialNotes() : this.renderNotes() }
                    {this.renderPlayerInfo()}
                    {this.renderAllNotes()}
                </div>
            );
        }
    };
};

const mapStateToProps = (state) => {
    return {  notes: state.notes,
              timeStamp: state.liveMatch.gameLength,
              participants: state.liveMatch.participants};
}

export default connect(mapStateToProps)(NotesPage);