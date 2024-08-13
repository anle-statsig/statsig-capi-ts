/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * List of target applications that this layer is intended for.
 */
export type LayerContractDtoTargetApps = string | Array<string>;

/**
 * The data type that this parameter returns. Allowed types include: string, boolean, number, object, and array.
 */
export const LayerContractDtoType = {
    String: "string",
    Number: "number",
    Boolean: "boolean",
    Object: "object",
    Array: "array",
} as const;
/**
 * The data type that this parameter returns. Allowed types include: string, boolean, number, object, and array.
 */
export type LayerContractDtoType = ClosedEnum<typeof LayerContractDtoType>;

export type Five = string | number | boolean | { [k: string]: any };

/**
 * The default value for this parameter, which must match the specified type.
 */
export type DefaultValue =
    | string
    | number
    | boolean
    | { [k: string]: any }
    | Array<string | number | boolean | { [k: string]: any }>;

export type ParametersT = {
    /**
     * The name of this parameter, used for identification within the layer.
     */
    name: string;
    /**
     * The data type that this parameter returns. Allowed types include: string, boolean, number, object, and array.
     */
    type: LayerContractDtoType;
    /**
     * The default value for this parameter, which must match the specified type.
     */
    defaultValue:
        | string
        | number
        | boolean
        | { [k: string]: any }
        | Array<string | number | boolean | { [k: string]: any }>;
};

export type LayerContractDto = {
    /**
     * ID
     */
    id: string;
    /**
     * Optional name for the configuration.
     */
    name?: string | undefined;
    /**
     * The ID type used for this layer, important for validation.
     */
    idType: string;
    /**
     * A detailed description of the layer, explaining its purpose and functionality.
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
     * Optional tags for categorization.
     */
    tags?: Array<string> | undefined;
    /**
     * List of target applications that this layer is intended for.
     */
    targetApps?: string | Array<string> | undefined;
    /**
     * Holdouts applied to this configuration.
     */
    holdoutIDs?: Array<string> | undefined;
    /**
     * Optional identifier for the responsible team.
     */
    team?: any | null | undefined;
    /**
     * Indicates if the layer was automatically created by Statsig during experiment creation.
     */
    isImplicitLayer: boolean;
    /**
     * An array of parameters associated with the layer, each defining specific attributes.
     */
    parameters: Array<ParametersT>;
};

/** @internal */
export const LayerContractDtoTargetApps$inboundSchema: z.ZodType<
    LayerContractDtoTargetApps,
    z.ZodTypeDef,
    unknown
> = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type LayerContractDtoTargetApps$Outbound = string | Array<string>;

/** @internal */
export const LayerContractDtoTargetApps$outboundSchema: z.ZodType<
    LayerContractDtoTargetApps$Outbound,
    z.ZodTypeDef,
    LayerContractDtoTargetApps
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LayerContractDtoTargetApps$ {
    /** @deprecated use `LayerContractDtoTargetApps$inboundSchema` instead. */
    export const inboundSchema = LayerContractDtoTargetApps$inboundSchema;
    /** @deprecated use `LayerContractDtoTargetApps$outboundSchema` instead. */
    export const outboundSchema = LayerContractDtoTargetApps$outboundSchema;
    /** @deprecated use `LayerContractDtoTargetApps$Outbound` instead. */
    export type Outbound = LayerContractDtoTargetApps$Outbound;
}

/** @internal */
export const LayerContractDtoType$inboundSchema: z.ZodNativeEnum<typeof LayerContractDtoType> =
    z.nativeEnum(LayerContractDtoType);

/** @internal */
export const LayerContractDtoType$outboundSchema: z.ZodNativeEnum<typeof LayerContractDtoType> =
    LayerContractDtoType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LayerContractDtoType$ {
    /** @deprecated use `LayerContractDtoType$inboundSchema` instead. */
    export const inboundSchema = LayerContractDtoType$inboundSchema;
    /** @deprecated use `LayerContractDtoType$outboundSchema` instead. */
    export const outboundSchema = LayerContractDtoType$outboundSchema;
}

/** @internal */
export const Five$inboundSchema: z.ZodType<Five, z.ZodTypeDef, unknown> = z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.record(z.any()),
]);

/** @internal */
export type Five$Outbound = string | number | boolean | { [k: string]: any };

/** @internal */
export const Five$outboundSchema: z.ZodType<Five$Outbound, z.ZodTypeDef, Five> = z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.record(z.any()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Five$ {
    /** @deprecated use `Five$inboundSchema` instead. */
    export const inboundSchema = Five$inboundSchema;
    /** @deprecated use `Five$outboundSchema` instead. */
    export const outboundSchema = Five$outboundSchema;
    /** @deprecated use `Five$Outbound` instead. */
    export type Outbound = Five$Outbound;
}

/** @internal */
export const DefaultValue$inboundSchema: z.ZodType<DefaultValue, z.ZodTypeDef, unknown> = z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.record(z.any()),
    z.array(z.union([z.string(), z.number(), z.boolean(), z.record(z.any())])),
]);

