import React, { FC } from 'react';
import SideBar from '../sideBar';
import { ContainerMain, ContainerChildren } from './styled';

interface Props {
  children: JSX.Element,
}

const Layout: FC<Props> = ({ children }: Props): React.ReactElement => {

  return (
    <ContainerMain>
      <SideBar/>
      <ContainerChildren>
        {children}
      </ContainerChildren>
    </ContainerMain>
  );
};

export default Layout;

