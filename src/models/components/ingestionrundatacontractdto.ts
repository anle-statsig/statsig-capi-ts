/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type RunHistory = {
    statusTimestamp: Date;
    status: string;
};

export type Statuses = {
    statusTimestamp: Date;
    status: string;
};

export type StatusByDate = {
    dateStamp: string;
    statuses: Array<Statuses>;
};

export type GranularHistory = {
    source: string;
    latestSourceStatus: string;
    statusByDate: Array<StatusByDate>;
};

export type IngestionRunDataContractDto = {
    runID: string;
    latestStatus: string;
    lastUpdatedAt: Date;
    createdAt: Date;
    trigger: string;
    sources: Array<string>;
    dateStamps: Array<string>;
    runHistory: Array<RunHistory>;
    granularHistory: Array<GranularHistory>;
};

/** @internal */
export const RunHistory$inboundSchema: z.ZodType<RunHistory, z.ZodTypeDef, unknown> = z.object({
    statusTimestamp: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v)),
    status: z.string(),
});

/** @internal */
export type RunHistory$Outbound = {
    statusTimestamp: string;
    status: string;
};

/** @internal */
export const RunHistory$outboundSchema: z.ZodType<RunHistory$Outbound, z.ZodTypeDef, RunHistory> =
    z.object({
        statusTimestamp: z.date().transform((v) => v.toISOString()),
        status: z.string(),
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RunHistory$ {
    /** @deprecated use `RunHistory$inboundSchema` instead. */
    export const inboundSchema = RunHistory$inboundSchema;
    /** @deprecated use `RunHistory$outboundSchema` instead. */
    export const outboundSchema = RunHistory$outboundSchema;
    /** @deprecated use `RunHistory$Outbound` instead. */
    export type Outbound = RunHistory$Outbound;
}

/** @internal */
export const Statuses$inboundSchema: z.ZodType<Statuses, z.ZodTypeDef, unknown> = z.object({
    statusTimestamp: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v)),
    status: z.string(),
});

/** @internal */
export type Statuses$Outbound = {
    statusTimestamp: string;
    status: string;
};

/** @internal */
export const Statuses$outboundSchema: z.ZodType<Statuses$Outbound, z.ZodTypeDef, Statuses> =
    z.object({
        statusTimestamp: z.date().transform((v) => v.toISOString()),
        status: z.string(),
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Statuses$ {
    /** @deprecated use `Statuses$inboundSchema` instead. */
    export const inboundSchema = Statuses$inboundSchema;
    /** @deprecated use `Statuses$outboundSchema` instead. */
    export const outboundSchema = Statuses$outboundSchema;
    /** @deprecated use `Statuses$Outbound` instead. */
    export type Outbound = Statuses$Outbound;
}

/** @internal */
export const StatusByDate$inboundSchema: z.ZodType<StatusByDate, z.ZodTypeDef, unknown> = z.object({
    dateStamp: z.string(),
    statuses: z.array(z.lazy(() => Statuses$inboundSchema)),
});

/** @internal */
export type StatusByDate$Outbound = {
    dateStamp: string;
    statuses: Array<Statuses$Outbound>;
};

/** @internal */
export const StatusByDate$outboundSchema: z.ZodType<
    StatusByDate$Outbound,
    z.ZodTypeDef,
    StatusByDate
> = z.object({
    dateStamp: z.string(),
    statuses: z.array(z.lazy(() => Statuses$outboundSchema)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StatusByDate$ {
    /** @deprecated use `StatusByDate$inboundSchema` instead. */
    export const inboundSchema = StatusByDate$inboundSchema;
    /** @deprecated use `StatusByDate$outboundSchema` instead. */
    export const outboundSchema = StatusByDate$outboundSchema;
    /** @deprecated use `StatusByDate$Outbound` instead. */
    export type Outbound = StatusByDate$Outbound;
}

/** @internal */
export const GranularHistory$inboundSchema: z.ZodType<GranularHistory, z.ZodTypeDef, unknown> =
    z.object({
        source: z.string(),
        latestSourceStatus: z.string(),
        statusByDate: z.array(z.lazy(() => StatusByDate$inboundSchema)),
    });

/** @internal */
export type GranularHistory$Outbound = {
    source: string;
    latestSourceStatus: string;
    statusByDate: Array<StatusByDate$Outbound>;
};

/** @internal */
export const GranularHistory$outboundSchema: z.ZodType<
    GranularHistory$Outbound,
    z.ZodTypeDef,
    GranularHistory
> = z.object({
    source: z.string(),
    latestSourceStatus: z.string(),
    statusByDate: z.array(z.lazy(() => StatusByDate$outboundSchema)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GranularHistory$ {
    /** @deprecated use `GranularHistory$inboundSchema` instead. */
    export const inboundSchema = GranularHistory$inboundSchema;
    /** @deprecated use `GranularHistory$outboundSchema` instead. */
    export const outboundSchema = GranularHistory$outboundSchema;
    /** @deprecated use `GranularHistory$Outbound` instead. */
    export type Outbound = GranularHistory$Outbound;
}

/** @internal */
export const IngestionRunDataContractDto$inboundSchema: z.ZodType<
    IngestionRunDataContractDto,
    z.ZodTypeDef,
    unknown
> = z.object({
    runID: z.string(),
    latestStatus: z.string(),
    lastUpdatedAt: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v)),
    createdAt: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v)),
    trigger: z.string(),
    sources: z.array(z.string()),
    dateStamps: z.array(z.string()),
    runHistory: z.array(z.lazy(() => RunHistory$inboundSchema)),
    granularHistory: z.array(z.lazy(() => GranularHistory$inboundSchema)),
});

/** @internal */
export type IngestionRunDataContractDto$Outbound = {
    runID: string;
    latestStatus: string;
    lastUpdatedAt: string;
    createdAt: string;
    trigger: string;
    sources: Array<string>;
    dateStamps: Array<string>;
    runHistory: Array<RunHistory$Outbound>;
    granularHistory: Array<GranularHistory$Outbound>;
};

/** @internal */
export const IngestionRunDataContractDto$outboundSchema: z.ZodType<
    IngestionRunDataContractDto$Outbound,
    z.ZodTypeDef,
    IngestionRunDataContractDto
> = z.object({
    runID: z.string(),
    latestStatus: z.string(),
    lastUpdatedAt: z.date().transform((v) => v.toISOString()),
    createdAt: z.date().transform((v) => v.toISOString()),
    trigger: z.string(),
    sources: z.array(z.string()),
    dateStamps: z.array(z.string()),
    runHistory: z.array(z.lazy(() => RunHistory$outboundSchema)),
    granularHistory: z.array(z.lazy(() => GranularHistory$outboundSchema)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IngestionRunDataContractDto$ {
    /** @deprecated use `IngestionRunDataContractDto$inboundSchema` instead. */
    export const inboundSchema = IngestionRunDataContractDto$inboundSchema;
    /** @deprecated use `IngestionRunDataContractDto$outboundSchema` instead. */
    export const outboundSchema = IngestionRunDataContractDto$outboundSchema;
    /** @deprecated use `IngestionRunDataContractDto$Outbound` instead. */
    export type Outbound = IngestionRunDataContractDto$Outbound;
}