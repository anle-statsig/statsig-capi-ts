/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export type Links = {
    /**
     * The URL of the link
     */
    url: string;
    /**
     * The title of the link
     */
    title?: string | undefined;
};

export type Groups = {
    name: string;
    id?: any | null | undefined;
    size: number;
    parameterValues: { [k: string]: any };
    disabled?: boolean | undefined;
    description?: string | undefined;
    foreignGroupID?: string | undefined;
};

export type PrimaryMetrics = {
    name: string;
    type: string;
};

export type SecondaryMetrics = {
    name: string;
    type: string;
};

/**
 * Target apps assigned to this experiment
 */
export type ExperimentCreateDtoTargetApps = string | Array<string>;

/**
 * Default error margin used for results
 */
export const DefaultConfidenceInterval = {
    Eighty: "80",
    Ninety: "90",
    NinetyFive: "95",
    NinetyEight: "98",
    NinetyNine: "99",
} as const;
/**
 * Default error margin used for results
 */
export type DefaultConfidenceInterval = ClosedEnum<typeof DefaultConfidenceInterval>;

/**
 * The current status of the experiment
 */
export const ExperimentCreateDtoStatus = {
    Active: "active",
    Setup: "setup",
    DecisionMade: "decision_made",
    Abandoned: "abandoned",
    Archived: "archived",
} as const;
/**
 * The current status of the experiment
 */
export type ExperimentCreateDtoStatus = ClosedEnum<typeof ExperimentCreateDtoStatus>;

export type ExperimentCreateDtoAllowedReviewers = {
    id: string;
    name: string;
    email: string;
};

export type ExperimentCreateDtoReviewSettings = {
    requiredReview: boolean;
    allowedReviewers: Array<ExperimentCreateDtoAllowedReviewers> | null;
};

export type ExperimentCreateDtoActiveReview = {
    reviewID: string;
    reviewStatus: string;
    description: string;
};

export type ExperimentCreateDto = {
    /**
     * A description of the new experiment
     */
    description?: string | undefined;
    /**
     * The idType the experiment will be performed on
     */
    idType?: string | undefined;
    /**
     * A statement that will be tested by this experiment
     */
    hypothesis?: string | undefined;
    /**
     * Links to relevant documentation or resources
     */
    links?: Array<Links> | undefined;
    /**
     * The test groups for your experiment
     */
    groups?: Array<Groups> | undefined;
    /**
     * Optional control group ID
     */
    controlGroupID?: string | undefined;
    /**
     * Percent of layer allocated to this experiment
     */
    allocation?: number | undefined;
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
    primaryMetrics?: Array<PrimaryMetrics> | undefined;
    /**
     * Additional metrics to monitor that might impact the analysis or final decision of the experiment
     */
    secondaryMetrics?: Array<SecondaryMetrics> | undefined;
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
    bonferroniCorrection?: boolean | undefined;
    /**
     * Default error margin used for results
     */
    defaultConfidenceInterval?: DefaultConfidenceInterval | undefined;
    /**
     * The current status of the experiment
     */
    status?: ExperimentCreateDtoStatus | undefined;
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
    /**
     * The name of the new experiment
     */
    name: string;
    id?: string | undefined;
    /**
     * Which layer to place the experiment into.
     */
    layerID?: string | undefined;
    reviewSettings?: ExperimentCreateDtoReviewSettings | undefined;
    activeReview?: ExperimentCreateDtoActiveReview | undefined;
};

/** @internal */
export const Links$inboundSchema: z.ZodType<Links, z.ZodTypeDef, unknown> = z.object({
    url: z.string(),
    title: z.string().optional(),
});

/** @internal */
export type Links$Outbound = {
    url: string;
    title?: string | undefined;
};

