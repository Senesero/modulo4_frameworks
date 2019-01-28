import { connect } from 'react-redux';
import { NameEditComponent } from './nameEdit';
import { updateUserProfileName } from '../../actions';
import { State } from '../../reducers'

const mapStateToProps = (state: State) => ({
    userName: state.userProfileReducer.firstname
});

const mapDispatchToProps = (dispatch) => ({
    onChange: (name: string) => dispatch(updateUserProfileName(name)),
});

export const NameEditContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(NameEditComponent);