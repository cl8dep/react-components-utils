import { AxiosInstance } from "axios";

/**
 * Represent an instance of a class that be used to stablish communication with the server using Axios
 */
abstract class ServerManager {
  axiosInstance: AxiosInstance;

  abstract initialize(): void;
}

export default ServerManager;
