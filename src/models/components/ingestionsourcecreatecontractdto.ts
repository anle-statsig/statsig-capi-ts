/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const IngestionSourceCreateContractDto3Dataset = {
    Exposures: "Exposures",
    ExportExposures: "export_exposures",
} as const;
export type IngestionSourceCreateContractDto3Dataset = ClosedEnum<
    typeof IngestionSourceCreateContractDto3Dataset
>;

export type IngestionSourceCreateContractDto3ColumnMapping = {
    /**
     * Unique identifier for the experiment.
     */
    experiment: string;
    /**
     * Unique identifier for the experiment groups.
     */
    groupId: string;
    /**
     * The unique user identifier this exposure is for. This might not necessarily be a single column for userID - it could be spread across multiple columns for deviceID etc.
     */
    unitId?: string | undefined;
    /**
     * Unix timestamp in seconds of the event (ex. 1723146199)
     */
    timestamp: string;
    ids: { [k: string]: string };
    metadata?: { [k: string]: string } | undefined;
    metadataObject?: string | undefined;
    eventValue?: string | undefined;
};

export const IngestionSourceCreateContractDto3Type = {
    Redshift: "redshift",
    BigqueryV2: "bigquery-v2",
    SnowflakeV2: "snowflake-v2",
    Databricks: "databricks",
    AzureSynapse: "azure-synapse",
    S3: "s3",
    Athena: "athena",
    Adls: "adls",
} as const;
export type IngestionSourceCreateContractDto3Type = ClosedEnum<
    typeof IngestionSourceCreateContractDto3Type
>;

export type Three = {
    dataset: IngestionSourceCreateContractDto3Dataset;
    columnMapping?: IngestionSourceCreateContractDto3ColumnMapping | undefined;
    type: IngestionSourceCreateContractDto3Type;
    sourceName: string;
    query?: string | undefined;
    useDeltaSharing?: boolean | undefined;
    share?: string | undefined;
    schema?: string | undefined;
    table?: string | undefined;
    enabled?: boolean | undefined;
};

export const IngestionSourceCreateContractDto2Dataset = {
    Events: "Events",
} as const;
export type IngestionSourceCreateContractDto2Dataset = ClosedEnum<
    typeof IngestionSourceCreateContractDto2Dataset
>;

export type IngestionSourceCreateContractDtoColumnMapping = {
    /**
     * The unique user identifier this event is for. This might not necessarily be a single column for userID - it could be spread across multiple columns for deviceID etc.
     */
    unitId?: string | undefined;
    /**
     * Name of the event. String under 128 characters, using ‘_’ for spaces.
     */
    eventName: string;
    /**
     * Unix timestamp in seconds of the event (ex. 1723146199)
     */
    timestamp: string;
    ids: { [k: string]: string };
    metadata?: { [k: string]: string } | undefined;
    metadataObject?: string | undefined;
    eventValue?: string | undefined;
};

export const IngestionSourceCreateContractDto2Type = {
    Redshift: "redshift",
    BigqueryV2: "bigquery-v2",
    SnowflakeV2: "snowflake-v2",
    Databricks: "databricks",
    AzureSynapse: "azure-synapse",
    S3: "s3",
    Athena: "athena",
    Adls: "adls",
} as const;
export type IngestionSourceCreateContractDto2Type = ClosedEnum<
    typeof IngestionSourceCreateContractDto2Type
>;

export type IngestionSourceCreateContractDto2 = {
    dataset: IngestionSourceCreateContractDto2Dataset;
    columnMapping?: IngestionSourceCreateContractDtoColumnMapping | undefined;
    type: IngestionSourceCreateContractDto2Type;
    sourceName: string;
    query?: string | undefined;
    useDeltaSharing?: boolean | undefined;
    share?: string | undefined;
    schema?: string | undefined;
    table?: string | undefined;
    enabled?: boolean | undefined;
};

export const IngestionSourceCreateContractDtoDataset = {
    Metrics: "Metrics",
} as const;
export type IngestionSourceCreateContractDtoDataset = ClosedEnum<
    typeof IngestionSourceCreateContractDtoDataset