/** @internal */
export const Links$outboundSchema: z.ZodType<Links$Outbound, z.ZodTypeDef, Links> = z.object({
    url: z.string(),
    title: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Links$ {
    /** @deprecated use `Links$inboundSchema` instead. */
    export const inboundSchema = Links$inboundSchema;
    /** @deprecated use `Links$outboundSchema` instead. */
    export const outboundSchema = Links$outboundSchema;
    /** @deprecated use `Links$Outbound` instead. */
    export type Outbound = Links$Outbound;
}

/** @internal */
export const Groups$inboundSchema: z.ZodType<Groups, z.ZodTypeDef, unknown> = z.object({
    name: z.string(),
    id: z.nullable(z.any()).optional(),
    size: z.number(),
    parameterValues: z.record(z.any()),
    disabled: z.boolean().optional(),
    description: z.string().optional(),
    foreignGroupID: z.string().optional(),
});

/** @internal */
export type Groups$Outbound = {
    name: string;
    id?: any | null | undefined;
    size: number;
    parameterValues: { [k: string]: any };
    disabled?: boolean | undefined;
    description?: string | undefined;
    foreignGroupID?: string | undefined;
};

/** @internal */
export const Groups$outboundSchema: z.ZodType<Groups$Outbound, z.ZodTypeDef, Groups> = z.object({
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
export namespace Groups$ {
    /** @deprecated use `Groups$inboundSchema` instead. */
    export const inboundSchema = Groups$inboundSchema;
    /** @deprecated use `Groups$outboundSchema` instead. */
    export const outboundSchema = Groups$outboundSchema;
    /** @deprecated use `Groups$Outbound` instead. */
    export type Outbound = Groups$Outbound;
}

/** @internal */
export const PrimaryMetrics$inboundSchema: z.ZodType<PrimaryMetrics, z.ZodTypeDef, unknown> =
    z.object({
        name: z.string(),
        type: z.string(),
    });

/** @internal */
export type PrimaryMetrics$Outbound = {
    name: string;
    type: string;
};

/** @internal */
export const PrimaryMetrics$outboundSchema: z.ZodType<
    PrimaryMetrics$Outbound,
    z.ZodTypeDef,
    PrimaryMetrics
> = z.object({
    name: z.string(),
    type: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PrimaryMetrics$ {
    /** @deprecated use `PrimaryMetrics$inboundSchema` instead. */
    export const inboundSchema = PrimaryMetrics$inboundSchema;
    /** @deprecated use `PrimaryMetrics$outboundSchema` instead. */
    export const outboundSchema = PrimaryMetrics$outboundSchema;
    /** @deprecated use `PrimaryMetrics$Outbound` instead. */
    export type Outbound = PrimaryMetrics$Outbound;
}

/** @internal */
export const SecondaryMetrics$inboundSchema: z.ZodType<SecondaryMetrics, z.ZodTypeDef, unknown> =
    z.object({
        name: z.string(),
        type: z.string(),
    });

/** @internal */
export type SecondaryMetrics$Outbound = {
    name: string;
    type: string;
};

/** @internal */
export const SecondaryMetrics$outboundSchema: z.ZodType<
    SecondaryMetrics$Outbound,
    z.ZodTypeDef,
    SecondaryMetrics
> = z.object({
    name: z.string(),
    type: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SecondaryMetrics$ {
    /** @deprecated use `SecondaryMetrics$inboundSchema` instead. */
    export const inboundSchema = SecondaryMetrics$inboundSchema;
    /** @deprecated use `SecondaryMetrics$outboundSchema` instead. */
    export const outboundSchema = SecondaryMetrics$outboundSchema;
    /** @deprecated use `SecondaryMetrics$Outbound` instead. */
    export type Outbound = SecondaryMetrics$Outbound;
}

/** @internal */
export const ExperimentCreateDtoTargetApps$inboundSchema: z.ZodType<
    ExperimentCreateDtoTargetApps,
    z.ZodTypeDef,
    unknown
> = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type ExperimentCreateDtoTargetApps$Outbound = string | Array<string>;

/** @internal */
export const ExperimentCreateDtoTargetApps$outboundSchema: z.ZodType<
    ExperimentCreateDtoTargetApps$Outbound,
    z.ZodTypeDef,
    ExperimentCreateDtoTargetApps
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExperimentCreateDtoTargetApps$ {
    /** @deprecated use `ExperimentCreateDtoTargetApps$inboundSchema` instead. */
    export const inboundSchema = ExperimentCreateDtoTargetApps$inboundSchema;
    /** @deprecated use `ExperimentCreateDtoTargetApps$outboundSchema` instead. */
    export const outboundSchema = ExperimentCreateDtoTargetApps$outboundSchema;
    /** @deprecated use `ExperimentCreateDtoTargetApps$Outbound` instead. */
    export type Outbound = ExperimentCreateDtoTargetApps$Outbound;
}

/** @internal */
export const DefaultConfidenceInterval$inboundSchema: z.ZodNativeEnum<
    typeof DefaultConfidenceInterval
> = z.nativeEnum(DefaultConfidenceInterval);

/** @internal */
export const DefaultConfidenceInterval$outboundSchema: z.ZodNativeEnum<
    typeof DefaultConfidenceInterval
> = DefaultConfidenceInterval$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DefaultConfidenceInterval$ {
    /** @deprecated use `DefaultConfidenceInterval$inboundSchema` instead. */
    export const inboundSchema = DefaultConfidenceInterval$inboundSchema;
    /** @deprecated use `DefaultConfidenceInterval$outboundSchema` instead. */
    export const outboundSchema = DefaultConfidenceInterval$outboundSchema;
}

/** @internal */
export const ExperimentCreateDtoStatus$inboundSchema: z.ZodNativeEnum<
    typeof ExperimentCreateDtoStatus
> = z.nativeEnum(ExperimentCreateDtoStatus);

/** @internal */
export const ExperimentCreateDtoStatus$outboundSchema: z.ZodNativeEnum<
    typeof ExperimentCreateDtoStatus
> = ExperimentCreateDtoStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExperimentCreateDtoStatus$ {
    /** @deprecated use `ExperimentCreateDtoStatus$inboundSchema` instead. */
    export const inboundSchema = ExperimentCreateDtoStatus$inboundSchema;
    /** @deprecated use `ExperimentCreateDtoStatus$outboundSchema` instead. */
    export const outboundSchema = ExperimentCreateDtoStatus$outboundSchema;
}

/** @internal */
export const ExperimentCreateDtoAllowedReviewers$inboundSchema: z.ZodType<
    ExperimentCreateDtoAllowedReviewers,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
});

/** @internal */
export type ExperimentCreateDtoAllowedReviewers$Outbound = {
    id: string;
    name: string;
    email: string;
};

/** @internal */
export const ExperimentCreateDtoAllowedReviewers$outboundSchema: z.ZodType<
    ExperimentCreateDtoAllowedReviewers$Outbound,
    z.ZodTypeDef,
    ExperimentCreateDtoAllowedReviewers
> = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExperimentCreateDtoAllowedReviewers$ {
    /** @deprecated use `ExperimentCreateDtoAllowedReviewers$inboundSchema` instead. */
    export const inboundSchema = ExperimentCreateDtoAllowedReviewers$inboundSchema;
    /** @deprecated use `ExperimentCreateDtoAllowedReviewers$outboundSchema` instead. */
    export const outboundSchema = ExperimentCreateDtoAllowedReviewers$outboundSchema;
    /** @deprecated use `ExperimentCreateDtoAllowedReviewers$Outbound` instead. */
    export type Outbound = ExperimentCreateDtoAllowedReviewers$Outbound;
}

/** @internal */
export const ExperimentCreateDtoReviewSettings$inboundSchema: z.ZodType<
    ExperimentCreateDtoReviewSettings,
    z.ZodTypeDef,
    unknown
> = z.object({
    requiredReview: z.boolean(),
    allowedReviewers: z.nullable(
        z.array(z.lazy(() => ExperimentCreateDtoAllowedReviewers$inboundSchema))
    ),
});

/** @internal */
export type ExperimentCreateDtoReviewSettings$Outbound = {
    requiredReview: boolean;
    allowedReviewers: Array<ExperimentCreateDtoAllowedReviewers$Outbound> | null;
};

/** @internal */
export const ExperimentCreateDtoReviewSettings$outboundSchema: z.ZodType<
    ExperimentCreateDtoReviewSettings$Outbound,
    z.ZodTypeDef,
    ExperimentCreateDtoReviewSettings
> = z.object({
    requiredReview: z.boolean(),
    allowedReviewers: z.nullable(
        z.array(z.lazy(() => ExperimentCreateDtoAllowedReviewers$outboundSchema))
    ),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExperimentCreateDtoReviewSettings$ {
    /** @deprecated use `ExperimentCreateDtoReviewSettings$inboundSchema` instead. */
    export const inboundSchema = ExperimentCreateDtoReviewSettings$inboundSchema;
    /** @deprecated use `ExperimentCreateDtoReviewSettings$outboundSchema` instead. */
    export const outboundSchema = ExperimentCreateDtoReviewSettings$outboundSchema;
    /** @deprecated use `ExperimentCreateDtoReviewSettings$Outbound` instead. */
    export type Outbound = ExperimentCreateDtoReviewSettings$Outbound;
}

/** @internal */
export const ExperimentCreateDtoActiveReview$inboundSchema: z.ZodType<
    ExperimentCreateDtoActiveReview,
    z.ZodTypeDef,
    unknown
> = z.object({
    reviewID: z.string(),
    reviewStatus: z.string(),
    description: z.string(),
});

/** @internal */
export type ExperimentCreateDtoActiveReview$Outbound = {
    reviewID: string;
    reviewStatus: string;
    description: string;
};

/** @internal */
export const ExperimentCreateDtoActiveReview$outboundSchema: z.ZodType<
    ExperimentCreateDtoActiveReview$Outbound,
    z.ZodTypeDef,
    ExperimentCreateDtoActiveReview
> = z.object({
    reviewID: z.string(),
    reviewStatus: z.string(),
    description: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExperimentCreateDtoActiveReview$ {
    /** @deprecated use `ExperimentCreateDtoActiveReview$inboundSchema` instead. */
    export const inboundSchema = ExperimentCreateDtoActiveReview$inboundSchema;
    /** @deprecated use `ExperimentCreateDtoActiveReview$outboundSchema` instead. */
    export const outboundSchema = ExperimentCreateDtoActiveReview$outboundSchema;
    /** @deprecated use `ExperimentCreateDtoActiveReview$Outbound` instead. */
    export type Outbound = ExperimentCreateDtoActiveReview$Outbound;
}

/** @internal */
export const ExperimentCreateDto$inboundSchema: z.ZodType<
    ExperimentCreateDto,
    z.ZodTypeDef,
    unknown
> = z.object({
    description: z.string().optional(),
    idType: z.string().optional(),
    hypothesis: z.string().optional(),
    links: z.array(z.lazy(() => Links$inboundSchema)).optional(),
    groups: z.array(z.lazy(() => Groups$inboundSchema)).optional(),
    controlGroupID: z.string().optional(),
    allocation: z.number().optional(),
    primaryMetricTags: z.array(z.string()).optional(),
    secondaryMetricTags: z.array(z.string()).optional(),
    primaryMetrics: z.array(z.lazy(() => PrimaryMetrics$inboundSchema)).optional(),
    secondaryMetrics: z.array(z.lazy(() => SecondaryMetrics$inboundSchema)).optional(),
    targetApps: z.union([z.string(), z.array(z.string())]).optional(),
    tags: z.array(z.string()).optional(),
    duration: z.number().int().optional(),
    targetExposures: z.number().int().optional(),
    targetingGateID: z.nullable(z.any()).optional(),
    bonferroniCorrection: z.boolean().optional(),
    defaultConfidenceInterval: DefaultConfidenceInterval$inboundSchema.optional(),
    status: ExperimentCreateDtoStatus$inboundSchema.optional(),
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
    name: z.string(),
    id: z.string().optional(),
    layerID: z.string().optional(),
    reviewSettings: z.lazy(() => ExperimentCreateDtoReviewSettings$inboundSchema).optional(),
    activeReview: z.lazy(() => ExperimentCreateDtoActiveReview$inboundSchema).optional(),
});

/** @internal */
export type ExperimentCreateDto$Outbound = {
    description?: string | undefined;
    idType?: string | undefined;
    hypothesis?: string | undefined;
    links?: Array<Links$Outbound> | undefined;
    groups?: Array<Groups$Outbound> | undefined;
    controlGroupID?: string | undefined;
    allocation?: number | undefined;
    primaryMetricTags?: Array<string> | undefined;
    secondaryMetricTags?: Array<string> | undefined;
    primaryMetrics?: Array<PrimaryMetrics$Outbound> | undefined;
    secondaryMetrics?: Array<SecondaryMetrics$Outbound> | undefined;
    targetApps?: string | Array<string> | undefined;
    tags?: Array<string> | undefined;
    duration?: number | undefined;
    targetExposures?: number | undefined;
    targetingGateID?: any | null | undefined;
    bonferroniCorrection?: boolean | undefined;
    defaultConfidenceInterval?: string | undefined;
    status?: string | undefined;
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
    name: string;
    id?: string | undefined;
    layerID?: string | undefined;
    reviewSettings?: ExperimentCreateDtoReviewSettings$Outbound | undefined;
    activeReview?: ExperimentCreateDtoActiveReview$Outbound | undefined;
};

/** @internal */
export const ExperimentCreateDto$outboundSchema: z.ZodType<
    ExperimentCreateDto$Outbound,
    z.ZodTypeDef,
    ExperimentCreateDto
> = z.object({
    description: z.string().optional(),
    idType: z.string().optional(),
    hypothesis: z.string().optional(),
    links: z.array(z.lazy(() => Links$outboundSchema)).optional(),
    groups: z.array(z.lazy(() => Groups$outboundSchema)).optional(),
    controlGroupID: z.string().optional(),
    allocation: z.number().optional(),
    primaryMetricTags: z.array(z.string()).optional(),
    secondaryMetricTags: z.array(z.string()).optional(),
    primaryMetrics: z.array(z.lazy(() => PrimaryMetrics$outboundSchema)).optional(),
    secondaryMetrics: z.array(z.lazy(() => SecondaryMetrics$outboundSchema)).optional(),
    targetApps: z.union([z.string(), z.array(z.string())]).optional(),
    tags: z.array(z.string()).optional(),
    duration: z.number().int().optional(),
    targetExposures: z.number().int().optional(),
    targetingGateID: z.nullable(z.any()).optional(),
    bonferroniCorrection: z.boolean().optional(),
    defaultConfidenceInterval: DefaultConfidenceInterval$outboundSchema.optional(),
    status: ExperimentCreateDtoStatus$outboundSchema.optional(),
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
    name: z.string(),
    id: z.string().optional(),
    layerID: z.string().optional(),
    reviewSettings: z.lazy(() => ExperimentCreateDtoReviewSettings$outboundSchema).optional(),
    activeReview: z.lazy(() => ExperimentCreateDtoActiveReview$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExperimentCreateDto$ {
    /** @deprecated use `ExperimentCreateDto$inboundSchema` instead. */
    export const inboundSchema = ExperimentCreateDto$inboundSchema;
    /** @deprecated use `ExperimentCreateDto$outboundSchema` instead. */
    export const outboundSchema = ExperimentCreateDto$outboundSchema;
    /** @deprecated use `ExperimentCreateDto$Outbound` instead. */
    export type Outbound = ExperimentCreateDto$Outbound;
}