import { isbot } from "isbot";

export default function isBot(userAgent) {
  return isbot(userAgent);
}
