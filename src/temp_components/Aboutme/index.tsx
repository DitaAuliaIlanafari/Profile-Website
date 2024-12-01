import style from './About.module.css'

export default function About(){
    return(
        <div className={style['container']} id='about'>
            <h1 className={style['h1']}>About Me</h1>
            <div className={style['row']}>
                <div className={style['column']}>
                     <img src="./src/assets/Untitled design.jpg" alt="" />
                </div>
                <div className={style['column']}>
                    <p>
                    I'm a passionate full-stack web developer with a strong background in computer science and extensive hands-on experience in both front-end and back-end technologies.
                    My journey into web development began during college, where I quickly developed a fascination for coding and problem-solving. 
                    Over the years, I've worked on diverse projects, from small personal websites to large-scale enterprise applications, honing my skills in JavaScript, React, Node.js, Python, and etc.
                    This blend of technical expertise and practical experience positions me to tackle complex web development challenges and deliver high-quality solutions.
                    </p>
                </div>
                
            </div>
        </div>
    )
}