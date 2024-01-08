import styles from './Main.module.scss';
import{Gallery} from '../Gallery/Gallery.jsx';

const GalleryArr = [
    './src/assets/images/waterfall.jpg',
    './src/assets/images/waterfall2.jpg',
    './src/assets/images/waterfall3.jpg',
    './src/assets/images/waterfall4.jpg',
    './src/assets/images/waterfall5.jpg',
    './src/assets/images/waterfall6.jpg',
    './src/assets/images/waterfall7.jpg',
    './src/assets/images/waterfall8.jpg',
  ]

export const Main = () => {
    return (
        <main className={styles.MainWrapper}>
            <Gallery pictures={GalleryArr}></Gallery>
        </main>
    )
}