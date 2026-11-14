import "./Header.css"

function Header() {
  return <header id="header">
    <div className="container">
      <div className="Header">
        <div className="rod">
          <div className="one">
            <img src="./miro.png" alt="" />
            <p>Продукт</p>
            <p>Решения</p>
            <p>Ресурсы</p>
            <p>Предприятия</p>
            <p>Тарифы</p>
          </div>
          <div className="two">
            <img src="./globus.png" alt="" />
            <button className="b">Регистрация</button>
          </div>
        </div>
      </div>
    </div>
  </header>
  
}
export default Header
