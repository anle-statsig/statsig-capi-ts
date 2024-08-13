/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import * as components from "../components/index.js";
import * as z from "zod";

export const ConsoleV1IngestionControllerGenReadIngestionQueryParamType = {
    Redshift: "redshift",
    BigqueryV2: "bigquery-v2",
    SnowflakeV2: "snowflake-v2",
    Databricks: "databricks",
    AzureSynapse: "azure-synapse",
    S3: "s3",
    Athena: "athena",
    Adls: "adls",
} as const;
export type ConsoleV1IngestionControllerGenReadIngestionQueryParamType = ClosedEnum<
    typeof ConsoleV1IngestionControllerGenReadIngestionQueryParamType
>;

export const QueryParamDataset = {
    Events: "Events",
    Metrics: "Metrics",
    ExportExposures: "export_exposures",
    EntityProperties: "entity_properties",
} as const;
export type QueryParamDataset = ClosedEnum<typeof QueryParamDataset>;

export type ConsoleV1IngestionControllerGenReadIngestionRequest = {
    type: ConsoleV1IngestionControllerGenReadIngestionQueryParamType;
    dataset: QueryParamDataset;
    sourceName?: string | undefined;
    /**
     * Optional header to respect review settings for mutation endpoints.
     */
    xRespectReviewSettings?: string | undefined;
};

/**
 * Read Ingestion Success
 */
export type ConsoleV1IngestionControllerGenReadIngestionResponseBody = {
    /**
     * A simple string explaining the result of the operation.
     */
    message: string;
    data: components.IngestionDto;
};

/** @internal */
export const ConsoleV1IngestionControllerGenReadIngestionQueryParamType$inboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1IngestionControllerGenReadIngestionQueryParamType
> = z.nativeEnum(ConsoleV1IngestionControllerGenReadIngestionQueryParamType);

/** @internal */
export const ConsoleV1IngestionControllerGenReadIngestionQueryParamType$outboundSchema: z.ZodNativeEnum<
    typeof ConsoleV1IngestionControllerGenReadIngestionQueryParamType
> = ConsoleV1IngestionControllerGenReadIngestionQueryParamType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1IngestionControllerGenReadIngestionQueryParamType$ {
    /** @deprecated use `ConsoleV1IngestionControllerGenReadIngestionQueryParamType$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1IngestionControllerGenReadIngestionQueryParamType$inboundSchema;
    /** @deprecated use `ConsoleV1IngestionControllerGenReadIngestionQueryParamType$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1IngestionControllerGenReadIngestionQueryParamType$outboundSchema;
}

/** @internal */
export const QueryParamDataset$inboundSchema: z.ZodNativeEnum<typeof QueryParamDataset> =
    z.nativeEnum(QueryParamDataset);

/** @internal */
export const QueryParamDataset$outboundSchema: z.ZodNativeEnum<typeof QueryParamDataset> =
    QueryParamDataset$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QueryParamDataset$ {
    /** @deprecated use `QueryParamDataset$inboundSchema` instead. */
    export const inboundSchema = QueryParamDataset$inboundSchema;
    /** @deprecated use `QueryParamDataset$outboundSchema` instead. */
    export const outboundSchema = QueryParamDataset$outboundSchema;
}

/** @internal */
export const ConsoleV1IngestionControllerGenReadIngestionRequest$inboundSchema: z.ZodType<
    ConsoleV1IngestionControllerGenReadIngestionRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        type: ConsoleV1IngestionControllerGenReadIngestionQueryParamType$inboundSchema,
        dataset: QueryParamDataset$inboundSchema,
        source_name: z.string().optional(),
        "x-respect-review-settings": z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            source_name: "sourceName",
            "x-respect-review-settings": "xRespectReviewSettings",
        });
    });

/** @internal */
export type ConsoleV1IngestionControllerGenReadIngestionRequest$Outbound = {
    type: string;
    dataset: string;
    source_name?: string | undefined;
    "x-respect-review-settings"?: string | undefined;
};

/** @internal */
export const ConsoleV1IngestionControllerGenReadIngestionRequest$outboundSchema: z.ZodType<
    ConsoleV1IngestionControllerGenReadIngestionRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1IngestionControllerGenReadIngestionRequest
> = z
    .object({
        type: ConsoleV1IngestionControllerGenReadIngestionQueryParamType$outboundSchema,
        dataset: QueryParamDataset$outboundSchema,
        sourceName: z.string().optional(),
        xRespectReviewSettings: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            sourceName: "source_name",
            xRespectReviewSettings: "x-respect-review-settings",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1IngestionControllerGenReadIngestionRequest$ {
    /** @deprecated use `ConsoleV1IngestionControllerGenReadIngestionRequest$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1IngestionControllerGenReadIngestionRequest$inboundSchema;
    /** @deprecated use `ConsoleV1IngestionControllerGenReadIngestionRequest$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1IngestionControllerGenReadIngestionRequest$outboundSchema;
    /** @deprecated use `ConsoleV1IngestionControllerGenReadIngestionRequest$Outbound` instead. */
    export type Outbound = ConsoleV1IngestionControllerGenReadIngestionRequest$Outbound;
}

/** @internal */
export const ConsoleV1IngestionControllerGenReadIngestionResponseBody$inboundSchema: z.ZodType<
    ConsoleV1IngestionControllerGenReadIngestionResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string(),
    data: components.IngestionDto$inboundSchema,
});

/** @internal */
export type ConsoleV1IngestionControllerGenReadIngestionResponseBody$Outbound = {
    message: string;
    data: components.IngestionDto$Outbound;
};

/** @internal */
export const ConsoleV1IngestionControllerGenReadIngestionResponseBody$outboundSchema: z.ZodType<
    ConsoleV1IngestionControllerGenReadIngestionResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1IngestionControllerGenReadIngestionResponseBody
> = z.object({
    message: z.string(),
    data: components.IngestionDto$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1IngestionControllerGenReadIngestionResponseBody$ {
    /** @deprecated use `ConsoleV1IngestionControllerGenReadIngestionResponseBody$inboundSchema` instead. */
    export const inboundSchema =
        ConsoleV1IngestionControllerGenReadIngestionResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1IngestionControllerGenReadIngestionResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        ConsoleV1IngestionControllerGenReadIngestionResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1IngestionControllerGenReadIngestionResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1IngestionControllerGenReadIngestionResponseBody$Outbound;
}