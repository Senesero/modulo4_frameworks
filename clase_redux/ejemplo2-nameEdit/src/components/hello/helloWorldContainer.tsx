import * as React from 'react';
import {connect} from 'react-redux';
import { State } from '../../reducers'
import {HelloWorldComponent} from './helloWorld';

const mapStateToProps = (state : State) => ({
    userName: state.userProfileReducer.firstname,
});

const mapDispatchToProps = (dispatch) => ({

});

export const HelloWorldContainer = connect(
   mapStateToProps,
   mapDispatchToProps
)(HelloWorldComponent);
