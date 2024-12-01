import { Text, Button, Image, Flex} from "@chakra-ui/react"
import style from './Skills.module.css'
import javascript from 'https://academy.alterra.id/blog/wp-content/uploads/2021/07/Logo-Javascript.png'
import phyton from '../../assets/python-logo.png'
import mysql from '../../assets/mysql_PNG23.png'


export default function Skills(){
    return (
        <div className={style['container']} id="skills">
            <h1>My Skills</h1>
            <div className={style['items']}>
            <div> 
            <Flex justify="center" >
                <Button  marginTop={10} size= {"lg"} rounded={"2x1"} height={"40"} width={180} _hover={{borderColor:"white"}} ><Text> <Image 
                height="100px"
                src={javascript}
                /> Javascript</Text>
                </Button>
            
                <Button marginTop={10} marginLeft={50} size= {"lg"} rounded={"2xl"} height={"40"} width={180} _hover={{borderColor:"white"}}  ><Text> <Image 
                height="100px"
                src="https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-html-5-icon.png"
                /> HTML </Text>
                </Button>

                <Button marginTop={10} marginLeft={50} size= {"lg"} rounded={"2xl"} height={"40"} width={180} _hover={{borderColor:"white"}} ><Text> <Image 
                height="100px"
                src="https://img.icons8.com/fluent/200/css3.png"
                /> CSS </Text>
                </Button>

                <Button marginTop={10} marginLeft={50} size= {"lg"} rounded={"2xl"} height={"40"} width={180} _hover={{borderColor:"white"}} ><Text> <Image 
                height="100px"
                src={phyton}
                /> Phyton </Text>
                </Button>
            </Flex>
            </div>
            <div>
                <Flex justify="center" >
                <Button marginTop={10} size= {"lg"} rounded={"2xl"} height={"40"} width={180} _hover={{borderColor:"white"}} ><Text> <Image 
                height="100px"
                src="https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png"
                /> React </Text>
                </Button>

                 <Button marginTop={10} marginLeft={50} size= {"lg"} rounded={"2xl"} height={"40"} width={180} _hover={{borderColor:"white"}} ><Text> <Image 
                 height="100px"
                 src="https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-programming-language-pack-logos-icons-1174925.png?f=webp&w=256"
                /> Node.js</Text>
                </Button>

                <Button marginTop={10} marginLeft={50} size= {"lg"} rounded={"2xl"} height={"40"}  width={180} _hover={{borderColor:"white"}} ><Text> <Image 
                height="100px" 
                src={mysql}
                /> MySql </Text>
                </Button>
                
                <Button marginTop={10} marginLeft={50} size= {"lg"} rounded={"2xl"} height={"40"}  width={180} _hover={{borderColor:"white"}} ><Text> <Image 
                height="90px" marginBottom={2}
                src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                /> GIT </Text>
                </Button>
                </Flex>
             </div>
             </div>

        </div>
    )
}