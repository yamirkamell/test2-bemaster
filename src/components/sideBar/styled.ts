import styled from 'styled-components';
import { LuPlayCircle } from "react-icons/lu";

const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    padding: 10px 20px;
    background-color: #ffff;
    width: 200px;
    border-radius: 10px;
`;

const ContainerLogo = styled.div`
    background-color: #4a00ff;
    display: flex; 
    align-items: center;
    justify-content: center; 
    border-radius: 10px;
    margin: 30px 0px;

`;

const LogoVideoTool = styled(LuPlayCircle)`
    width: 45px;
    height: 45px;
    color: #ffff;
`;

const ContainerMenu = styled.div<{$selected: boolean}>`
    display: flex; 
    align-items: center;
    justify-content: flex-start;
    width: 90%;
    background-color: ${props => props.$selected === true ? '#4a00ff' : 'transparent'}; 
    padding: 7px;
    border-radius: 5px;
    margin-top: 22px;
    cursor: pointer;
    #icon, #label{
        color: ${props => props.$selected === true ? '#ffff' : '#222222'};
        padding-left: 10px;
        font-size: 14px;
    }
`;
  

export {
    ContainerMain,
    ContainerLogo,
    LogoVideoTool,
    ContainerMenu
  };
  