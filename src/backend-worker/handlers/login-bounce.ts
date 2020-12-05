import KSUID from 'ksuid';
import { Bounce } from '../utils/bounce';
import { apiPublicURI, botClientID } from '../utils/config';

type URLParams = {
    clientID: string;
    redirectURI: string;
    state: string;
};

const buildURL = (params: URLParams) =>
    `https://discord.com/api/oauth2/authorize?client_id=${
        params.clientID
    }&response_type=code&scope=identify%20guilds&redirect_uri=${encodeURIComponent(
        params.redirectURI
    )}&state=${params.state}`;

export const LoginBounce = async (request: Request): Promise<Response> => {
    const state = await KSUID.random();
    const redirectURI = `${apiPublicURI}/login-callback`;
    const clientID = botClientID;

    return Bounce(buildURL({ state: state.string, redirectURI, clientID }));
};
