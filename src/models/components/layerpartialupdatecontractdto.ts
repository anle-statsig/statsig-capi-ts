/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * The data type that this parameter returns. Allowed types include: string, boolean, number, object, and array.
 */
export const LayerPartialUpdateContractDtoType = {
    String: "string",
    Number: "number",
    Boolean: "boolean",
    Object: "object",
    Array: "array",
} as const;
/**
 * The data type that this parameter returns. Allowed types include: string, boolean, number, object, and array.
 */
export type LayerPartialUpdateContractDtoType = ClosedEnum<
    typeof LayerPartialUpdateContractDtoType
>;

export type DefaultValue5 = string | number | boolean | { [k: string]: any };

/**
 * The default value for this parameter, which must match the specified type.
 */
export type LayerPartialUpdateContractDtoDefaultValue =
    | string
    | number
    | boolean
    | { [k: string]: any }
    | Array<string | number | boolean | { [k: string]: any }>;

export type LayerPartialUpdateContractDtoParameters = {
    /**
     * The name of this parameter, used for identification within the layer.
     */
    name: string;
    /**
     * The data type that this parameter returns. Allowed types include: string, boolean, number, object, and array.
     */
    type: LayerPartialUpdateContractDtoType;
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

/**
 * List of target applications that this layer is intended for.
 */
export type LayerPartialUpdateContractDtoTargetApps = string | Array<string>;

export type LayerPartialUpdateContractDto = {
    /**
     * A detailed description of the layer, explaining its purpose and functionality.
     */
    description?: string | undefined;
    /**
     * An array of parameters associated with the layer, each defining specific attributes.
     */
    parameters?: Array<LayerPartialUpdateContractDtoParameters> | undefined;
    /**
     * List of target applications that this layer is intended for.
     */
    targetApps?: string | Array<string> | undefined;
};

/** @internal */
export const LayerPartialUpdateContractDtoType$inboundSchema: z.ZodNativeEnum<
    typeof LayerPartialUpdateContractDtoType
> = z.nativeEnum(LayerPartialUpdateContractDtoType);

/** @internal */
export const LayerPartialUpdateContractDtoType$outboundSchema: z.ZodNativeEnum<
    typeof LayerPartialUpdateContractDtoType
> = LayerPartialUpdateContractDtoType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LayerPartialUpdateContractDtoType$ {
    /** @deprecated use `LayerPartialUpdateContractDtoType$inboundSchema` instead. */
    export const inboundSchema = LayerPartialUpdateContractDtoType$inboundSchema;
    /** @deprecated use `LayerPartialUpdateContractDtoType$outboundSchema` instead. */
    export const outboundSchema = LayerPartialUpdateContractDtoType$outboundSchema;
}

/** @internal */
export const DefaultValue5$inboundSchema: z.ZodType<DefaultValue5, z.ZodTypeDef, unknown> = z.union(
    [z.string(), z.number(), z.boolean(), z.record(z.any())]
);

/** @internal */
export type DefaultValue5$Outbound = string | number | boolean | { [k: string]: any };

/** @internal */
export const DefaultValue5$outboundSchema: z.ZodType<
    DefaultValue5$Outbound,
    z.ZodTypeDef,
    DefaultValue5
> = z.union([z.string(), z.number(), z.boolean(), z.record(z.any())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DefaultValue5$ {
    /** @deprecated use `DefaultValue5$inboundSchema` instead. */
    export const inboundSchema = DefaultValue5$inboundSchema;
    /** @deprecated use `DefaultValue5$outboundSchema` instead. */
    export const outboundSchema = DefaultValue5$outboundSchema;
    /** @deprecated use `DefaultValue5$Outbound` instead. */
    export type Outbound = DefaultValue5$Outbound;
}

/** @internal */
export const LayerPartialUpdateContractDtoDefaultValue$inboundSchema: z.ZodType<
    LayerPartialUpdateContractDtoDefaultValue,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.record(z.any()),
    z.array(z.union([z.string(), z.number(), z.boolean(), z.record(z.any())])),
]);

/** @internal */
export type LayerPartialUpdateContractDtoDefaultValue$Outbound =
    | string
    | number
    | boolean
    | { [k: string]: any }
    | Array<string | number | boolean | { [k: string]: any }>;

/** @internal */
export const LayerPartialUpdateContractDtoDefaultValue$outboundSchema: z.ZodType<
    LayerPartialUpdateContractDtoDefaultValue$Outbound,
    z.ZodTypeDef,
    LayerPartialUpdateContractDtoDefaultValue
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
export namespace LayerPartialUpdateContractDtoDefaultValue$ {
    /** @deprecated use `LayerPartialUpdateContractDtoDefaultValue$inboundSchema` instead. */
    export const inboundSchema = LayerPartialUpdateContractDtoDefaultValue$inboundSchema;
    /** @deprecated use `LayerPartialUpdateContractDtoDefaultValue$outboundSchema` instead. */
    export const outboundSchema = LayerPartialUpdateContractDtoDefaultValue$outboundSchema;
    /** @deprecated use `LayerPartialUpdateContractDtoDefaultValue$Outbound` instead. */
    export type Outbound = LayerPartialUpdateContractDtoDefaultValue$Outbound;
}

/** @internal */
export const LayerPartialUpdateContractDtoParameters$inboundSchema: z.ZodType<
    LayerPartialUpdateContractDtoParameters,
    z.ZodTypeDef,
    unknown
> = z.object({
    name: z.string(),
    type: LayerPartialUpdateContractDtoType$inboundSchema,
    defaultValue: z.union([
        z.string(),
        z.number(),
        z.boolean(),
        z.record(z.any()),
        z.array(z.union([z.string(), z.number(), z.boolean(), z.record(z.any())])),
    ]),
});

/** @internal */
export type LayerPartialUpdateContractDtoParameters$Outbound = {
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
export const LayerPartialUpdateContractDtoParameters$outboundSchema: z.ZodType<
    LayerPartialUpdateContractDtoParameters$Outbound,
    z.ZodTypeDef,
    LayerPartialUpdateContractDtoParameters
> = z.object({
    name: z.string(),
    type: LayerPartialUpdateContractDtoType$outboundSchema,
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
export namespace LayerPartialUpdateContractDtoParameters$ {
    /** @deprecated use `LayerPartialUpdateContractDtoParameters$inboundSchema` instead. */
    export const inboundSchema = LayerPartialUpdateContractDtoParameters$inboundSchema;
    /** @deprecated use `LayerPartialUpdateContractDtoParameters$outboundSchema` instead. */
    export const outboundSchema = LayerPartialUpdateContractDtoParameters$outboundSchema;
    /** @deprecated use `LayerPartialUpdateContractDtoParameters$Outbound` instead. */
    export type Outbound = LayerPartialUpdateContractDtoParameters$Outbound;
}

/** @internal */
export const LayerPartialUpdateContractDtoTargetApps$inboundSchema: z.ZodType<
    LayerPartialUpdateContractDtoTargetApps,
    z.ZodTypeDef,
    unknown
> = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type LayerPartialUpdateContractDtoTargetApps$Outbound = string | Array<string>;

/** @internal */
export const LayerPartialUpdateContractDtoTargetApps$outboundSchema: z.ZodType<
    LayerPartialUpdateContractDtoTargetApps$Outbound,
    z.ZodTypeDef,
    LayerPartialUpdateContractDtoTargetApps
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LayerPartialUpdateContractDtoTargetApps$ {
    /** @deprecated use `LayerPartialUpdateContractDtoTargetApps$inboundSchema` instead. */
    export const inboundSchema = LayerPartialUpdateContractDtoTargetApps$inboundSchema;
    /** @deprecated use `LayerPartialUpdateContractDtoTargetApps$outboundSchema` instead. */
    export const outboundSchema = LayerPartialUpdateContractDtoTargetApps$outboundSchema;
    /** @deprecated use `LayerPartialUpdateContractDtoTargetApps$Outbound` instead. */
    export type Outbound = LayerPartialUpdateContractDtoTargetApps$Outbound;
}

/** @internal */
export const LayerPartialUpdateContractDto$inboundSchema: z.ZodType<
    LayerPartialUpdateContractDto,
    z.ZodTypeDef,
    unknown
> = z.object({
    description: z.string().optional(),
    parameters: z
        .array(z.lazy(() => LayerPartialUpdateContractDtoParameters$inboundSchema))
        .optional(),
    targetApps: z.union([z.string(), z.array(z.string())]).optional(),
});

/** @internal */
export type LayerPartialUpdateContractDto$Outbound = {
    description?: string | undefined;
    parameters?: Array<LayerPartialUpdateContractDtoParameters$Outbound> | undefined;
    targetApps?: string | Array<string> | undefined;
};

/** @internal */
export const LayerPartialUpdateContractDto$outboundSchema: z.ZodType<
    LayerPartialUpdateContractDto$Outbound,
    z.ZodTypeDef,
    LayerPartialUpdateContractDto
> = z.object({
    description: z.string().optional(),
    parameters: z
        .array(z.lazy(() => LayerPartialUpdateContractDtoParameters$outboundSchema))
        .optional(),
    targetApps: z.union([z.string(), z.array(z.string())]).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LayerPartialUpdateContractDto$ {
    /** @deprecated use `LayerPartialUpdateContractDto$inboundSchema` instead. */
    export const inboundSchema = LayerPartialUpdateContractDto$inboundSchema;
    /** @deprecated use `LayerPartialUpdateContractDto$outboundSchema` instead. */
    export const outboundSchema = LayerPartialUpdateContractDto$outboundSchema;
    /** @deprecated use `LayerPartialUpdateContractDto$Outbound` instead. */
    export type Outbound = LayerPartialUpdateContractDto$Outbound;
}
