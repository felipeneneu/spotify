import ItemList from './itemList';
import './Main.css';

export const Main = () => {
  return (
    <main className='main'>
      {/* Artistas */}
      <ItemList title="Artistas" items={5} />
      {/* Musicas */}
      <ItemList title="Músicas" items={10} />

    </main>
  )
}
