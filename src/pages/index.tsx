import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, Flex, Stack } from '@chakra-ui/react';

import { Input } from '../components/Form/Input';

type SignInFormData = {
  emaik: string;
  password: string;
}

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm();

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log(values);
  }

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input
            name='email'
            type='email'
            label='Email'
            {...register('email')}
          />

          <Input
            name='password'
            type='password'
            label='Senha'
            {...register('password')}
          />
        </Stack>
        
        <Button
          type='submit'
          marginTop={6}
          colorScheme='pink'
          size='lg'
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
