import { connect } from 'react-redux';
import { NameOrganizationComponent } from './nameOrganization';
import { updateOrganization } from '../../actions/sessionChange';
import { State } from '../../reducers'

const mapStateToProps = (state: State) => ({
    organization: state.sessionProfileReducer.organization
});

const mapDispatchToProps = (dispatch) => ({
    onChange: (name: string) => dispatch(updateOrganization(name)),
});

export const NameOrganizationContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(NameOrganizationComponent);