>;

export type ColumnMapping = {
    /**
     * The unique user identifier this metric is for. This might not necessarily be a user_id - it could be a custom_id of some kind. Make sure this is in the same format as your logged unit_ids.
     */
    unitId: string;
    /**
     * The id_type the unit_id represents. Must be valid id_type. Default Statsig types are user_id/stable_id, but you may have generated custom id_types. Make sure this matches (case sensitive) a customID in your project, or you won’t get experiment results.
     */
    idType: string;
    /**
     * Date of the daily metric, ISO formatted (ex. 2024-08-08). We’ll load custom metrics to whatever date you use here.
     */
    dateid: string;
    /**
     * String format. Not null. Length < 128 characters.
     */
    metricName: string;
    /**
     * Numeric value for the metric. This OR both of numerator and denominator need to be provided.
     */
    metricValue?: string | undefined;
    /**
     * Required for ratio metrics. If present along with a denominator in any record, the metric will be treated as ratio and only calculated for users with non-null denominators
     */
    numerator?: string | undefined;
    /**
     * Required for ratio metrics. If present along with a numerator in any record, the metric will be treated as ratio and only calculated for users with non-null numerators.
     */
    denominator?: string | undefined;
};

export const IngestionSourceCreateContractDtoType = {
    Redshift: "redshift",
    BigqueryV2: "bigquery-v2",
    SnowflakeV2: "snowflake-v2",
    Databricks: "databricks",
    AzureSynapse: "azure-synapse",
    S3: "s3",
    Athena: "athena",
    Adls: "adls",
} as const;
export type IngestionSourceCreateContractDtoType = ClosedEnum<
    typeof IngestionSourceCreateContractDtoType
>;

export type IngestionSourceCreateContractDto1 = {
    dataset: IngestionSourceCreateContractDtoDataset;
    columnMapping?: ColumnMapping | undefined;
    type: IngestionSourceCreateContractDtoType;
    sourceName: string;
    query?: string | undefined;
    useDeltaSharing?: boolean | undefined;
    share?: string | undefined;
    schema?: string | undefined;
    table?: string | undefined;
    enabled?: boolean | undefined;
};

export type IngestionSourceCreateContractDto =
    | IngestionSourceCreateContractDto1
    | IngestionSourceCreateContractDto2
    | Three;

/** @internal */
export const IngestionSourceCreateContractDto3Dataset$inboundSchema: z.ZodNativeEnum<
    typeof IngestionSourceCreateContractDto3Dataset
> = z.nativeEnum(IngestionSourceCreateContractDto3Dataset);

/** @internal */
export const IngestionSourceCreateContractDto3Dataset$outboundSchema: z.ZodNativeEnum<
    typeof IngestionSourceCreateContractDto3Dataset
> = IngestionSourceCreateContractDto3Dataset$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IngestionSourceCreateContractDto3Dataset$ {
    /** @deprecated use `IngestionSourceCreateContractDto3Dataset$inboundSchema` instead. */
    export const inboundSchema = IngestionSourceCreateContractDto3Dataset$inboundSchema;
    /** @deprecated use `IngestionSourceCreateContractDto3Dataset$outboundSchema` instead. */
    export const outboundSchema = IngestionSourceCreateContractDto3Dataset$outboundSchema;
}

/** @internal */
export const IngestionSourceCreateContractDto3ColumnMapping$inboundSchema: z.ZodType<
    IngestionSourceCreateContractDto3ColumnMapping,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        experiment: z.string(),
        group_id: z.string(),
        unit_id: z.string().optional(),
        timestamp: z.string(),
        ids: z.record(z.string()),
        metadata: z.record(z.string()).optional(),
        metadata_object: z.string().default("null"),
        event_value: z.string().default(""),
    })
    .transform((v) => {
        return remap$(v, {
            group_id: "groupId",
            unit_id: "unitId",
            metadata_object: "metadataObject",
            event_value: "eventValue",
        });
    });

