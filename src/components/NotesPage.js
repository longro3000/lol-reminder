import React from 'react';
import { fetchLiveMatch } from 'actions';
import { connect } from 'react-redux';


class NotesPage extends React.Component {

    renderInitialNotes() {
        const { initialNotes } = this.props.notes;
        return initialNotes.map((note) => {
                return (
                    <div>{note}</div>
                );
            }
        )
    }

    render() {
        if (!this.props.notes) {
            return <div>Loading...</div>
        }
        return (
            <div>
                {this.renderInitialNotes()}
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return { notes: state.notes };
}

export default connect(mapStateToProps)(NotesPage);