/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import * as components from "../components/index.js";
import * as z from "zod";

/**
 * Filter by type
 */
export const Type = {
    Temporary: "TEMPORARY",
    Permanent: "PERMANENT",
    Stale: "STALE",
    Template: "TEMPLATE",
} as const;
/**
 * Filter by type
 */
export type Type = ClosedEnum<typeof Type>;

/**
 * Filter by typeReason
 */
export const TypeReason = {
    None: "NONE",
    StaleProbablyLaunched: "STALE_PROBABLY_LAUNCHED",
    StaleProbablyUnlaunched: "STALE_PROBABLY_UNLAUNCHED",
    StaleProbablyForgotten: "STALE_PROBABLY_FORGOTTEN",
    StaleNoRules: "STALE_NO_RULES",
    StaleProbablyDeadCheck: "STALE_PROBABLY_DEAD_CHECK",
} as const;
/**
 * Filter by typeReason
 */
export type TypeReason = ClosedEnum<typeof TypeReason>;

export type ConsoleV1GatesControllerGenListRequest = {
    /**
     * Filter by idType
     */
    idType?: any | undefined;
    /**
     * Filter by type
     */
    type?: Type | undefined;
    /**
     * Filter by typeReason
     */
    typeReason?: TypeReason | undefined;
    /**
     * Name of the creator.
     */
    creatorName?: string | null | undefined;
    /**
     * ID of the user who created the entity.
     */
    creatorID?: string | null | undefined;
    /**
     * Filter by tags
     */
    tags?: any | undefined;
    /**
     * Results per page
     */
    limit?: any | undefined;
    /**
     * Page number
     */
    page?: any | undefined;
    /**
     * Optional header to respect review settings for mutation endpoints.
     */
    xRespectReviewSettings?: string | undefined;
};

/**
 * List gates success
 */
export type ConsoleV1GatesControllerGenListResponseBody = {
    /**
     * A simple string explaining the result of the operation.
     */
    message: string;
    data: Array<components.ExternalGateDto>;
    /**
     * Pagination metadata for checking if there is next page for example.
     */
    pagination: components.PaginationResponseMetadataDto;
};

/** @internal */
export const Type$inboundSchema: z.ZodNativeEnum<typeof Type> = z.nativeEnum(Type);

/** @internal */
export const Type$outboundSchema: z.ZodNativeEnum<typeof Type> = Type$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Type$ {
    /** @deprecated use `Type$inboundSchema` instead. */
    export const inboundSchema = Type$inboundSchema;
    /** @deprecated use `Type$outboundSchema` instead. */
    export const outboundSchema = Type$outboundSchema;
}

/** @internal */
export const TypeReason$inboundSchema: z.ZodNativeEnum<typeof TypeReason> =
    z.nativeEnum(TypeReason);

/** @internal */
export const TypeReason$outboundSchema: z.ZodNativeEnum<typeof TypeReason> =
    TypeReason$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TypeReason$ {
    /** @deprecated use `TypeReason$inboundSchema` instead. */
    export const inboundSchema = TypeReason$inboundSchema;
    /** @deprecated use `TypeReason$outboundSchema` instead. */
    export const outboundSchema = TypeReason$outboundSchema;
}

/** @internal */
export const ConsoleV1GatesControllerGenListRequest$inboundSchema: z.ZodType<
    ConsoleV1GatesControllerGenListRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        idType: z.any().optional(),
        type: Type$inboundSchema.optional(),
        typeReason: TypeReason$inboundSchema.optional(),
        creatorName: z.nullable(z.string()).optional(),
        creatorID: z.nullable(z.string()).optional(),
        tags: z.any().optional(),
        limit: z.any().optional(),
        page: z.any().optional(),
        "x-respect-review-settings": z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            "x-respect-review-settings": "xRespectReviewSettings",
        });
    });

/** @internal */
export type ConsoleV1GatesControllerGenListRequest$Outbound = {
    idType?: any | undefined;
    type?: string | undefined;
    typeReason?: string | undefined;
    creatorName?: string | null | undefined;
    creatorID?: string | null | undefined;
    tags?: any | undefined;
    limit?: any | undefined;
    page?: any | undefined;
    "x-respect-review-settings"?: string | undefined;
};

/** @internal */
export const ConsoleV1GatesControllerGenListRequest$outboundSchema: z.ZodType<
    ConsoleV1GatesControllerGenListRequest$Outbound,
    z.ZodTypeDef,
    ConsoleV1GatesControllerGenListRequest
> = z
    .object({
        idType: z.any().optional(),
        type: Type$outboundSchema.optional(),
        typeReason: TypeReason$outboundSchema.optional(),
        creatorName: z.nullable(z.string()).optional(),
        creatorID: z.nullable(z.string()).optional(),
        tags: z.any().optional(),
        limit: z.any().optional(),
        page: z.any().optional(),
        xRespectReviewSettings: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            xRespectReviewSettings: "x-respect-review-settings",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1GatesControllerGenListRequest$ {
    /** @deprecated use `ConsoleV1GatesControllerGenListRequest$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1GatesControllerGenListRequest$inboundSchema;
    /** @deprecated use `ConsoleV1GatesControllerGenListRequest$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1GatesControllerGenListRequest$outboundSchema;
    /** @deprecated use `ConsoleV1GatesControllerGenListRequest$Outbound` instead. */
    export type Outbound = ConsoleV1GatesControllerGenListRequest$Outbound;
}

/** @internal */
export const ConsoleV1GatesControllerGenListResponseBody$inboundSchema: z.ZodType<
    ConsoleV1GatesControllerGenListResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string(),
    data: z.array(components.ExternalGateDto$inboundSchema),
    pagination: components.PaginationResponseMetadataDto$inboundSchema,
});

/** @internal */
export type ConsoleV1GatesControllerGenListResponseBody$Outbound = {
    message: string;
    data: Array<components.ExternalGateDto$Outbound>;
    pagination: components.PaginationResponseMetadataDto$Outbound;
};

/** @internal */
export const ConsoleV1GatesControllerGenListResponseBody$outboundSchema: z.ZodType<
    ConsoleV1GatesControllerGenListResponseBody$Outbound,
    z.ZodTypeDef,
    ConsoleV1GatesControllerGenListResponseBody
> = z.object({
    message: z.string(),
    data: z.array(components.ExternalGateDto$outboundSchema),
    pagination: components.PaginationResponseMetadataDto$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsoleV1GatesControllerGenListResponseBody$ {
    /** @deprecated use `ConsoleV1GatesControllerGenListResponseBody$inboundSchema` instead. */
    export const inboundSchema = ConsoleV1GatesControllerGenListResponseBody$inboundSchema;
    /** @deprecated use `ConsoleV1GatesControllerGenListResponseBody$outboundSchema` instead. */
    export const outboundSchema = ConsoleV1GatesControllerGenListResponseBody$outboundSchema;
    /** @deprecated use `ConsoleV1GatesControllerGenListResponseBody$Outbound` instead. */
    export type Outbound = ConsoleV1GatesControllerGenListResponseBody$Outbound;
}
