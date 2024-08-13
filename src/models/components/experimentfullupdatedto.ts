/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export type ExperimentFullUpdateDtoLinks = {
    /**
     * The URL of the link
     */
    url: string;
    /**
     * The title of the link
     */
    title?: string | undefined;
};

export type ExperimentFullUpdateDtoGroups = {
    name: string;
    id?: any | null | undefined;
    size: number;
    parameterValues: { [k: string]: any };
    disabled?: boolean | undefined;
    description?: string | undefined;
    foreignGroupID?: string | undefined;
};

export type ExperimentFullUpdateDtoPrimaryMetrics = {
    name: string;
    type: string;
};

export type ExperimentFullUpdateDtoSecondaryMetrics = {
    name: string;
    type: string;
};

/**
 * Target apps assigned to this experiment
 */
export type ExperimentFullUpdateDtoTargetApps = string | Array<string>;

/**
 * Default error margin used for results
 */
export const ExperimentFullUpdateDtoDefaultConfidenceInterval = {
    Eighty: "80",
    Ninety: "90",
    NinetyFive: "95",
    NinetyEight: "98",
    NinetyNine: "99",
} as const;
/**
 * Default error margin used for results
 */
export type ExperimentFullUpdateDtoDefaultConfidenceInterval = ClosedEnum<
    typeof ExperimentFullUpdateDtoDefaultConfidenceInterval
>;

/**
 * The current status of the experiment
 */
export const ExperimentFullUpdateDtoStatus = {
    Active: "active",
    Setup: "setup",
    DecisionMade: "decision_made",
    Abandoned: "abandoned",
    Archived: "archived",
} as const;
/**
 * The current status of the experiment
 */
export type ExperimentFullUpdateDtoStatus = ClosedEnum<typeof ExperimentFullUpdateDtoStatus>;

export type ExperimentFullUpdateDto = {
    /**
     * A helpful summary of what this experiment does
     */
    description: string;
    /**
     * The type of ID which the experiment is based on
     */
    idType: string;
    /**
     * A statement that will be tested by this experiment
     */
    hypothesis: string;
    /**
     * Links to relevant documentation or resources
     */
    links?: Array<ExperimentFullUpdateDtoLinks> | undefined;
    /**
     * The test groups for your experiment
     */
    groups: Array<ExperimentFullUpdateDtoGroups>;
    /**
     * Optional control group ID
     */
    controlGroupID?: string | undefined;
    /**
     * Percent of layer allocated to this experiment
     */
    allocation: number;
    /**
     * Primary metric tags for the experiment
     */
    primaryMetricTags?: Array<string> | undefined;
    /**
     * Secondary metric tags for the experiment
     */
    secondaryMetricTags?: Array<string> | undefined;
    /**
     * Main metrics needed to evaluate your hypothesis
     */
    primaryMetrics?: Array<ExperimentFullUpdateDtoPrimaryMetrics> | undefined;
    /**
     * Additional metrics to monitor that might impact the analysis or final decision of the experiment
     */
    secondaryMetrics?: Array<ExperimentFullUpdateDtoSecondaryMetrics> | undefined;
    /**
     * Target apps assigned to this experiment
     */
    targetApps?: string | Array<string> | undefined;
    /**
     * Tags associated with the experiment
     */
    tags?: Array<string> | undefined;
    /**
     * How long the experiment is expected to last in days
     */
    duration?: number | undefined;
    /**
     * Target exposures for the experiment
     */
    targetExposures?: number | undefined;
    /**
     * Restrict your experiment to users passing the selected feature gate
     */
    targetingGateID?: any | null | undefined;
    /**
     * Is Bonferroni correction applied?
     */
    bonferroniCorrection: boolean;
    /**
     * Default error margin used for results
     */
    defaultConfidenceInterval: ExperimentFullUpdateDtoDefaultConfidenceInterval;
    /**
     * The current status of the experiment
     */
    status: ExperimentFullUpdateDtoStatus;
    /**
     * ID of the launched group, null otherwise
     */
    launchedGroupID?: any | null | undefined;
    /**
     * Source name of the assignment
     */
    assignmentSourceName?: string | undefined;
    /**
     * Name of the source experiment for assignment
     */
    assignmentSourceExperimentName?: string | undefined;
    /**
     * The Statsig ID of the creator of this experiment
     */
    creatorID?: any | null | undefined;
    /**
     * The email of the creator of this experiment
     */
    creatorEmail?: any | null | undefined;
    /**
     * For Warehouse Native
     */
    isAnalysisOnly?: any | null | undefined;
    /**
     * Enterprise only
     */
    team?: any | null | undefined;
    /**
     * Allocation duration in days
     */
    allocationDuration?: number | undefined;
    /**
     * Cohorted analysis duration in days
     */
    cohortedAnalysisDuration?: number | undefined;
    /**
     * Fixed analysis duration in days
     */
    fixedAnalysisDuration?: number | undefined;
};

