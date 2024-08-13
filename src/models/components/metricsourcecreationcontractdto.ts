/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export type MetricSourceCreationContractDtoIdTypeMapping = {
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
export const SourceType = {
    Table: "table",
    Query: "query",
} as const;
/**
 * The type of source, indicating whether it is a database table or a custom query.
 */
export type SourceType = ClosedEnum<typeof SourceType>;

export type CustomFieldMapping = {
    /**
     * The identifier for the custom field mapping.
     */
    key: string;
    /**
     * The formula or expression used to compute the custom field value.
     */
    formula: string;
};

export type MetricSourceCreationContractDto = {
    /**
     * The name of the metric source, serving as its primary identifier.
     */
    name: string;
    /**
     * An optional description for the metric source, providing context and details about its purpose and usage.
     */
    description?: string | undefined;
    /**
     * Optional array of tags to categorize the metric source, facilitating easier organization and retrieval.
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
    idTypeMapping: Array<MetricSourceCreationContractDtoIdTypeMapping>;
    /**
     * The type of source, indicating whether it is a database table or a custom query.
     */
    sourceType?: SourceType | undefined;
    /**
     * The name of the database table if the source type is "table".
     */
    tableName?: string | undefined;
    /**
     * Optional array defining mappings for custom fields using specific formulas.
     */
    customFieldMapping?: Array<CustomFieldMapping> | undefined;
};

/** @internal */
export const MetricSourceCreationContractDtoIdTypeMapping$inboundSchema: z.ZodType<
    MetricSourceCreationContractDtoIdTypeMapping,
    z.ZodTypeDef,
    unknown
> = z.object({
    statsigUnitID: z.string(),
    column: z.string(),
});

/** @internal */
export type MetricSourceCreationContractDtoIdTypeMapping$Outbound = {
    statsigUnitID: string;
    column: string;
};

/** @internal */
export const MetricSourceCreationContractDtoIdTypeMapping$outboundSchema: z.ZodType<
    MetricSourceCreationContractDtoIdTypeMapping$Outbound,
    z.ZodTypeDef,
    MetricSourceCreationContractDtoIdTypeMapping
> = z.object({
    statsigUnitID: z.string(),
    column: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MetricSourceCreationContractDtoIdTypeMapping$ {
    /** @deprecated use `MetricSourceCreationContractDtoIdTypeMapping$inboundSchema` instead. */
    export const inboundSchema = MetricSourceCreationContractDtoIdTypeMapping$inboundSchema;
    /** @deprecated use `MetricSourceCreationContractDtoIdTypeMapping$outboundSchema` instead. */
    export const outboundSchema = MetricSourceCreationContractDtoIdTypeMapping$outboundSchema;
    /** @deprecated use `MetricSourceCreationContractDtoIdTypeMapping$Outbound` instead. */
    export type Outbound = MetricSourceCreationContractDtoIdTypeMapping$Outbound;
}

/** @internal */
export const SourceType$inboundSchema: z.ZodNativeEnum<typeof SourceType> =
    z.nativeEnum(SourceType);

/** @internal */
export const SourceType$outboundSchema: z.ZodNativeEnum<typeof SourceType> =
    SourceType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SourceType$ {
    /** @deprecated use `SourceType$inboundSchema` instead. */
    export const inboundSchema = SourceType$inboundSchema;
    /** @deprecated use `SourceType$outboundSchema` instead. */
    export const outboundSchema = SourceType$outboundSchema;
}

/** @internal */
export const CustomFieldMapping$inboundSchema: z.ZodType<
    CustomFieldMapping,
    z.ZodTypeDef,
    unknown
> = z.object({
    key: z.string(),
    formula: z.string(),
});

/** @internal */
export type CustomFieldMapping$Outbound = {
    key: string;
    formula: string;
};

/** @internal */
export const CustomFieldMapping$outboundSchema: z.ZodType<
    CustomFieldMapping$Outbound,
    z.ZodTypeDef,
    CustomFieldMapping
> = z.object({
    key: z.string(),
    formula: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomFieldMapping$ {
    /** @deprecated use `CustomFieldMapping$inboundSchema` instead. */
    export const inboundSchema = CustomFieldMapping$inboundSchema;
    /** @deprecated use `CustomFieldMapping$outboundSchema` instead. */
    export const outboundSchema = CustomFieldMapping$outboundSchema;
    /** @deprecated use `CustomFieldMapping$Outbound` instead. */
    export type Outbound = CustomFieldMapping$Outbound;
}

/** @internal */
export const MetricSourceCreationContractDto$inboundSchema: z.ZodType<
    MetricSourceCreationContractDto,
    z.ZodTypeDef,
    unknown
> = z.object({
    name: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    sql: z.string(),
    timestampColumn: z.string(),
    timestampAsDay: z.boolean().optional(),
    idTypeMapping: z.array(
        z.lazy(() => MetricSourceCreationContractDtoIdTypeMapping$inboundSchema)
    ),
    sourceType: SourceType$inboundSchema.optional(),
    tableName: z.string().optional(),
    customFieldMapping: z.array(z.lazy(() => CustomFieldMapping$inboundSchema)).optional(),
});

/** @internal */
export type MetricSourceCreationContractDto$Outbound = {
    name: string;
    description?: string | undefined;
    tags?: Array<string> | undefined;
    sql: string;
    timestampColumn: string;
    timestampAsDay?: boolean | undefined;
    idTypeMapping: Array<MetricSourceCreationContractDtoIdTypeMapping$Outbound>;
    sourceType?: string | undefined;
    tableName?: string | undefined;
    customFieldMapping?: Array<CustomFieldMapping$Outbound> | undefined;
};

/** @internal */
export const MetricSourceCreationContractDto$outboundSchema: z.ZodType<
    MetricSourceCreationContractDto$Outbound,
    z.ZodTypeDef,
    MetricSourceCreationContractDto
> = z.object({
    name: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    sql: z.string(),
    timestampColumn: z.string(),
    timestampAsDay: z.boolean().optional(),
    idTypeMapping: z.array(
        z.lazy(() => MetricSourceCreationContractDtoIdTypeMapping$outboundSchema)
    ),
    sourceType: SourceType$outboundSchema.optional(),
    tableName: z.string().optional(),
    customFieldMapping: z.array(z.lazy(() => CustomFieldMapping$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MetricSourceCreationContractDto$ {
    /** @deprecated use `MetricSourceCreationContractDto$inboundSchema` instead. */
    export const inboundSchema = MetricSourceCreationContractDto$inboundSchema;
    /** @deprecated use `MetricSourceCreationContractDto$outboundSchema` instead. */
    export const outboundSchema = MetricSourceCreationContractDto$outboundSchema;
    /** @deprecated use `MetricSourceCreationContractDto$Outbound` instead. */
    export type Outbound = MetricSourceCreationContractDto$Outbound;
}