import style from './Hero.module.css'


export default function  Hero(){
    return (
        <div className={style['container']}>
            <div className={style['row']}>
                <div className={style['column']}>
                    <h4>I am Ghani</h4>
                    <h1>Web Developer</h1>
                    <p>I break down complex user experience problems to create integrity focussed solutions that connect billions of people</p>
                    <button>READ MORE</button>
                </div>
                <div className={style['column']}>
                <img width={400} height={440} src="https://gerold.themejunction.net/wp-content/uploads/2024/05/hero_img.jpg" alt="person image" />
                </div>
            </div> 
        </div>
    )
}