import { Flex, useBreakpointValue } from '@chakra-ui/react';

import { Logo } from './Logo';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';
import { NotificationsNav } from './NotificationsNav';

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex
      as='header'
      width='100%'
      maxWidth={1480}
      height='20'
      marginX='auto'
      marginTop='4'
      paddingX='6'
      alignItems='center'
    >
      <Logo />

      { isWideVersion && <SearchBox /> }

      <Flex alignItems='center' marginLeft='auto'>
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}