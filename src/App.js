import React, { useState } from 'react';
import logo from './images/logo.svg';
import logoMenu from './images/icon-menu.svg';
import databiz from './images/client-databiz.svg';
import audiophile from './images/client-audiophile.svg';
import maker from './images/client-maker.svg';
import meet from './images/client-meet.svg';
import up from './images/icon-arrow-up.svg';
import down from './images/icon-arrow-down.svg';
import todo from './images/icon-todo.svg';
import calendar from './images/icon-calendar.svg';
import reminder from './images/icon-reminders.svg';
import planning from './images/icon-planning.svg';
import close from './images/icon-close-menu.svg';
import imgHeroMobile from './images/image-hero-mobile.png';
import imgHeroDesktop from './images/image-hero-desktop.png';
import './App.css';
import {
  Flex, Image, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Button, Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { almostBlack, almostWhite, fontFamily, fontSize, mediumGray } from './config';

function App() {
  const [sideOpen, setSideOpen] = useState(false)
  const toggleMenu = () => {
    setSideOpen(!sideOpen)
  }

  return (
    <Flex h={['auto', 'auto', '100vh']} w='100%' direction={'column'} justify={'flex-start'} alignItems={'center'} bgColor={almostWhite} fontFamily={fontFamily} position='relative' overflow={'hidden'}>
      {/* navbar */}
      <Flex w={'95%'} h='10vh' justify={'space-between'} alignItems={'center'} >
        <Flex w={['50%', '50%', '60%']} h={'45%'} justify={'flex-start'} align={'center'}>
          <Flex h={'100%'} w={['80%', '80%', '20%']} align={'center'} justify='center'>
            <Image src={logo} />
          </Flex>
          <Flex w={['0%', '0%', 'auto']} overflow={'hidden'}>
            <Flex alignItems={'center'} mx='15px'>
              <Menu>
                <MenuButton as={'button'}>
                  Features
                </MenuButton>
                <Image src={down} w={'fit-content'} h='fit-content' ml={'10px'} transition={'.3s'} />
                <MenuList boxShadow={' 0px 0px 50px -3px rgba(135,135,135,0.75)'}>
                  <MenuItem my={'10px'} alignItems='center'>
                    <Image src={todo} mr={'10px'} h='fit-content' />
                    Todo List
                  </MenuItem>
                  <MenuItem my={'10px'} alignItems='center'>
                    <Image src={calendar} mr={'10px'} h='fit-content' />
                    Calendar
                  </MenuItem>
                  <MenuItem my={'10px'} alignItems='center'>
                    <Image src={reminder} mr={'10px'} h='fit-content' />
                    Reminder
                  </MenuItem>
                  <MenuItem my={'10px'} alignItems='center'>
                    <Image src={planning} mr={'10px'} h='fit-content' />
                    Planning
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
            <Flex alignItems={'center'} mx='15px'>
              <Menu>
                <MenuButton as={'button'}>
                  Company
                </MenuButton>
                <Image src={down} w={'fit-content'} h='fit-content' ml={'10px'} transition={'.3s'} />
                <MenuList boxShadow={' 0px 0px 50px -3px rgba(135,135,135,0.75)'}>
                  <MenuItem my={'10px'} alignItems='center'>
                    History
                  </MenuItem>
                  <MenuItem my={'10px'} alignItems='center'>
                    Our Team
                  </MenuItem>
                  <MenuItem my={'10px'} alignItems='center'>
                    Blog
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
            <Flex mx='15px'>
              Careers
            </Flex>
            <Flex mx='15px'>
              About
            </Flex>
          </Flex>
        </Flex>
        <Flex display={['flex', 'flex', 'none']}>
          <Image src={logoMenu} onClick={toggleMenu} />
        </Flex>
        <Flex display={['none', 'none', 'flex']}>
          <Button color={mediumGray} bg={'none'} mr='20px'>Login</Button>
          <Button color={mediumGray} bg={'none'} px='20px' border={`1px ${mediumGray} solid`}>Register</Button>
        </Flex>
      </Flex>

      <Flex direction={['column', 'column', 'row-reverse']} w={['100%', '100%', '85%']} h='100%' alignItems={'center'}>
        {/* hero img */}
        <Flex w={['100%', '100%', '40%']} h={['100%', '100%', '70%']}>
          <Image src={imgHeroMobile} objectFit='contain' display={['block', 'block', 'none']} />
          <Image src={imgHeroDesktop} objectFit='contain' display={['none', 'none', 'block']} />
        </Flex>

        <Flex direction={'column'} w={['80%', '80%', '60%']} h={['fit-content', 'fit-content', '70%']} alignSelf={'center'} justify='space-between'>
          <Flex fontWeight={'700'} fontSize={['2.2rem', '2.2rem', '5rem']} mt='20px' justify={['center', 'center', 'flex-start']}>
            Make remote work
          </Flex>
          <Flex color={mediumGray} w={['95%', '95%', '80%']} textAlign={['center', 'center', 'left']} fontSize={[fontSize, fontSize, '1.5rem']} my='10px'>
            Get your team in sync, no matter your location. Streamline processes,
            create team rituals, and watch productivity soar.
          </Flex>
          <Flex bgColor={almostBlack} color={almostWhite} _hover={{ bgColor: almostWhite, color: almostBlack, border: '1px black solid' }} py='8px' px={'15px'} my={'20px'} w='fit-content' alignSelf={['center', 'center', 'start']} borderRadius={'8px'} transition='.3s'>
            <button>Learn more</button>
          </Flex>

          <Flex w={'90%'} justify='space-between' alignItems={'center'} my={'20px'}>
            <Flex w={'20%'} h='fit-content'>
              <Image src={databiz} />
            </Flex>
            <Flex w={'20%'} h='fit-content'>
              <Image src={audiophile} />
            </Flex>
            <Flex w={'20%'} h='fit-content'>
              <Image src={meet} />
            </Flex>
            <Flex w={'20%'} h='fit-content'>
              <Image src={maker} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {/* side menu */}
      <Flex position={'absolute'} direction='column' right={sideOpen ? 0 : '-65%'} h='100%' w={'65%'} bgColor={almostWhite} transition='.7s'>
        <Flex h={'10vh'} w='90%' alignSelf='center' alignItems={'center'} justify={'flex-end'}>
          <Image src={close} onClick={toggleMenu} h='fit-content' />
        </Flex>
        <Flex direction={'column'} w='100%' alignItems={'center'} my='8px'>
          <Accordion allowToggle w='94%' display={'flex'} justifyContent='center' flexDirection={'column'}>
            <AccordionItem w='100%' border={'none'} alignItems='center'>
              {
                ({ isExpanded }) => (
                  <>
                    <AccordionButton py={'0px'}>
                      <Flex w='80%' my={'10px'} alignItems='center'>
                        Features
                        <Image src={down} w={'fit-content'} transform={isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'} ml='15px' h='fit-content' transition={'.3s'} />
                      </Flex>
                    </AccordionButton>

                    <AccordionPanel w={'80%'} ml={'25px'}>
                      <Flex my={'15px'} alignItems='center'>
                        <Image src={todo} mr={'10px'} h='fit-content' />
                        Todo List
                      </Flex>
                      <Flex my={'15px'} alignItems='center'>
                        <Image src={calendar} mr={'10px'} h='fit-content' />
                        Calendar
                      </Flex>
                      <Flex my={'15px'} alignItems='center'>
                        <Image src={reminder} mr={'10px'} h='fit-content' />
                        Reminder
                      </Flex>
                      <Flex my={'15px'} alignItems='center'>
                        <Image src={planning} mr={'10px'} h='fit-content' />
                        Planning
                      </Flex>
                    </AccordionPanel>
                  </>
                )
              }
            </AccordionItem>
            <AccordionItem w='100%' border={'none'} alignItems='center'>
              {
                ({ isExpanded }) => (
                  <>
                    <AccordionButton py={'0px'}>
                      <Flex w='100%' my={'10px'} alignItems='center'>
                        Company
                        <Image src={down} w={'fit-content'} transform={isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'} ml='15px' h='fit-content' transition={'.3s'} />
                      </Flex>
                    </AccordionButton>
                    <AccordionPanel ml={'25px'}>
                      <Flex my={'15px'} alignItems='center'>
                        History
                      </Flex>
                      <Flex my={'15px'} alignItems='center'>
                        Our Team
                      </Flex>
                      <Flex my={'15px'} alignItems='center'>
                        Blog
                      </Flex>
                    </AccordionPanel>
                  </>
                )
              }
            </AccordionItem>
          </Accordion>
          <Flex w='100%' my={'10px'} justify='center'>
            <Flex w='80%'>
              Careers
            </Flex>
          </Flex>
          <Flex w='100%' my={'10px'} justify='center'>
            <Flex w='80%'>
              About
            </Flex>
          </Flex>
        </Flex>

        <Flex direction={'column'} w='100%' alignItems={'center'}>
          <Flex w='80%' my={'6px'} justify='center'>Login</Flex>
          <Flex w='80%' my={'6px'} justify='center' borderRadius={'10px'} border='1px black solid' py={'5px'}>Register</Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
