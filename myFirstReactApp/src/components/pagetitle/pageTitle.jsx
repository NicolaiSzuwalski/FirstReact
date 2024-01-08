import styles from './PageTitle.module.scss'
export const PageTitle = props => {
    return(
    <h1 className={styles.pageTitleFont}>
        {props.PageTitle}
        <p>Ja det Lars</p>
    </h1>)
}