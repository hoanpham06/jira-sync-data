import axios from "axios";

class Auth {
  username: string;
  password: string;
}

class JiraConfigs {
  protocol: string;
  host: string;
  username: string;
  password: string;
}

class BaseOptions {
  auth: Auth;
}

export default class JiraIntegrate {
  protocol: string;
  host: string;
  baseOptions: BaseOptions;
  constructor(options: JiraConfigs) {
    this.protocol = options.protocol || "http";
    this.host = options.host;
    this.baseOptions.auth = {
      username: options.username,
      password: options.password,
    };
  }

  async getAllProjects() {
    const { data } = await axios({
      baseURL: this.host,
      url: "/rest/api/2/project",
      method: "get",
      auth: this.baseOptions.auth,
    });

    return data;
  }
}
