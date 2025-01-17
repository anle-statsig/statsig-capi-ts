/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { layersCreate } from "../funcs/layersCreate.js";
import { layersGet } from "../funcs/layersGet.js";
import { layersList } from "../funcs/layersList.js";
import { layersListExperiments } from "../funcs/layersListExperiments.js";
import { layersPartialUpdate } from "../funcs/layersPartialUpdate.js";
import { layersRemove } from "../funcs/layersRemove.js";
import { layersUpdate } from "../funcs/layersUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Layers extends ClientSDK {
    /**
     * Create a Layer
     */
    async create(
        request: operations.ConsoleV1LayersControllerGenCreateRequest,
        options?: RequestOptions
    ): Promise<operations.ConsoleV1LayersControllerGenCreateResponseBody> {
        return unwrapAsync(layersCreate(this, request, options));
    }

    /**
     * Get Layers
     */
    async list(
        request: operations.ConsoleV1LayersControllerGenListRequest,
        options?: RequestOptions
    ): Promise<operations.ConsoleV1LayersControllerGenListResponseBody> {
        return unwrapAsync(layersList(this, request, options));
    }

    /**
     * Get one layer
     */
    async get(
        request: operations.ConsoleV1LayersControllerGenReadRequest,
        options?: RequestOptions
    ): Promise<operations.ConsoleV1LayersControllerGenReadResponseBody> {
        return unwrapAsync(layersGet(this, request, options));
    }

    /**
     * Partially update a layer
     */
    async partialUpdate(
        request: operations.ConsoleV1LayersControllerGenPartialUpdateRequest,
        options?: RequestOptions
    ): Promise<operations.ConsoleV1LayersControllerGenPartialUpdateResponseBody> {
        return unwrapAsync(layersPartialUpdate(this, request, options));
    }

    /**
     * Update a layer
     */
    async update(
        request: operations.ConsoleV1LayersControllerGenFullUpdateRequest,
        options?: RequestOptions
    ): Promise<operations.ConsoleV1LayersControllerGenFullUpdateResponseBody> {
        return unwrapAsync(layersUpdate(this, request, options));
    }

    /**
     * Delete a layer
     */
    async remove(
        request: operations.ConsoleV1LayersControllerGenRemoveRequest,
        options?: RequestOptions
    ): Promise<operations.ConsoleV1LayersControllerGenRemoveResponseBody> {
        return unwrapAsync(layersRemove(this, request, options));
    }

    /**
     * Lineage: List Experiment related to Layer
     */
    async listExperiments(
        request: operations.ConsoleV1LayerExperimentsControllerGenListRequest,
        options?: RequestOptions
    ): Promise<operations.ConsoleV1LayerExperimentsControllerGenListResponseBody> {
        return unwrapAsync(layersListExperiments(this, request, options));
    }
}
