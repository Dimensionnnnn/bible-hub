/* tslint:disable */
/* eslint-disable */
/**
 * SocialMedia
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { Desks } from '../models';
// @ts-ignore
import { FindColumnsResponseDto } from '../models';
// @ts-ignore
import { FindDesksResponseDto } from '../models';
/**
 * PrayerAPIV2DesksApi - axios parameter creator
 * @export
 */
export const PrayerAPIV2DesksApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get desks
         * @param {number} limit 
         * @param {string} [afterCursor] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deskControllerFind: async (limit: number, afterCursor?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'limit' is not null or undefined
            assertParamExists('deskControllerFind', 'limit', limit)
            const localVarPath = `/desks`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (afterCursor !== undefined) {
                localVarQueryParameter['afterCursor'] = afterCursor;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get columns
         * @param {number} deskId 
         * @param {number} limit 
         * @param {string} [afterCursor] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deskControllerFindColumns: async (deskId: number, limit: number, afterCursor?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'deskId' is not null or undefined
            assertParamExists('deskControllerFindColumns', 'deskId', deskId)
            // verify required parameter 'limit' is not null or undefined
            assertParamExists('deskControllerFindColumns', 'limit', limit)
            const localVarPath = `/desks/{deskId}/columns`
                .replace(`{${"deskId"}}`, encodeURIComponent(String(deskId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (afterCursor !== undefined) {
                localVarQueryParameter['afterCursor'] = afterCursor;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get own desk
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deskControllerFindMy: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/desks/my`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PrayerAPIV2DesksApi - functional programming interface
 * @export
 */
export const PrayerAPIV2DesksApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PrayerAPIV2DesksApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get desks
         * @param {number} limit 
         * @param {string} [afterCursor] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deskControllerFind(limit: number, afterCursor?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FindDesksResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deskControllerFind(limit, afterCursor, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['PrayerAPIV2DesksApi.deskControllerFind']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @summary Get columns
         * @param {number} deskId 
         * @param {number} limit 
         * @param {string} [afterCursor] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deskControllerFindColumns(deskId: number, limit: number, afterCursor?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FindColumnsResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deskControllerFindColumns(deskId, limit, afterCursor, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['PrayerAPIV2DesksApi.deskControllerFindColumns']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @summary Get own desk
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deskControllerFindMy(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Desks>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deskControllerFindMy(options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['PrayerAPIV2DesksApi.deskControllerFindMy']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * PrayerAPIV2DesksApi - factory interface
 * @export
 */
export const PrayerAPIV2DesksApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PrayerAPIV2DesksApiFp(configuration)
    return {
        /**
         * 
         * @summary Get desks
         * @param {PrayerAPIV2DesksApiDeskControllerFindRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deskControllerFind(requestParameters: PrayerAPIV2DesksApiDeskControllerFindRequest, options?: AxiosRequestConfig): AxiosPromise<FindDesksResponseDto> {
            return localVarFp.deskControllerFind(requestParameters.limit, requestParameters.afterCursor, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get columns
         * @param {PrayerAPIV2DesksApiDeskControllerFindColumnsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deskControllerFindColumns(requestParameters: PrayerAPIV2DesksApiDeskControllerFindColumnsRequest, options?: AxiosRequestConfig): AxiosPromise<FindColumnsResponseDto> {
            return localVarFp.deskControllerFindColumns(requestParameters.deskId, requestParameters.limit, requestParameters.afterCursor, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get own desk
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deskControllerFindMy(options?: AxiosRequestConfig): AxiosPromise<Desks> {
            return localVarFp.deskControllerFindMy(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for deskControllerFind operation in PrayerAPIV2DesksApi.
 * @export
 * @interface PrayerAPIV2DesksApiDeskControllerFindRequest
 */
export interface PrayerAPIV2DesksApiDeskControllerFindRequest {
    /**
     * 
     * @type {number}
     * @memberof PrayerAPIV2DesksApiDeskControllerFind
     */
    readonly limit: number

    /**
     * 
     * @type {string}
     * @memberof PrayerAPIV2DesksApiDeskControllerFind
     */
    readonly afterCursor?: string
}

/**
 * Request parameters for deskControllerFindColumns operation in PrayerAPIV2DesksApi.
 * @export
 * @interface PrayerAPIV2DesksApiDeskControllerFindColumnsRequest
 */
export interface PrayerAPIV2DesksApiDeskControllerFindColumnsRequest {
    /**
     * 
     * @type {number}
     * @memberof PrayerAPIV2DesksApiDeskControllerFindColumns
     */
    readonly deskId: number

    /**
     * 
     * @type {number}
     * @memberof PrayerAPIV2DesksApiDeskControllerFindColumns
     */
    readonly limit: number

    /**
     * 
     * @type {string}
     * @memberof PrayerAPIV2DesksApiDeskControllerFindColumns
     */
    readonly afterCursor?: string
}

/**
 * PrayerAPIV2DesksApi - object-oriented interface
 * @export
 * @class PrayerAPIV2DesksApi
 * @extends {BaseAPI}
 */
export class PrayerAPIV2DesksApi extends BaseAPI {
    /**
     * 
     * @summary Get desks
     * @param {PrayerAPIV2DesksApiDeskControllerFindRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PrayerAPIV2DesksApi
     */
    public deskControllerFind(requestParameters: PrayerAPIV2DesksApiDeskControllerFindRequest, options?: AxiosRequestConfig) {
        return PrayerAPIV2DesksApiFp(this.configuration).deskControllerFind(requestParameters.limit, requestParameters.afterCursor, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get columns
     * @param {PrayerAPIV2DesksApiDeskControllerFindColumnsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PrayerAPIV2DesksApi
     */
    public deskControllerFindColumns(requestParameters: PrayerAPIV2DesksApiDeskControllerFindColumnsRequest, options?: AxiosRequestConfig) {
        return PrayerAPIV2DesksApiFp(this.configuration).deskControllerFindColumns(requestParameters.deskId, requestParameters.limit, requestParameters.afterCursor, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get own desk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PrayerAPIV2DesksApi
     */
    public deskControllerFindMy(options?: AxiosRequestConfig) {
        return PrayerAPIV2DesksApiFp(this.configuration).deskControllerFindMy(options).then((request) => request(this.axios, this.basePath));
    }
}

