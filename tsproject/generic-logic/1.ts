import { GenericContext, RailwayError } from "@fstnetwork/loc-logic-sdk";

/**
*
*  The codes in 'run' is executed when no error occurred in Generic Logic.
*
*/
export async function run(ctx: GenericContext) {}


/**
*
*  The codes in 'handleError' is executed when there is any error occurred
*  in Generic Logic or CURRENT running Logic just gets an error.
*
*/
export async function handleError(ctx: GenericContext, error: RailwayError) {
  ctx.agents.logging.error(error.message);
}