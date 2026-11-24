import { Container, getContainer } from "@cloudflare/containers";

export class Toolkit extends Container {
  defaultPort = 8080;
  sleepAfter = "10m";
  enableInternet = true;
}

export default {
  fetch(request, env) {
    return getContainer(env.TOOLKIT, "dashboard").fetch(request);
  },
};
