import style from './About.module.css'

export default function About(){
    return(
        <div className={style['container']}>
            <nav className={style['body']}>
            <h1 className={style['h1']}>About Me</h1>
            <div className={style['row']}>
                <div className={style['column']}>
                     <img width={350} height={400} src="https://gerold.themejunction.net/wp-content/uploads/2024/05/hero_img.jpg" alt="" />
                </div>
                <div className={style['column']}>
                    <p>
                    give me short paragraf about that background
                    I'm a passionate full-stack web developer with a strong background in computer science and extensive hands-on experience in both front-end and back-end technologies.
                    My journey into web development began during college, where I quickly developed a fascination for coding and problem-solving. 
                    Over the years, I've worked on diverse projects, from small personal websites to large-scale enterprise applications, honing my skills in JavaScript, React, Node.js, and Python.
                    This blend of technical expertise and practical experience positions me to tackle complex web development challenges and deliver high-quality solutions.
                    </p>
                </div>
                
            </div>
            </nav>
        </div>
    )
}