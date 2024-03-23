import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/_layout/layout';
import { ContainerBreadCrumb, ContainerHeader, ContainerLogo, ContainerTable, ContainerTitles, DividerComponent, IconGoBack, IconName, TextComponent } from './styled';

const data = [
  { name: 'Entrenamiento.mp4',
    duration: '04:11:37',
    size: '7.3 GB',
    lastDate: '30/may/2023'
  },
  { name: 'Salida-al-mercado-versión nueva.mp4',
    duration: '47:55',
    size: '1.4 GB',
    lastDate: '22/jun/2022'
  },
  { name: 'Como-cerrar-una-venta.mp4',
    duration: '10:12',
    size: '284 MB',
    lastDate: '30/may/2023'
  },
  { name: 'Crea-un-ticket-valioso.mp4',
    duration: '03:50:22',
    size: '7.3 GB',
    lastDate: '30/may/2023'
  },
  { name: 'Entrenamiento.mp4',
    duration: '04:11:37',
    size: '7.3 GB',
    lastDate: '30/may/2023'
  },
  { name: 'Salida-al-mercado-versión nueva.mp4',
    duration: '47:55',
    size: '1.4 GB',
    lastDate: '22/jun/2022'
  }
]
const ContentFolder = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <>
        <ContainerHeader>
            <ContainerLogo onClick={()=> {navigate(-1)}}>
                <IconGoBack />
            </ContainerLogo>
            <ContainerBreadCrumb>
                <span> Home / BeMaster </span>
            </ContainerBreadCrumb>
        </ContainerHeader>
        <ContainerTable>
          <ContainerTitles id='titles'>
            <input type='checkbox' />
            <TextComponent> Nombre </TextComponent>
            <TextComponent id='center'> Tamaño </TextComponent>
            <TextComponent id='center'> Duración </TextComponent>
            <TextComponent id='center'> Última modificación </TextComponent>
          </ContainerTitles>
          <DividerComponent />
          {data?.map((item) => (
            <>
              <ContainerTitles id='data'>
              <input type='checkbox' />
              <TextComponent> <IconName/> {item.name} </TextComponent>
              <TextComponent id='center'> {item.size} </TextComponent>
              <TextComponent id='center'> {item.duration} </TextComponent>
              <TextComponent id='center'> {item.lastDate} </TextComponent>
              </ContainerTitles>
              <DividerComponent />
            </>
          ))}
        </ContainerTable>
        </>
    </Layout>
  )
};

export default ContentFolder;