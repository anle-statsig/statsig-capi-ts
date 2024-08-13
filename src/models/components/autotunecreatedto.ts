/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * An array of Variant objects
 */
export type Variants = {
    /**
     * Variant name
     */
    name: string;
    /**
     * Variant JSON data
     */
    json?: any | undefined;
};

/**
 * The initial time period where Autotune will equally split the traffic.
 */
export const ExplorationWindow = {
    Onehr: "1hr",
    TwentyFourhr: "24hr",
    FortyEighthr: "48hr",
    One: "1",
    TwentyFour: "24",
    FortyEight: "48",
    Onehrs: "1hrs",
    TwentyFourhrs: "24hrs",
    FortyEighthrs: "48hrs",
} as const;
/**
 * The initial time period where Autotune will equally split the traffic.
 */
export type ExplorationWindow = ClosedEnum<typeof ExplorationWindow>;

/**
 * The maximum duration between the exposure and success event that counts as a success.
 */
export const AttributionWindow = {
    Onehr: "1hr",
    Twohr: "2hr",
    Fourhr: "4hr",
    TwentyFourhr: "24hr",
    Onehrs: "1hrs",
    Twohrs: "2hrs",
    Fourhrs: "4hrs",
    TwentyFourhrs: "24hrs",
    One: "1",
    Two: "2",
    Four: "4",
    TwentyFour: "24",
} as const;
/**
 * The maximum duration between the exposure and success event that counts as a success.
 */
export type AttributionWindow = ClosedEnum<typeof AttributionWindow>;

/**
 * The "probability of best" threshold a variant needs to achieve for Autotune to declare it the winner, stop collecting data, and direct all traffic.
 */
export const WinnerThreshold = {
    EightyPercent: "80%",
    NinetyPercent: "90%",
    NinetyFivePercent: "95%",
    NinetyEightPercent: "98%",
    NinetyNinePercent: "99%",
} as const;
/**
 * The "probability of best" threshold a variant needs to achieve for Autotune to declare it the winner, stop collecting data, and direct all traffic.
 */
export type WinnerThreshold = ClosedEnum<typeof WinnerThreshold>;

export type AutotuneCreateDto = {
    /**
     * A brief summary of what the autotune is being used for.
     */
    description?: string | undefined;
    /**
     * An array of Variant objects.
     */
    variants: Array<Variants>;
    /**
     * The event you are trying to optimize for.
     */
    successEvent: string;
    /**
     * The value that should come with the event for it to be considered successful.
     */
    successEventValue?: string | undefined;
    /**
     * The initial time period where Autotune will equally split the traffic.
     */
    explorationWindow: ExplorationWindow;
    /**
     * The maximum duration between the exposure and success event that counts as a success.
     */
    attributionWindow: AttributionWindow;
    /**
     * The "probability of best" threshold a variant needs to achieve for Autotune to declare it the winner, stop collecting data, and direct all traffic.
     */
    winnerThreshold: WinnerThreshold;
    /**
     * The name that was originally given to the autotune on creation but formatted as an ID ("A Autotune" -> "a_autotune").
     */
    name: string;
    /**
     * idType of the autotune (userID, stableID, or a customID). Defaults to userID if not provided
     */
    idType?: string | undefined;
};

/** @internal */
export const Variants$inboundSchema: z.ZodType<Variants, z.ZodTypeDef, unknown> = z.object({
    name: z.string(),
    json: z.any().optional(),
});

/** @internal */
export type Variants$Outbound = {
    name: string;
    json?: any | undefined;
};

