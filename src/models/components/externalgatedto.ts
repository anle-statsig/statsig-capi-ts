/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export type ExternalGateDtoTargetApps = string | Array<string>;

export const Status = {
    InProgress: "In Progress",
    Launched: "Launched",
    Disabled: "Disabled",
    Archived: "Archived",
} as const;
export type Status = ClosedEnum<typeof Status>;

export const ExternalGateDtoType = {
    Temporary: "TEMPORARY",
    Permanent: "PERMANENT",
    Stale: "STALE",
    Template: "TEMPLATE",
} as const;
export type ExternalGateDtoType = ClosedEnum<typeof ExternalGateDtoType>;

export const TypeReason = {
    None: "NONE",
    StaleProbablyLaunched: "STALE_PROBABLY_LAUNCHED",
    StaleProbablyUnlaunched: "STALE_PROBABLY_UNLAUNCHED",
    StaleProbablyForgotten: "STALE_PROBABLY_FORGOTTEN",
    StaleNoRules: "STALE_NO_RULES",
    StaleProbablyDeadCheck: "STALE_PROBABLY_DEAD_CHECK",
} as const;
export type TypeReason = ClosedEnum<typeof TypeReason>;

/**
 * Schema for owner data including ID, type, name. Note that if Entity is created by CONSOLE API, owner will be undefined.
 */
export type Owner = {
    /**
     * ID of the owner
     */
    ownerID?: string | undefined;
    /**
     * Type of the owner (e.g., SDK_KEY or USER)
     */
    ownerType?: string | undefined;
    /**
     * The name of the owner. This field is optional.
     */
    ownerName?: string | undefined;
};

export type ExternalGateDtoTargetValue = Array<string> | Array<number> | string | number;

export const ExternalGateDtoRulesType = {
    AppVersion: "app_version",
    BrowserName: "browser_name",
    BrowserVersion: "browser_version",
    Country: "country",
    CustomField: "custom_field",
    Email: "email",
    EnvironmentTier: "environment_tier",
    FailsGate: "fails_gate",
    FailsSegment: "fails_segment",
    IpAddress: "ip_address",
    Locale: "locale",
    OsName: "os_name",
    OsVersion: "os_version",
    PassesGate: "passes_gate",
    PassesSegment: "passes_segment",
    Public: "public",
    Time: "time",
    UnitId: "unit_id",
    UserId: "user_id",
    Url: "url",
    Javascript: "javascript",
    DeviceModel: "device_model",
    TargetApp: "target_app",
} as const;
export type ExternalGateDtoRulesType = ClosedEnum<typeof ExternalGateDtoRulesType>;

export type ExternalGateDtoConditions = {
    targetValue?: Array<string> | Array<number> | string | number | null | undefined;
    operator?: string | undefined;
    field?: any | null | undefined;
    customID?: any | null | undefined;
    type: ExternalGateDtoRulesType;
};

export type ExternalGateDtoRules = {
    /**
     * The name of this rule.
     */
    name: string;
    /**
     * Of the users that meet the conditions of this rule, what percent should return true.
     */
    passPercentage: number;
    /**
     * An array of Condition objects.
     */
    conditions: Array<ExternalGateDtoConditions>;
    /**
     * The environments this rule is enabled for.
     */
    environments?: Array<string> | null | undefined;
    /**
     * The Statsig ID of this rule.
     */
    id?: string | undefined;
    /**
     * The base ID of this rule, i.e. without any added metadata. Will remain the exact same throughout
     */
    baseID?: string | undefined;
};

export type ExternalGateDtoMonitoringMetrics = {
    name: string;
    type: string;
};

export type AllowedReviewers = {
    id: string;
    name: string;
    email: string;
};

export type ReviewSettings = {
    requiredReview: boolean;
    allowedReviewers: Array<AllowedReviewers> | null;
};

export type ActiveReview = {
    reviewID: string;
    reviewStatus: string;
    description: string;
};

