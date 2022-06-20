import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}


export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex alignItems='center'>
      {showProfileData && (
        <Box marginRight='4' textAlign='right'>
          <Text>Jordevá Lucas</Text>
          <Text color='gray.300' fontSize='small'>
            jordevalucas@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size='md'
        name='Jordevá Lucas'
        src='https://github.com/jordelucas.png'
      />
    </Flex>
  )
}