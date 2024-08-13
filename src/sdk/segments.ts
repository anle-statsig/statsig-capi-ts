/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { segmentsAddIDs } from "../funcs/segmentsAddIDs.js";
import { segmentsCreate } from "../funcs/segmentsCreate.js";
import { segmentsDelete } from "../funcs/segmentsDelete.js";
import { segmentsGet } from "../funcs/segmentsGet.js";
import { segmentsGetIDList } from "../funcs/segmentsGetIDList.js";
import { segmentsList } from "../funcs/segmentsList.js";
import { segmentsRemoveIDs } from "../funcs/segmentsRemoveIDs.js";
import { segmentsResetIDList } from "../funcs/segmentsResetIDList.js";
import { segmentsUpdateConditional } from "../funcs/segmentsUpdateConditional.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Segments extends ClientSDK {
    /**
     * Create Segment
     */
    async create(
        request: operations.ConsoleV1SegmentsControllerGenCreateRequest,
        options?: RequestOptions
    ): Promise<operations.ConsoleV1SegmentsControllerGenCreateResponseBody> {
        return unwrapAsync(segmentsCreate(this, request, options));
    }

    /**
     * List Segments
     */
    async list(
        request: operations.ConsoleV1SegmentsControllerGenListRequest,
        options?: RequestOptions
    ): Promise<operations.ConsoleV1SegmentsControllerGenListResponseBody> {
        return unwrapAsync(segmentsList(this, request, options));
    }

    /**
     * Get Segment
     */
    async get(
        request: operations.ConsoleV1SegmentsControllerGenReadRequest,
        options?: RequestOptions
    ): Promise<operations.ConsoleV1SegmentsControllerGenReadResponseBody> {
        return unwrapAsync(segmentsGet(this, request, options));
    }

    /**
     * Delete Segment
     */
    async delete(
        request: operations.ConsoleV1SegmentsControllerGenRemoveRequest,
        options?: RequestOptions
    ): Promise<operations.ConsoleV1SegmentsControllerGenRemoveResponseBody> {
        return unwrapAsync(segmentsDelete(this, request, options));
    }

    /**
     * Get IDs in a Segment
     */
    async getIDList(
        request: operations.ConsoleV1SegmentsIDListControllerReadRequest,
        options?: RequestOptions
    ): Promise<operations.ConsoleV1SegmentsIDListControllerReadResponseBody> {
        return unwrapAsync(segmentsGetIDList(this, request, options));
    }

    /**
     * Add IDs to Segment
     */
    async addIDs(
        request: operations.ConsoleV1SegmentsIDListControllerAddRequest,
        options?: RequestOptions
    ): Promise<operations.ConsoleV1SegmentsIDListControllerAddResponseBody> {
        return unwrapAsync(segmentsAddIDs(this, request, options));
    }

    /**
     * Remove IDs from Segment
     */
    async removeIDs(
        request: operations.ConsoleV1SegmentsIDListControllerGenRemoveRequest,
        options?: RequestOptions
    ): Promise<operations.ConsoleV1SegmentsIDListControllerGenRemoveResponseBody> {
        return unwrapAsync(segmentsRemoveIDs(this, request, options));
    }

    /**
     * Upsert ID List Segment
     */
    async resetIDList(
        request: operations.ConsoleV1SegmentsIDListResetControllerResetRequest,
        options?: RequestOptions
    ): Promise<operations.ConsoleV1SegmentsIDListResetControllerResetResponseBody> {
        return unwrapAsync(segmentsResetIDList(this, request, options));
    }

    /**
     * Update Segment Rules
     */
    async updateConditional(
        request: operations.ConsoleV1SegmentsRulesControllerUpdateRequest,
        options?: RequestOptions
    ): Promise<operations.ConsoleV1SegmentsRulesControllerUpdateResponseBody> {
        return unwrapAsync(segmentsUpdateConditional(this, request, options));
    }
}