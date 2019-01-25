import * as React from 'react';
import styled from 'styled-components';

interface Props {
  currentPage: number,
  perPage: number,
  totalElem: number
  onPageChange: (numPag: number) => void
}

interface State {

}

const Boton = styled.button`
  color: black;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color .3s;
  border: 1px solid #ddd;
`;

const rango = (desde, hasta) => {
  let i = desde;
  const range = [];

  while (i <= hasta) {
    range.push(i);
    i += desde;
  }

  return range;
}

export class Pagination extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
  }

  calcularBotones = (totalElem, perPage, onPageChange) => {
    const numBotones = Math.ceil(totalElem / perPage);
    const botones = rango(1, numBotones);
    return botones.map((value) => <Boton key={value} onClick={() => onPageChange(value)}>{value}</Boton>)
  }



  public render() {
    const { currentPage, perPage, totalElem, onPageChange } = this.props

    return (
      <>
        {this.calcularBotones(totalElem, perPage, onPageChange)}
      </>
    );
  }
}