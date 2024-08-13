/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { teamsCreate } from "../funcs/teamsCreate.js";
import { teamsDelete } from "../funcs/teamsDelete.js";
import { teamsGet } from "../funcs/teamsGet.js";
import { teamsList } from "../funcs/teamsList.js";
import { teamsUpdate } from "../funcs/teamsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Teams extends ClientSDK {
    /**
     * List Teams
     */
    async list(
        request: operations.ConsoleV1UsersControllerGenListTeamsRequest,
        options?: RequestOptions
    ): Promise<operations.ConsoleV1UsersControllerGenListTeamsResponseBody> {
        return unwrapAsync(teamsList(this, request, options));
    }

    /**
     * Create Team
     */
    async create(
        request: operations.ConsoleV1UsersControllerGenCreateTeamRequest,
        options?: RequestOptions
    ): Promise<operations.ConsoleV1UsersControllerGenCreateTeamResponseBody> {
        return unwrapAsync(teamsCreate(this, request, options));
    }

    /**
     * Get Team
     */
    async get(
        request: operations.ConsoleV1UsersControllerGenReadTeamRequest,
        options?: RequestOptions
    ): Promise<operations.ConsoleV1UsersControllerGenReadTeamResponseBody> {
        return unwrapAsync(teamsGet(this, request, options));
    }

    /**
     * Update Team
     */
    async update(
        request: operations.ConsoleV1UsersControllerGenUpdateTeamRequest,
        options?: RequestOptions
    ): Promise<operations.ConsoleV1UsersControllerGenUpdateTeamResponseBody> {
        return unwrapAsync(teamsUpdate(this, request, options));
    }

    /**
     * Delete Team
     */
    async delete(
        request: operations.ConsoleV1UsersControllerGenDeleteTeamRequest,
        options?: RequestOptions
    ): Promise<operations.ConsoleV1UsersControllerGenDeleteTeamResponseBody> {
        return unwrapAsync(teamsDelete(this, request, options));
    }
}
