import hoistNonReactStatics from 'hoist-non-react-statics';

export function withStatics<C extends React.ComponentType<any>, S = {}>(
  component: C,
  statics?: S
): C & S {
  return hoistNonReactStatics(component, statics as any) as any;
}
