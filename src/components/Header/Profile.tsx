import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex alignItems='center'>
      <Box marginRight='4' textAlign='right'>
        <Text>Jordevá Lucas</Text>
        <Text color='gray.300' fontSize='small'>
          jordevalucas@gmail.com
        </Text>
      </Box>

      <Avatar
        size='md'
        name='Jordevá Lucas'
        src='https://github.com/jordelucas.png'
      />
    </Flex>
  )
}