/** @internal */
export type IngestionSourceCreateContractDto3ColumnMapping$Outbound = {
    experiment: string;
    group_id: string;
    unit_id?: string | undefined;
    timestamp: string;
    ids: { [k: string]: string };
    metadata?: { [k: string]: string } | undefined;
    metadata_object: string;
    event_value: string;
};

/** @internal */
export const IngestionSourceCreateContractDto3ColumnMapping$outboundSchema: z.ZodType<
    IngestionSourceCreateContractDto3ColumnMapping$Outbound,
    z.ZodTypeDef,
    IngestionSourceCreateContractDto3ColumnMapping
> = z
    .object({
        experiment: z.string(),
        groupId: z.string(),
        unitId: z.string().optional(),
        timestamp: z.string(),
        ids: z.record(z.string()),
        metadata: z.record(z.string()).optional(),
        metadataObject: z.string().default("null"),
        eventValue: z.string().default(""),
    })
    .transform((v) => {
        return remap$(v, {
            groupId: "group_id",
            unitId: "unit_id",
            metadataObject: "metadata_object",
            eventValue: "event_value",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IngestionSourceCreateContractDto3ColumnMapping$ {
    /** @deprecated use `IngestionSourceCreateContractDto3ColumnMapping$inboundSchema` instead. */
    export const inboundSchema = IngestionSourceCreateContractDto3ColumnMapping$inboundSchema;
    /** @deprecated use `IngestionSourceCreateContractDto3ColumnMapping$outboundSchema` instead. */
    export const outboundSchema = IngestionSourceCreateContractDto3ColumnMapping$outboundSchema;
    /** @deprecated use `IngestionSourceCreateContractDto3ColumnMapping$Outbound` instead. */
    export type Outbound = IngestionSourceCreateContractDto3ColumnMapping$Outbound;
}

/** @internal */
export const IngestionSourceCreateContractDto3Type$inboundSchema: z.ZodNativeEnum<
    typeof IngestionSourceCreateContractDto3Type
> = z.nativeEnum(IngestionSourceCreateContractDto3Type);

/** @internal */
export const IngestionSourceCreateContractDto3Type$outboundSchema: z.ZodNativeEnum<
    typeof IngestionSourceCreateContractDto3Type
> = IngestionSourceCreateContractDto3Type$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IngestionSourceCreateContractDto3Type$ {
    /** @deprecated use `IngestionSourceCreateContractDto3Type$inboundSchema` instead. */
    export const inboundSchema = IngestionSourceCreateContractDto3Type$inboundSchema;
    /** @deprecated use `IngestionSourceCreateContractDto3Type$outboundSchema` instead. */
    export const outboundSchema = IngestionSourceCreateContractDto3Type$outboundSchema;
}

/** @internal */
export const Three$inboundSchema: z.ZodType<Three, z.ZodTypeDef, unknown> = z
    .object({
        dataset: IngestionSourceCreateContractDto3Dataset$inboundSchema,
        column_mapping: z
            .lazy(() => IngestionSourceCreateContractDto3ColumnMapping$inboundSchema)
            .optional(),
        type: IngestionSourceCreateContractDto3Type$inboundSchema,
        source_name: z.string(),
        query: z.string().optional(),
        use_delta_sharing: z.boolean().optional(),
        share: z.string().optional(),
        schema: z.string().optional(),
        table: z.string().optional(),
        enabled: z.boolean().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            column_mapping: "columnMapping",
            source_name: "sourceName",
            use_delta_sharing: "useDeltaSharing",
        });
    });

/** @internal */
export type Three$Outbound = {
    dataset: string;
    column_mapping?: IngestionSourceCreateContractDto3ColumnMapping$Outbound | undefined;
    type: string;
    source_name: string;
    query?: string | undefined;
    use_delta_sharing?: boolean | undefined;
    share?: string | undefined;
    schema?: string | undefined;
    table?: string | undefined;
    enabled?: boolean | undefined;
};

/** @internal */
export const Three$outboundSchema: z.ZodType<Three$Outbound, z.ZodTypeDef, Three> = z
    .object({
        dataset: IngestionSourceCreateContractDto3Dataset$outboundSchema,
        columnMapping: z
            .lazy(() => IngestionSourceCreateContractDto3ColumnMapping$outboundSchema)
            .optional(),
        type: IngestionSourceCreateContractDto3Type$outboundSchema,
        sourceName: z.string(),
        query: z.string().optional(),
        useDeltaSharing: z.boolean().optional(),
        share: z.string().optional(),
        schema: z.string().optional(),
        table: z.string().optional(),
        enabled: z.boolean().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            columnMapping: "column_mapping",
            sourceName: "source_name",
            useDeltaSharing: "use_delta_sharing",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Three$ {
    /** @deprecated use `Three$inboundSchema` instead. */
    export const inboundSchema = Three$inboundSchema;
    /** @deprecated use `Three$outboundSchema` instead. */
    export const outboundSchema = Three$outboundSchema;
    /** @deprecated use `Three$Outbound` instead. */
    export type Outbound = Three$Outbound;
}

/** @internal */
export const IngestionSourceCreateContractDto2Dataset$inboundSchema: z.ZodNativeEnum<
    typeof IngestionSourceCreateContractDto2Dataset
> = z.nativeEnum(IngestionSourceCreateContractDto2Dataset);

/** @internal */
export const IngestionSourceCreateContractDto2Dataset$outboundSchema: z.ZodNativeEnum<
    typeof IngestionSourceCreateContractDto2Dataset
> = IngestionSourceCreateContractDto2Dataset$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IngestionSourceCreateContractDto2Dataset$ {
    /** @deprecated use `IngestionSourceCreateContractDto2Dataset$inboundSchema` instead. */
    export const inboundSchema = IngestionSourceCreateContractDto2Dataset$inboundSchema;
    /** @deprecated use `IngestionSourceCreateContractDto2Dataset$outboundSchema` instead. */
    export const outboundSchema = IngestionSourceCreateContractDto2Dataset$outboundSchema;
}

/** @internal */
export const IngestionSourceCreateContractDtoColumnMapping$inboundSchema: z.ZodType<
    IngestionSourceCreateContractDtoColumnMapping,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        unit_id: z.string().optional(),
        event_name: z.string(),
        timestamp: z.string(),
        ids: z.record(z.string()),
        metadata: z.record(z.string()).optional(),
        metadata_object: z.string().default("null"),
        event_value: z.string().default(""),
    })
    .transform((v) => {
        return remap$(v, {
            unit_id: "unitId",
            event_name: "eventName",
            metadata_object: "metadataObject",
            event_value: "eventValue",
        });
    });

/** @internal */
export type IngestionSourceCreateContractDtoColumnMapping$Outbound = {
    unit_id?: string | undefined;
    event_name: string;
    timestamp: string;
    ids: { [k: string]: string };
    metadata?: { [k: string]: string } | undefined;
    metadata_object: string;
    event_value: string;
};

/** @internal */
export const IngestionSourceCreateContractDtoColumnMapping$outboundSchema: z.ZodType<
    IngestionSourceCreateContractDtoColumnMapping$Outbound,
    z.ZodTypeDef,
    IngestionSourceCreateContractDtoColumnMapping
> = z
    .object({
        unitId: z.string().optional(),
        eventName: z.string(),
        timestamp: z.string(),
        ids: z.record(z.string()),
        metadata: z.record(z.string()).optional(),
        metadataObject: z.string().default("null"),
        eventValue: z.string().default(""),
    })
    .transform((v) => {
        return remap$(v, {
            unitId: "unit_id",
            eventName: "event_name",
            metadataObject: "metadata_object",
            eventValue: "event_value",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IngestionSourceCreateContractDtoColumnMapping$ {
    /** @deprecated use `IngestionSourceCreateContractDtoColumnMapping$inboundSchema` instead. */
    export const inboundSchema = IngestionSourceCreateContractDtoColumnMapping$inboundSchema;
    /** @deprecated use `IngestionSourceCreateContractDtoColumnMapping$outboundSchema` instead. */
    export const outboundSchema = IngestionSourceCreateContractDtoColumnMapping$outboundSchema;
    /** @deprecated use `IngestionSourceCreateContractDtoColumnMapping$Outbound` instead. */
    export type Outbound = IngestionSourceCreateContractDtoColumnMapping$Outbound;
}

/** @internal */
export const IngestionSourceCreateContractDto2Type$inboundSchema: z.ZodNativeEnum<
    typeof IngestionSourceCreateContractDto2Type
> = z.nativeEnum(IngestionSourceCreateContractDto2Type);

/** @internal */
export const IngestionSourceCreateContractDto2Type$outboundSchema: z.ZodNativeEnum<
    typeof IngestionSourceCreateContractDto2Type
> = IngestionSourceCreateContractDto2Type$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IngestionSourceCreateContractDto2Type$ {
    /** @deprecated use `IngestionSourceCreateContractDto2Type$inboundSchema` instead. */
    export const inboundSchema = IngestionSourceCreateContractDto2Type$inboundSchema;
    /** @deprecated use `IngestionSourceCreateContractDto2Type$outboundSchema` instead. */
    export const outboundSchema = IngestionSourceCreateContractDto2Type$outboundSchema;
}

/** @internal */
export const IngestionSourceCreateContractDto2$inboundSchema: z.ZodType<
    IngestionSourceCreateContractDto2,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        dataset: IngestionSourceCreateContractDto2Dataset$inboundSchema,
        column_mapping: z
            .lazy(() => IngestionSourceCreateContractDtoColumnMapping$inboundSchema)
            .optional(),
        type: IngestionSourceCreateContractDto2Type$inboundSchema,
        source_name: z.string(),
        query: z.string().optional(),
        use_delta_sharing: z.boolean().optional(),
        share: z.string().optional(),
        schema: z.string().optional(),
        table: z.string().optional(),
        enabled: z.boolean().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            column_mapping: "columnMapping",
            source_name: "sourceName",
            use_delta_sharing: "useDeltaSharing",
        });
    });

/** @internal */
export type IngestionSourceCreateContractDto2$Outbound = {
    dataset: string;
    column_mapping?: IngestionSourceCreateContractDtoColumnMapping$Outbound | undefined;
    type: string;
    source_name: string;
    query?: string | undefined;
    use_delta_sharing?: boolean | undefined;
    share?: string | undefined;
    schema?: string | undefined;
    table?: string | undefined;
    enabled?: boolean | undefined;
};

/** @internal */
export const IngestionSourceCreateContractDto2$outboundSchema: z.ZodType<
    IngestionSourceCreateContractDto2$Outbound,
    z.ZodTypeDef,
    IngestionSourceCreateContractDto2
> = z
    .object({
        dataset: IngestionSourceCreateContractDto2Dataset$outboundSchema,
        columnMapping: z
            .lazy(() => IngestionSourceCreateContractDtoColumnMapping$outboundSchema)
            .optional(),
        type: IngestionSourceCreateContractDto2Type$outboundSchema,
        sourceName: z.string(),
        query: z.string().optional(),
        useDeltaSharing: z.boolean().optional(),
        share: z.string().optional(),
        schema: z.string().optional(),
        table: z.string().optional(),
        enabled: z.boolean().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            columnMapping: "column_mapping",
            sourceName: "source_name",
            useDeltaSharing: "use_delta_sharing",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IngestionSourceCreateContractDto2$ {
    /** @deprecated use `IngestionSourceCreateContractDto2$inboundSchema` instead. */
    export const inboundSchema = IngestionSourceCreateContractDto2$inboundSchema;
    /** @deprecated use `IngestionSourceCreateContractDto2$outboundSchema` instead. */
    export const outboundSchema = IngestionSourceCreateContractDto2$outboundSchema;
    /** @deprecated use `IngestionSourceCreateContractDto2$Outbound` instead. */
    export type Outbound = IngestionSourceCreateContractDto2$Outbound;
}

/** @internal */
export const IngestionSourceCreateContractDtoDataset$inboundSchema: z.ZodNativeEnum<
    typeof IngestionSourceCreateContractDtoDataset
> = z.nativeEnum(IngestionSourceCreateContractDtoDataset);

/** @internal */
export const IngestionSourceCreateContractDtoDataset$outboundSchema: z.ZodNativeEnum<
    typeof IngestionSourceCreateContractDtoDataset
> = IngestionSourceCreateContractDtoDataset$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IngestionSourceCreateContractDtoDataset$ {
    /** @deprecated use `IngestionSourceCreateContractDtoDataset$inboundSchema` instead. */
    export const inboundSchema = IngestionSourceCreateContractDtoDataset$inboundSchema;
    /** @deprecated use `IngestionSourceCreateContractDtoDataset$outboundSchema` instead. */
    export const outboundSchema = IngestionSourceCreateContractDtoDataset$outboundSchema;
}

/** @internal */
export const ColumnMapping$inboundSchema: z.ZodType<ColumnMapping, z.ZodTypeDef, unknown> = z
    .object({
        unit_id: z.string(),
        id_type: z.string(),
        dateid: z.string(),
        metric_name: z.string(),
        metric_value: z.string().default("null"),
        numerator: z.string().default("null"),
        denominator: z.string().default("null"),
    })
    .transform((v) => {
        return remap$(v, {
            unit_id: "unitId",
            id_type: "idType",
            metric_name: "metricName",
            metric_value: "metricValue",
        });
    });

/** @internal */
export type ColumnMapping$Outbound = {
    unit_id: string;
    id_type: string;
    dateid: string;
    metric_name: string;
    metric_value: string;
    numerator: string;
    denominator: string;
};

/** @internal */
export const ColumnMapping$outboundSchema: z.ZodType<
    ColumnMapping$Outbound,
    z.ZodTypeDef,
    ColumnMapping
> = z
    .object({
        unitId: z.string(),
        idType: z.string(),
        dateid: z.string(),
        metricName: z.string(),
        metricValue: z.string().default("null"),
        numerator: z.string().default("null"),
        denominator: z.string().default("null"),
    })
    .transform((v) => {
        return remap$(v, {
            unitId: "unit_id",
            idType: "id_type",
            metricName: "metric_name",
            metricValue: "metric_value",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ColumnMapping$ {
    /** @deprecated use `ColumnMapping$inboundSchema` instead. */
    export const inboundSchema = ColumnMapping$inboundSchema;
    /** @deprecated use `ColumnMapping$outboundSchema` instead. */
    export const outboundSchema = ColumnMapping$outboundSchema;
    /** @deprecated use `ColumnMapping$Outbound` instead. */
    export type Outbound = ColumnMapping$Outbound;
}

/** @internal */
export const IngestionSourceCreateContractDtoType$inboundSchema: z.ZodNativeEnum<
    typeof IngestionSourceCreateContractDtoType
> = z.nativeEnum(IngestionSourceCreateContractDtoType);

/** @internal */
export const IngestionSourceCreateContractDtoType$outboundSchema: z.ZodNativeEnum<
    typeof IngestionSourceCreateContractDtoType
> = IngestionSourceCreateContractDtoType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IngestionSourceCreateContractDtoType$ {
    /** @deprecated use `IngestionSourceCreateContractDtoType$inboundSchema` instead. */
    export const inboundSchema = IngestionSourceCreateContractDtoType$inboundSchema;
    /** @deprecated use `IngestionSourceCreateContractDtoType$outboundSchema` instead. */
    export const outboundSchema = IngestionSourceCreateContractDtoType$outboundSchema;
}

/** @internal */
export const IngestionSourceCreateContractDto1$inboundSchema: z.ZodType<
    IngestionSourceCreateContractDto1,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        dataset: IngestionSourceCreateContractDtoDataset$inboundSchema,
        column_mapping: z.lazy(() => ColumnMapping$inboundSchema).optional(),
        type: IngestionSourceCreateContractDtoType$inboundSchema,
        source_name: z.string(),
        query: z.string().optional(),
        use_delta_sharing: z.boolean().optional(),
        share: z.string().optional(),
        schema: z.string().optional(),
        table: z.string().optional(),
        enabled: z.boolean().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            column_mapping: "columnMapping",
            source_name: "sourceName",
            use_delta_sharing: "useDeltaSharing",
        });
    });

/** @internal */
export type IngestionSourceCreateContractDto1$Outbound = {
    dataset: string;
    column_mapping?: ColumnMapping$Outbound | undefined;
    type: string;
    source_name: string;
    query?: string | undefined;
    use_delta_sharing?: boolean | undefined;
    share?: string | undefined;
    schema?: string | undefined;
    table?: string | undefined;
    enabled?: boolean | undefined;
};

/** @internal */
export const IngestionSourceCreateContractDto1$outboundSchema: z.ZodType<
    IngestionSourceCreateContractDto1$Outbound,
    z.ZodTypeDef,
    IngestionSourceCreateContractDto1
> = z
    .object({
        dataset: IngestionSourceCreateContractDtoDataset$outboundSchema,
        columnMapping: z.lazy(() => ColumnMapping$outboundSchema).optional(),
        type: IngestionSourceCreateContractDtoType$outboundSchema,
        sourceName: z.string(),
        query: z.string().optional(),
        useDeltaSharing: z.boolean().optional(),
        share: z.string().optional(),
        schema: z.string().optional(),
        table: z.string().optional(),
        enabled: z.boolean().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            columnMapping: "column_mapping",
            sourceName: "source_name",
            useDeltaSharing: "use_delta_sharing",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IngestionSourceCreateContractDto1$ {
    /** @deprecated use `IngestionSourceCreateContractDto1$inboundSchema` instead. */
    export const inboundSchema = IngestionSourceCreateContractDto1$inboundSchema;
    /** @deprecated use `IngestionSourceCreateContractDto1$outboundSchema` instead. */
    export const outboundSchema = IngestionSourceCreateContractDto1$outboundSchema;
    /** @deprecated use `IngestionSourceCreateContractDto1$Outbound` instead. */
    export type Outbound = IngestionSourceCreateContractDto1$Outbound;
}

/** @internal */
export const IngestionSourceCreateContractDto$inboundSchema: z.ZodType<
    IngestionSourceCreateContractDto,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.lazy(() => IngestionSourceCreateContractDto1$inboundSchema),
    z.lazy(() => IngestionSourceCreateContractDto2$inboundSchema),
    z.lazy(() => Three$inboundSchema),
]);

/** @internal */
export type IngestionSourceCreateContractDto$Outbound =
    | IngestionSourceCreateContractDto1$Outbound
    | IngestionSourceCreateContractDto2$Outbound
    | Three$Outbound;

/** @internal */
export const IngestionSourceCreateContractDto$outboundSchema: z.ZodType<
    IngestionSourceCreateContractDto$Outbound,
    z.ZodTypeDef,
    IngestionSourceCreateContractDto
> = z.union([
    z.lazy(() => IngestionSourceCreateContractDto1$outboundSchema),
    z.lazy(() => IngestionSourceCreateContractDto2$outboundSchema),
    z.lazy(() => Three$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IngestionSourceCreateContractDto$ {
    /** @deprecated use `IngestionSourceCreateContractDto$inboundSchema` instead. */
    export const inboundSchema = IngestionSourceCreateContractDto$inboundSchema;
    /** @deprecated use `IngestionSourceCreateContractDto$outboundSchema` instead. */
    export const outboundSchema = IngestionSourceCreateContractDto$outboundSchema;
    /** @deprecated use `IngestionSourceCreateContractDto$Outbound` instead. */
    export type Outbound = IngestionSourceCreateContractDto$Outbound;
}