/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Source of the execution detail
 */
export const ExecutionDetailsSourceEnum = {
  Credentials: "Credentials",
  Internal: "Internal",
  Payload: "Payload",
  Webhook: "Webhook",
} as const;
/**
 * Source of the execution detail
 */
export type ExecutionDetailsSourceEnum = ClosedEnum<
  typeof ExecutionDetailsSourceEnum
>;

/** @internal */
export const ExecutionDetailsSourceEnum$inboundSchema: z.ZodNativeEnum<
  typeof ExecutionDetailsSourceEnum
> = z.nativeEnum(ExecutionDetailsSourceEnum);

/** @internal */
export const ExecutionDetailsSourceEnum$outboundSchema: z.ZodNativeEnum<
  typeof ExecutionDetailsSourceEnum
> = ExecutionDetailsSourceEnum$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExecutionDetailsSourceEnum$ {
  /** @deprecated use `ExecutionDetailsSourceEnum$inboundSchema` instead. */
  export const inboundSchema = ExecutionDetailsSourceEnum$inboundSchema;
  /** @deprecated use `ExecutionDetailsSourceEnum$outboundSchema` instead. */
  export const outboundSchema = ExecutionDetailsSourceEnum$outboundSchema;
}
