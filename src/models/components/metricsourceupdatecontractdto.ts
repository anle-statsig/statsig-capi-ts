/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export type MetricSourceUpdateContractDtoIdTypeMapping = {
    /**
     * The identifier mapping for Statsig units.
     */
    statsigUnitID: string;
    /**
     * The corresponding column name in the source that relates to the Statsig unit ID.
     */
    column: string;
};

/**
 * The type of source, indicating whether it is a database table or a custom query.
 */
export const MetricSourceUpdateContractDtoSourceType = {
    Table: "table",
    Query: "query",
} as const;
/**
 * The type of source, indicating whether it is a database table or a custom query.
 */
export type MetricSourceUpdateContractDtoSourceType = ClosedEnum<
    typeof MetricSourceUpdateContractDtoSourceType
>;

export type MetricSourceUpdateContractDtoCustomFieldMapping = {
    /**
     * The identifier for the custom field mapping.
     */
    key: string;
    /**
     * The formula or expression used to compute the custom field value.
     */
    formula: string;
};

export type MetricSourceUpdateContractDto = {
    /**
     * The name of the metric source cannot be changed in this update, ensuring the identity remains consistent.
     */
    name?: string | undefined;
    /**
     * An optional updated description for the metric source, providing additional context or changes.
     */
    description?: string | undefined;
    /**
     * Optional array of tags for categorizing the metric source, allowing for updates to its categorization.
     */
    tags?: Array<string> | undefined;
    /**
     * The SQL query or statement used to extract data from the metric source.
     */
    sql: string;
    /**
     * The name of the column containing timestamp data for the metric source.
     */
    timestampColumn: string;
    /**
     * Indicates whether the timestamp should be treated as a day-level granularity.
     */
    timestampAsDay?: boolean | undefined;
    /**
     * Array defining the mapping between Statsig unit IDs and their respective source columns.
     */
    idTypeMapping: Array<MetricSourceUpdateContractDtoIdTypeMapping>;
    /**
     * The type of source, indicating whether it is a database table or a custom query.
     */
    sourceType?: MetricSourceUpdateContractDtoSourceType | undefined;
    /**
     * The name of the database table if the source type is "table".
     */
    tableName?: string | undefined;
    /**
     * Optional array defining mappings for custom fields using specific formulas.
     */
    customFieldMapping?: Array<MetricSourceUpdateContractDtoCustomFieldMapping> | undefined;
};

/** @internal */
export const MetricSourceUpdateContractDtoIdTypeMapping$inboundSchema: z.ZodType<
    MetricSourceUpdateContractDtoIdTypeMapping,
    z.ZodTypeDef,
    unknown
> = z.object({
    statsigUnitID: z.string(),
    column: z.string(),
});

/** @internal */
export type MetricSourceUpdateContractDtoIdTypeMapping$Outbound = {
    statsigUnitID: string;
    column: string;
};

/** @internal */
export const MetricSourceUpdateContractDtoIdTypeMapping$outboundSchema: z.ZodType<
    MetricSourceUpdateContractDtoIdTypeMapping$Outbound,
    z.ZodTypeDef,
    MetricSourceUpdateContractDtoIdTypeMapping
