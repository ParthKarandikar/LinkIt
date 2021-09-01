import { background, Button, ButtonGroup } from "@chakra-ui/react"
import { Alert, AlertIcon, AlertTitle, AlertDescription} from "@chakra-ui/react"
import { Heading,Wrap, WrapItem,Center,Link } from "@chakra-ui/react"
import { Avatar, AvatarBadge, AvatarGroup,Box,Text,Stack, HStack, VStack,Flex, Spacer,Circle,IconButton} from "@chakra-ui/react"

import{FaFacebookF,FaInstagram,FaTwitter,FaRegHandPaper,FaSnapchatGhost,FaReddit,FaStrava}from"react-icons/fa"

export default function Home() {
  return (
    <div >
    
    <Center>
  {/* Below is avatar */}
    <warp align="center">
  <Box boxShadow="xl" p="6" rounded="md" bg="white" m={5}>
  <Avatar size="lg" name="Ryan Florence" src="https://bit.ly/ryan-florence" />
  <Text fontSize="xl" p={3}><b>Parth Karandikar</b></Text>
  <Text fontSize="md" p={2}>⚡Connect with me on</Text>


  <Stack spacing={2} direction="row" align="center">
 <Link href="https://www.facebook.com/parth.karandikar.94/" >  
  <IconButton borderRadius="2xl" size="md" colorScheme="red" icon={<FaFacebookF />} ></IconButton>    
 </Link>  
 
 <Link href="https://www.instagram.com/__partheist/" >  
  <IconButton borderRadius="2xl" size="md" colorScheme="red" icon={<FaInstagram />} ></IconButton>    
 </Link>
 
 <Link href="https://twitter.com/theparteist" >  
  <IconButton borderRadius="2xl" size="md" colorScheme="red" icon={<FaTwitter />} ></IconButton>      
 </Link>
 
 <Link href="" >
  <IconButton borderRadius="2xl" size="md" colorScheme="red" icon={<FaSnapchatGhost />}></IconButton> 
  </Link>
 
 <Link href="https://www.reddit.com/user/TechnicalArachnid685" >  
  <IconButton borderRadius="2xl" size="md" colorScheme="red" icon={<FaReddit />} ></IconButton>
   </Link>
 
 <Link href="https://www.strava.com/athletes/66256529" > 
  <IconButton borderRadius="2xl" size="md" colorScheme="red" icon={<FaStrava />} ></IconButton>       
  </Link>
  </Stack>

  

</Box>
</warp>
   </Center>
    
    
    </div>
  )
} 