/** @internal */
export type DefaultValue$Outbound =
    | string
    | number
    | boolean
    | { [k: string]: any }
    | Array<string | number | boolean | { [k: string]: any }>;

/** @internal */
export const DefaultValue$outboundSchema: z.ZodType<
    DefaultValue$Outbound,
    z.ZodTypeDef,
    DefaultValue
> = z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.record(z.any()),
    z.array(z.union([z.string(), z.number(), z.boolean(), z.record(z.any())])),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DefaultValue$ {
    /** @deprecated use `DefaultValue$inboundSchema` instead. */
    export const inboundSchema = DefaultValue$inboundSchema;
    /** @deprecated use `DefaultValue$outboundSchema` instead. */
    export const outboundSchema = DefaultValue$outboundSchema;
    /** @deprecated use `DefaultValue$Outbound` instead. */
    export type Outbound = DefaultValue$Outbound;
}

/** @internal */
export const ParametersT$inboundSchema: z.ZodType<ParametersT, z.ZodTypeDef, unknown> = z.object({
    name: z.string(),
    type: LayerContractDtoType$inboundSchema,
    defaultValue: z.union([
        z.string(),
        z.number(),
        z.boolean(),
        z.record(z.any()),
        z.array(z.union([z.string(), z.number(), z.boolean(), z.record(z.any())])),
    ]),
});

/** @internal */
export type ParametersT$Outbound = {
    name: string;
    type: string;
    defaultValue:
        | string
        | number
        | boolean
        | { [k: string]: any }
        | Array<string | number | boolean | { [k: string]: any }>;
};

/** @internal */
export const ParametersT$outboundSchema: z.ZodType<
    ParametersT$Outbound,
    z.ZodTypeDef,
    ParametersT
> = z.object({
    name: z.string(),
    type: LayerContractDtoType$outboundSchema,
    defaultValue: z.union([
        z.string(),
        z.number(),
        z.boolean(),
        z.record(z.any()),
        z.array(z.union([z.string(), z.number(), z.boolean(), z.record(z.any())])),
    ]),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ParametersT$ {
    /** @deprecated use `ParametersT$inboundSchema` instead. */
    export const inboundSchema = ParametersT$inboundSchema;
    /** @deprecated use `ParametersT$outboundSchema` instead. */
    export const outboundSchema = ParametersT$outboundSchema;
    /** @deprecated use `ParametersT$Outbound` instead. */
    export type Outbound = ParametersT$Outbound;
}

/** @internal */
export const LayerContractDto$inboundSchema: z.ZodType<LayerContractDto, z.ZodTypeDef, unknown> =
    z.object({
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
        tags: z.array(z.string()).optional(),
        targetApps: z.union([z.string(), z.array(z.string())]).optional(),
        holdoutIDs: z.array(z.string()).optional(),
        team: z.nullable(z.any()).optional(),
        isImplicitLayer: z.boolean(),
        parameters: z.array(z.lazy(() => ParametersT$inboundSchema)),
    });

/** @internal */
export type LayerContractDto$Outbound = {
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
    tags?: Array<string> | undefined;
    targetApps?: string | Array<string> | undefined;
    holdoutIDs?: Array<string> | undefined;
    team?: any | null | undefined;
    isImplicitLayer: boolean;
    parameters: Array<ParametersT$Outbound>;
};

/** @internal */
export const LayerContractDto$outboundSchema: z.ZodType<
    LayerContractDto$Outbound,
    z.ZodTypeDef,
    LayerContractDto
> = z.object({
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
    tags: z.array(z.string()).optional(),
    targetApps: z.union([z.string(), z.array(z.string())]).optional(),
    holdoutIDs: z.array(z.string()).optional(),
    team: z.nullable(z.any()).optional(),
    isImplicitLayer: z.boolean(),
    parameters: z.array(z.lazy(() => ParametersT$outboundSchema)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LayerContractDto$ {
    /** @deprecated use `LayerContractDto$inboundSchema` instead. */
    export const inboundSchema = LayerContractDto$inboundSchema;
    /** @deprecated use `LayerContractDto$outboundSchema` instead. */
    export const outboundSchema = LayerContractDto$outboundSchema;
    /** @deprecated use `LayerContractDto$Outbound` instead. */
    export type Outbound = LayerContractDto$Outbound;
}