/** @internal */
export const Variants$outboundSchema: z.ZodType<Variants$Outbound, z.ZodTypeDef, Variants> =
    z.object({
        name: z.string(),
        json: z.any().optional(),
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Variants$ {
    /** @deprecated use `Variants$inboundSchema` instead. */
    export const inboundSchema = Variants$inboundSchema;
    /** @deprecated use `Variants$outboundSchema` instead. */
    export const outboundSchema = Variants$outboundSchema;
    /** @deprecated use `Variants$Outbound` instead. */
    export type Outbound = Variants$Outbound;
}

/** @internal */
export const ExplorationWindow$inboundSchema: z.ZodNativeEnum<typeof ExplorationWindow> =
    z.nativeEnum(ExplorationWindow);

/** @internal */
export const ExplorationWindow$outboundSchema: z.ZodNativeEnum<typeof ExplorationWindow> =
    ExplorationWindow$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExplorationWindow$ {
    /** @deprecated use `ExplorationWindow$inboundSchema` instead. */
    export const inboundSchema = ExplorationWindow$inboundSchema;
    /** @deprecated use `ExplorationWindow$outboundSchema` instead. */
    export const outboundSchema = ExplorationWindow$outboundSchema;
}

/** @internal */
export const AttributionWindow$inboundSchema: z.ZodNativeEnum<typeof AttributionWindow> =
    z.nativeEnum(AttributionWindow);

/** @internal */
export const AttributionWindow$outboundSchema: z.ZodNativeEnum<typeof AttributionWindow> =
    AttributionWindow$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AttributionWindow$ {
    /** @deprecated use `AttributionWindow$inboundSchema` instead. */
    export const inboundSchema = AttributionWindow$inboundSchema;
    /** @deprecated use `AttributionWindow$outboundSchema` instead. */
    export const outboundSchema = AttributionWindow$outboundSchema;
}

/** @internal */
export const WinnerThreshold$inboundSchema: z.ZodNativeEnum<typeof WinnerThreshold> =
    z.nativeEnum(WinnerThreshold);

/** @internal */
export const WinnerThreshold$outboundSchema: z.ZodNativeEnum<typeof WinnerThreshold> =
    WinnerThreshold$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WinnerThreshold$ {
    /** @deprecated use `WinnerThreshold$inboundSchema` instead. */
    export const inboundSchema = WinnerThreshold$inboundSchema;
    /** @deprecated use `WinnerThreshold$outboundSchema` instead. */
    export const outboundSchema = WinnerThreshold$outboundSchema;
}

/** @internal */
export const AutotuneCreateDto$inboundSchema: z.ZodType<AutotuneCreateDto, z.ZodTypeDef, unknown> =
    z.object({
        description: z.string().optional(),
        variants: z.array(z.lazy(() => Variants$inboundSchema)),
        successEvent: z.string(),
        successEventValue: z.string().optional(),
        explorationWindow: ExplorationWindow$inboundSchema,
        attributionWindow: AttributionWindow$inboundSchema,
        winnerThreshold: WinnerThreshold$inboundSchema,
        name: z.string(),
        idType: z.string().optional(),
    });

/** @internal */
export type AutotuneCreateDto$Outbound = {
    description?: string | undefined;
    variants: Array<Variants$Outbound>;
    successEvent: string;
    successEventValue?: string | undefined;
    explorationWindow: string;
    attributionWindow: string;
    winnerThreshold: string;
    name: string;
    idType?: string | undefined;
};

/** @internal */
export const AutotuneCreateDto$outboundSchema: z.ZodType<
    AutotuneCreateDto$Outbound,
    z.ZodTypeDef,
    AutotuneCreateDto
> = z.object({
    description: z.string().optional(),
    variants: z.array(z.lazy(() => Variants$outboundSchema)),
    successEvent: z.string(),
    successEventValue: z.string().optional(),
    explorationWindow: ExplorationWindow$outboundSchema,
    attributionWindow: AttributionWindow$outboundSchema,
    winnerThreshold: WinnerThreshold$outboundSchema,
    name: z.string(),
    idType: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AutotuneCreateDto$ {
    /** @deprecated use `AutotuneCreateDto$inboundSchema` instead. */
    export const inboundSchema = AutotuneCreateDto$inboundSchema;
    /** @deprecated use `AutotuneCreateDto$outboundSchema` instead. */
    export const outboundSchema = AutotuneCreateDto$outboundSchema;
    /** @deprecated use `AutotuneCreateDto$Outbound` instead. */
    export type Outbound = AutotuneCreateDto$Outbound;
}
