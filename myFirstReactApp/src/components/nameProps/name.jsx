import styles from './Name.module.scss';;

export const Name = props =>{
    return(<p className={styles.NameWrapper}>Tillykke med fødselsdagen {props.Name}</p>)
}