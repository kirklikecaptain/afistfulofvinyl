export type FragmentProps<Fragment extends object> = {
  fragment: Fragment;
};

export type PropsOrFragment<Props extends object, Fragment extends object> =
  | Props
  | FragmentProps<Fragment>;

export function fragmentToProps<Props extends object, Fragment extends object>(
  props: PropsOrFragment<Props, Fragment>,
  getFragment: (fragmentData: Fragment) => Props
): Props {
  return 'fragment' in props ? getFragment(props.fragment) : props;
}
