import { createContext } from 'react';
import { CollapseContextProps } from './types';

const CollapseContext = createContext<CollapseContextProps>({
  activeIds: [],
  onActive: () => null,
});

export { CollapseContext };
