import styles from './Footer.module.css'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <img src={logo} alt="" />
    </footer>
  )
}

export default Footer