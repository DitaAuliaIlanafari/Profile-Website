import style from './Experience.module.css'

import { Text, For, Stack, Timeline } from "@chakra-ui/react"
import {
    TimelineConnector,
    TimelineContent,
    TimelineItem,
    TimelineRoot,
    TimelineTitle,
  } from "@/components/ui/timeline"


export default function Experience(){
    return(
        <div className={style['container']} id='experience'>
            <h1 className={style['h1']}>Experience Timeline</h1>
            
            <Stack fontFamily='Sora' margin={10}  gap="8">
                <For each={["lg"]}>
                  {(size) => (
                    <TimelineRoot size={size} key={size}>
                      <TimelineItem>
                        <TimelineContent width="auto">
                          <TimelineTitle whiteSpace="nowrap" marginRight={2} fontSize={16}>2023 - present</TimelineTitle>
                        </TimelineContent>
                        <TimelineConnector bgColor="indigo.600"></TimelineConnector>
                        <Timeline.Content>
                          <TimelineTitle textAlign="justify" fontSize={20} fontWeight='bold'  >
                            Senior Full-Stack Developer 
                          </TimelineTitle>
                          <Text fontSize={14} fontWeight='bold'> Tech Innovators Inc</Text>
                          <Text  fontSize={12} textAlign="justify"  width='600px'>
                          At Tech Innovators Inc., I lead the development of high-performance web applications using React, Node.js, and AWS. I manage a team of developers, ensuring timely project delivery with a focus on scalability and user experience. One key project involved developing a multi-tenant e-commerce platform, which improved client sales by 40%.
                          </Text>
                        </Timeline.Content>
                      </TimelineItem>
                      <br />
                      <TimelineItem>
                        <TimelineContent width="auto">
                          <TimelineTitle whiteSpace="nowrap" marginRight={7} fontSize={16}>2021 - 2023</TimelineTitle>
                        </TimelineContent>
                        <TimelineConnector bgColor="indigo.500"></TimelineConnector>
                        <Timeline.Content>
                          <TimelineTitle textAlign="justify" fontSize={20} fontWeight='bold'  >
                            Full-Stack Developer 
                          </TimelineTitle>
                          <Text fontSize={14} fontWeight='bold'> Web Solution Ltd</Text>
                          <Text  fontSize={12} textAlign="justify"  width='600px'>
                          During my time at Web Solutions Ltd., I developed responsive web applications using React for the front-end and Express.jsfor the back-end. I collaborated with cross-functional teams to design and implement new features. A notable project was the creation of a real-time chat application for a social networking site, which enhanced user engagement by 30%.
                          </Text>
                        </Timeline.Content>
                      </TimelineItem>
                      <br />
                      <TimelineItem>
                        <TimelineContent width="auto">
                          <TimelineTitle whiteSpace="nowrap" marginRight={7} fontSize={16}>2018 - 2021</TimelineTitle>
                        </TimelineContent>
                        <TimelineConnector bgColor="indigo.500"></TimelineConnector>
                        <Timeline.Content>
                          <TimelineTitle textAlign="justify" fontSize={20} fontWeight='bold'  >
                            Front-End Developer 
                          </TimelineTitle>
                          <Text fontSize={14} fontWeight='bold'> Creative Digital Agency</Text>
                          <Text  fontSize={12} textAlign="justify"  width='600px'>
                          As a Front-End Developer at Creative Digital Agency, I focused on building and optimizing user interfaces using HTML, CSS, JavaScript, and Vue.js.I worked closely with designers to ensure pixel-perfect implementation and user-friendly design. I played a significant role in redesigning the company’s main website, leading to a 25% increase in user retention.
                          </Text>
                        </Timeline.Content>
                      </TimelineItem>
                    </TimelineRoot>
                  )}
                </For>
            </Stack>
        </div>
    )
}