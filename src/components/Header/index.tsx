import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  page: string;
}

const Header: React.FC<HeaderProps> = ({
  size = 'large',
  page = '',
}: HeaderProps) => {
  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Link className={page === 'Listagem' ? 'selected' : ''} to="/">
            Listagem
          </Link>
          <Link className={page === 'Importar' ? 'selected' : ''} to="/import">
            Importar
          </Link>
        </nav>
      </header>
    </Container>
  );
};
export default Header;
