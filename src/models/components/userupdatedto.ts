/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Schema for updating user information.
 */
export type UserUpdateDto = {
    /**
     * Update the user's role. Can be 'Admin', 'Read Only', 'Member', or any custom role name.
     */
    role?: string | undefined;
    /**
     * Update the user's first name.
     */
    firstName?: string | undefined;
    /**
     * Update the user's last name.
     */
    lastName?: string | undefined;
};

/** @internal */
export const UserUpdateDto$inboundSchema: z.ZodType<UserUpdateDto, z.ZodTypeDef, unknown> =
    z.object({
        role: z.string().optional(),
        firstName: z.string().optional(),
        lastName: z.string().optional(),
    });

/** @internal */
export type UserUpdateDto$Outbound = {
    role?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
};

/** @internal */
export const UserUpdateDto$outboundSchema: z.ZodType<
    UserUpdateDto$Outbound,
    z.ZodTypeDef,
    UserUpdateDto
> = z.object({
    role: z.string().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UserUpdateDto$ {
    /** @deprecated use `UserUpdateDto$inboundSchema` instead. */
    export const inboundSchema = UserUpdateDto$inboundSchema;
    /** @deprecated use `UserUpdateDto$outboundSchema` instead. */
    export const outboundSchema = UserUpdateDto$outboundSchema;
    /** @deprecated use `UserUpdateDto$Outbound` instead. */
    export type Outbound = UserUpdateDto$Outbound;
}
