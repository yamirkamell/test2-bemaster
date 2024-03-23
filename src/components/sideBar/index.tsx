import React from 'react';
import { useNavigate, useLocation  } from 'react-router-dom';
import { LuLayoutDashboard, LuFolder, LuPlayCircle, LuBarChart3, LuSettings, LuHelpCircle, LuMoreHorizontal } from "react-icons/lu";
import { 
  ContainerMain, 
  ContainerLogo, 
  LogoVideoTool, 
  ContainerMenu, 
  ProgressBar, 
  Progress, 
  ContainerPlan, 
  PlanTitle, 
  PlanDescription, 
  ContainerPlanInfo, 
  ContainerProgressText, 
  ProgressTitle, 
  ContainerProgressBody, 
  ContainerButton, 
  ButtonTitle, 
  ContainerPlanIcon 
} from './styled';

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
  }, 
  {
    icon: <LuHelpCircle id='icon'/>,
    label: 'Ayuda',
    route: ''
  }
]

const planContent = [
  {
    id: 0,
    limit: 2,
    capacity: 1,
    name: 'Almacenamiento'
  }, 
  {
    id: 1,
    limit: 5,
    capacity: 3.4,
    name: 'Banda Mensual'
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
      <ContainerPlan>
        <ContainerPlanInfo>
          <PlanTitle>Mi Plan - Plus</PlanTitle>
          <PlanDescription>El uso se renueva el: 3-may-23</PlanDescription>
        </ContainerPlanInfo>
        {planContent.map(({ id, limit, capacity, name}) => (
            <ContainerProgressBody key={id}>
              <ContainerProgressText>
                <ProgressTitle>{name}</ProgressTitle>
                <PlanDescription>{`${capacity} TB / ${limit} TB`}</PlanDescription>
              </ContainerProgressText>
              <Progress>
                <ProgressBar $width={capacity / limit * 100}/>
              </Progress>
            </ContainerProgressBody>
        ))}
        <ContainerButton>
          <ButtonTitle>Administrar Plan</ButtonTitle>
        </ContainerButton>
      </ContainerPlan>
      <ContainerPlanIcon>
        <LuMoreHorizontal /> 
      </ContainerPlanIcon>
    </ContainerMain >
  );
};

export default SideBar;
