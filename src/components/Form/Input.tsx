import { forwardRef, ForwardRefRenderFunction } from 'react';
import { 
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormControl, 
  FormLabel, 
} from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, ...rest },
  ref
) => {
  return (
    <FormControl>
      { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        id={name}
        ref={ref}
        name={name}
        size='lg'
        variant='filled'
        backgroundColor='gray.900'
        focusBorderColor='pink.500'
        _hover={{
          backgroundColor: 'gray.900'
        }}
        {...rest}
      />
    </FormControl>
  );
}

export const Input = forwardRef(InputBase);