export type ExternalGateDto = {
    /**
     * ID
     */
    id: string;
    /**
     * Optional name for the configuration.
     */
    name?: string | undefined;
    idType?: string | undefined;
    description: string;
    /**
     * ID of the last modifier.
     */
    lastModifierID?: any | null | undefined;
    /**
     * Time of the last modification.
     */
    lastModifiedTime?: any | null | undefined;
    /**
     * Email of the last modifier.
     */
    lastModifierEmail?: any | null | undefined;
    /**
     * Name of the last modifier.
     */
    lastModifierName?: any | null | undefined;
    creatorID?: any | null | undefined;
    /**
     * Timestamp when the entity was created.
     */
    createdTime: number;
    /**
     * Name of the creator.
     */
    creatorName?: any | null | undefined;
    creatorEmail?: any | null | undefined;
    tags?: Array<string> | undefined;
    targetApps?: string | Array<string> | undefined;
    /**
     * Holdouts applied to this configuration.
     */
    holdoutIDs?: Array<string> | undefined;
    team?: any | null | undefined;
    checksPerHour?: any | null | undefined;
    status: Status;
    type: ExternalGateDtoType;
    typeReason: TypeReason;
    /**
     * Schema for owner data including ID, type, name. Note that if Entity is created by CONSOLE API, owner will be undefined.
     */
    owner?: Owner | null | undefined;
    isEnabled: boolean;
    rules: Array<ExternalGateDtoRules>;
    measureMetricLifts?: boolean | undefined;
    monitoringMetrics?: Array<ExternalGateDtoMonitoringMetrics> | undefined;
    reviewSettings?: ReviewSettings | undefined;
    activeReview?: ActiveReview | undefined;
};

/** @internal */
export const ExternalGateDtoTargetApps$inboundSchema: z.ZodType<
    ExternalGateDtoTargetApps,
    z.ZodTypeDef,
    unknown
> = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type ExternalGateDtoTargetApps$Outbound = string | Array<string>;

/** @internal */
export const ExternalGateDtoTargetApps$outboundSchema: z.ZodType<
    ExternalGateDtoTargetApps$Outbound,
    z.ZodTypeDef,
    ExternalGateDtoTargetApps
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExternalGateDtoTargetApps$ {
    /** @deprecated use `ExternalGateDtoTargetApps$inboundSchema` instead. */
    export const inboundSchema = ExternalGateDtoTargetApps$inboundSchema;
    /** @deprecated use `ExternalGateDtoTargetApps$outboundSchema` instead. */
    export const outboundSchema = ExternalGateDtoTargetApps$outboundSchema;
    /** @deprecated use `ExternalGateDtoTargetApps$Outbound` instead. */
    export type Outbound = ExternalGateDtoTargetApps$Outbound;
}

/** @internal */
export const Status$inboundSchema: z.ZodNativeEnum<typeof Status> = z.nativeEnum(Status);

/** @internal */
export const Status$outboundSchema: z.ZodNativeEnum<typeof Status> = Status$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Status$ {
    /** @deprecated use `Status$inboundSchema` instead. */
    export const inboundSchema = Status$inboundSchema;
    /** @deprecated use `Status$outboundSchema` instead. */
    export const outboundSchema = Status$outboundSchema;
}

/** @internal */
export const ExternalGateDtoType$inboundSchema: z.ZodNativeEnum<typeof ExternalGateDtoType> =
    z.nativeEnum(ExternalGateDtoType);

