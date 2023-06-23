import style from "./Store.module.css";

const Store = () => {
  return (
    <div className={style.pruebauno}>
      <div className={style.prueba}>
        <div className={style.container}>
          <div className={style.uno}>
            <div className={style.unocontainer}>
              <div className={style.unocontenido}>workspace</div>
              <div className={style.unocontenido}>pagos</div>
              <div className={style.unocontenido}>metodologias</div>
              <div className={style.unocontenido}>vision</div>
              <div className={style.unocontenido}>mision</div>
              <div className={style.unocontenido}>paises </div>
              <div className={style.unocontenido}>acerca</div>
              <div className={style.unocontenido}>visitanos</div>
            </div>
          </div>
          <div className={style.dos}>
            <h4 className={style.dosmensaje}>
              tenemos descuento en proyectos de tipo ejemplo y por tiempo
              limitado.
            </h4>
          </div>
          <div className={style.correcciondos}>
            <div className={style.correcciontres}></div>
            <div className={style.correccioncuatro}>
              <div className={style.tres}>
                <div className={style.trescontainer}>
                  <div className={style.trestercero}></div>

                  <div className={style.tresprimero}>
                    <h3 className={style.tresmensaje}>
                      Tienda. La mejor manera de comprar servicios.🛒
                    </h3>

                    <div className={style.treslogo}>
                      💸 necesitas ayuda con tu compra
                      <br />
                      <br />
                      <div>📨 contactanos</div>
                    </div>
                  </div>
                </div>
                <div className={style.tressegundo}>
                  <div className={style.tresproductos}>
                    <div className={style.trescajas}></div>
                    <div className={style.trescajas}></div>
                    <div className={style.trescajas}></div>
                    <div className={style.trescajas}></div>
                    <div className={style.trescajas}></div>
                    <div className={style.trescajas}></div>
                  </div>
                </div>
              </div>
              <div className={style.cuatropruebados}>
                <div className={style.cuatrocontainertitulo}>
                  <div className={style.cuatrodivision}></div>
                  <h3 className={style.cuatromensaje}>
                    Lo último. Echa un vistazo a las novedades, ahora mismo.🎉
                  </h3>
                </div>
                <div className={style.cuatroproductos}>
                  <div className={style.cuatrocajas}> </div>
                  <div className={style.cuatrocajas}></div>
                  <div className={style.cuatrocajas}></div>
                </div>
              </div>
              <div className={style.cuatrodos}>
                <div className={style.cuatrocontainertitulo}>
                  <div className={style.cuatrodivision}></div>
                  <h3 className={style.cuatromensaje}>
                    Te ayudamos. Cuando, como y donde quieras.🤝
                  </h3>
                </div>
                <div className={style.cuatroproductos}>
                  <div className={style.cuatrocajasdos}> </div>
                  <div className={style.cuatrocajasdos}></div>
                </div>
              </div>
              <div className={style.cuatrodos}>
                <div className={style.cuatrocontainertitulo}>
                  <div className={style.cuatrodivision}></div>
                  <h3 className={style.cuatromensaje}>
                    Aythe Store marca la diferencia. Aún más razones para
                    comprar con nosotros.🙋‍♂️
                  </h3>
                </div>
                <div className={style.cuatroproductostres}>
                  <div className={style.cuatrocajastres}></div>
                  <div className={style.cuatrocajastres}></div>
                  <div className={style.cuatrocajastres}></div>
                  <div className={style.cuatrocajastres}></div>
                </div>
              </div>

              <div className={style.cuatrodos}>
                <div className={style.cuatrocontainertitulo}>
                  <div className={style.cuatrodivision}></div>
                  <h3 className={style.cuatromensaje}>
                    Descuentos exclusivos para empresas, univercidades colegios
                    y más.🏫
                  </h3>
                </div>
                <div className={style.cuatroproductos}>
                  <div className={style.cuatrocajas}> </div>
                  <div className={style.cuatrocajas}></div>
                  <div className={style.cuatrocajas}></div>
                </div>
              </div>

              <div className={style.cuatropruebados}>
                <div className={style.cuatrocontainertitulo}>
                  <div className={style.cuatrodivision}></div>
                  <h3 className={style.cuatromensaje}>
                    La experiencia aythen.Haz mas con los servicios y
                    oportunidades.😎
                  </h3>
                </div>
                <div className={style.cuatroproductos}>
                  <div className={style.cuatrocajas}> </div>
                  <div className={style.cuatrocajas}></div>
                  <div className={style.cuatrocajas}></div>
                </div>
              </div>
              <div className={style.cinco}>
                <div className={style.enlace}></div>
                <div className={style.enlacedos}>
                  <h1 style={{ display: "flex", flexDirection: "row" }}>
                    Enlaces rapido.
                  </h1>
                  <button className={style.enlacessaber}>
                    saber que tipo de usuario soy
                  </button>
                  <button className={style.enlacessaber}>
                    ayuda para comprar
                  </button>
                  <button className={style.enlacessaber}>cambiar pedido</button>
                  <button className={style.enlacessaber}>
                    pedidos favoritos
                  </button>
                </div>
              </div>
              <div className={style.seis}>
                <div className={style.seisuno}></div>
                <div className={style.seisdos}>
                  <h2 className={style.seistitulo}>
                    Servicios disponible en las siguientes plataformas.
                  </h2>
                  <div className={style.seiscontainer}>
                    <div className={style.seiscajas}> windows</div>
                    <div className={style.seiscajas}>linux</div>
                    <div className={style.seiscajas}>apple</div>
                    <div className={style.seiscajas}>androi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
