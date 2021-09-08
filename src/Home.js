import './Home.css';
import Silvio from './img/silvio2.png';
import Playground from './img/playground.png';
import Exaustao from './img/exasutao.png';
import Nr from './img/nr11.png';
import Nr2 from './img/nr-12.png';
import Ar from './img/arcondicionado.png';
import Trator from './img/trator.png';
import Judge from './img/judge.png';
import Car from './img/car.jpg';
import Fundo from './img/Fundo.jpg';
import Header from './Components/Header/';
import big from './img/big.jpeg';
import bk from './img/bk.jpeg';
import giraffas from './img/giraffas.jpeg';
import habibs from './img/habibs.jpeg';
import medicos from './img/medicos.jpeg';
import mrv from './img/mrv.jpeg';
import nissei from './img/nissei.jpeg';
import palladium from './img/plladium.jpeg';
import renner from './img/renner.jpeg'
import Sidenav from './Components/Sidenav/';

function Home() {
  return (
    <div>
      <Header />

      <Sidenav />

      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div className="above-header position-absolute">
          <h3 className="col-10 m-3">Soluções em Laudos e Vistorias Técnicas para a sua segurança.</h3>
          <button className="saiba-mais m-3">Saiba Mais</button>
        </div>
      </div>

      <div className="section1 container-fluid">
        <div className="container section1-content mt-5 p-5 d-flex align-items-center justify-content-around">
          <div className="section-text position-relative mt-5 pt-5 col-8 text-center">
            <h2 className="col-12 mt-5 fw-bold">Uma empresa especializada em trazer segurança ao seu negócio.</h2>
            <p className="col-12 fs-5">A SD Engenharia possui expertise em laudos e vistorias para diversos seguimentos como: Playgrounds, Sistemas de Exaustão para Cozinhas Profissionais, Projetos de Ar condicionado e Planos de PMOC, NR-11, NR-12, Laudos para Máquinas Pesadas e Perícias Judiciais além de Responsabilidade técnica para empresas de Desmonte.</p>
          </div>
        </div>
        <div className="sobre-silvio container-fluid d-flex align-items-center justify-content-center">
          <img className="img-fluid col-xxl-5 col-md-12 m-5" style={{height: '430px', width: '410px'}} src={Silvio} alt="Silvio M. Domingos" />
          <div className="about-silvio col-xxl-5 col-md-12 m-5">
            <h2 className="col-12 fw-bold">Sobre Silvio M. Domingos, fundador da S.D Engenharia Mecânica:</h2>
            <p className="fs-5">Engenheiro Mecânico formado pela Universidade Tuiuti do Paraná e Ohio University – EUA. Atuo na elaboração de projetos de energias renováveis e sou um dos responsáveis pelo desenvolvimento de torre eólica para ambientes urbanos. </p>
            <p className="fs-5">Em 2018 fundei a S.D. Engenharia Mecânica após observar no mercado a necessidade por um profissional que atendesse na elaboração de laudos técnicos visando a segurança para várias empresas. Hoje, além de perito judiciário, sou engenheiro consultor atuando para diversas áreas, oferecendo soluções de laudos e vistorias acordo com a necessidade de cada cliente.</p>
          </div>
        </div>
      </div>

      <div className="section-2 container-fluid mt-5">
        <h2 className="fw-bold text-center">Nossos Serviços</h2>
        <div className="cards container mt-5 d-flex flex-column align-items-center justify-content-around">
          {/*INÍCIO CARD*/}
          <div className="card-black d-flex justify-content-between align-items-center col-xxl-8 col-md-12 m-3">
            <img className="imagem-card p-2 align-self-start" src={Playground}/>
            <div className="card-text align-self-center">
              <h3>Laudo para Playgrounds</h3>
              <p>A brincadeira das crianças para nós é coisa séria! A NBR 16701 definiu os parâmetros para construção e manutenção de playgrounds. A SD Engenharia faz a vistoria completa dos brinquedos do playground e emite laudo certificado com ART</p>
            </div>
          </div>
          {/*FIM CARD*/}

          {/*INÍCIO CARD*/}
          <div className="card-white d-flex justify-content-between align-items-center col-xxl-8 col-md-12 m-3">
            <img className="imagem-card p-2 align-self-end" src={Exaustao}/>
            <div className="card-text align-self-center">
              <h3>Laudo para Sistema de Exaustão de Cozinhas</h3>
              <p>A vistoria trimestral do sistema de exautão, mitiga os riscos de incendios em cozinhas profissionais. O laudo emitido por nós garante a limpeza do sistema e traz tranquilidade para o seu restaurante.</p>
            </div>
          </div>
          {/*FIM CARD*/}

          {/*INÍCIO CARD*/}
          <div className="card-black d-flex justify-content-between align-items-center col-xxl-8 col-md-12 m-3">
            <img className="imagem-card p-2 align-self-start" src={Ar}/>
            <div className="card-text align-self-center">
              <h3>PMOC e Projetos de Ar Condicionado</h3>
              <p>A SD Engenharia elabora projetos de Ar Condicionado para todos os segmentos e também faz a elaboração do PMOC que desde 2018 é obrigatório para ambientes coletivos climatizados.</p>
            </div>
          </div>
          {/*FIM CARD*/}

          {/*INÍCIO CARD*/}
          <div className="card-white d-flex justify-content-between align-items-center col-xxl-8 col-md-12 m-3">
            <img className="imagem-card p-2 align-self-end" src={Nr}/>
            <div className="card-text align-self-center">
              <h3>Laudos NR-11</h3>
              <p>Caminhões Munck, Empilhadeiras, Esteiras Transportadoras, Pontes Rolantes entre outros, devem passar por vistoria técnica para garantir a sua segurança. Fazemos a vistioria com a emissão de laudo técnico no seu equipamento em qualquer local.</p>
            </div>
          </div>
          {/*FIM CARD*/}

          {/*INÍCIO CARD*/}
          <div className="card-black d-flex justify-content-between align-items-center col-xxl-8 col-md-12 m-3">
            <img className="imagem-card p-2 align-self-end" src={Nr2}/>
            <div className="card-text align-self-center">
              <h3>Laudos NR-12</h3>
              <p>Máquinas inseguras causam diversos tipos de acidentes com colaboradores. Proteja seu maior bem! O laudo técnico das suas máquinas seguindo a NR-12 garante a proteção dos seus colaboradores.</p>
            </div>
          </div>
          {/*FIM CARD*/}

          {/*INÍCIO CARD*/}
          <div className="card-white d-flex justify-content-between align-items-center col-xxl-8 col-md-12 m-3">
            <img className="imagem-card p-2 align-self-end" src={Trator}/>
            <div className="card-text align-self-center">
              <h3>Laudos para Máquinas Pesadas</h3>
              <p>Tratores, escavadeiras, retroescavadeiras, perfuratrizes e diversas outras máquinas pesadas támbem devem passar por visitoria visando a segurança do operador e de todos na obra. A SD Engenharia vai até a sua empresa e emite o laudo técnico com ART para segurança da sua empreitada</p>
            </div>
          </div>
          {/*FIM CARD*/}

          {/*INÍCIO CARD*/}
          <div className="card-black d-flex justify-content-between align-items-center col-xxl-8 col-md-12 m-3">
            <img className="imagem-card p-2 align-self-end" src={Judge}/>
            <div className="card-text align-self-center">
              <h3>Perícias Judiciais</h3>
              <p>A SD Engenharia presta consultoria com execução de parecer técnico em disputas judiciais relacionadas à área da mecânica. Atuamos como auxiliar técnico das partes em perícias requeridas pelo judiciário.</p>
            </div>
          </div>
          {/*FIM CARD*/}

          {/*INÍCIO CARD*/}
          <div className="card-white d-flex justify-content-between align-items-center col-xxl-8 col-md-12 m-3">
            <img className="imagem-card p-2 align-self-end" src={Car}/>
            <div className="card-text align-self-center">
              <h3>Responsabilidae Técnica para Desmanches</h3>
              <p>A Resolução 611 do CONTRAN de 2016 trouxe a obrigatoriedade do responsável técnico nas empresas de desmonte de veículos e venda de peças usadas. Nossos profissionais atuam nesse segmento, credenciando as empresas no DETRAN e atuando com o responsável técnico por essas empresas.</p>
            </div>
          </div>
          {/*FIM CARD*/}

        </div>
      </div>

      <div className="section-3 contianer-fluid mt-5">
        <div className="section3-content pt-3">
          <h1 className="fw-bold text-center fs-1 mt-3">Nossos Clientes</h1>
          <div className="container">
            <img className="client-img col-2 m-5" alt="" src={big} />
            <img className="client-img col-2 m-5" alt="" src={bk} />
            <img className="client-img col-2 m-5" alt="" src={giraffas} />
            <img className="client-img col-2 m-5" alt="" src={habibs} />
            <img className="client-img col-2 m-5" alt="" src={medicos} />
            <img className="client-img col-2 m-5" alt="" src={mrv} />
            <img className="client-img col-2 m-5" alt="" src={nissei} />
            <img className="client-img col-2 m-5" alt="" src={palladium} />
            <img className="client-img col-2 m-5" alt="" src={renner} />
          </div>
        </div>
      </div>

      <div className="contato container-fluid">
        <div className="h1-contato container">
          <h1 className="text-center fw-bold pt-5">Contato</h1>
        </div>
        <div className="container mt-5">
          <form className="d-flex flex-column justify-content-around align-items-center">
            <input className="input-form col-xl-8 col-md-10 m-3" type="text" placeholder="Nome" />
            <input className="input-form col-xl-8 col-md-10 m-3" type="text" placeholder="Email" />
            <input className="input-form col-xl-8 col-md-10 m-3" type="num" placeholder="Telefone" />
            <textarea className="input-form col-xl-8 col-md-10 m-3 p-4" type="text" placeholder="Sua Mensagem" />
            <button className="button-form col-2 m-3" type="submit">Enviar Mensagem</button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default Home;
