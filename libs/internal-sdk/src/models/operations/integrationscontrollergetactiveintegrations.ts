/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type IntegrationsControllerGetActiveIntegrationsRequest = {
  /**
   * A header for idempotency purposes
   */
  idempotencyKey?: string | undefined;
};

export type IntegrationsControllerGetActiveIntegrationsResponse = {
  headers: { [k: string]: Array<string> };
  result: Array<components.IntegrationResponseDto>;
};

/** @internal */
export const IntegrationsControllerGetActiveIntegrationsRequest$inboundSchema:
  z.ZodType<
    IntegrationsControllerGetActiveIntegrationsRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    "idempotency-key": z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      "idempotency-key": "idempotencyKey",
    });
  });

/** @internal */
export type IntegrationsControllerGetActiveIntegrationsRequest$Outbound = {
  "idempotency-key"?: string | undefined;
};

/** @internal */
export const IntegrationsControllerGetActiveIntegrationsRequest$outboundSchema:
  z.ZodType<
    IntegrationsControllerGetActiveIntegrationsRequest$Outbound,
    z.ZodTypeDef,
    IntegrationsControllerGetActiveIntegrationsRequest
  > = z.object({
    idempotencyKey: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      idempotencyKey: "idempotency-key",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IntegrationsControllerGetActiveIntegrationsRequest$ {
  /** @deprecated use `IntegrationsControllerGetActiveIntegrationsRequest$inboundSchema` instead. */
  export const inboundSchema =
    IntegrationsControllerGetActiveIntegrationsRequest$inboundSchema;
  /** @deprecated use `IntegrationsControllerGetActiveIntegrationsRequest$outboundSchema` instead. */
  export const outboundSchema =
    IntegrationsControllerGetActiveIntegrationsRequest$outboundSchema;
  /** @deprecated use `IntegrationsControllerGetActiveIntegrationsRequest$Outbound` instead. */
  export type Outbound =
    IntegrationsControllerGetActiveIntegrationsRequest$Outbound;
}

export function integrationsControllerGetActiveIntegrationsRequestToJSON(
  integrationsControllerGetActiveIntegrationsRequest:
    IntegrationsControllerGetActiveIntegrationsRequest,
): string {
  return JSON.stringify(
    IntegrationsControllerGetActiveIntegrationsRequest$outboundSchema.parse(
      integrationsControllerGetActiveIntegrationsRequest,
    ),
  );
}

export function integrationsControllerGetActiveIntegrationsRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  IntegrationsControllerGetActiveIntegrationsRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      IntegrationsControllerGetActiveIntegrationsRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'IntegrationsControllerGetActiveIntegrationsRequest' from JSON`,
  );
}

/** @internal */
export const IntegrationsControllerGetActiveIntegrationsResponse$inboundSchema:
  z.ZodType<
    IntegrationsControllerGetActiveIntegrationsResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    Headers: z.record(z.array(z.string())),
    Result: z.array(components.IntegrationResponseDto$inboundSchema),
  }).transform((v) => {
    return remap$(v, {
      "Headers": "headers",
      "Result": "result",
    });
  });

/** @internal */
export type IntegrationsControllerGetActiveIntegrationsResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: Array<components.IntegrationResponseDto$Outbound>;
};

/** @internal */
export const IntegrationsControllerGetActiveIntegrationsResponse$outboundSchema:
  z.ZodType<
    IntegrationsControllerGetActiveIntegrationsResponse$Outbound,
    z.ZodTypeDef,
    IntegrationsControllerGetActiveIntegrationsResponse
  > = z.object({
    headers: z.record(z.array(z.string())),
    result: z.array(components.IntegrationResponseDto$outboundSchema),
  }).transform((v) => {
    return remap$(v, {
      headers: "Headers",
      result: "Result",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IntegrationsControllerGetActiveIntegrationsResponse$ {
  /** @deprecated use `IntegrationsControllerGetActiveIntegrationsResponse$inboundSchema` instead. */
  export const inboundSchema =
    IntegrationsControllerGetActiveIntegrationsResponse$inboundSchema;
  /** @deprecated use `IntegrationsControllerGetActiveIntegrationsResponse$outboundSchema` instead. */
  export const outboundSchema =
    IntegrationsControllerGetActiveIntegrationsResponse$outboundSchema;
  /** @deprecated use `IntegrationsControllerGetActiveIntegrationsResponse$Outbound` instead. */
  export type Outbound =
    IntegrationsControllerGetActiveIntegrationsResponse$Outbound;
}

export function integrationsControllerGetActiveIntegrationsResponseToJSON(
  integrationsControllerGetActiveIntegrationsResponse:
    IntegrationsControllerGetActiveIntegrationsResponse,
): string {
  return JSON.stringify(
    IntegrationsControllerGetActiveIntegrationsResponse$outboundSchema.parse(
      integrationsControllerGetActiveIntegrationsResponse,
    ),
  );
}

export function integrationsControllerGetActiveIntegrationsResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  IntegrationsControllerGetActiveIntegrationsResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      IntegrationsControllerGetActiveIntegrationsResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'IntegrationsControllerGetActiveIntegrationsResponse' from JSON`,
  );
}
