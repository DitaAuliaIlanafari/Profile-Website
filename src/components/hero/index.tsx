import style from './Hero.module.css'
import fafafa from './../../assets/fafafa-removebg-preview.png'


export default function  Hero(){
    return (
        <div className={style['container']} id='home'>
            <div className={style['row']}>
                <div className={style['column']}>
                    <h4>I am Diana</h4>
                    <h1>Web Developer</h1>
                    <br />
                    <p>I break down complex user experience problems to create integrity focussed solutions that connect billions of people</p>
                    <button>READ MORE</button>
                </div>
                <div className={style['column']}>
                <img src={fafafa} alt="" />
                </div>
            </div> 
        </div>
    )
}