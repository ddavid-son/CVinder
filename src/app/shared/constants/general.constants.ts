import {environment} from "../../../environments/environment";

export const baseApiUrl = environment.apiaUrl;


export const cvBaseUrl = `${baseApiUrl}/cv`;

export const getMyCVUrl = `${cvBaseUrl}/me`;
