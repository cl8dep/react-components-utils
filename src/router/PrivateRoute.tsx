import React from "react";
import { Route, Redirect } from "react-router";
import PrivateRouteProps from "./PrivateRouteProps";

/**
 *
 */
function PrivateRoute(props: PrivateRouteProps) {
  const {
    component,
    condition = false,
    fallbackUrl = "",
    path = "",
    ...rest
  } = props;

  const renderRouteChild = () => {
    if (props.children && props.component)
      throw new Error("You can't use component and children at the same time!");

    if (props.component)
      return React.createElement(component, props.componentProps);
    return props.children;
  };

  return (
    <Route
      path={path}
      {...rest}
      render={(props) =>
        condition ? (
          renderRouteChild()
        ) : (
          <Redirect
            to={{
              pathname: fallbackUrl,
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
