/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export type TargetValue = Array<string> | Array<number> | string | number;

export const RuleUpdateDtoType = {
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
export type RuleUpdateDtoType = ClosedEnum<typeof RuleUpdateDtoType>;

export type Conditions = {
    targetValue?: Array<string> | Array<number> | string | number | null | undefined;
    operator?: string | undefined;
    field?: any | null | undefined;
    customID?: any | null | undefined;
    type: RuleUpdateDtoType;
};

export type RuleUpdateDto = {
    /**
     * The name of this rule.
     */
    name?: string | undefined;
    /**
     * Of the users that meet the conditions of this rule, what percent should return true.
     */
    passPercentage?: number | undefined;
    /**
     * An array of Condition objects.
     */
    conditions?: Array<Conditions> | undefined;
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

/** @internal */
export const TargetValue$inboundSchema: z.ZodType<TargetValue, z.ZodTypeDef, unknown> = z.union([
    z.array(z.string()),
    z.array(z.number()),
    z.string(),
    z.number(),
]);

/** @internal */
export type TargetValue$Outbound = Array<string> | Array<number> | string | number;

/** @internal */
export const TargetValue$outboundSchema: z.ZodType<
    TargetValue$Outbound,
    z.ZodTypeDef,
    TargetValue
> = z.union([z.array(z.string()), z.array(z.number()), z.string(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TargetValue$ {
    /** @deprecated use `TargetValue$inboundSchema` instead. */
    export const inboundSchema = TargetValue$inboundSchema;
    /** @deprecated use `TargetValue$outboundSchema` instead. */
    export const outboundSchema = TargetValue$outboundSchema;
    /** @deprecated use `TargetValue$Outbound` instead. */
    export type Outbound = TargetValue$Outbound;
}

/** @internal */
export const RuleUpdateDtoType$inboundSchema: z.ZodNativeEnum<typeof RuleUpdateDtoType> =
    z.nativeEnum(RuleUpdateDtoType);

/** @internal */
export const RuleUpdateDtoType$outboundSchema: z.ZodNativeEnum<typeof RuleUpdateDtoType> =
    RuleUpdateDtoType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RuleUpdateDtoType$ {
    /** @deprecated use `RuleUpdateDtoType$inboundSchema` instead. */
    export const inboundSchema = RuleUpdateDtoType$inboundSchema;
    /** @deprecated use `RuleUpdateDtoType$outboundSchema` instead. */
    export const outboundSchema = RuleUpdateDtoType$outboundSchema;
}

/** @internal */
export const Conditions$inboundSchema: z.ZodType<Conditions, z.ZodTypeDef, unknown> = z.object({
    targetValue: z
        .nullable(z.union([z.array(z.string()), z.array(z.number()), z.string(), z.number()]))
        .optional(),
    operator: z.string().optional(),
    field: z.nullable(z.any()).optional(),
    customID: z.nullable(z.any()).optional(),
    type: RuleUpdateDtoType$inboundSchema,
});

/** @internal */
export type Conditions$Outbound = {
    targetValue?: Array<string> | Array<number> | string | number | null | undefined;
    operator?: string | undefined;
    field?: any | null | undefined;
    customID?: any | null | undefined;
    type: string;
};

/** @internal */
export const Conditions$outboundSchema: z.ZodType<Conditions$Outbound, z.ZodTypeDef, Conditions> =
    z.object({
        targetValue: z
            .nullable(z.union([z.array(z.string()), z.array(z.number()), z.string(), z.number()]))
            .optional(),
        operator: z.string().optional(),
        field: z.nullable(z.any()).optional(),
        customID: z.nullable(z.any()).optional(),
        type: RuleUpdateDtoType$outboundSchema,
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Conditions$ {
    /** @deprecated use `Conditions$inboundSchema` instead. */
    export const inboundSchema = Conditions$inboundSchema;
    /** @deprecated use `Conditions$outboundSchema` instead. */
    export const outboundSchema = Conditions$outboundSchema;
    /** @deprecated use `Conditions$Outbound` instead. */
    export type Outbound = Conditions$Outbound;
}

/** @internal */
export const RuleUpdateDto$inboundSchema: z.ZodType<RuleUpdateDto, z.ZodTypeDef, unknown> =
    z.object({
        name: z.string().optional(),
        passPercentage: z.number().optional(),
        conditions: z.array(z.lazy(() => Conditions$inboundSchema)).optional(),
        environments: z.nullable(z.array(z.string())).optional(),
        id: z.string().optional(),
        baseID: z.string().optional(),
    });

/** @internal */
export type RuleUpdateDto$Outbound = {
    name?: string | undefined;
    passPercentage?: number | undefined;
    conditions?: Array<Conditions$Outbound> | undefined;
    environments?: Array<string> | null | undefined;
    id?: string | undefined;
    baseID?: string | undefined;
};

/** @internal */
export const RuleUpdateDto$outboundSchema: z.ZodType<
    RuleUpdateDto$Outbound,
    z.ZodTypeDef,
    RuleUpdateDto
> = z.object({
    name: z.string().optional(),
    passPercentage: z.number().optional(),
    conditions: z.array(z.lazy(() => Conditions$outboundSchema)).optional(),
    environments: z.nullable(z.array(z.string())).optional(),
    id: z.string().optional(),
    baseID: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RuleUpdateDto$ {
    /** @deprecated use `RuleUpdateDto$inboundSchema` instead. */
    export const inboundSchema = RuleUpdateDto$inboundSchema;
    /** @deprecated use `RuleUpdateDto$outboundSchema` instead. */
    export const outboundSchema = RuleUpdateDto$outboundSchema;
    /** @deprecated use `RuleUpdateDto$Outbound` instead. */
    export type Outbound = RuleUpdateDto$Outbound;
}