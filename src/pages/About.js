import React from 'react'
import { Flex, Icon } from 'antd-mobile';
import BackButton from '@/components/BakcButton/BackButton';

export const About = (props) => (
  <div>
    <BackButton />
    <Flex 
      direction="column" 
      align="center"
      style={{
        paddingTop: "150px"
      }}
    >
      <div>
        该项目:<a target="_blank" rel="noopener noreferrer" href="https://github.com/Juliiii/React-DailyHu">github地址</a><br />
      </div>
      <p>改编舍友现代操作系统的期中作业</p>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/MegrezZhu/DailyHu">github地址</a><br />
      <Flex align="center">
        欢迎Start
        <Icon type={require("@/icons/star.svg")} 
              style={{
                marginLeft: "10px"
              }}
        />
      </Flex>
    </Flex>
  </div>
)
export default About;