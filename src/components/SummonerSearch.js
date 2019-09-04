import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { FetchSummoner } from '../actions';


class SummonerSearch extends React.Component {

    renderInput = ({input, label, meta}) => {
        return (
                <div>
                    <label>{label}</label>
                    <input {...input} placeholder={label}/>
                </div>
        );
    };

    renderComboBox = () => {
        const options = ['','euw1', 'na1', 'eun1', 'kr', 'jp1'];
        return options.map((region) => {
            return (
                <option key={region} value={region}>{region}</option>
            );
        });
    };

    onSubmit = (formValues) => {
        const {region, summoner} = formValues;
        this.props.FetchSummoner(region, summoner);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}
                >
                    <Field 
                        name='summoner' 
                        component={this.renderInput}
                        label="Enter Summoner's Name" 
                    />
                    
                    <Field
                        name='region'
                        component='select'
                        label='Choose Region' 
                       
                    >
                    {this.renderComboBox()}
                    </Field>
                    <button>Search</button>
                </form>
            </div>
        );
    };
};

export default reduxForm({
    form: 'summonerForm'
})(connect( null, { FetchSummoner })(SummonerSearch));