import { useEffect } from 'react';
import '../styles/search.scss';

function Search() {

  useEffect(() => {
    
  })
  return (
      <section className="conteudo">
          <article className="card">
              <header className="cabecalho"></header>
              <main className="corpo">
                  <form className="js-formulario">
                      <input type="text" name="palavra" placeholder="Nhập mã để tìm phòng livestream" required autoComplete="off" />
                      <input type="submit" value="Search" />
                  </form>
                  <section className="resultado js-resultado display-none">
                      <div className="carregamento js-carregamento display-none"></div>
                      <h3 className="resultado__titulo js-resultado__titulo"></h3>
                      <span className="resultado__descricao js-resultado__descricao">
                      </span>
                  </section>
              </main>
              <span className="textos__background tb-1"></span>
              <span className="textos__background tb-2"></span>
              <span className="textos__background tb-3"></span>
          </article>
      </section>
  );
}

export default Search;
