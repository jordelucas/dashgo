import { createContext, ReactNode, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
  const router = useRouter();
  const disclosure = useDisclosure();
  
  const { onClose } = disclosure;

  useEffect(() => {
    onClose();
  }, [onClose, router.asPath])

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
};

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
