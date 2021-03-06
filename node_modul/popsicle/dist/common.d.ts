import FormData = require('form-data');
import Request, { RequestOptions, DefaultsOptions } from './request';
import Response from './response';
import * as plugins from './plugins/index';
import form from './form';
import jar from './jar';
import PopsicleError from './error';
import { createTransport } from './index';
export declare function defaults(defaultsOptions: DefaultsOptions): (options: RequestOptions | string) => Request;
export declare const request: (options: RequestOptions | string) => Request;
export declare const get: (options: RequestOptions | string) => Request;
export declare const post: (options: RequestOptions | string) => Request;
export declare const put: (options: RequestOptions | string) => Request;
export declare const patch: (options: RequestOptions | string) => Request;
export declare const del: (options: RequestOptions | string) => Request;
export declare const head: (options: RequestOptions | string) => Request;
export { Request, Response, PopsicleError, FormData, plugins, form, jar, createTransport };
export default request;
