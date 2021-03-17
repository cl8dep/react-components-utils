import React, { createContext } from "react";
import AxiosProviderProps from "./AxiosProviderProps";
import ServerManager from "./ServerManager";

const AxiosProviderStateContext = createContext<ServerManager>(null);

function AxiosProvider(props: AxiosProviderProps) {
  if (!props.serverManager)
    throw new Error(
      "serverManager prop can't be null or undefined. You should pass a valid instance of this abstract class to use it."
    );

  return (
    <AxiosProviderStateContext.Provider value={props.serverManager}>
      {props.children}
    </AxiosProviderStateContext.Provider>
  );
}

function useAxios() {
  const context = React.useContext(AxiosProviderStateContext);
  if (context === undefined) {
    throw new Error("useAxios must be used within a AxiosProvider");
  }
  return context;
}

function withAxios(WrappedComponent: any) {
  return class AxiosManager extends React.Component {
    static contextType = AxiosProviderStateContext;

    render() {
      return <WrappedComponent axios={this.context} {...this.props} />;
    }
  };
}

export { AxiosProvider, useAxios, withAxios };
