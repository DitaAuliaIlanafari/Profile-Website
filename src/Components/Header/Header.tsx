import style from './Header.module.css'
import { Link } from "@chakra-ui/react"


export default function Header(){
    return(
      <div className={style['container']}>
          <nav className={style['navbar']}>
            <Link margin={30} color={'white'} href="#home">Home</Link>
            <Link margin={30} color={'white'} href="#about">About</Link>
            <Link margin={30} color={'white'} href="#skills">Skills</Link>
            <Link margin={30} color={'white'} href="#portfolio">Portfolio</Link>
            <Link margin={30} color={'white'} href="#experience">Experience</Link>
            <Link margin={30} color={'white'} href="#testimoni">Testimonials</Link>
            <Link margin={30} color={'white'} href="#contact">Contact</Link>
          </nav>
      </div>
    )
}

