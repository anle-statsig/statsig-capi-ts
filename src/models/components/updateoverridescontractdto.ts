/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Contract for updating ID overrides
 */
export type Two = {
    /**
     * List of user IDs
     */
    passingUserIDs: Array<string>;
    /**
     * List of user IDs
     */
    failingUserIDs: Array<string>;
    /**
     * Optional list of custom IDs
     */
    passingCustomIDs?: Array<string> | undefined;
    /**
     * Optional list of custom IDs
     */
    failingCustomIDs?: Array<string> | undefined;
};

/**
 * Contract for environment override
 */
export type UpdateOverridesContractDtoEnvironmentOverrides = {
    /**
     * Environment
     */
    environment?: any | null | undefined;
    /**
     * Unit ID
     */
    unitID?: any | null | undefined;
    /**
     * List of passing IDs
     */
    passingIDs: Array<string>;
    /**
     * List of failing IDs
     */
    failingIDs: Array<string>;
};

/**
 * Contract for updating environment overrides
 */
export type One = {
    environmentOverrides: Array<UpdateOverridesContractDtoEnvironmentOverrides>;
};

/**
 * Contract for updating overrides
 */
export type UpdateOverridesContractDto = One | Two;

/** @internal */
export const Two$inboundSchema: z.ZodType<Two, z.ZodTypeDef, unknown> = z.object({
    passingUserIDs: z.array(z.string()),
    failingUserIDs: z.array(z.string()),
    passingCustomIDs: z.array(z.string()).optional(),
    failingCustomIDs: z.array(z.string()).optional(),
});

/** @internal */
export type Two$Outbound = {
    passingUserIDs: Array<string>;
    failingUserIDs: Array<string>;
    passingCustomIDs?: Array<string> | undefined;
    failingCustomIDs?: Array<string> | undefined;
};

/** @internal */
export const Two$outboundSchema: z.ZodType<Two$Outbound, z.ZodTypeDef, Two> = z.object({
    passingUserIDs: z.array(z.string()),
    failingUserIDs: z.array(z.string()),
    passingCustomIDs: z.array(z.string()).optional(),
    failingCustomIDs: z.array(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Two$ {
    /** @deprecated use `Two$inboundSchema` instead. */
    export const inboundSchema = Two$inboundSchema;
    /** @deprecated use `Two$outboundSchema` instead. */
    export const outboundSchema = Two$outboundSchema;
    /** @deprecated use `Two$Outbound` instead. */
    export type Outbound = Two$Outbound;
}

/** @internal */
export const UpdateOverridesContractDtoEnvironmentOverrides$inboundSchema: z.ZodType<
    UpdateOverridesContractDtoEnvironmentOverrides,
    z.ZodTypeDef,
    unknown
> = z.object({
    environment: z.nullable(z.any()).optional(),
    unitID: z.nullable(z.any()).optional(),
    passingIDs: z.array(z.string()),
    failingIDs: z.array(z.string()),
});

/** @internal */
export type UpdateOverridesContractDtoEnvironmentOverrides$Outbound = {
    environment?: any | null | undefined;
    unitID?: any | null | undefined;
    passingIDs: Array<string>;
    failingIDs: Array<string>;
};

/** @internal */
export const UpdateOverridesContractDtoEnvironmentOverrides$outboundSchema: z.ZodType<
    UpdateOverridesContractDtoEnvironmentOverrides$Outbound,
    z.ZodTypeDef,
    UpdateOverridesContractDtoEnvironmentOverrides
> = z.object({
    environment: z.nullable(z.any()).optional(),
    unitID: z.nullable(z.any()).optional(),
    passingIDs: z.array(z.string()),
    failingIDs: z.array(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateOverridesContractDtoEnvironmentOverrides$ {
    /** @deprecated use `UpdateOverridesContractDtoEnvironmentOverrides$inboundSchema` instead. */
    export const inboundSchema = UpdateOverridesContractDtoEnvironmentOverrides$inboundSchema;
    /** @deprecated use `UpdateOverridesContractDtoEnvironmentOverrides$outboundSchema` instead. */
    export const outboundSchema = UpdateOverridesContractDtoEnvironmentOverrides$outboundSchema;
    /** @deprecated use `UpdateOverridesContractDtoEnvironmentOverrides$Outbound` instead. */
    export type Outbound = UpdateOverridesContractDtoEnvironmentOverrides$Outbound;
}

/** @internal */
export const One$inboundSchema: z.ZodType<One, z.ZodTypeDef, unknown> = z.object({
    environmentOverrides: z.array(
        z.lazy(() => UpdateOverridesContractDtoEnvironmentOverrides$inboundSchema)
    ),
});

/** @internal */
export type One$Outbound = {
    environmentOverrides: Array<UpdateOverridesContractDtoEnvironmentOverrides$Outbound>;
};

/** @internal */
export const One$outboundSchema: z.ZodType<One$Outbound, z.ZodTypeDef, One> = z.object({
    environmentOverrides: z.array(
        z.lazy(() => UpdateOverridesContractDtoEnvironmentOverrides$outboundSchema)
    ),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace One$ {
    /** @deprecated use `One$inboundSchema` instead. */
    export const inboundSchema = One$inboundSchema;
    /** @deprecated use `One$outboundSchema` instead. */
    export const outboundSchema = One$outboundSchema;
    /** @deprecated use `One$Outbound` instead. */
    export type Outbound = One$Outbound;
}

/** @internal */
export const UpdateOverridesContractDto$inboundSchema: z.ZodType<
    UpdateOverridesContractDto,
    z.ZodTypeDef,
    unknown
> = z.union([z.lazy(() => One$inboundSchema), z.lazy(() => Two$inboundSchema)]);

/** @internal */
export type UpdateOverridesContractDto$Outbound = One$Outbound | Two$Outbound;

/** @internal */
export const UpdateOverridesContractDto$outboundSchema: z.ZodType<
    UpdateOverridesContractDto$Outbound,
    z.ZodTypeDef,
    UpdateOverridesContractDto
> = z.union([z.lazy(() => One$outboundSchema), z.lazy(() => Two$outboundSchema)]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateOverridesContractDto$ {
    /** @deprecated use `UpdateOverridesContractDto$inboundSchema` instead. */
    export const inboundSchema = UpdateOverridesContractDto$inboundSchema;
    /** @deprecated use `UpdateOverridesContractDto$outboundSchema` instead. */
    export const outboundSchema = UpdateOverridesContractDto$outboundSchema;
    /** @deprecated use `UpdateOverridesContractDto$Outbound` instead. */
    export type Outbound = UpdateOverridesContractDto$Outbound;
}