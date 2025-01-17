/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const SegmentDtoType = {
    IdList: "id_list",
    RuleBased: "rule_based",
    AnalysisList: "analysis_list",
} as const;
export type SegmentDtoType = ClosedEnum<typeof SegmentDtoType>;

export type SegmentDtoTargetValue = Array<string> | Array<number> | string | number;

export const SegmentDtoRulesType = {
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
export type SegmentDtoRulesType = ClosedEnum<typeof SegmentDtoRulesType>;

export type SegmentDtoConditions = {
    targetValue?: Array<string> | Array<number> | string | number | null | undefined;
    operator?: string | undefined;
    field?: any | null | undefined;
    customID?: any | null | undefined;
    type: SegmentDtoRulesType;
};

export type SegmentDtoRules = {
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
    conditions: Array<SegmentDtoConditions>;
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

export type SegmentDto = {
    /**
     * Is the segment enabled.
     */
    isEnabled: boolean;
    type: SegmentDtoType;
    /**
     * For id_list segments: the length of the ID list
     */
    count?: number | undefined;
    /**
     * Rule Object
     */
    rules?: Array<SegmentDtoRules> | undefined;
    /**
     * Optional tags for categorization.
     */
    tags?: Array<string> | undefined;
    /**
     * ID
     */
    id: string;
    /**
     * Optional name for the configuration.
     */
    name?: string | undefined;
    /**
     * Type of ID
     */
    idType: string;
    /**
     * Detailed description of the configuration’s purpose.
     */
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
    /**
     * ID of the user who created the entity.
     */
    creatorID?: any | null | undefined;
    /**
     * Timestamp when the entity was created.
     */
    createdTime: number;
    /**
     * Name of the creator.
     */
    creatorName?: any | null | undefined;
    /**
     * Email of the creator.
     */
    creatorEmail?: any | null | undefined;
    /**
     * List of target applications associated with this configuration.
     */
    targetApps?: Array<string> | undefined;
    /**
     * Holdouts applied to this configuration.
     */
    holdoutIDs?: Array<string> | undefined;
    /**
     * Optional identifier for the responsible team.
     */
    team?: any | null | undefined;
};

/** @internal */
export const SegmentDtoType$inboundSchema: z.ZodNativeEnum<typeof SegmentDtoType> =
    z.nativeEnum(SegmentDtoType);

/** @internal */
export const SegmentDtoType$outboundSchema: z.ZodNativeEnum<typeof SegmentDtoType> =
    SegmentDtoType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SegmentDtoType$ {
    /** @deprecated use `SegmentDtoType$inboundSchema` instead. */
    export const inboundSchema = SegmentDtoType$inboundSchema;
    /** @deprecated use `SegmentDtoType$outboundSchema` instead. */
    export const outboundSchema = SegmentDtoType$outboundSchema;
}

/** @internal */
export const SegmentDtoTargetValue$inboundSchema: z.ZodType<
    SegmentDtoTargetValue,
    z.ZodTypeDef,
    unknown
> = z.union([z.array(z.string()), z.array(z.number()), z.string(), z.number()]);

/** @internal */
export type SegmentDtoTargetValue$Outbound = Array<string> | Array<number> | string | number;

/** @internal */
export const SegmentDtoTargetValue$outboundSchema: z.ZodType<
    SegmentDtoTargetValue$Outbound,
    z.ZodTypeDef,
    SegmentDtoTargetValue
> = z.union([z.array(z.string()), z.array(z.number()), z.string(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SegmentDtoTargetValue$ {
    /** @deprecated use `SegmentDtoTargetValue$inboundSchema` instead. */
    export const inboundSchema = SegmentDtoTargetValue$inboundSchema;
    /** @deprecated use `SegmentDtoTargetValue$outboundSchema` instead. */
    export const outboundSchema = SegmentDtoTargetValue$outboundSchema;
    /** @deprecated use `SegmentDtoTargetValue$Outbound` instead. */
    export type Outbound = SegmentDtoTargetValue$Outbound;
}

/** @internal */
export const SegmentDtoRulesType$inboundSchema: z.ZodNativeEnum<typeof SegmentDtoRulesType> =
    z.nativeEnum(SegmentDtoRulesType);

/** @internal */
export const SegmentDtoRulesType$outboundSchema: z.ZodNativeEnum<typeof SegmentDtoRulesType> =
    SegmentDtoRulesType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SegmentDtoRulesType$ {
    /** @deprecated use `SegmentDtoRulesType$inboundSchema` instead. */
    export const inboundSchema = SegmentDtoRulesType$inboundSchema;
    /** @deprecated use `SegmentDtoRulesType$outboundSchema` instead. */
    export const outboundSchema = SegmentDtoRulesType$outboundSchema;
}

/** @internal */
export const SegmentDtoConditions$inboundSchema: z.ZodType<
    SegmentDtoConditions,
    z.ZodTypeDef,
    unknown
> = z.object({
    targetValue: z
        .nullable(z.union([z.array(z.string()), z.array(z.number()), z.string(), z.number()]))
        .optional(),
    operator: z.string().optional(),
    field: z.nullable(z.any()).optional(),
    customID: z.nullable(z.any()).optional(),
    type: SegmentDtoRulesType$inboundSchema,
});

/** @internal */
export type SegmentDtoConditions$Outbound = {
    targetValue?: Array<string> | Array<number> | string | number | null | undefined;
    operator?: string | undefined;
    field?: any | null | undefined;
    customID?: any | null | undefined;
    type: string;
};

/** @internal */
export const SegmentDtoConditions$outboundSchema: z.ZodType<
    SegmentDtoConditions$Outbound,
    z.ZodTypeDef,
    SegmentDtoConditions
> = z.object({
    targetValue: z
        .nullable(z.union([z.array(z.string()), z.array(z.number()), z.string(), z.number()]))
        .optional(),
    operator: z.string().optional(),
    field: z.nullable(z.any()).optional(),
    customID: z.nullable(z.any()).optional(),
    type: SegmentDtoRulesType$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SegmentDtoConditions$ {
    /** @deprecated use `SegmentDtoConditions$inboundSchema` instead. */
    export const inboundSchema = SegmentDtoConditions$inboundSchema;
    /** @deprecated use `SegmentDtoConditions$outboundSchema` instead. */
    export const outboundSchema = SegmentDtoConditions$outboundSchema;
    /** @deprecated use `SegmentDtoConditions$Outbound` instead. */
    export type Outbound = SegmentDtoConditions$Outbound;
}

/** @internal */
export const SegmentDtoRules$inboundSchema: z.ZodType<SegmentDtoRules, z.ZodTypeDef, unknown> =
    z.object({
        name: z.string(),
        passPercentage: z.number(),
        conditions: z.array(z.lazy(() => SegmentDtoConditions$inboundSchema)),
        environments: z.nullable(z.array(z.string())).optional(),
        id: z.string().optional(),
        baseID: z.string().optional(),
    });

/** @internal */
export type SegmentDtoRules$Outbound = {
    name: string;
    passPercentage: number;
    conditions: Array<SegmentDtoConditions$Outbound>;
    environments?: Array<string> | null | undefined;
    id?: string | undefined;
    baseID?: string | undefined;
};

/** @internal */
export const SegmentDtoRules$outboundSchema: z.ZodType<
    SegmentDtoRules$Outbound,
    z.ZodTypeDef,
    SegmentDtoRules
> = z.object({
    name: z.string(),
    passPercentage: z.number(),
    conditions: z.array(z.lazy(() => SegmentDtoConditions$outboundSchema)),
    environments: z.nullable(z.array(z.string())).optional(),
    id: z.string().optional(),
    baseID: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SegmentDtoRules$ {
    /** @deprecated use `SegmentDtoRules$inboundSchema` instead. */
    export const inboundSchema = SegmentDtoRules$inboundSchema;
    /** @deprecated use `SegmentDtoRules$outboundSchema` instead. */
    export const outboundSchema = SegmentDtoRules$outboundSchema;
    /** @deprecated use `SegmentDtoRules$Outbound` instead. */
    export type Outbound = SegmentDtoRules$Outbound;
}

/** @internal */
export const SegmentDto$inboundSchema: z.ZodType<SegmentDto, z.ZodTypeDef, unknown> = z.object({
    isEnabled: z.boolean(),
    type: SegmentDtoType$inboundSchema,
    count: z.number().optional(),
    rules: z.array(z.lazy(() => SegmentDtoRules$inboundSchema)).optional(),
    tags: z.array(z.string()).optional(),
    id: z.string(),
    name: z.string().optional(),
    idType: z.string(),
    description: z.string(),
    lastModifierID: z.nullable(z.any()).optional(),
    lastModifiedTime: z.nullable(z.any()).optional(),
    lastModifierEmail: z.nullable(z.any()).optional(),
    lastModifierName: z.nullable(z.any()).optional(),
    creatorID: z.nullable(z.any()).optional(),
    createdTime: z.number(),
    creatorName: z.nullable(z.any()).optional(),
    creatorEmail: z.nullable(z.any()).optional(),
    targetApps: z.array(z.string()).optional(),
    holdoutIDs: z.array(z.string()).optional(),
    team: z.nullable(z.any()).optional(),
});

/** @internal */
export type SegmentDto$Outbound = {
    isEnabled: boolean;
    type: string;
    count?: number | undefined;
    rules?: Array<SegmentDtoRules$Outbound> | undefined;
    tags?: Array<string> | undefined;
    id: string;
    name?: string | undefined;
    idType: string;
    description: string;
    lastModifierID?: any | null | undefined;
    lastModifiedTime?: any | null | undefined;
    lastModifierEmail?: any | null | undefined;
    lastModifierName?: any | null | undefined;
    creatorID?: any | null | undefined;
    createdTime: number;
    creatorName?: any | null | undefined;
    creatorEmail?: any | null | undefined;
    targetApps?: Array<string> | undefined;
    holdoutIDs?: Array<string> | undefined;
    team?: any | null | undefined;
};

/** @internal */
export const SegmentDto$outboundSchema: z.ZodType<SegmentDto$Outbound, z.ZodTypeDef, SegmentDto> =
    z.object({
        isEnabled: z.boolean(),
        type: SegmentDtoType$outboundSchema,
        count: z.number().optional(),
        rules: z.array(z.lazy(() => SegmentDtoRules$outboundSchema)).optional(),
        tags: z.array(z.string()).optional(),
        id: z.string(),
        name: z.string().optional(),
        idType: z.string(),
        description: z.string(),
        lastModifierID: z.nullable(z.any()).optional(),
        lastModifiedTime: z.nullable(z.any()).optional(),
        lastModifierEmail: z.nullable(z.any()).optional(),
        lastModifierName: z.nullable(z.any()).optional(),
        creatorID: z.nullable(z.any()).optional(),
        createdTime: z.number(),
        creatorName: z.nullable(z.any()).optional(),
        creatorEmail: z.nullable(z.any()).optional(),
        targetApps: z.array(z.string()).optional(),
        holdoutIDs: z.array(z.string()).optional(),
        team: z.nullable(z.any()).optional(),
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SegmentDto$ {
    /** @deprecated use `SegmentDto$inboundSchema` instead. */
    export const inboundSchema = SegmentDto$inboundSchema;
    /** @deprecated use `SegmentDto$outboundSchema` instead. */
    export const outboundSchema = SegmentDto$outboundSchema;
    /** @deprecated use `SegmentDto$Outbound` instead. */
    export type Outbound = SegmentDto$Outbound;
}
