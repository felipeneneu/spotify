import './Main.css';
import { FaCirclePlay } from 'react-icons/fa6';
export const Main = () => {
  return (
    <main className='main'>
      <div className="item-list">
        <div className="item-list__header">
          <h2>Artistas populares</h2>
          <a href="/" className='item-list__link'>Mostrar tudo</a>
        </div>
        <div className='single-item'>
          <div className="single-item__div-image-button">
            <div className="single-item__div-image">
              <img className='single-item__image' src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="Imagem Henrique & Juliano" />
            </div>
            <FaCirclePlay stroke='solid' color="green" fontSize="3rem" />
          </div>
          <div className="single-item__texts">
            <p className='single-item__title'>Henrique & Juliano</p>
            <p className='single-item__type'>Artista</p>
          </div>
        </div>
      </div>
    </main>
  )
}
