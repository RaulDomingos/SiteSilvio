import './Home.css';
import Workers from './img/workers.png';
import Header from './Components/Header/index';

function Home() {
  return (
    <div>
      <Header />
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div className="above-header position-absolute">
          <h3 className="col-10 m-3">Soluções em Laudos e Vistorias Técnicas para a sua segurança.</h3>
          <button className="saiba-mais m-3">Saiba Mais</button>
        </div>
      </div>
      <div className="section1 container-fluid">
        <div className="container section1-content mt-5 d-flex align-items-center justify-content-center p-5">
          <img className="workers img-fluid mt-5 pt-5 col-7" src={Workers} alt="Engenheiros trabalhando" />
          <div className="section1-text position-absolute d-flex flex-column align-items-center justify-content-around col-4">
            <h3 className="col-8 m-4 fs-2">Uma empresa especializada em trazer segurança ao seu negócio.</h3>
            <p className="col-8 m-4 fs-5">A SD Engenharia possui expertise em laudos e vistorias para diversos seguimentos como: Playgrounds, Sistemas de Exaustão para Cozinhas Profissionais, Projetos de Ar condicionado e Planos de PMOC, NR-11, NR-12, Laudos para Máquinas Pesadas e Perícias Judiciais além de Responsabilidade técnica para empresas de Desmonte.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
