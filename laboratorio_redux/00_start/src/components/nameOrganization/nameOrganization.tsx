import * as React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

interface Props {
  organization: string;
  perPage: number;
  onChange: (name: string) => void;
  updateLastSearch: (lastSearch: string) => void
  loadMembers: (organization: string, currentPage: number, perPage: number) => any;
}

export class NameOrganizationComponent extends React.Component<Props> {

  cargarMiembros = (currentPage: number, perPage: number) => {
    this.setState({ load: true })
    this.props.updateLastSearch(this.props.organization)
    this.props.loadMembers(this.props.organization, currentPage, perPage)
    this.setState({ load: false })
  }

  render() {
    const { perPage, organization, onChange } = this.props;

    return (
      <div>
        <TextField
          id="standard-bare"
          defaultValue="Bare"
          margin="normal"
          value={organization}
          onChange={(e) => onChange(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => this.cargarMiembros(1, perPage)}
          disabled={!organization}>Cargar</Button>
      </div>
    );
  }
}
