import { connect } from 'react-redux';
import { membersRequest } from '../../actions/membersRequest';
import { NameOrganizationComponent } from './nameOrganization';
import { updateOrganization } from '../../actions/sessionChange';
import { State } from '../../reducers'
import { updateLastSearch } from '../../actions/sessionChange';


const mapStateToProps = (state: State) => ({
    organization: state.sessionProfileReducer.organization,
    perPage: state.sessionProfileReducer.perPage,
});

const mapDispatchToProps = (dispatch) => ({
    onChange: (name: string) => dispatch(updateOrganization(name)),
    loadMembers: (organization, currentPage, perPage) => {
        return dispatch(membersRequest(organization, currentPage, perPage))
    },
    updateLastSearch: (lastSearch: string) => { return dispatch(updateLastSearch(lastSearch)) },
});

export const NameOrganizationContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(NameOrganizationComponent);