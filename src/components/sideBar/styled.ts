import styled from 'styled-components';
import { LuPlayCircle } from "react-icons/lu";

const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    padding: 10px 15px;
    background-color: #ffff;
    width: 200px;
    border-radius: 10px;
    @media (max-width: 720px) {
        width: 40px;
    } 
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
    @media (max-width: 720px) {
        #label{
            display: none;
        }
    } 
`;

const ContainerPlan = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 70px;
    padding: 10px;
    background-color: #f4f4f4;
    width: 90%;
    border-radius: 10px;
    @media (max-width: 720px) {
        display: none;
    } 
`;

const ContainerPlanInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const PlanTitle = styled.span`
    font-size: 10px;
    font-weight: bold;
`;

const PlanDescription = styled.span`
    font-size: 9px;
`;

const ContainerProgressBody = styled.div`
    margin-top: 10px;
`;

const ContainerProgressText = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const ProgressTitle = styled.span`
    font-size: 10px;
`;

const Progress = styled.div`
    height: 5px;
    width: 100%;
    border-radius: 5px;
    background-color: #dedeff;
`;
 
const ProgressBar = styled.div<{$width: number}>`
    height: 100%;
    background: #4a00ff;
    display: flex;
    align-items: center;
    width: ${props => props.$width}%;
    border-radius: 5px;
`;

const ContainerButton = styled.div`
    display: flex; 
    align-items: center;
    justify-content: flex-start;
    width: fit-content;
    padding: 0px 10px;
    height: 20px;
    margin-top: 15px;
    background-color: #4a00ff; 
    border-radius: 15px;
`; 

const ButtonTitle = styled.span`
    font-size: 10px;
    color: #ffff;
`;

const ContainerPlanIcon = styled.div`
    display: none;
    @media (max-width: 720px) {
        display: block;
        position: absolute;
        bottom: 50px;
        padding: 10px;
        background-color: #f4f4f4;
        border-radius: 10px;
    } 
`;

export {
    ContainerMain,
    ContainerLogo,
    LogoVideoTool,
    ContainerMenu,
    ContainerPlan,
    ContainerPlanInfo,
    PlanTitle,
    PlanDescription,
    ContainerProgressBody,
    ContainerProgressText,
    ProgressTitle,
    Progress,
    ProgressBar,
    ContainerButton,
    ButtonTitle,
    ContainerPlanIcon
  };
  