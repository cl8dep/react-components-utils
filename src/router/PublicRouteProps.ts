interface PublicRouteProps {
  condition: boolean;
  fallbackUrl: string;
  component?: React.ReactNode | React.ReactChild | any;
  children?: React.ReactNode | React.ReactChild | any;
  componentProps: any;
  path: string;
}

export default PublicRouteProps;
