import * as React from 'react';
import { MemberEntity } from '../../model/member';
import { memberAPI } from '../../api/memberAPI';
import { MemberRow } from './memberRow';
import { MembersSearchComponent } from './membersSearch';
import { MemberHead } from './memberHead';
import { } from 'core-js';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { SessionContext } from '../../common/sessionContext';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import { Spinner } from './components/spinner';
import { Pagination } from './components/pagination';

interface Props extends RouteComponentProps {
  updateMemberInfo: (member: MemberEntity) => void;
  organization: string;
  setOrganization: (organization: string) => void;
}

// We define members as a state (the compoment holding this will be a container
// component)
interface State {
  members: Array<MemberEntity>,
  lastSearch: string,
  loadingData: boolean,
  currentPage: number,
  perPage: number,
  totalElem: number,
}

class MembersTableComponent extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      members: [],
      lastSearch: '',
      loadingData: false,
      currentPage: 1,
      perPage: 3,
      totalElem: 0,
    };
  }

  componentDidMount() {
    this.loadMembers();
  }

  setLastSearch = () => this.setState({ lastSearch: this.props.organization });

  clearMembers = () => this.setState({ members: [] })

  changeLoadingData = (loadingData: boolean) => this.setState({ loadingData });

  setNumElem = (totalElem) => this.setState({ totalElem });

  setCurrentPage = (currentPage) => this.setState({ currentPage })

  onChangeSelected = (e: React.ChangeEvent<HTMLSelectElement>) => 
    this.setState({ perPage: Number(e.target.value), currentPage: 1 }, () => this.loadMembers());

  loadMembers = () => {
    const { organization } = this.props
    const { currentPage, perPage } = this.state
    this.changeLoadingData(true);
    memberAPI.getNumMembers(organization)
      .then((members) => this.setNumElem(members.length));

    memberAPI.getAllMembers(organization, currentPage, perPage)
      .then((members) => {
        this.changeLoadingData(false);
        this.setState({ members: members })
      }).catch((error) => {
        this.changeLoadingData(false);
        this.clearMembers();
      });
    this.setLastSearch();
  }

  loadMember = (userLogin: string) => {
    memberAPI.getMember(userLogin).then(
      (member: MemberEntity) => {
        this.props.updateMemberInfo(member);
        this.props.history.push('/member');
      }
    )
  }

  onPageChange = (currentPage: number) => {
    this.setCurrentPage(currentPage)
    this.loadMembers()
  }

  public render() {
    const { lastSearch, members, loadingData, currentPage, perPage, totalElem } = this.state;
    const { organization, setOrganization } = this.props
    let organizationMembers;

    if (loadingData) {
      organizationMembers = <Spinner />
    } else {
      if (members.length > 0) {
        organizationMembers = <>
          <h2>Miembros de: {lastSearch}</h2>
          <Paper>
            <Table>
              <MemberHead />
              <TableBody>
                {this.state.members.map((member: MemberEntity) => (
                  <MemberRow key={member.id} member={member} loadMember={this.loadMember} />
                ))}
              </TableBody>
            </Table>
          </Paper>
          <div>
            <select onChange={(event) => this.onChangeSelected(event)} value={perPage}>
              <option>3</option>
              <option>5</option>
              <option>10</option>
            </select>
            <Pagination
              currentPage={currentPage}
              perPage={perPage}
              totalElem={totalElem}
              onPageChange={this.onPageChange} />
          </div>
        </>
      } else if (lastSearch) {
        organizationMembers = <h2>No se pueden encontrar miembros de la organización '{lastSearch}'</h2>
      }
    }

    return (
      <div className="row">
        <h2> Members Page</h2>
        <MembersSearchComponent
          loadMembers={this.loadMembers}
          organization={organization}
          setOrganization={setOrganization}
          setCurrentPage={this.setCurrentPage} />

        {organizationMembers}
      </div>
    );
  }
}

const MembersTableComponent2 = (props) =>
  <SessionContext.Consumer>
    {
      ({ updateMemberInfo, organization, setOrganization }) => <MembersTableComponent organization={organization} updateMemberInfo={updateMemberInfo} setOrganization={setOrganization} {...props} />
    }
  </SessionContext.Consumer>

export const MembersPage = withRouter<Props>(MembersTableComponent2);