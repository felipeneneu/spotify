import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Main.css';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

export const Main = () => {
  return (
    <main className='main'>
      <div className="item-list">
        <div className="item-list__header">
          <h2>Artistas populares</h2>
          <a href="/" className='item-list__link'>Mostrar tudo</a>
        </div>
        <div className="item-list__container">
          <div className='single-item'>
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img className='single-item__image' src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="Imagem Henrique & Juliano" />
              </div>
              <FontAwesomeIcon className='single-item__icon' icon={faCirclePlay} />
            </div>
            <div className="single-item__texts">
              <div className="single-item__2lines">
                <p className='single-item__title'>Henrique & Juliano</p>

              </div>
              <p className='single-item__type'>Artista</p>
            </div>
          </div>

          <div className='single-item'>
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img className='single-item__image' src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="Imagem Henrique & Juliano" />
              </div>
              <FontAwesomeIcon className='single-item__icon' icon={faCirclePlay} />
            </div>
            <div className="single-item__texts">
              <div className="single-item__2lines">
                <p className='single-item__title'>Henrique & Juliano</p>
                <p className='single-item__type'>Artista</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
