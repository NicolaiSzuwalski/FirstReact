import styles from './Image.module.scss';

export const Image = (props) => {
    return(
        <div>
            <img src={props.file} alt={props.alt} className={styles.ImageWrapper}/>
            <figcaption className={styles.FigcaptionWrapper}>Det er så en regnbue</figcaption>
        </div>
    )
}

