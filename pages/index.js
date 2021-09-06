import {  Alert, AlertIcon, AlertTitle, AlertDescription,Heading,Wrap, WrapItem,Center,Link,Badge,MdSettings,Switch,Avatar, AvatarBadge, 
  AvatarGroup,Box,Text,Stack, HStack, VStack,Flex, Spacer,Circle,IconButton,background, Button, ButtonGroup,Container,useColorMode,Icon  } from "@chakra-ui/react"

import{FaFacebookF,FaInstagram,FaTwitter,FaRegHandPaper,FaSnapchatGhost,FaReddit,FaStrava, FaLinkedin, FaGithub,FaSun,FaMoon}from"react-icons/fa"



export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div >

    
     
    {/* AVATAR BOX BELOW*/}
    <Center>
    <warp align="center">
  <Box border="2px" p="3" borderRadius="3xl" m={5}>
  <Avatar size="lg"  />
  <Text fontSize="xl" p={3}><b>Parth Karandikar</b> <Badge ml="1" colorScheme="green"> DEV </Badge></Text>
  <Text fontSize="md" p={2}>⚡Connect with me on</Text>

      {/* Below is links */} 

<VStack alignItems="flex-start" m={3}>
    
    <Text>🌼Social</Text>
    <HStack>
      <Link href="https://www.facebook.com/parth.karandikar.94/" >  
  <IconButton borderRadius="2xl" size="md" variant="outline" colorScheme="white" icon={<FaFacebookF />} ></IconButton>    
 </Link>  
      
      <Link href="https://www.instagram.com/__partheist/" >  
  <IconButton borderRadius="2xl" size="md" variant="outline" colorScheme="white" icon={<FaInstagram />} ></IconButton>    
 </Link>
      
      <Link href="https://twitter.com/theparteist" >  
  <IconButton borderRadius="2xl" size="md" variant="outline" colorScheme="white" icon={<FaTwitter />} ></IconButton>      
 </Link> 
  
   <Link href="https://www.clubhouse.com/@partheist" >  
  <IconButton borderRadius="2xl" size="md" variant="outline" colorScheme="white"><p>👋</p></IconButton>
   </Link>
   </HStack> 

      <hr></hr>

      <Text mt={18}>💼Work</Text>
      <HStack>
     
      <Link href="https://www.linkedin.com/in/parth-karandikar-672a01205/" > 
      <IconButton borderRadius="2xl" size="md" variant="outline" colorScheme="white" icon={<FaLinkedin />} ></IconButton>       
      </Link>
      
    </HStack>
  </VStack>

</Box>
</warp>
   </Center>

    {/* DARK MODE TOGGLE */}
    <Center>
    <Box >
     <HStack>
    <Button size="sm" borderRadius="md" p={5} rightIcon={colorMode === "light" ? <FaSun /> : <FaMoon />} onClick={toggleColorMode}> 
    Toggle
    </Button>
    </HStack> 
    </Box > 
    
    </Center>
 
 </div>
  )
} 
