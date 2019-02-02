import * as React from 'react';
import {connect} from 'react-redux';
import { State } from '../../reducers'
import {OrganizationComponent} from './organization';

const mapStateToProps = (state : State) => ({
    organization: state.sessionProfileReducer.organization
});

const mapDispatchToProps = (dispatch) => ({

});

export const OrganizationContainer = connect(
   mapStateToProps,
   mapDispatchToProps
)(OrganizationComponent);
