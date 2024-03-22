import React, { useState } from 'react';
import { useNavigate, useLocation  } from 'react-router-dom';
import { ContainerMain, ContainerLogo, LogoVideoTool, ContainerMenu } from './styled';
import { LuLayoutDashboard, LuFolder, LuPlayCircle, LuBarChart3, LuSettings } from "react-icons/lu";

const links = [
  {
    icon: <LuLayoutDashboard id='icon'/>,
    label: 'Dashboard',
    route: ''
  }, 
  {
    icon: <LuFolder id='icon'/>,
    label: 'Videos',
    route: 'home'
  }, 
  {
    icon: <LuPlayCircle id='icon'/>,
    label: 'Player',
    route: ''
  }, 
  {
    icon: <LuBarChart3 id='icon'/>,
    label: 'Analytics',
    route: ''
  }, 
  {
    icon: <LuSettings id='icon'/>,
    label: 'Configuraciones',
    route: ''
  }
]

const SideBar = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const HandleRedirectUrl = (url: string) => {
    navigate(url);
  }

  return (
    <ContainerMain>
      <ContainerLogo>
        <LogoVideoTool />
      </ContainerLogo>
      {links.map(({ icon, label, route }) => (
        <ContainerMenu key={route} onClick={()=>{HandleRedirectUrl(`/${route}`)}} $selected={location.pathname === `/${route}` ? true : false}>
          {icon}
          <span id='label'>{label}</span>
        </ContainerMenu>
      ))}
    </ContainerMain >
  );
};

export default SideBar;
