import { AggregatorContext, RailwayError } from "@fstnetwork/loc-logic-sdk";

/**
*
*  The codes in 'run' is executed when no error occurred in Aggregator Logic.
*
*/
export async function run(ctx: AggregatorContext) {}


/**
*
*  The codes in 'handleError' is executed when there is any error occurred
*  in Aggregator Logic or CURRENT running Logic just gets an error.
*
*/
export async function handleError(ctx: AggregatorContext, error: RailwayError) {
  ctx.agents.logging.error(error.message);
}