> = z.object({
    statsigUnitID: z.string(),
    column: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MetricSourceUpdateContractDtoIdTypeMapping$ {
    /** @deprecated use `MetricSourceUpdateContractDtoIdTypeMapping$inboundSchema` instead. */
    export const inboundSchema = MetricSourceUpdateContractDtoIdTypeMapping$inboundSchema;
    /** @deprecated use `MetricSourceUpdateContractDtoIdTypeMapping$outboundSchema` instead. */
    export const outboundSchema = MetricSourceUpdateContractDtoIdTypeMapping$outboundSchema;
    /** @deprecated use `MetricSourceUpdateContractDtoIdTypeMapping$Outbound` instead. */
    export type Outbound = MetricSourceUpdateContractDtoIdTypeMapping$Outbound;
}

/** @internal */
export const MetricSourceUpdateContractDtoSourceType$inboundSchema: z.ZodNativeEnum<
    typeof MetricSourceUpdateContractDtoSourceType
> = z.nativeEnum(MetricSourceUpdateContractDtoSourceType);

/** @internal */
export const MetricSourceUpdateContractDtoSourceType$outboundSchema: z.ZodNativeEnum<
    typeof MetricSourceUpdateContractDtoSourceType
> = MetricSourceUpdateContractDtoSourceType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MetricSourceUpdateContractDtoSourceType$ {
    /** @deprecated use `MetricSourceUpdateContractDtoSourceType$inboundSchema` instead. */
    export const inboundSchema = MetricSourceUpdateContractDtoSourceType$inboundSchema;
    /** @deprecated use `MetricSourceUpdateContractDtoSourceType$outboundSchema` instead. */
    export const outboundSchema = MetricSourceUpdateContractDtoSourceType$outboundSchema;
}

/** @internal */
export const MetricSourceUpdateContractDtoCustomFieldMapping$inboundSchema: z.ZodType<
    MetricSourceUpdateContractDtoCustomFieldMapping,
    z.ZodTypeDef,
    unknown
> = z.object({
    key: z.string(),
    formula: z.string(),
});

/** @internal */
export type MetricSourceUpdateContractDtoCustomFieldMapping$Outbound = {
    key: string;
    formula: string;
};

/** @internal */
export const MetricSourceUpdateContractDtoCustomFieldMapping$outboundSchema: z.ZodType<
    MetricSourceUpdateContractDtoCustomFieldMapping$Outbound,
    z.ZodTypeDef,
    MetricSourceUpdateContractDtoCustomFieldMapping
> = z.object({
    key: z.string(),
    formula: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MetricSourceUpdateContractDtoCustomFieldMapping$ {
    /** @deprecated use `MetricSourceUpdateContractDtoCustomFieldMapping$inboundSchema` instead. */
    export const inboundSchema = MetricSourceUpdateContractDtoCustomFieldMapping$inboundSchema;
    /** @deprecated use `MetricSourceUpdateContractDtoCustomFieldMapping$outboundSchema` instead. */
    export const outboundSchema = MetricSourceUpdateContractDtoCustomFieldMapping$outboundSchema;
    /** @deprecated use `MetricSourceUpdateContractDtoCustomFieldMapping$Outbound` instead. */
    export type Outbound = MetricSourceUpdateContractDtoCustomFieldMapping$Outbound;
}

/** @internal */
export const MetricSourceUpdateContractDto$inboundSchema: z.ZodType<
    MetricSourceUpdateContractDto,
    z.ZodTypeDef,
    unknown
> = z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    sql: z.string(),
    timestampColumn: z.string(),
    timestampAsDay: z.boolean().optional(),
    idTypeMapping: z.array(z.lazy(() => MetricSourceUpdateContractDtoIdTypeMapping$inboundSchema)),
    sourceType: MetricSourceUpdateContractDtoSourceType$inboundSchema.optional(),
    tableName: z.string().optional(),
    customFieldMapping: z
        .array(z.lazy(() => MetricSourceUpdateContractDtoCustomFieldMapping$inboundSchema))
        .optional(),
});

/** @internal */
export type MetricSourceUpdateContractDto$Outbound = {
    name?: string | undefined;
    description?: string | undefined;
    tags?: Array<string> | undefined;
    sql: string;
    timestampColumn: string;
    timestampAsDay?: boolean | undefined;
    idTypeMapping: Array<MetricSourceUpdateContractDtoIdTypeMapping$Outbound>;
    sourceType?: string | undefined;
    tableName?: string | undefined;
    customFieldMapping?:
        | Array<MetricSourceUpdateContractDtoCustomFieldMapping$Outbound>
        | undefined;
};

/** @internal */
export const MetricSourceUpdateContractDto$outboundSchema: z.ZodType<
    MetricSourceUpdateContractDto$Outbound,
    z.ZodTypeDef,
    MetricSourceUpdateContractDto
> = z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    sql: z.string(),
    timestampColumn: z.string(),
    timestampAsDay: z.boolean().optional(),
    idTypeMapping: z.array(z.lazy(() => MetricSourceUpdateContractDtoIdTypeMapping$outboundSchema)),
    sourceType: MetricSourceUpdateContractDtoSourceType$outboundSchema.optional(),
    tableName: z.string().optional(),
    customFieldMapping: z
        .array(z.lazy(() => MetricSourceUpdateContractDtoCustomFieldMapping$outboundSchema))
        .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MetricSourceUpdateContractDto$ {
    /** @deprecated use `MetricSourceUpdateContractDto$inboundSchema` instead. */
    export const inboundSchema = MetricSourceUpdateContractDto$inboundSchema;
    /** @deprecated use `MetricSourceUpdateContractDto$outboundSchema` instead. */
    export const outboundSchema = MetricSourceUpdateContractDto$outboundSchema;
    /** @deprecated use `MetricSourceUpdateContractDto$Outbound` instead. */
    export type Outbound = MetricSourceUpdateContractDto$Outbound;
}