/** @internal */
export const ExternalGateDtoType$outboundSchema: z.ZodNativeEnum<typeof ExternalGateDtoType> =
    ExternalGateDtoType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExternalGateDtoType$ {
    /** @deprecated use `ExternalGateDtoType$inboundSchema` instead. */
    export const inboundSchema = ExternalGateDtoType$inboundSchema;
    /** @deprecated use `ExternalGateDtoType$outboundSchema` instead. */
    export const outboundSchema = ExternalGateDtoType$outboundSchema;
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
export const Owner$inboundSchema: z.ZodType<Owner, z.ZodTypeDef, unknown> = z.object({
    ownerID: z.string().optional(),
    ownerType: z.string().optional(),
    ownerName: z.string().optional(),
});

/** @internal */
export type Owner$Outbound = {
    ownerID?: string | undefined;
    ownerType?: string | undefined;
    ownerName?: string | undefined;
};

/** @internal */
export const Owner$outboundSchema: z.ZodType<Owner$Outbound, z.ZodTypeDef, Owner> = z.object({
    ownerID: z.string().optional(),
    ownerType: z.string().optional(),
    ownerName: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Owner$ {
    /** @deprecated use `Owner$inboundSchema` instead. */
    export const inboundSchema = Owner$inboundSchema;
    /** @deprecated use `Owner$outboundSchema` instead. */
    export const outboundSchema = Owner$outboundSchema;
    /** @deprecated use `Owner$Outbound` instead. */
    export type Outbound = Owner$Outbound;
}

/** @internal */
export const ExternalGateDtoTargetValue$inboundSchema: z.ZodType<
    ExternalGateDtoTargetValue,
    z.ZodTypeDef,
    unknown
> = z.union([z.array(z.string()), z.array(z.number()), z.string(), z.number()]);

/** @internal */
export type ExternalGateDtoTargetValue$Outbound = Array<string> | Array<number> | string | number;

/** @internal */
export const ExternalGateDtoTargetValue$outboundSchema: z.ZodType<
    ExternalGateDtoTargetValue$Outbound,
    z.ZodTypeDef,
    ExternalGateDtoTargetValue
> = z.union([z.array(z.string()), z.array(z.number()), z.string(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExternalGateDtoTargetValue$ {
    /** @deprecated use `ExternalGateDtoTargetValue$inboundSchema` instead. */
    export const inboundSchema = ExternalGateDtoTargetValue$inboundSchema;
    /** @deprecated use `ExternalGateDtoTargetValue$outboundSchema` instead. */
    export const outboundSchema = ExternalGateDtoTargetValue$outboundSchema;
    /** @deprecated use `ExternalGateDtoTargetValue$Outbound` instead. */
    export type Outbound = ExternalGateDtoTargetValue$Outbound;
}

/** @internal */
export const ExternalGateDtoRulesType$inboundSchema: z.ZodNativeEnum<
    typeof ExternalGateDtoRulesType
> = z.nativeEnum(ExternalGateDtoRulesType);

/** @internal */
export const ExternalGateDtoRulesType$outboundSchema: z.ZodNativeEnum<
    typeof ExternalGateDtoRulesType
> = ExternalGateDtoRulesType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExternalGateDtoRulesType$ {
    /** @deprecated use `ExternalGateDtoRulesType$inboundSchema` instead. */
    export const inboundSchema = ExternalGateDtoRulesType$inboundSchema;
    /** @deprecated use `ExternalGateDtoRulesType$outboundSchema` instead. */
    export const outboundSchema = ExternalGateDtoRulesType$outboundSchema;
}

/** @internal */
export const ExternalGateDtoConditions$inboundSchema: z.ZodType<
    ExternalGateDtoConditions,
    z.ZodTypeDef,
    unknown
> = z.object({
    targetValue: z
        .nullable(z.union([z.array(z.string()), z.array(z.number()), z.string(), z.number()]))
        .optional(),
    operator: z.string().optional(),
    field: z.nullable(z.any()).optional(),
    customID: z.nullable(z.any()).optional(),
    type: ExternalGateDtoRulesType$inboundSchema,
});

/** @internal */
export type ExternalGateDtoConditions$Outbound = {
    targetValue?: Array<string> | Array<number> | string | number | null | undefined;
    operator?: string | undefined;
    field?: any | null | undefined;
    customID?: any | null | undefined;
    type: string;
};

/** @internal */
export const ExternalGateDtoConditions$outboundSchema: z.ZodType<
    ExternalGateDtoConditions$Outbound,
    z.ZodTypeDef,
    ExternalGateDtoConditions
> = z.object({
    targetValue: z
        .nullable(z.union([z.array(z.string()), z.array(z.number()), z.string(), z.number()]))
        .optional(),
    operator: z.string().optional(),
    field: z.nullable(z.any()).optional(),
    customID: z.nullable(z.any()).optional(),
    type: ExternalGateDtoRulesType$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExternalGateDtoConditions$ {
    /** @deprecated use `ExternalGateDtoConditions$inboundSchema` instead. */
    export const inboundSchema = ExternalGateDtoConditions$inboundSchema;
    /** @deprecated use `ExternalGateDtoConditions$outboundSchema` instead. */
    export const outboundSchema = ExternalGateDtoConditions$outboundSchema;
    /** @deprecated use `ExternalGateDtoConditions$Outbound` instead. */
    export type Outbound = ExternalGateDtoConditions$Outbound;
}

/** @internal */
export const ExternalGateDtoRules$inboundSchema: z.ZodType<
    ExternalGateDtoRules,
    z.ZodTypeDef,
    unknown
> = z.object({
    name: z.string(),
    passPercentage: z.number(),
    conditions: z.array(z.lazy(() => ExternalGateDtoConditions$inboundSchema)),
    environments: z.nullable(z.array(z.string())).optional(),
    id: z.string().optional(),
    baseID: z.string().optional(),
});

/** @internal */
export type ExternalGateDtoRules$Outbound = {
    name: string;
    passPercentage: number;
    conditions: Array<ExternalGateDtoConditions$Outbound>;
    environments?: Array<string> | null | undefined;
    id?: string | undefined;
    baseID?: string | undefined;
};

/** @internal */
export const ExternalGateDtoRules$outboundSchema: z.ZodType<
    ExternalGateDtoRules$Outbound,
    z.ZodTypeDef,
    ExternalGateDtoRules
> = z.object({
    name: z.string(),
    passPercentage: z.number(),
    conditions: z.array(z.lazy(() => ExternalGateDtoConditions$outboundSchema)),
    environments: z.nullable(z.array(z.string())).optional(),
    id: z.string().optional(),
    baseID: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExternalGateDtoRules$ {
    /** @deprecated use `ExternalGateDtoRules$inboundSchema` instead. */
    export const inboundSchema = ExternalGateDtoRules$inboundSchema;
    /** @deprecated use `ExternalGateDtoRules$outboundSchema` instead. */
    export const outboundSchema = ExternalGateDtoRules$outboundSchema;
    /** @deprecated use `ExternalGateDtoRules$Outbound` instead. */
    export type Outbound = ExternalGateDtoRules$Outbound;
}

/** @internal */
export const ExternalGateDtoMonitoringMetrics$inboundSchema: z.ZodType<
    ExternalGateDtoMonitoringMetrics,
    z.ZodTypeDef,
    unknown
> = z.object({
    name: z.string(),
    type: z.string(),
});

/** @internal */
export type ExternalGateDtoMonitoringMetrics$Outbound = {
    name: string;
    type: string;
};

/** @internal */
export const ExternalGateDtoMonitoringMetrics$outboundSchema: z.ZodType<
    ExternalGateDtoMonitoringMetrics$Outbound,
    z.ZodTypeDef,
    ExternalGateDtoMonitoringMetrics
> = z.object({
    name: z.string(),
    type: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExternalGateDtoMonitoringMetrics$ {
    /** @deprecated use `ExternalGateDtoMonitoringMetrics$inboundSchema` instead. */
    export const inboundSchema = ExternalGateDtoMonitoringMetrics$inboundSchema;
    /** @deprecated use `ExternalGateDtoMonitoringMetrics$outboundSchema` instead. */
    export const outboundSchema = ExternalGateDtoMonitoringMetrics$outboundSchema;
    /** @deprecated use `ExternalGateDtoMonitoringMetrics$Outbound` instead. */
    export type Outbound = ExternalGateDtoMonitoringMetrics$Outbound;
}

/** @internal */
export const AllowedReviewers$inboundSchema: z.ZodType<AllowedReviewers, z.ZodTypeDef, unknown> =
    z.object({
        id: z.string(),
        name: z.string(),
        email: z.string(),
    });

/** @internal */
export type AllowedReviewers$Outbound = {
    id: string;
    name: string;
    email: string;
};

/** @internal */
export const AllowedReviewers$outboundSchema: z.ZodType<
    AllowedReviewers$Outbound,
    z.ZodTypeDef,
    AllowedReviewers
> = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AllowedReviewers$ {
    /** @deprecated use `AllowedReviewers$inboundSchema` instead. */
    export const inboundSchema = AllowedReviewers$inboundSchema;
    /** @deprecated use `AllowedReviewers$outboundSchema` instead. */
    export const outboundSchema = AllowedReviewers$outboundSchema;
    /** @deprecated use `AllowedReviewers$Outbound` instead. */
    export type Outbound = AllowedReviewers$Outbound;
}

/** @internal */
export const ReviewSettings$inboundSchema: z.ZodType<ReviewSettings, z.ZodTypeDef, unknown> =
    z.object({
        requiredReview: z.boolean(),
        allowedReviewers: z.nullable(z.array(z.lazy(() => AllowedReviewers$inboundSchema))),
    });

/** @internal */
export type ReviewSettings$Outbound = {
    requiredReview: boolean;
    allowedReviewers: Array<AllowedReviewers$Outbound> | null;
};

/** @internal */
export const ReviewSettings$outboundSchema: z.ZodType<
    ReviewSettings$Outbound,
    z.ZodTypeDef,
    ReviewSettings
> = z.object({
    requiredReview: z.boolean(),
    allowedReviewers: z.nullable(z.array(z.lazy(() => AllowedReviewers$outboundSchema))),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReviewSettings$ {
    /** @deprecated use `ReviewSettings$inboundSchema` instead. */
    export const inboundSchema = ReviewSettings$inboundSchema;
    /** @deprecated use `ReviewSettings$outboundSchema` instead. */
    export const outboundSchema = ReviewSettings$outboundSchema;
    /** @deprecated use `ReviewSettings$Outbound` instead. */
    export type Outbound = ReviewSettings$Outbound;
}

/** @internal */
export const ActiveReview$inboundSchema: z.ZodType<ActiveReview, z.ZodTypeDef, unknown> = z.object({
    reviewID: z.string(),
    reviewStatus: z.string(),
    description: z.string(),
});

/** @internal */
export type ActiveReview$Outbound = {
    reviewID: string;
    reviewStatus: string;
    description: string;
};

/** @internal */
export const ActiveReview$outboundSchema: z.ZodType<
    ActiveReview$Outbound,
    z.ZodTypeDef,
    ActiveReview
> = z.object({
    reviewID: z.string(),
    reviewStatus: z.string(),
    description: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ActiveReview$ {
    /** @deprecated use `ActiveReview$inboundSchema` instead. */
    export const inboundSchema = ActiveReview$inboundSchema;
    /** @deprecated use `ActiveReview$outboundSchema` instead. */
    export const outboundSchema = ActiveReview$outboundSchema;
    /** @deprecated use `ActiveReview$Outbound` instead. */
    export type Outbound = ActiveReview$Outbound;
}

/** @internal */
export const ExternalGateDto$inboundSchema: z.ZodType<ExternalGateDto, z.ZodTypeDef, unknown> =
    z.object({
        id: z.string(),
        name: z.string().optional(),
        idType: z.string().optional(),
        description: z.string(),
        lastModifierID: z.nullable(z.any()).optional(),
        lastModifiedTime: z.nullable(z.any()).optional(),
        lastModifierEmail: z.nullable(z.any()).optional(),
        lastModifierName: z.nullable(z.any()).optional(),
        creatorID: z.nullable(z.any()).optional(),
        createdTime: z.number(),
        creatorName: z.nullable(z.any()).optional(),
        creatorEmail: z.nullable(z.any()).optional(),
        tags: z.array(z.string()).optional(),
        targetApps: z.union([z.string(), z.array(z.string())]).optional(),
        holdoutIDs: z.array(z.string()).optional(),
        team: z.nullable(z.any()).optional(),
        checksPerHour: z.nullable(z.any()).optional(),
        status: Status$inboundSchema,
        type: ExternalGateDtoType$inboundSchema,
        typeReason: TypeReason$inboundSchema,
        owner: z.nullable(z.lazy(() => Owner$inboundSchema)).optional(),
        isEnabled: z.boolean(),
        rules: z.array(z.lazy(() => ExternalGateDtoRules$inboundSchema)),
        measureMetricLifts: z.boolean().optional(),
        monitoringMetrics: z
            .array(z.lazy(() => ExternalGateDtoMonitoringMetrics$inboundSchema))
            .optional(),
        reviewSettings: z.lazy(() => ReviewSettings$inboundSchema).optional(),
        activeReview: z.lazy(() => ActiveReview$inboundSchema).optional(),
    });

/** @internal */
export type ExternalGateDto$Outbound = {
    id: string;
    name?: string | undefined;
    idType?: string | undefined;
    description: string;
    lastModifierID?: any | null | undefined;
    lastModifiedTime?: any | null | undefined;
    lastModifierEmail?: any | null | undefined;
    lastModifierName?: any | null | undefined;
    creatorID?: any | null | undefined;
    createdTime: number;
    creatorName?: any | null | undefined;
    creatorEmail?: any | null | undefined;
    tags?: Array<string> | undefined;
    targetApps?: string | Array<string> | undefined;
    holdoutIDs?: Array<string> | undefined;
    team?: any | null | undefined;
    checksPerHour?: any | null | undefined;
    status: string;
    type: string;
    typeReason: string;
    owner?: Owner$Outbound | null | undefined;
    isEnabled: boolean;
    rules: Array<ExternalGateDtoRules$Outbound>;
    measureMetricLifts?: boolean | undefined;
    monitoringMetrics?: Array<ExternalGateDtoMonitoringMetrics$Outbound> | undefined;
    reviewSettings?: ReviewSettings$Outbound | undefined;
    activeReview?: ActiveReview$Outbound | undefined;
};

/** @internal */
export const ExternalGateDto$outboundSchema: z.ZodType<
    ExternalGateDto$Outbound,
    z.ZodTypeDef,
    ExternalGateDto
> = z.object({
    id: z.string(),
    name: z.string().optional(),
    idType: z.string().optional(),
    description: z.string(),
    lastModifierID: z.nullable(z.any()).optional(),
    lastModifiedTime: z.nullable(z.any()).optional(),
    lastModifierEmail: z.nullable(z.any()).optional(),
    lastModifierName: z.nullable(z.any()).optional(),
    creatorID: z.nullable(z.any()).optional(),
    createdTime: z.number(),
    creatorName: z.nullable(z.any()).optional(),
    creatorEmail: z.nullable(z.any()).optional(),
    tags: z.array(z.string()).optional(),
    targetApps: z.union([z.string(), z.array(z.string())]).optional(),
    holdoutIDs: z.array(z.string()).optional(),
    team: z.nullable(z.any()).optional(),
    checksPerHour: z.nullable(z.any()).optional(),
    status: Status$outboundSchema,
    type: ExternalGateDtoType$outboundSchema,
    typeReason: TypeReason$outboundSchema,
    owner: z.nullable(z.lazy(() => Owner$outboundSchema)).optional(),
    isEnabled: z.boolean(),
    rules: z.array(z.lazy(() => ExternalGateDtoRules$outboundSchema)),
    measureMetricLifts: z.boolean().optional(),
    monitoringMetrics: z
        .array(z.lazy(() => ExternalGateDtoMonitoringMetrics$outboundSchema))
        .optional(),
    reviewSettings: z.lazy(() => ReviewSettings$outboundSchema).optional(),
    activeReview: z.lazy(() => ActiveReview$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExternalGateDto$ {
    /** @deprecated use `ExternalGateDto$inboundSchema` instead. */
    export const inboundSchema = ExternalGateDto$inboundSchema;
    /** @deprecated use `ExternalGateDto$outboundSchema` instead. */
    export const outboundSchema = ExternalGateDto$outboundSchema;
    /** @deprecated use `ExternalGateDto$Outbound` instead. */
    export type Outbound = ExternalGateDto$Outbound;
}