import * as React from 'react';
import { MemberTableComponent } from './components/memberTable';
import { MemberEntity } from '../../model/member'
import { Pagination } from '../components/pagination';
import { Spinner } from '../components/spinner';
import Button from "@material-ui/core/Button";

interface Props {
  members: Array<MemberEntity>;
  organization: string;
  currentPage: number;
  perPage: number;
  totalElements: number;
  lastSearch: string;
  loadMembers: (organization: string, currentPage: number, perPage: number) => any;
  updateMember: (newMember: MemberEntity) => void
  updateCurrent: (newCurrentPage: number) => void
  updatePerPage: (newPerPage: number) => void
  updateLastSearch: (lastSearch: string) => void
}

export class MemberAreaComponent extends React.Component<Props> {

  componentDidMount() {
    this.cargarMiembros(this.props.currentPage, this.props.perPage)
  }

  onPageChange = (currentPage: number) => {
    this.props.updateCurrent(currentPage)
    this.cargarMiembros(currentPage, this.props.perPage)
  }

  onChangeSelected = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.props.updatePerPage(Number(e.target.value));
    this.props.updateCurrent(1)
    this.cargarMiembros(1, Number(e.target.value))
  }

  cargarMiembros = (currentPage: number, perPage: number) => {
    this.props.updateLastSearch(this.props.organization)
    this.props.loadMembers(this.props.organization, currentPage, perPage)
  }

  render() {
    const { currentPage, perPage, updateMember, members, totalElements, lastSearch, organization } = this.props;
    let organizationMembers;

    if (members.length > 0) {
      organizationMembers =
        <>
          <h2>Members {lastSearch}</h2>
          <MemberTableComponent updateMember={updateMember} members={members} />
          <div>
            <select onChange={(event) => this.onChangeSelected(event)} value={perPage}>
              <option>3</option>
              <option>5</option>
              <option>10</option>
            </select>
            <Pagination
              currentPage={currentPage}
              perPage={perPage}
              totalElem={totalElements}
              onPageChange={this.onPageChange} />
          </div>
        </>
    } else {
      organizationMembers = <h2>No se pueden encontrar miembros de la organización {lastSearch}</h2>
    }

    return (
      <>
        {organizationMembers}
      </>
    );
  }
}
