import { Button, Flex, Stack } from '@chakra-ui/react';

import { Input } from '../components/Form/Input';

export default function SignIn() {
  return (
    <Flex
      width='100vw'
      height='100vh'
      alignItems='center'
      justifyContent='center'
    >
      <Flex
        as='form'
        flexDir='column'
        width='100%'
        maxWidth={360}
        padding={8}
        borderRadius={8}
        background='gray.800'
      >
        <Stack spacing={4}>
          <Input name='email' type='email' label='Email'/>

          <Input name='password' type='password' label='Senha'/>
        </Stack>
        
        <Button
          type='submit'
          marginTop={6}
          colorScheme='pink'
          size='lg'
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
