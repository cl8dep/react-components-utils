import ServerManager from "./ServerManager";

interface AxiosProviderProps {
  children: any;
  /**
   * Instance of ServerManager.
   */
  serverManager: ServerManager;
}

export default AxiosProviderProps;
