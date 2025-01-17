/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export type MultiDynamicConfigRuleAddDtoTargetValue =
    | Array<string>
    | Array<number>
    | string
    | number;

export const MultiDynamicConfigRuleAddDtoType = {
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
export type MultiDynamicConfigRuleAddDtoType = ClosedEnum<typeof MultiDynamicConfigRuleAddDtoType>;

export type MultiDynamicConfigRuleAddDtoConditions = {
    targetValue?: Array<string> | Array<number> | string | number | null | undefined;
    operator?: string | undefined;
    field?: any | null | undefined;
    customID?: any | null | undefined;
    type: MultiDynamicConfigRuleAddDtoType;
};

export type MultiDynamicConfigRuleAddDtoRules = {
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
    conditions: Array<MultiDynamicConfigRuleAddDtoConditions>;
    environments?: Array<string> | null | undefined;
    /**
     * The Statsig ID of this rule.
     */
    id?: string | undefined;
    /**
     * The base ID of this rule, i.e. without any added metadata. Will remain the exact same throughout
     */
    baseID?: string | undefined;
    returnValue?: { [k: string]: any } | undefined;
    returnValueJson5?: string | undefined;
};

export type MultiDynamicConfigRuleAddDto = {
    /**
     * A list of new dynamic config rules
     */
    rules: Array<MultiDynamicConfigRuleAddDtoRules>;
};

/** @internal */
export const MultiDynamicConfigRuleAddDtoTargetValue$inboundSchema: z.ZodType<
    MultiDynamicConfigRuleAddDtoTargetValue,
    z.ZodTypeDef,
    unknown
> = z.union([z.array(z.string()), z.array(z.number()), z.string(), z.number()]);

/** @internal */
export type MultiDynamicConfigRuleAddDtoTargetValue$Outbound =
    | Array<string>
    | Array<number>
    | string
    | number;

/** @internal */
export const MultiDynamicConfigRuleAddDtoTargetValue$outboundSchema: z.ZodType<
    MultiDynamicConfigRuleAddDtoTargetValue$Outbound,
    z.ZodTypeDef,
    MultiDynamicConfigRuleAddDtoTargetValue
> = z.union([z.array(z.string()), z.array(z.number()), z.string(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MultiDynamicConfigRuleAddDtoTargetValue$ {
    /** @deprecated use `MultiDynamicConfigRuleAddDtoTargetValue$inboundSchema` instead. */
    export const inboundSchema = MultiDynamicConfigRuleAddDtoTargetValue$inboundSchema;
    /** @deprecated use `MultiDynamicConfigRuleAddDtoTargetValue$outboundSchema` instead. */
    export const outboundSchema = MultiDynamicConfigRuleAddDtoTargetValue$outboundSchema;
    /** @deprecated use `MultiDynamicConfigRuleAddDtoTargetValue$Outbound` instead. */
    export type Outbound = MultiDynamicConfigRuleAddDtoTargetValue$Outbound;
}

/** @internal */
export const MultiDynamicConfigRuleAddDtoType$inboundSchema: z.ZodNativeEnum<
    typeof MultiDynamicConfigRuleAddDtoType
> = z.nativeEnum(MultiDynamicConfigRuleAddDtoType);

/** @internal */
export const MultiDynamicConfigRuleAddDtoType$outboundSchema: z.ZodNativeEnum<
    typeof MultiDynamicConfigRuleAddDtoType
> = MultiDynamicConfigRuleAddDtoType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MultiDynamicConfigRuleAddDtoType$ {
    /** @deprecated use `MultiDynamicConfigRuleAddDtoType$inboundSchema` instead. */
    export const inboundSchema = MultiDynamicConfigRuleAddDtoType$inboundSchema;
    /** @deprecated use `MultiDynamicConfigRuleAddDtoType$outboundSchema` instead. */
    export const outboundSchema = MultiDynamicConfigRuleAddDtoType$outboundSchema;
}

/** @internal */
export const MultiDynamicConfigRuleAddDtoConditions$inboundSchema: z.ZodType<
    MultiDynamicConfigRuleAddDtoConditions,
    z.ZodTypeDef,
    unknown
> = z.object({
    targetValue: z
        .nullable(z.union([z.array(z.string()), z.array(z.number()), z.string(), z.number()]))
        .optional(),
    operator: z.string().optional(),
    field: z.nullable(z.any()).optional(),
    customID: z.nullable(z.any()).optional(),
    type: MultiDynamicConfigRuleAddDtoType$inboundSchema,
});

/** @internal */
export type MultiDynamicConfigRuleAddDtoConditions$Outbound = {
    targetValue?: Array<string> | Array<number> | string | number | null | undefined;
    operator?: string | undefined;
    field?: any | null | undefined;
    customID?: any | null | undefined;
    type: string;
};

/** @internal */
export const MultiDynamicConfigRuleAddDtoConditions$outboundSchema: z.ZodType<
    MultiDynamicConfigRuleAddDtoConditions$Outbound,
    z.ZodTypeDef,
    MultiDynamicConfigRuleAddDtoConditions
> = z.object({
    targetValue: z
        .nullable(z.union([z.array(z.string()), z.array(z.number()), z.string(), z.number()]))
        .optional(),
    operator: z.string().optional(),
    field: z.nullable(z.any()).optional(),
    customID: z.nullable(z.any()).optional(),
    type: MultiDynamicConfigRuleAddDtoType$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MultiDynamicConfigRuleAddDtoConditions$ {
    /** @deprecated use `MultiDynamicConfigRuleAddDtoConditions$inboundSchema` instead. */
    export const inboundSchema = MultiDynamicConfigRuleAddDtoConditions$inboundSchema;
    /** @deprecated use `MultiDynamicConfigRuleAddDtoConditions$outboundSchema` instead. */
    export const outboundSchema = MultiDynamicConfigRuleAddDtoConditions$outboundSchema;
    /** @deprecated use `MultiDynamicConfigRuleAddDtoConditions$Outbound` instead. */
    export type Outbound = MultiDynamicConfigRuleAddDtoConditions$Outbound;
}

/** @internal */
export const MultiDynamicConfigRuleAddDtoRules$inboundSchema: z.ZodType<
    MultiDynamicConfigRuleAddDtoRules,
    z.ZodTypeDef,
    unknown
> = z.object({
    name: z.string(),
    passPercentage: z.number(),
    conditions: z.array(z.lazy(() => MultiDynamicConfigRuleAddDtoConditions$inboundSchema)),
    environments: z.nullable(z.array(z.string())).optional(),
    id: z.string().optional(),
    baseID: z.string().optional(),
    returnValue: z.record(z.any()).optional(),
    returnValueJson5: z.string().optional(),
});

/** @internal */
export type MultiDynamicConfigRuleAddDtoRules$Outbound = {
    name: string;
    passPercentage: number;
    conditions: Array<MultiDynamicConfigRuleAddDtoConditions$Outbound>;
    environments?: Array<string> | null | undefined;
    id?: string | undefined;
    baseID?: string | undefined;
    returnValue?: { [k: string]: any } | undefined;
    returnValueJson5?: string | undefined;
};

/** @internal */
export const MultiDynamicConfigRuleAddDtoRules$outboundSchema: z.ZodType<
    MultiDynamicConfigRuleAddDtoRules$Outbound,
    z.ZodTypeDef,
    MultiDynamicConfigRuleAddDtoRules
> = z.object({
    name: z.string(),
    passPercentage: z.number(),
    conditions: z.array(z.lazy(() => MultiDynamicConfigRuleAddDtoConditions$outboundSchema)),
    environments: z.nullable(z.array(z.string())).optional(),
    id: z.string().optional(),
    baseID: z.string().optional(),
    returnValue: z.record(z.any()).optional(),
    returnValueJson5: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MultiDynamicConfigRuleAddDtoRules$ {
    /** @deprecated use `MultiDynamicConfigRuleAddDtoRules$inboundSchema` instead. */
    export const inboundSchema = MultiDynamicConfigRuleAddDtoRules$inboundSchema;
    /** @deprecated use `MultiDynamicConfigRuleAddDtoRules$outboundSchema` instead. */
    export const outboundSchema = MultiDynamicConfigRuleAddDtoRules$outboundSchema;
    /** @deprecated use `MultiDynamicConfigRuleAddDtoRules$Outbound` instead. */
    export type Outbound = MultiDynamicConfigRuleAddDtoRules$Outbound;
}

/** @internal */
export const MultiDynamicConfigRuleAddDto$inboundSchema: z.ZodType<
    MultiDynamicConfigRuleAddDto,
    z.ZodTypeDef,
    unknown
> = z.object({
    rules: z.array(z.lazy(() => MultiDynamicConfigRuleAddDtoRules$inboundSchema)),
});

/** @internal */
export type MultiDynamicConfigRuleAddDto$Outbound = {
    rules: Array<MultiDynamicConfigRuleAddDtoRules$Outbound>;
};

/** @internal */
export const MultiDynamicConfigRuleAddDto$outboundSchema: z.ZodType<
    MultiDynamicConfigRuleAddDto$Outbound,
    z.ZodTypeDef,
    MultiDynamicConfigRuleAddDto
> = z.object({
    rules: z.array(z.lazy(() => MultiDynamicConfigRuleAddDtoRules$outboundSchema)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MultiDynamicConfigRuleAddDto$ {
    /** @deprecated use `MultiDynamicConfigRuleAddDto$inboundSchema` instead. */
    export const inboundSchema = MultiDynamicConfigRuleAddDto$inboundSchema;
    /** @deprecated use `MultiDynamicConfigRuleAddDto$outboundSchema` instead. */
    export const outboundSchema = MultiDynamicConfigRuleAddDto$outboundSchema;
    /** @deprecated use `MultiDynamicConfigRuleAddDto$Outbound` instead. */
    export type Outbound = MultiDynamicConfigRuleAddDto$Outbound;
}
