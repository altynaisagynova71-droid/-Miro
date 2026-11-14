import "./Hero-five.css";

function HeroFive() {
  return (
    <section id="hero-five">
      <div className="container">
        <div className="Hero-five">
          <h1>Создан для всех типов команд</h1>

          <div className="tabs">
            <button className="active">UX и дизайн</button>
            <button>Маркетинг</button>
            <button>Управление продуктом</button>
            <button>Разработка</button>
            <button>Консалтинг</button>
            <button>Agile-коучинг</button>
            <button>Продажи</button>
          </div>

          <div className="content">
            <div className="text">
              <p>Создавайте вайрфреймы</p>
              <p>Подключайте заказчиков к процессу дизайна</p>
              <p>Проводите вовлекающие дизайн-воркшопы</p>
              <a href="#hero-five">Узнать больше</a>

              <div className="tools">
                <p>Интегрируйте ваши любимые инструменты</p>
                <div className="icons">
                  <img src="./Vector.png" alt="Sketch" />
                  <img src="./Vector-1.png" alt="Adobe XD" />
                  <img src="./Vector-2.png" alt="Figma" />
                  <img src="./Vector-3.png" alt="Notion" />
                </div>
              </div>
            </div>

            <div className="image">
              <img src="./pix2.png" alt="Пример дизайна рабочей доски" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroFive;
