import "./Hero-one.css";

function HeroOne() {
  return (
    <section id="hero-one">
      <div className="container">
        <div className="Hero-one">
          <div className="rod">
            <div className="one">
              <h1>Место для <br /> командной <br /> работы</h1>
              <p>Интерактивная онлайн-доска для совместной <br /> работы команд — в любое время, в любом месте.</p>
              <input type="text" />
              <button>Начать бесплатно</button>
              <p>Всегда бесплатно — кредитная карта не нужна</p>
              <div className="lilone">
                <h6>45M+ пользователей</h6>
                <img src="./walmart.png" alt="" />
                <img src="./c.png" alt="" />
                <img src="./de.png" alt="" />
                <img src="./hz.png" alt="" />
              </div>
            </div>
            <div className="two">
              <img src="./two.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroOne;