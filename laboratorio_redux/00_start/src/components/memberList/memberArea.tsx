import * as React from 'react';
import { MemberTableComponent } from './components/memberTable';
import { MemberEntity } from '../../model/member'
import { Pagination } from '../components/pagination';
import { updateCurrentPage } from '../../actions/sessionChange';

interface Props {
  members: Array<MemberEntity>;
  organization: string;
  currentPage: number;
  perPage: number;
  totalElements: number;
  loadMembers: (organization: string, currentPage: number, perPage: number) => any;
  clickLink: (newMember: MemberEntity) => void
  updateCurrent: (newCurrentPage: number) => void
  updatePerPage: (newCurrentPage: number) => void
}

export class MemberAreaComponent extends React.Component<Props> {

  onPageChange = (currentPage: number) => {
    this.props.updateCurrent(currentPage)
    this.cargarMiembros(currentPage, this.props.perPage)
  }

  onChangeSelected = (e: React.ChangeEvent<HTMLSelectElement>) => {

    this.props.updatePerPage(Number(e.target.value));
    this.props.updateCurrent(1)
    this.cargarMiembros(this.props.currentPage, Number(e.target.value))
  }

  cargarMiembros = (currentPage: number, perPage: number) => {
    this.props.loadMembers(this.props.organization, currentPage, perPage)
  }

  render() {
    const { currentPage, perPage, clickLink, members, totalElements } = this.props;

    return (
      <>
        <br />
        <input type="submit"
          value="load"
          className="btn btn-default"
          onClick={() => this.cargarMiembros(currentPage, perPage)}
        />
        <br />
        <label>currentPage: {currentPage}</label>
        <br />
        <label>perPage: {perPage}</label>
        <br />
        <label>totalElements: {totalElements}</label>

        <MemberTableComponent clickLink={clickLink} members={members} />
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
    );
  }
}
