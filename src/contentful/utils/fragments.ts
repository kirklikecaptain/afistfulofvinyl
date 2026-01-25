export type FragmentProps<Fragment extends object> = {
  _fragment: Fragment;
};

export type PropsOrFragment<Props extends object, Fragment extends object> =
  | Props
  | FragmentProps<Fragment>;

export function fragmentToProps<Props extends object, Fragment extends object>(
  props: PropsOrFragment<Props, Fragment>,
  getFragment: (fragmentData: Fragment) => Props
): Props {
  return '_fragment' in props ? getFragment(props._fragment) : props;
}
