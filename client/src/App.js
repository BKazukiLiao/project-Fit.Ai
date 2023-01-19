import logo from './logo.svg';
import './App.scss';
import { ChakraProvider, Box, Stack, HStack, Img } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import Forms from './components/Forms';
import weight from './weight.png'
import monet from './monet.png'
import MainBox from './components/MainBox'
function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Stack>
          <Navbar/>
          <HStack className='top-ctn'>
            <Img src={weight} className='weight'></Img>
            <Box className='middle'><MainBox/></Box>
            <Img src={monet} className='weight'></Img>

          </HStack>
          
          <Forms />
        </Stack>
      </div>
  </ChakraProvider>
  );
}

export default App;