/** @internal */
export const ExperimentFullUpdateDtoLinks$inboundSchema: z.ZodType<
    ExperimentFullUpdateDtoLinks,
    z.ZodTypeDef,
    unknown
> = z.object({
    url: z.string(),
    title: z.string().optional(),
});

/** @internal */
export type ExperimentFullUpdateDtoLinks$Outbound = {
    url: string;
    title?: string | undefined;
};

/** @internal */
export const ExperimentFullUpdateDtoLinks$outboundSchema: z.ZodType<
    ExperimentFullUpdateDtoLinks$Outbound,
    z.ZodTypeDef,
    ExperimentFullUpdateDtoLinks
> = z.object({
    url: z.string(),
    title: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExperimentFullUpdateDtoLinks$ {
    /** @deprecated use `ExperimentFullUpdateDtoLinks$inboundSchema` instead. */
    export const inboundSchema = ExperimentFullUpdateDtoLinks$inboundSchema;
    /** @deprecated use `ExperimentFullUpdateDtoLinks$outboundSchema` instead. */
    export const outboundSchema = ExperimentFullUpdateDtoLinks$outboundSchema;
    /** @deprecated use `ExperimentFullUpdateDtoLinks$Outbound` instead. */
    export type Outbound = ExperimentFullUpdateDtoLinks$Outbound;
}

/** @internal */
export const ExperimentFullUpdateDtoGroups$inboundSchema: z.ZodType<
    ExperimentFullUpdateDtoGroups,
    z.ZodTypeDef,
    unknown
> = z.object({
    name: z.string(),
    id: z.nullable(z.any()).optional(),
    size: z.number(),
    parameterValues: z.record(z.any()),
    disabled: z.boolean().optional(),
    description: z.string().optional(),
    foreignGroupID: z.string().optional(),
});

/** @internal */
export type ExperimentFullUpdateDtoGroups$Outbound = {
    name: string;
    id?: any | null | undefined;
    size: number;
    parameterValues: { [k: string]: any };
    disabled?: boolean | undefined;
    description?: string | undefined;
    foreignGroupID?: string | undefined;
};

/** @internal */
export const ExperimentFullUpdateDtoGroups$outboundSchema: z.ZodType<
    ExperimentFullUpdateDtoGroups$Outbound,
    z.ZodTypeDef,
    ExperimentFullUpdateDtoGroups
> = z.object({
    name: z.string(),
    id: z.nullable(z.any()).optional(),
    size: z.number(),
    parameterValues: z.record(z.any()),
    disabled: z.boolean().optional(),
    description: z.string().optional(),
    foreignGroupID: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExperimentFullUpdateDtoGroups$ {
    /** @deprecated use `ExperimentFullUpdateDtoGroups$inboundSchema` instead. */
    export const inboundSchema = ExperimentFullUpdateDtoGroups$inboundSchema;
    /** @deprecated use `ExperimentFullUpdateDtoGroups$outboundSchema` instead. */
    export const outboundSchema = ExperimentFullUpdateDtoGroups$outboundSchema;
    /** @deprecated use `ExperimentFullUpdateDtoGroups$Outbound` instead. */
    export type Outbound = ExperimentFullUpdateDtoGroups$Outbound;
}

/** @internal */
export const ExperimentFullUpdateDtoPrimaryMetrics$inboundSchema: z.ZodType<
    ExperimentFullUpdateDtoPrimaryMetrics,
    z.ZodTypeDef,
    unknown
> = z.object({
    name: z.string(),
    type: z.string(),
});

/** @internal */
export type ExperimentFullUpdateDtoPrimaryMetrics$Outbound = {
    name: string;
    type: string;
};

/** @internal */
export const ExperimentFullUpdateDtoPrimaryMetrics$outboundSchema: z.ZodType<
    ExperimentFullUpdateDtoPrimaryMetrics$Outbound,
    z.ZodTypeDef,
    ExperimentFullUpdateDtoPrimaryMetrics
> = z.object({
    name: z.string(),
    type: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExperimentFullUpdateDtoPrimaryMetrics$ {
    /** @deprecated use `ExperimentFullUpdateDtoPrimaryMetrics$inboundSchema` instead. */
    export const inboundSchema = ExperimentFullUpdateDtoPrimaryMetrics$inboundSchema;
    /** @deprecated use `ExperimentFullUpdateDtoPrimaryMetrics$outboundSchema` instead. */
    export const outboundSchema = ExperimentFullUpdateDtoPrimaryMetrics$outboundSchema;
    /** @deprecated use `ExperimentFullUpdateDtoPrimaryMetrics$Outbound` instead. */
    export type Outbound = ExperimentFullUpdateDtoPrimaryMetrics$Outbound;
}

/** @internal */
export const ExperimentFullUpdateDtoSecondaryMetrics$inboundSchema: z.ZodType<
    ExperimentFullUpdateDtoSecondaryMetrics,
    z.ZodTypeDef,
    unknown
> = z.object({
    name: z.string(),
    type: z.string(),
});

/** @internal */
export type ExperimentFullUpdateDtoSecondaryMetrics$Outbound = {
    name: string;
    type: string;
};

/** @internal */
export const ExperimentFullUpdateDtoSecondaryMetrics$outboundSchema: z.ZodType<
    ExperimentFullUpdateDtoSecondaryMetrics$Outbound,
    z.ZodTypeDef,
    ExperimentFullUpdateDtoSecondaryMetrics
> = z.object({
    name: z.string(),
    type: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExperimentFullUpdateDtoSecondaryMetrics$ {
    /** @deprecated use `ExperimentFullUpdateDtoSecondaryMetrics$inboundSchema` instead. */
    export const inboundSchema = ExperimentFullUpdateDtoSecondaryMetrics$inboundSchema;
    /** @deprecated use `ExperimentFullUpdateDtoSecondaryMetrics$outboundSchema` instead. */
    export const outboundSchema = ExperimentFullUpdateDtoSecondaryMetrics$outboundSchema;
    /** @deprecated use `ExperimentFullUpdateDtoSecondaryMetrics$Outbound` instead. */
    export type Outbound = ExperimentFullUpdateDtoSecondaryMetrics$Outbound;
}

/** @internal */
export const ExperimentFullUpdateDtoTargetApps$inboundSchema: z.ZodType<
    ExperimentFullUpdateDtoTargetApps,
    z.ZodTypeDef,
    unknown
> = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type ExperimentFullUpdateDtoTargetApps$Outbound = string | Array<string>;

/** @internal */
export const ExperimentFullUpdateDtoTargetApps$outboundSchema: z.ZodType<
    ExperimentFullUpdateDtoTargetApps$Outbound,
    z.ZodTypeDef,
    ExperimentFullUpdateDtoTargetApps
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExperimentFullUpdateDtoTargetApps$ {
    /** @deprecated use `ExperimentFullUpdateDtoTargetApps$inboundSchema` instead. */
    export const inboundSchema = ExperimentFullUpdateDtoTargetApps$inboundSchema;
    /** @deprecated use `ExperimentFullUpdateDtoTargetApps$outboundSchema` instead. */
    export const outboundSchema = ExperimentFullUpdateDtoTargetApps$outboundSchema;
    /** @deprecated use `ExperimentFullUpdateDtoTargetApps$Outbound` instead. */
    export type Outbound = ExperimentFullUpdateDtoTargetApps$Outbound;
}

/** @internal */
export const ExperimentFullUpdateDtoDefaultConfidenceInterval$inboundSchema: z.ZodNativeEnum<
    typeof ExperimentFullUpdateDtoDefaultConfidenceInterval
> = z.nativeEnum(ExperimentFullUpdateDtoDefaultConfidenceInterval);

/** @internal */
export const ExperimentFullUpdateDtoDefaultConfidenceInterval$outboundSchema: z.ZodNativeEnum<
    typeof ExperimentFullUpdateDtoDefaultConfidenceInterval
> = ExperimentFullUpdateDtoDefaultConfidenceInterval$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExperimentFullUpdateDtoDefaultConfidenceInterval$ {
    /** @deprecated use `ExperimentFullUpdateDtoDefaultConfidenceInterval$inboundSchema` instead. */
    export const inboundSchema = ExperimentFullUpdateDtoDefaultConfidenceInterval$inboundSchema;
    /** @deprecated use `ExperimentFullUpdateDtoDefaultConfidenceInterval$outboundSchema` instead. */
    export const outboundSchema = ExperimentFullUpdateDtoDefaultConfidenceInterval$outboundSchema;
}

/** @internal */
export const ExperimentFullUpdateDtoStatus$inboundSchema: z.ZodNativeEnum<
    typeof ExperimentFullUpdateDtoStatus
> = z.nativeEnum(ExperimentFullUpdateDtoStatus);

/** @internal */
export const ExperimentFullUpdateDtoStatus$outboundSchema: z.ZodNativeEnum<
    typeof ExperimentFullUpdateDtoStatus
> = ExperimentFullUpdateDtoStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExperimentFullUpdateDtoStatus$ {
    /** @deprecated use `ExperimentFullUpdateDtoStatus$inboundSchema` instead. */
    export const inboundSchema = ExperimentFullUpdateDtoStatus$inboundSchema;
    /** @deprecated use `ExperimentFullUpdateDtoStatus$outboundSchema` instead. */
    export const outboundSchema = ExperimentFullUpdateDtoStatus$outboundSchema;
}

/** @internal */
export const ExperimentFullUpdateDto$inboundSchema: z.ZodType<
    ExperimentFullUpdateDto,
    z.ZodTypeDef,
    unknown
> = z.object({
    description: z.string(),
    idType: z.string(),
    hypothesis: z.string(),
    links: z.array(z.lazy(() => ExperimentFullUpdateDtoLinks$inboundSchema)).optional(),
    groups: z.array(z.lazy(() => ExperimentFullUpdateDtoGroups$inboundSchema)),
    controlGroupID: z.string().optional(),
    allocation: z.number(),
    primaryMetricTags: z.array(z.string()).optional(),
    secondaryMetricTags: z.array(z.string()).optional(),
    primaryMetrics: z
        .array(z.lazy(() => ExperimentFullUpdateDtoPrimaryMetrics$inboundSchema))
        .optional(),
    secondaryMetrics: z
        .array(z.lazy(() => ExperimentFullUpdateDtoSecondaryMetrics$inboundSchema))
        .optional(),
    targetApps: z.union([z.string(), z.array(z.string())]).optional(),
    tags: z.array(z.string()).optional(),
    duration: z.number().int().optional(),
    targetExposures: z.number().int().optional(),
    targetingGateID: z.nullable(z.any()).optional(),
    bonferroniCorrection: z.boolean(),
    defaultConfidenceInterval: ExperimentFullUpdateDtoDefaultConfidenceInterval$inboundSchema,
    status: ExperimentFullUpdateDtoStatus$inboundSchema,
    launchedGroupID: z.nullable(z.any()).optional(),
    assignmentSourceName: z.string().optional(),
    assignmentSourceExperimentName: z.string().optional(),
    creatorID: z.nullable(z.any()).optional(),
    creatorEmail: z.nullable(z.any()).optional(),
    isAnalysisOnly: z.nullable(z.any()).optional(),
    team: z.nullable(z.any()).optional(),
    allocationDuration: z.number().int().optional(),
    cohortedAnalysisDuration: z.number().int().optional(),
    fixedAnalysisDuration: z.number().int().optional(),
});

/** @internal */
export type ExperimentFullUpdateDto$Outbound = {
    description: string;
    idType: string;
    hypothesis: string;
    links?: Array<ExperimentFullUpdateDtoLinks$Outbound> | undefined;
    groups: Array<ExperimentFullUpdateDtoGroups$Outbound>;
    controlGroupID?: string | undefined;
    allocation: number;
    primaryMetricTags?: Array<string> | undefined;
    secondaryMetricTags?: Array<string> | undefined;
    primaryMetrics?: Array<ExperimentFullUpdateDtoPrimaryMetrics$Outbound> | undefined;
    secondaryMetrics?: Array<ExperimentFullUpdateDtoSecondaryMetrics$Outbound> | undefined;
    targetApps?: string | Array<string> | undefined;
    tags?: Array<string> | undefined;
    duration?: number | undefined;
    targetExposures?: number | undefined;
    targetingGateID?: any | null | undefined;
    bonferroniCorrection: boolean;
    defaultConfidenceInterval: string;
    status: string;
    launchedGroupID?: any | null | undefined;
    assignmentSourceName?: string | undefined;
    assignmentSourceExperimentName?: string | undefined;
    creatorID?: any | null | undefined;
    creatorEmail?: any | null | undefined;
    isAnalysisOnly?: any | null | undefined;
    team?: any | null | undefined;
    allocationDuration?: number | undefined;
    cohortedAnalysisDuration?: number | undefined;
    fixedAnalysisDuration?: number | undefined;
};

/** @internal */
export const ExperimentFullUpdateDto$outboundSchema: z.ZodType<
    ExperimentFullUpdateDto$Outbound,
    z.ZodTypeDef,
    ExperimentFullUpdateDto
> = z.object({
    description: z.string(),
    idType: z.string(),
    hypothesis: z.string(),
    links: z.array(z.lazy(() => ExperimentFullUpdateDtoLinks$outboundSchema)).optional(),
    groups: z.array(z.lazy(() => ExperimentFullUpdateDtoGroups$outboundSchema)),
    controlGroupID: z.string().optional(),
    allocation: z.number(),
    primaryMetricTags: z.array(z.string()).optional(),
    secondaryMetricTags: z.array(z.string()).optional(),
    primaryMetrics: z
        .array(z.lazy(() => ExperimentFullUpdateDtoPrimaryMetrics$outboundSchema))
        .optional(),
    secondaryMetrics: z
        .array(z.lazy(() => ExperimentFullUpdateDtoSecondaryMetrics$outboundSchema))
        .optional(),
    targetApps: z.union([z.string(), z.array(z.string())]).optional(),
    tags: z.array(z.string()).optional(),
    duration: z.number().int().optional(),
    targetExposures: z.number().int().optional(),
    targetingGateID: z.nullable(z.any()).optional(),
    bonferroniCorrection: z.boolean(),
    defaultConfidenceInterval: ExperimentFullUpdateDtoDefaultConfidenceInterval$outboundSchema,
    status: ExperimentFullUpdateDtoStatus$outboundSchema,
    launchedGroupID: z.nullable(z.any()).optional(),
    assignmentSourceName: z.string().optional(),
    assignmentSourceExperimentName: z.string().optional(),
    creatorID: z.nullable(z.any()).optional(),
    creatorEmail: z.nullable(z.any()).optional(),
    isAnalysisOnly: z.nullable(z.any()).optional(),
    team: z.nullable(z.any()).optional(),
    allocationDuration: z.number().int().optional(),
    cohortedAnalysisDuration: z.number().int().optional(),
    fixedAnalysisDuration: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExperimentFullUpdateDto$ {
    /** @deprecated use `ExperimentFullUpdateDto$inboundSchema` instead. */
    export const inboundSchema = ExperimentFullUpdateDto$inboundSchema;
    /** @deprecated use `ExperimentFullUpdateDto$outboundSchema` instead. */
    export const outboundSchema = ExperimentFullUpdateDto$outboundSchema;
    /** @deprecated use `ExperimentFullUpdateDto$Outbound` instead. */
    export type Outbound = ExperimentFullUpdateDto$Outbound;
}