import style from './fileDetails.module.css'
import dataJson from '../mockData.json'
import Navbar from './NavbarDetails/NavbarDetails'
import { useParams } from 'react-router-dom'
const File = () => {
  const { id } = useParams()
  const bookCurrent = dataJson.find((c) => c.id === id)
  console.log(bookCurrent)
  return (
    // <div>
    //     <Navbar project={bookCurrent}/>
    //     <div className={'imgContainerDetail'}>

    //         <img src={bookCurrent.urlImage}/>
    //     </div>
    // </div>
    <main className={style.main}>
      <section className={style.section}>
        <header className={style.header}>
          <img
            src={bookCurrent.urlImage}
            alt={bookCurrent.title}
            className={style.header_img}
          />
          <div className={style.header_content}>
            <div className={style.flex_column}>
              <h1 className={style.header_title}>{bookCurrent.projectName}</h1>
              <a href="#" className={`${style.header_link} ${style.link}`}>
                GIANTS Software GmbH
              </a>
              <p>Diseñado para IPad</p>
            </div>
            <div className={style.flex_column}>
              <span>Núm. 6 en Familiar</span>
              <div className={style.valuation_container}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="112"
                  height="20"
                  viewBox="0 0 112 20"
                  fill="none"
                >
                  <path
                    d="M12.43 8L10 0L7.57 8H0L6.18 12.41L3.83 20L10 15.31L16.18 20L13.83 12.41L20 8H12.43Z"
                    fill="#0000FF"
                  />
                  <path
                    d="M35.43 8L33 0L30.57 8H23L29.18 12.41L26.83 20L33 15.31L39.18 20L36.83 12.41L43 8H35.43Z"
                    fill="#0000FF"
                  />
                  <path
                    d="M58.43 8L56 0L53.57 8H46L52.18 12.41L49.83 20L56 15.31L62.18 20L59.83 12.41L66 8H58.43Z"
                    fill="#0000FF"
                  />
                  <path
                    d="M81.43 8L79 0L76.57 8H69L75.18 12.41L72.83 20L79 15.31L85.18 20L82.83 12.41L89 8H81.43Z"
                    fill="#0000FF"
                  />
                  <path
                    d="M104.43 8L102 0L99.57 8H92L98.18 12.41L95.83 20L102 15.31L108.18 20L105.83 12.41L112 8H104.43Z"
                    fill="#787878"
                  />
                </svg>
                <small>3,9 · 185 valoraciones</small>
              </div>
            </div>
            <p>6,99€ · Ofrece compras dentro de la app</p>
          </div>
        </header>

        <hr className={style.divisor} />
        {/* Capturas de pantalla */}
        <article>
          <div className={style.flex_row}>
            <h4 className={style.subtitle}>Capturas de pantalla</h4>
            <a href="#" className={style.link}>
              iPad
            </a>
            <a href="#" className={style.link}>
              iPhone
            </a>
          </div>
          <div className={style.flex_row}>
            <img
              src="https://s3-alpha-sig.figma.com/img/470d/bdf0/2958b49748eb2b7b397c9f4e8e4dbdd8?Expires=1691366400&Signature=YrVVJ~3emNKvGk~tIIPreTWUYhlR3meaj5dxDQAt9kcBNjQv3hW2T~AooeLj3CtA28xi81yS8Rm-XzayYZ6l64N1RElj9owuoP9iMLjwD64KNcWQE7fbWEmcIWex~TzWdSWya83T0RU3rUMmPOoUAur8xqAaxvmT1djA4QFuGGfDkThKDINinrffoM3CjJH1HT0xh~AyrYqtPdSSeEohGkhGm9PgnPTJ0iWiqQulj1BSnWn7I4KChyqcOV9tc3vNzuCiNHwpcqX2Zm-K~X1R48XtaTNUmRf-mN9mZRnPL5Co8VX3h3mQ0HHwEGKIyQCYjrLq4WI28B3P6kX1HxapVQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className={style.img}
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/5c37/a998/3866a531663e5cbe2585e9ee838a20d2?Expires=1691366400&Signature=CDQ8vOrZ3cgt3Jfqa6rMN4VfaCmZZuvMq933lMLGCKRd0da5TxmPRZ~i3ddYFIUhOxmmXGmZM0h4nCuSz22tG0hHKImZPv9HmJCJygXqXsICLkgWJJ4MMWQdBv8nXjm--P1qsZCNdekuRM1KXsdVQAiZ6tDk10XwJYFTTDR8ttlrMRTtf0PX6wVs0VbisLT4jiUhhUbEXsXVqPz8Rt1xTPNz1DEj7ecC~P-NIJXIcXwuRIAJY6kXhmrrCGrTlcC3MO4lYL6SqNx-VAPJ5dpHxwdjxocHLSYtB63tosSJKFgVAnRu~3pomNuxARGihylc1gfwQhvCqC2Ije62XoAOVQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className={style.img}
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/e200/1440/7a3f7a8be0216d3b9737b6fc677ac3f0?Expires=1691366400&Signature=K33f8KyvmBtkvbTr~igz5fTqZ-55dP-c4P5~qqUnUaB70kBhYIvL8~kqYa6TsTRPEM-6M27V4AFVZtkVIvfg5TrtyX5BHWPwnkafhfEmQovBtZWAVWTrZgoSYLogmTIjI7TltWuC9fdv3Cmk~F5AKT9czX-Z5yNX8oX0iNAwmSg-dy4XuTJjZkjgKFafOmeKWxg5fD-4Ya2wyCVVtwaamdgg7uKg1HzNBlNiVTs6Y9sgcFwnK1A6gb7unZl2gMBGzElwRCvkwlpzLIDn08y498Tz7gJd~53cERU-JtrzawZdRWqoOZSTIEWZndzpfPLFFQ~T6QOgqFovqdZmwB6GNA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className={style.img}
            />
          </div>
        </article>

        <hr className={style.divisor} />
        {/* Resumen */}
        <article className={style.resume_container}>
          <p className={style.resume}>
            "¡Entra al emocionante mundo de la agricultura con Farming Simulator
            20! Cosecha muchos cultivos diferentes, ocúpate de tu ganado de
            cerdos, vacas y ovejas y monta tus propios caballos; así podrás
            explorar toda la tierra que rodea a tu granja de un modo
            completamente nuevo. Vende tus productos en un mercado dinámico para
            ganar dinero que podrás invertir en más maquinaria y en ampliar la
            granja.
          </p>
        </article>

        <hr className={style.divisor} />
        {/* Novedades */}
        <article className={style.news_container}>
          <div>
            <h4 className={style.subtitle}>Novedades</h4>
            <span>Added some small meta data changes</span>
          </div>
          <div>
            <a href="#" className={style.link}>
              Historial de actualizaciones
            </a>
            <p className={style.version}>Versión 1.1.13</p>
          </div>
        </article>

        <hr className={style.divisor} />
        {/* Valoraciones y reseñas */}
        <article className={style.reviews_container}>
          <header className={style.reviews_header_container}>
            <h4 className={style.subtitle}>Valoraciones y reseñas</h4>
            <a href="#" className={style.link}>
              Ver todo
            </a>
          </header>
          <main className={style.reviews_main}>
            <div className={style.stars_container}>
              <small className={style.stars_title}>
                <span className={style.stars_value}>3,9</span> de 5
              </small>
              <small className={style.font_size}>185 valoraciones</small>
            </div>
            <div className={style.reviews_container_cards}>
              <article>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="150"
                    height="27"
                    viewBox="0 0 150 27"
                    fill="none"
                  >
                    <path
                      d="M16.5504 10.5176L13.3149 0L10.0794 10.5176H0L8.2286 16.3155L5.0996 26.2941L13.3149 20.1281L21.5435 26.2941L18.4145 16.3155L26.6298 10.5176H16.5504Z"
                      fill="#0000FF"
                    />
                    <path
                      d="M47.1793 10.5176L43.9438 0L40.7083 10.5176H30.6289L38.8575 16.3155L35.7285 26.2941L43.9438 20.1281L52.1724 26.2941L49.0434 16.3155L57.2587 10.5176H47.1793Z"
                      fill="#BFBFBF"
                    />
                    <path
                      d="M77.8082 10.5176L74.5727 0L71.3372 10.5176H61.2578L69.4864 16.3155L66.3574 26.2941L74.5727 20.1281L82.8013 26.2941L79.6723 16.3155L87.8876 10.5176H77.8082Z"
                      fill="#BFBFBF"
                    />
                    <path
                      d="M108.437 10.5176L105.202 0L101.966 10.5176H91.8867L100.115 16.3155L96.9863 26.2941L105.202 20.1281L113.43 26.2941L110.301 16.3155L118.517 10.5176H108.437Z"
                      fill="#BFBFBF"
                    />
                    <path
                      d="M139.066 10.5176L135.831 0L132.595 10.5176H122.516L130.744 16.3155L127.615 26.2941L135.831 20.1281L144.059 26.2941L140.93 16.3155L149.145 10.5176H139.066Z"
                      fill="#BFBFBF"
                    />
                  </svg>
                </div>
                <p>IG: cristian.dcg, 16/12/2019</p>
                <p>
                  Un juego que se deberia mejorar y mucho Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Curabitur nec urna risus.
                  Etiam ornare iaculis ultrices. Curabitur nec urna risus. Etiam
                  ornare iaculis{' '}
                </p>
              </article>
              <article>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="150"
                    height="27"
                    viewBox="0 0 150 27"
                    fill="none"
                  >
                    <path
                      d="M16.5504 10.5176L13.3149 0L10.0794 10.5176H0L8.2286 16.3155L5.0996 26.2941L13.3149 20.1281L21.5435 26.2941L18.4145 16.3155L26.6298 10.5176H16.5504Z"
                      fill="#0000FF"
                    />
                    <path
                      d="M47.1793 10.5176L43.9438 0L40.7083 10.5176H30.6289L38.8575 16.3155L35.7285 26.2941L43.9438 20.1281L52.1724 26.2941L49.0434 16.3155L57.2587 10.5176H47.1793Z"
                      fill="#BFBFBF"
                    />
                    <path
                      d="M77.8082 10.5176L74.5727 0L71.3372 10.5176H61.2578L69.4864 16.3155L66.3574 26.2941L74.5727 20.1281L82.8013 26.2941L79.6723 16.3155L87.8876 10.5176H77.8082Z"
                      fill="#BFBFBF"
                    />
                    <path
                      d="M108.437 10.5176L105.202 0L101.966 10.5176H91.8867L100.115 16.3155L96.9863 26.2941L105.202 20.1281L113.43 26.2941L110.301 16.3155L118.517 10.5176H108.437Z"
                      fill="#BFBFBF"
                    />
                    <path
                      d="M139.066 10.5176L135.831 0L132.595 10.5176H122.516L130.744 16.3155L127.615 26.2941L135.831 20.1281L144.059 26.2941L140.93 16.3155L149.145 10.5176H139.066Z"
                      fill="#BFBFBF"
                    />
                  </svg>
                </div>
                <p>IG: cristian.dcg, 16/12/2019</p>
                <p>
                  Un juego que se deberia mejorar y mucho Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Curabitur nec urna risus.
                  Etiam ornare iaculis ultrices. Curabitur nec urna risus. Etiam
                  ornare iaculis{' '}
                </p>
              </article>
              <article>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="150"
                    height="27"
                    viewBox="0 0 150 27"
                    fill="none"
                  >
                    <path
                      d="M16.5504 10.5176L13.3149 0L10.0794 10.5176H0L8.2286 16.3155L5.0996 26.2941L13.3149 20.1281L21.5435 26.2941L18.4145 16.3155L26.6298 10.5176H16.5504Z"
                      fill="#0000FF"
                    />
                    <path
                      d="M47.1793 10.5176L43.9438 0L40.7083 10.5176H30.6289L38.8575 16.3155L35.7285 26.2941L43.9438 20.1281L52.1724 26.2941L49.0434 16.3155L57.2587 10.5176H47.1793Z"
                      fill="#BFBFBF"
                    />
                    <path
                      d="M77.8082 10.5176L74.5727 0L71.3372 10.5176H61.2578L69.4864 16.3155L66.3574 26.2941L74.5727 20.1281L82.8013 26.2941L79.6723 16.3155L87.8876 10.5176H77.8082Z"
                      fill="#BFBFBF"
                    />
                    <path
                      d="M108.437 10.5176L105.202 0L101.966 10.5176H91.8867L100.115 16.3155L96.9863 26.2941L105.202 20.1281L113.43 26.2941L110.301 16.3155L118.517 10.5176H108.437Z"
                      fill="#BFBFBF"
                    />
                    <path
                      d="M139.066 10.5176L135.831 0L132.595 10.5176H122.516L130.744 16.3155L127.615 26.2941L135.831 20.1281L144.059 26.2941L140.93 16.3155L149.145 10.5176H139.066Z"
                      fill="#BFBFBF"
                    />
                  </svg>
                </div>
                <p>IG: cristian.dcg, 16/12/2019</p>
                <p>
                  Un juego que se deberia mejorar y mucho Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Curabitur nec urna risus.
                  Etiam ornare iaculis ultrices. Curabitur nec urna risus. Etiam
                  ornare iaculis{' '}
                </p>
              </article>
            </div>
          </main>
        </article>

        <hr className={style.divisor} />
        {/* Privacidad de la app */}
        <article className={style.privacity_container}>
          <header className={style.privacity_header}>
            <h4 className={style.subtitle}>Privacidad de la app</h4>
            <a href="#" className={style.link}>
              Ver información
            </a>
          </header>
          <p className={style.privacity_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            nec urna risus. Etiam ornare iaculis ultrices. Sed a cursus tellus,
            et faucibus velit. Phasellus placerat est sollicitudin rhoncus
            laoreet. Pellentesque aliquet ipsum in dolor venenatis, sed tempor
            orci sodales. Sed malesuada neque nulla, in ultricies
          </p>
          <div className={style.privacity_data}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <circle
                cx="17"
                cy="17"
                r="15.5"
                stroke="#0000FF"
                stroke-width="3"
              />
              <path
                d="M8.14583 27.625C8.14583 27.625 6.375 27.625 6.375 25.8542C6.375 24.0833 8.14583 18.7708 17 18.7708C25.8542 18.7708 27.625 24.0833 27.625 25.8542C27.625 27.625 25.8542 27.625 25.8542 27.625H8.14583ZM17 17C18.409 17 19.7602 16.4403 20.7565 15.444C21.7528 14.4477 22.3125 13.0965 22.3125 11.6875C22.3125 10.2785 21.7528 8.92728 20.7565 7.931C19.7602 6.93471 18.409 6.375 17 6.375C15.591 6.375 14.2398 6.93471 13.2435 7.931C12.2472 8.92728 11.6875 10.2785 11.6875 11.6875C11.6875 13.0965 12.2472 14.4477 13.2435 15.444C14.2398 16.4403 15.591 17 17 17Z"
                fill="#0000FF"
              />
              <line
                x1="3.2689"
                y1="3.98276"
                x2="32.8035"
                y2="30.462"
                stroke="#0000FF"
                stroke-width="3"
              />
            </svg>
            <span>Datos no vinculados contigo</span>
            <p className={style.data_p}>
              Los siguientes datos pueden recopilarse, pero no se vinculan con
              tu identidad:{' '}
            </p>
            <p className={style.data}>Datos de uso</p>
          </div>
          <p className={style.privacity_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            nec urna risus. Etiam ornare iaculis ultrices. Sed a cursus tellus,
            et faucibus velit. Phasellus placerat est sollicitudin rhoncus
            laoreet. Pellentesque aliquet ipsum in dolor venenatis, sed tempor
            orci sodales. Sed malesuada neque nulla, in ultricies
          </p>
        </article>

        <hr className={style.divisor} />
        {/* Información */}
        <article className={style.info_container}>
          <h4 className={style.subtitle}>Información</h4>
          <div className={style.info_data}>
            <span>Proveedor</span>
            <span>GIANTS Software GmbH</span>
            <span>Compatibilidad</span>
            <span>iPhone</span>
            <span>Requiere iOS 13.0 o posterior</span>
            <span>Mac</span>
            <span>
              Requiere macOS 11.0 o posterior y un Mac con el chip M1 de Apple o
              posterior.
            </span>
          </div>
          <div className={style.info_data}>
            <span>Tamaño</span>
            <span>726,2 MB</span>
            <span>Idiomas</span>
            <span>Inglés</span>
          </div>
          <div className={style.info_data}>
            <span>Categoría</span>
            <span>Juegos</span>
            <span>Edad</span>
            <span>4+</span>
          </div>
          <div>
            <span>Copyright © 2019 GIANTS Software GmbH</span>
          </div>
          <div>
            <span>Precio</span>
            <span>6,99 €</span>
          </div>
          <div>
            <span>Compras dentro de la app</span>
            <span>1’000’000 Coins</span>
            <span>500’000 Coins</span>
            <span>200’000 Coins</span>
          </div>
          <div>
            <span>2,99 € </span>
            <span>1,99 €</span>
            <span>0,99 €</span>
          </div>
          <div>
            <a href="#">Sitio web del desarrollador 🡥</a>
            <a href="#">Soporte de la app 🡥</a>
            <a href="#">Política de privacidad 🡥</a>
          </div>
        </article>

        <hr className={style.divisor} />
        {/* Compatibilidad */}
        <article>
          <h4>Compatibilidad</h4>
          <div>
            <img
              src="https://s3-alpha-sig.figma.com/img/7564/3d52/e1c447c9de13c8953b02cb580d96db30?Expires=1691366400&Signature=n4M0BMiSWcE2hyLCrVI8iIncnPvbW9fg1WkeiPBlxkgBc6I2Ma5F4rQiew0onx94cYhL2yx7B2nA91qWa9caNq-2lX8Fd6kEgdGr~FZZkokSpIPYYU-u~lCCz9Fv-qZu7bjqZRQBnFbQ6AW0ky6eohs6ZP1-CR1nm9SiaFN9dvLH5KkP3BsvKmxAULjxVoJtt9iVrbfLv68EOwgqKww4tTsrnGt~DeY7KTwPid2dj6i8vS0UtleMekrCNUqCDp~5WVTgJneewQaM8b3Frsf4~E-N-KbrmC7~H1BC6nQ~swwhx0Ppzd64vKnxRPhTe9hhdBbG4R-oY4RgM9dz8OlkEw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              style={{ width: '118px', height: '118px', borderRadius: '50%' }}
            />
            <div>
              <span>Game Center</span>
              <span>
                Reta a tus amigos y consulta las clasficaciones y logros.
              </span>
              <a href="#">Mas informacion.</a>
            </div>
          </div>
        </article>

        <hr className={style.divisor} />
        {/* Mas de este desarrollador */}
        <article>
          <h4>Mas de este desarrollador</h4>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '10px',
              alignItems: 'center'
            }}
          >
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/470d/bdf0/2958b49748eb2b7b397c9f4e8e4dbdd8?Expires=1691366400&Signature=YrVVJ~3emNKvGk~tIIPreTWUYhlR3meaj5dxDQAt9kcBNjQv3hW2T~AooeLj3CtA28xi81yS8Rm-XzayYZ6l64N1RElj9owuoP9iMLjwD64KNcWQE7fbWEmcIWex~TzWdSWya83T0RU3rUMmPOoUAur8xqAaxvmT1djA4QFuGGfDkThKDINinrffoM3CjJH1HT0xh~AyrYqtPdSSeEohGkhGm9PgnPTJ0iWiqQulj1BSnWn7I4KChyqcOV9tc3vNzuCiNHwpcqX2Zm-K~X1R48XtaTNUmRf-mN9mZRnPL5Co8VX3h3mQ0HHwEGKIyQCYjrLq4WI28B3P6kX1HxapVQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                // className={style.img}
                style={{
                  width: '182px',
                  height: '182px',
                  borderRadius: '48px'
                }}
              />
              <span>Lorem ipsum dolor sit amet Juegos</span>
            </div>
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/470d/bdf0/2958b49748eb2b7b397c9f4e8e4dbdd8?Expires=1691366400&Signature=YrVVJ~3emNKvGk~tIIPreTWUYhlR3meaj5dxDQAt9kcBNjQv3hW2T~AooeLj3CtA28xi81yS8Rm-XzayYZ6l64N1RElj9owuoP9iMLjwD64KNcWQE7fbWEmcIWex~TzWdSWya83T0RU3rUMmPOoUAur8xqAaxvmT1djA4QFuGGfDkThKDINinrffoM3CjJH1HT0xh~AyrYqtPdSSeEohGkhGm9PgnPTJ0iWiqQulj1BSnWn7I4KChyqcOV9tc3vNzuCiNHwpcqX2Zm-K~X1R48XtaTNUmRf-mN9mZRnPL5Co8VX3h3mQ0HHwEGKIyQCYjrLq4WI28B3P6kX1HxapVQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                // className={style.img}
                style={{
                  width: '182px',
                  height: '182px',
                  borderRadius: '48px'
                }}
              />
              <span>Lorem ipsum dolor sit amet Juegos</span>
            </div>
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/470d/bdf0/2958b49748eb2b7b397c9f4e8e4dbdd8?Expires=1691366400&Signature=YrVVJ~3emNKvGk~tIIPreTWUYhlR3meaj5dxDQAt9kcBNjQv3hW2T~AooeLj3CtA28xi81yS8Rm-XzayYZ6l64N1RElj9owuoP9iMLjwD64KNcWQE7fbWEmcIWex~TzWdSWya83T0RU3rUMmPOoUAur8xqAaxvmT1djA4QFuGGfDkThKDINinrffoM3CjJH1HT0xh~AyrYqtPdSSeEohGkhGm9PgnPTJ0iWiqQulj1BSnWn7I4KChyqcOV9tc3vNzuCiNHwpcqX2Zm-K~X1R48XtaTNUmRf-mN9mZRnPL5Co8VX3h3mQ0HHwEGKIyQCYjrLq4WI28B3P6kX1HxapVQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                // className={style.img}
                style={{
                  width: '182px',
                  height: '182px',
                  borderRadius: '48px'
                }}
              />
              <span>Lorem ipsum dolor sit amet Juegos</span>
            </div>
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/470d/bdf0/2958b49748eb2b7b397c9f4e8e4dbdd8?Expires=1691366400&Signature=YrVVJ~3emNKvGk~tIIPreTWUYhlR3meaj5dxDQAt9kcBNjQv3hW2T~AooeLj3CtA28xi81yS8Rm-XzayYZ6l64N1RElj9owuoP9iMLjwD64KNcWQE7fbWEmcIWex~TzWdSWya83T0RU3rUMmPOoUAur8xqAaxvmT1djA4QFuGGfDkThKDINinrffoM3CjJH1HT0xh~AyrYqtPdSSeEohGkhGm9PgnPTJ0iWiqQulj1BSnWn7I4KChyqcOV9tc3vNzuCiNHwpcqX2Zm-K~X1R48XtaTNUmRf-mN9mZRnPL5Co8VX3h3mQ0HHwEGKIyQCYjrLq4WI28B3P6kX1HxapVQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                // className={style.img}
                style={{
                  width: '182px',
                  height: '182px',
                  borderRadius: '48px'
                }}
              />
              <span>Lorem ipsum dolor sit amet Juegos</span>
            </div>
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/470d/bdf0/2958b49748eb2b7b397c9f4e8e4dbdd8?Expires=1691366400&Signature=YrVVJ~3emNKvGk~tIIPreTWUYhlR3meaj5dxDQAt9kcBNjQv3hW2T~AooeLj3CtA28xi81yS8Rm-XzayYZ6l64N1RElj9owuoP9iMLjwD64KNcWQE7fbWEmcIWex~TzWdSWya83T0RU3rUMmPOoUAur8xqAaxvmT1djA4QFuGGfDkThKDINinrffoM3CjJH1HT0xh~AyrYqtPdSSeEohGkhGm9PgnPTJ0iWiqQulj1BSnWn7I4KChyqcOV9tc3vNzuCiNHwpcqX2Zm-K~X1R48XtaTNUmRf-mN9mZRnPL5Co8VX3h3mQ0HHwEGKIyQCYjrLq4WI28B3P6kX1HxapVQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                // className={style.img}
                style={{
                  width: '182px',
                  height: '182px',
                  borderRadius: '48px'
                }}
              />
              <span>Lorem ipsum dolor sit amet Juegos</span>
            </div>
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/470d/bdf0/2958b49748eb2b7b397c9f4e8e4dbdd8?Expires=1691366400&Signature=YrVVJ~3emNKvGk~tIIPreTWUYhlR3meaj5dxDQAt9kcBNjQv3hW2T~AooeLj3CtA28xi81yS8Rm-XzayYZ6l64N1RElj9owuoP9iMLjwD64KNcWQE7fbWEmcIWex~TzWdSWya83T0RU3rUMmPOoUAur8xqAaxvmT1djA4QFuGGfDkThKDINinrffoM3CjJH1HT0xh~AyrYqtPdSSeEohGkhGm9PgnPTJ0iWiqQulj1BSnWn7I4KChyqcOV9tc3vNzuCiNHwpcqX2Zm-K~X1R48XtaTNUmRf-mN9mZRnPL5Co8VX3h3mQ0HHwEGKIyQCYjrLq4WI28B3P6kX1HxapVQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                // className={style.img}
                style={{
                  width: '182px',
                  height: '182px',
                  borderRadius: '48px'
                }}
              />
              <span>Lorem ipsum dolor sit amet Juegos</span>
            </div>
          </div>
        </article>

        <hr className={style.divisor} />
        {/* Te puede interesar */}
        <article>
          <h4>Te puede interesar</h4>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '10px',
              alignItems: 'center'
            }}
          >
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/470d/bdf0/2958b49748eb2b7b397c9f4e8e4dbdd8?Expires=1691366400&Signature=YrVVJ~3emNKvGk~tIIPreTWUYhlR3meaj5dxDQAt9kcBNjQv3hW2T~AooeLj3CtA28xi81yS8Rm-XzayYZ6l64N1RElj9owuoP9iMLjwD64KNcWQE7fbWEmcIWex~TzWdSWya83T0RU3rUMmPOoUAur8xqAaxvmT1djA4QFuGGfDkThKDINinrffoM3CjJH1HT0xh~AyrYqtPdSSeEohGkhGm9PgnPTJ0iWiqQulj1BSnWn7I4KChyqcOV9tc3vNzuCiNHwpcqX2Zm-K~X1R48XtaTNUmRf-mN9mZRnPL5Co8VX3h3mQ0HHwEGKIyQCYjrLq4WI28B3P6kX1HxapVQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                // className={style.img}
                style={{
                  width: '182px',
                  height: '182px',
                  borderRadius: '48px'
                }}
              />
              <span>Lorem ipsum dolor sit amet Juegos</span>
            </div>
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/470d/bdf0/2958b49748eb2b7b397c9f4e8e4dbdd8?Expires=1691366400&Signature=YrVVJ~3emNKvGk~tIIPreTWUYhlR3meaj5dxDQAt9kcBNjQv3hW2T~AooeLj3CtA28xi81yS8Rm-XzayYZ6l64N1RElj9owuoP9iMLjwD64KNcWQE7fbWEmcIWex~TzWdSWya83T0RU3rUMmPOoUAur8xqAaxvmT1djA4QFuGGfDkThKDINinrffoM3CjJH1HT0xh~AyrYqtPdSSeEohGkhGm9PgnPTJ0iWiqQulj1BSnWn7I4KChyqcOV9tc3vNzuCiNHwpcqX2Zm-K~X1R48XtaTNUmRf-mN9mZRnPL5Co8VX3h3mQ0HHwEGKIyQCYjrLq4WI28B3P6kX1HxapVQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                // className={style.img}
                style={{
                  width: '182px',
                  height: '182px',
                  borderRadius: '48px'
                }}
              />
              <span>Lorem ipsum dolor sit amet Juegos</span>
            </div>
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/470d/bdf0/2958b49748eb2b7b397c9f4e8e4dbdd8?Expires=1691366400&Signature=YrVVJ~3emNKvGk~tIIPreTWUYhlR3meaj5dxDQAt9kcBNjQv3hW2T~AooeLj3CtA28xi81yS8Rm-XzayYZ6l64N1RElj9owuoP9iMLjwD64KNcWQE7fbWEmcIWex~TzWdSWya83T0RU3rUMmPOoUAur8xqAaxvmT1djA4QFuGGfDkThKDINinrffoM3CjJH1HT0xh~AyrYqtPdSSeEohGkhGm9PgnPTJ0iWiqQulj1BSnWn7I4KChyqcOV9tc3vNzuCiNHwpcqX2Zm-K~X1R48XtaTNUmRf-mN9mZRnPL5Co8VX3h3mQ0HHwEGKIyQCYjrLq4WI28B3P6kX1HxapVQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                // className={style.img}
                style={{
                  width: '182px',
                  height: '182px',
                  borderRadius: '48px'
                }}
              />
              <span>Lorem ipsum dolor sit amet Juegos</span>
            </div>
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/470d/bdf0/2958b49748eb2b7b397c9f4e8e4dbdd8?Expires=1691366400&Signature=YrVVJ~3emNKvGk~tIIPreTWUYhlR3meaj5dxDQAt9kcBNjQv3hW2T~AooeLj3CtA28xi81yS8Rm-XzayYZ6l64N1RElj9owuoP9iMLjwD64KNcWQE7fbWEmcIWex~TzWdSWya83T0RU3rUMmPOoUAur8xqAaxvmT1djA4QFuGGfDkThKDINinrffoM3CjJH1HT0xh~AyrYqtPdSSeEohGkhGm9PgnPTJ0iWiqQulj1BSnWn7I4KChyqcOV9tc3vNzuCiNHwpcqX2Zm-K~X1R48XtaTNUmRf-mN9mZRnPL5Co8VX3h3mQ0HHwEGKIyQCYjrLq4WI28B3P6kX1HxapVQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                // className={style.img}
                style={{
                  width: '182px',
                  height: '182px',
                  borderRadius: '48px'
                }}
              />
              <span>Lorem ipsum dolor sit amet Juegos</span>
            </div>
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/470d/bdf0/2958b49748eb2b7b397c9f4e8e4dbdd8?Expires=1691366400&Signature=YrVVJ~3emNKvGk~tIIPreTWUYhlR3meaj5dxDQAt9kcBNjQv3hW2T~AooeLj3CtA28xi81yS8Rm-XzayYZ6l64N1RElj9owuoP9iMLjwD64KNcWQE7fbWEmcIWex~TzWdSWya83T0RU3rUMmPOoUAur8xqAaxvmT1djA4QFuGGfDkThKDINinrffoM3CjJH1HT0xh~AyrYqtPdSSeEohGkhGm9PgnPTJ0iWiqQulj1BSnWn7I4KChyqcOV9tc3vNzuCiNHwpcqX2Zm-K~X1R48XtaTNUmRf-mN9mZRnPL5Co8VX3h3mQ0HHwEGKIyQCYjrLq4WI28B3P6kX1HxapVQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                // className={style.img}
                style={{
                  width: '182px',
                  height: '182px',
                  borderRadius: '48px'
                }}
              />
              <span>Lorem ipsum dolor sit amet Juegos</span>
            </div>
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/470d/bdf0/2958b49748eb2b7b397c9f4e8e4dbdd8?Expires=1691366400&Signature=YrVVJ~3emNKvGk~tIIPreTWUYhlR3meaj5dxDQAt9kcBNjQv3hW2T~AooeLj3CtA28xi81yS8Rm-XzayYZ6l64N1RElj9owuoP9iMLjwD64KNcWQE7fbWEmcIWex~TzWdSWya83T0RU3rUMmPOoUAur8xqAaxvmT1djA4QFuGGfDkThKDINinrffoM3CjJH1HT0xh~AyrYqtPdSSeEohGkhGm9PgnPTJ0iWiqQulj1BSnWn7I4KChyqcOV9tc3vNzuCiNHwpcqX2Zm-K~X1R48XtaTNUmRf-mN9mZRnPL5Co8VX3h3mQ0HHwEGKIyQCYjrLq4WI28B3P6kX1HxapVQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                // className={style.img}
                style={{
                  width: '182px',
                  height: '182px',
                  borderRadius: '48px'
                }}
              />
              <span>Lorem ipsum dolor sit amet Juegos</span>
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}

export default File
