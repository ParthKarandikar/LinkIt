import { background, Button, ButtonGroup } from "@chakra-ui/react"
import { Alert, AlertIcon, AlertTitle, AlertDescription} from "@chakra-ui/react"
import { Heading,Wrap, WrapItem,Center,Link } from "@chakra-ui/react"
import { Avatar, AvatarBadge, AvatarGroup,Box,Text,Stack, HStack, VStack,Flex, Spacer,Circle,IconButton} from "@chakra-ui/react"

import{FaFacebookF,FaInstagram,FaTwitter,FaRegHandPaper,FaSnapchatGhost,FaReddit,FaStrava, FaLinkedin, FaGithub}from"react-icons/fa"

export default function Home() {
  return (
    <div >

    <Center>
  {/* Below is avatar */}
    <warp align="center">
  <Box boxShadow="" border="2px" p="6" borderRadius="3xl" bg="black" color="white" m={5}>
  <Avatar size="lg"  />
  <Text fontSize="xl" p={3}><b>Parth Karandikar</b></Text>
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
      <Link href="https://www.snapchat.com/add/parthk_7?share_id=tXDiCTsQZnM" >
  <IconButton borderRadius="2xl" size="md" variant="outline" colorScheme="white" icon={<FaSnapchatGhost />}></IconButton> 
  </Link>
      <Link href="https://www.reddit.com/user/TechnicalArachnid685" >  
  <IconButton borderRadius="2xl" size="md" variant="outline" colorScheme="white" icon={<FaReddit />} ></IconButton>
   </Link>
   </HStack> 

      <hr></hr>

      <Text mt={18}>🏃‍♂️Athletics</Text>
      <HStack>
      <Link href="https://www.strava.com/athletes/66256529" > 
  <IconButton borderRadius="2xl" size="md" variant="outline" colorScheme="white" icon={<FaStrava />} ></IconButton>       
  </Link>
      </HStack>

      <hr></hr>    

      <Text mt={18}>💼Office</Text>
      <HStack>
     
      <Link href="https://www.linkedin.com/in/parth-karandikar-672a01205/" > 
      <IconButton borderRadius="2xl" size="md" variant="outline" colorScheme="white" icon={<FaLinkedin />} ></IconButton>       
      </Link>

      <Link href="https://github.com/ParthKarandikar" > 
      <IconButton borderRadius="2xl" size="md" colorScheme="red" variant="outline" icon={<FaGithub />} ></IconButton>       
      </Link>
    
    </HStack>
  
  </VStack>


</Box>
</warp>
   </Center>
    
    
    </div>
  )
} 
