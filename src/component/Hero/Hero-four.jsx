import "./Hero-four.css";

function HeroFour() {
  return (
    <section id="hero-four">
      <div className="container">
        <div className="Hero-four">
          <h1>Подходит для вашего стиля работы</h1>

          <div className="tabs">
            <button className="active">Мозговые штурмы</button>
            <button>Диаграммы</button>
            <button>Встречи</button>
            <button>SCRUM</button>
            <button>Картирование</button>
            <button>Дизайн-исследования</button>
            <button>Планирование</button>
          </div>

          <div className="content">
            <div className="text">
              <h2>Мозговой штурм</h2>
              <p>
                Генерируйте творческие идеи и развивайте их с помощью
                стикеров, изображений, интеллект-карт, видео, рисования и не
                только.
              </p>
              <a href="">Узнать больше</a>
            </div>

            <div className="image">
              <img src="./pix.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroFour;
