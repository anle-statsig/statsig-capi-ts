/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type UserInvitesDto = {
    /**
     * Role assigned to the invited users. Can be 'Admin', 'Read Only', 'Member', or any custom role name.
     */
    role: string;
    /**
     * List of email addresses to send invitations to.
     */
    emails: Array<string>;
    /**
     * Optional list of teams that the invited users will be associated with.
     */
    teams?: Array<string> | undefined;
};

/** @internal */
export const UserInvitesDto$inboundSchema: z.ZodType<UserInvitesDto, z.ZodTypeDef, unknown> =
    z.object({
        role: z.string(),
        emails: z.array(z.string()),
        teams: z.array(z.string()).optional(),
    });

/** @internal */
export type UserInvitesDto$Outbound = {
    role: string;
    emails: Array<string>;
    teams?: Array<string> | undefined;
};

/** @internal */
export const UserInvitesDto$outboundSchema: z.ZodType<
    UserInvitesDto$Outbound,
    z.ZodTypeDef,
    UserInvitesDto
> = z.object({
    role: z.string(),
    emails: z.array(z.string()),
    teams: z.array(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UserInvitesDto$ {
    /** @deprecated use `UserInvitesDto$inboundSchema` instead. */
    export const inboundSchema = UserInvitesDto$inboundSchema;
    /** @deprecated use `UserInvitesDto$outboundSchema` instead. */
    export const outboundSchema = UserInvitesDto$outboundSchema;
    /** @deprecated use `UserInvitesDto$Outbound` instead. */
    export type Outbound = UserInvitesDto$Outbound;
}
