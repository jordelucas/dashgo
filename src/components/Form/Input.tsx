import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';
import { 
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormControl, 
  FormLabel,
  FormErrorMessage, 
} from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
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

      {!!error && (
        <FormErrorMessage>
          {error.message}
        </FormErrorMessage>
      )}
    </FormControl>
  );
}

export const Input = forwardRef(InputBase);
