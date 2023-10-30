"use client"
// import '../../styles/page.module.scss';
import '../../styles/main.scss';
import './header.scss';

  
  const Header = () => {
    return (
      <div>
        <div className="nav">
          <div className="logo">
            <img className='img-fluid' src='/images/logoWater.png' alt='logo'/>
          </div>
          <div className="nav-item">Promoções</div>
          <div className="nav-item">Sobre Nós</div>
          <div className="nav-item">Carrinho</div>
        </div>
      </div>
    )
  }
  
  export default Header;


