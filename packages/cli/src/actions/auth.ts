import { logger } from "../deps";
import { getCurrentAuth, startAuth } from "../utils/auth-utils";
import { HandledError } from "../utils/error";

export type AuthArgs = {
  check?: boolean;
  host: string;
  email: string;
};

export async function checkCredentials() {
  if (await getCurrentAuth()) {
    logger.info("Plasmic credentials are ok.");
    return;
  }
  throw new HandledError(
    "The authentication credentials are missing or invalid."
  );
}

async function getEmail() {
  const authCreds = await getCurrentAuth();
  if (authCreds) {
    logger.info(authCreds.user);
    return;
  }
  throw new HandledError(
    "The authentication credentials are missing or invalid."
  );
}

export async function auth(args: AuthArgs) {
  if (args.check) {
    return checkCredentials();
  }

  if (args.email) {
    return getEmail();
  }

  return startAuth(args);
}
