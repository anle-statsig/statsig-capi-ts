/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * The data type that this parameter returns. Allowed types include: string, boolean, number, object, and array.
 */
export const LayerFullUpdateContractDtoType = {
    String: "string",
    Number: "number",
    Boolean: "boolean",
    Object: "object",
    Array: "array",
} as const;
/**
 * The data type that this parameter returns. Allowed types include: string, boolean, number, object, and array.
 */
export type LayerFullUpdateContractDtoType = ClosedEnum<typeof LayerFullUpdateContractDtoType>;

export type LayerFullUpdateContractDtoDefaultValue5 =
    | string
    | number
    | boolean
    | { [k: string]: any };

/**
 * The default value for this parameter, which must match the specified type.
 */
export type LayerFullUpdateContractDtoDefaultValue =
    | string
    | number
    | boolean
    | { [k: string]: any }
    | Array<string | number | boolean | { [k: string]: any }>;

export type LayerFullUpdateContractDtoParameters = {
    /**
     * The name of this parameter, used for identification within the layer.
     */
    name: string;
    /**
     * The data type that this parameter returns. Allowed types include: string, boolean, number, object, and array.
     */
    type: LayerFullUpdateContractDtoType;
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
export type LayerFullUpdateContractDtoTargetApps = string | Array<string>;

export type LayerFullUpdateContractDto = {
    /**
     * A detailed description of the layer, explaining its purpose and functionality.
     */
    description: string;
    /**
     * An array of parameters associated with the layer, each defining specific attributes.
     */
    parameters: Array<LayerFullUpdateContractDtoParameters>;
    /**
     * List of target applications that this layer is intended for.
     */
    targetApps?: string | Array<string> | undefined;
};

/** @internal */
export const LayerFullUpdateContractDtoType$inboundSchema: z.ZodNativeEnum<
    typeof LayerFullUpdateContractDtoType
> = z.nativeEnum(LayerFullUpdateContractDtoType);

/** @internal */
export const LayerFullUpdateContractDtoType$outboundSchema: z.ZodNativeEnum<
    typeof LayerFullUpdateContractDtoType
> = LayerFullUpdateContractDtoType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LayerFullUpdateContractDtoType$ {
    /** @deprecated use `LayerFullUpdateContractDtoType$inboundSchema` instead. */
    export const inboundSchema = LayerFullUpdateContractDtoType$inboundSchema;
    /** @deprecated use `LayerFullUpdateContractDtoType$outboundSchema` instead. */
    export const outboundSchema = LayerFullUpdateContractDtoType$outboundSchema;
}

/** @internal */
export const LayerFullUpdateContractDtoDefaultValue5$inboundSchema: z.ZodType<
    LayerFullUpdateContractDtoDefaultValue5,
    z.ZodTypeDef,
    unknown
> = z.union([z.string(), z.number(), z.boolean(), z.record(z.any())]);

/** @internal */
export type LayerFullUpdateContractDtoDefaultValue5$Outbound =
    | string
    | number
    | boolean
    | { [k: string]: any };

/** @internal */
export const LayerFullUpdateContractDtoDefaultValue5$outboundSchema: z.ZodType<
    LayerFullUpdateContractDtoDefaultValue5$Outbound,
    z.ZodTypeDef,
    LayerFullUpdateContractDtoDefaultValue5
> = z.union([z.string(), z.number(), z.boolean(), z.record(z.any())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LayerFullUpdateContractDtoDefaultValue5$ {
    /** @deprecated use `LayerFullUpdateContractDtoDefaultValue5$inboundSchema` instead. */
    export const inboundSchema = LayerFullUpdateContractDtoDefaultValue5$inboundSchema;
    /** @deprecated use `LayerFullUpdateContractDtoDefaultValue5$outboundSchema` instead. */
    export const outboundSchema = LayerFullUpdateContractDtoDefaultValue5$outboundSchema;
    /** @deprecated use `LayerFullUpdateContractDtoDefaultValue5$Outbound` instead. */
    export type Outbound = LayerFullUpdateContractDtoDefaultValue5$Outbound;
}

/** @internal */
export const LayerFullUpdateContractDtoDefaultValue$inboundSchema: z.ZodType<
    LayerFullUpdateContractDtoDefaultValue,
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
export type LayerFullUpdateContractDtoDefaultValue$Outbound =
    | string
    | number
    | boolean
    | { [k: string]: any }
    | Array<string | number | boolean | { [k: string]: any }>;

/** @internal */
export const LayerFullUpdateContractDtoDefaultValue$outboundSchema: z.ZodType<
    LayerFullUpdateContractDtoDefaultValue$Outbound,
    z.ZodTypeDef,
    LayerFullUpdateContractDtoDefaultValue
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
export namespace LayerFullUpdateContractDtoDefaultValue$ {
    /** @deprecated use `LayerFullUpdateContractDtoDefaultValue$inboundSchema` instead. */
    export const inboundSchema = LayerFullUpdateContractDtoDefaultValue$inboundSchema;
    /** @deprecated use `LayerFullUpdateContractDtoDefaultValue$outboundSchema` instead. */
    export const outboundSchema = LayerFullUpdateContractDtoDefaultValue$outboundSchema;
    /** @deprecated use `LayerFullUpdateContractDtoDefaultValue$Outbound` instead. */
    export type Outbound = LayerFullUpdateContractDtoDefaultValue$Outbound;
}

/** @internal */
export const LayerFullUpdateContractDtoParameters$inboundSchema: z.ZodType<
    LayerFullUpdateContractDtoParameters,
    z.ZodTypeDef,
    unknown
> = z.object({
    name: z.string(),
    type: LayerFullUpdateContractDtoType$inboundSchema,
    defaultValue: z.union([
        z.string(),
        z.number(),
        z.boolean(),
        z.record(z.any()),
        z.array(z.union([z.string(), z.number(), z.boolean(), z.record(z.any())])),
    ]),
});

/** @internal */
export type LayerFullUpdateContractDtoParameters$Outbound = {
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
export const LayerFullUpdateContractDtoParameters$outboundSchema: z.ZodType<
    LayerFullUpdateContractDtoParameters$Outbound,
    z.ZodTypeDef,
    LayerFullUpdateContractDtoParameters
> = z.object({
    name: z.string(),
    type: LayerFullUpdateContractDtoType$outboundSchema,
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
export namespace LayerFullUpdateContractDtoParameters$ {
    /** @deprecated use `LayerFullUpdateContractDtoParameters$inboundSchema` instead. */
    export const inboundSchema = LayerFullUpdateContractDtoParameters$inboundSchema;
    /** @deprecated use `LayerFullUpdateContractDtoParameters$outboundSchema` instead. */
    export const outboundSchema = LayerFullUpdateContractDtoParameters$outboundSchema;
    /** @deprecated use `LayerFullUpdateContractDtoParameters$Outbound` instead. */
    export type Outbound = LayerFullUpdateContractDtoParameters$Outbound;
}

/** @internal */
export const LayerFullUpdateContractDtoTargetApps$inboundSchema: z.ZodType<
    LayerFullUpdateContractDtoTargetApps,
    z.ZodTypeDef,
    unknown
> = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type LayerFullUpdateContractDtoTargetApps$Outbound = string | Array<string>;

/** @internal */
export const LayerFullUpdateContractDtoTargetApps$outboundSchema: z.ZodType<
    LayerFullUpdateContractDtoTargetApps$Outbound,
    z.ZodTypeDef,
    LayerFullUpdateContractDtoTargetApps
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LayerFullUpdateContractDtoTargetApps$ {
    /** @deprecated use `LayerFullUpdateContractDtoTargetApps$inboundSchema` instead. */
    export const inboundSchema = LayerFullUpdateContractDtoTargetApps$inboundSchema;
    /** @deprecated use `LayerFullUpdateContractDtoTargetApps$outboundSchema` instead. */
    export const outboundSchema = LayerFullUpdateContractDtoTargetApps$outboundSchema;
    /** @deprecated use `LayerFullUpdateContractDtoTargetApps$Outbound` instead. */
    export type Outbound = LayerFullUpdateContractDtoTargetApps$Outbound;
}

/** @internal */
export const LayerFullUpdateContractDto$inboundSchema: z.ZodType<
    LayerFullUpdateContractDto,
    z.ZodTypeDef,
    unknown
> = z.object({
    description: z.string(),
    parameters: z.array(z.lazy(() => LayerFullUpdateContractDtoParameters$inboundSchema)),
    targetApps: z.union([z.string(), z.array(z.string())]).optional(),
});

/** @internal */
export type LayerFullUpdateContractDto$Outbound = {
    description: string;
    parameters: Array<LayerFullUpdateContractDtoParameters$Outbound>;
    targetApps?: string | Array<string> | undefined;
};

/** @internal */
export const LayerFullUpdateContractDto$outboundSchema: z.ZodType<
    LayerFullUpdateContractDto$Outbound,
    z.ZodTypeDef,
    LayerFullUpdateContractDto
> = z.object({
    description: z.string(),
    parameters: z.array(z.lazy(() => LayerFullUpdateContractDtoParameters$outboundSchema)),
    targetApps: z.union([z.string(), z.array(z.string())]).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LayerFullUpdateContractDto$ {
    /** @deprecated use `LayerFullUpdateContractDto$inboundSchema` instead. */
    export const inboundSchema = LayerFullUpdateContractDto$inboundSchema;
    /** @deprecated use `LayerFullUpdateContractDto$outboundSchema` instead. */
    export const outboundSchema = LayerFullUpdateContractDto$outboundSchema;
    /** @deprecated use `LayerFullUpdateContractDto$Outbound` instead. */
    export type Outbound = LayerFullUpdateContractDto$Outbound;
}