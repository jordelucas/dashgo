import { 
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormControl, 
  FormLabel, 
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        id={name}
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
