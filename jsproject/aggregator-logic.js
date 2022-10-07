/**
*
*  The codes in 'run' is executed when no error occurred in Aggregator Logic.
*
*/
export async function run(ctx) {

  ctx.agents.result.finalize({
    status: "ok",
    response: {
        message: "Kitty Meow ~~~~~~~~~~~"
    }
  });

}


/**
*
*  The codes in 'handleError' is executed when there is any error occurred
*  in Aggregator Logic or CURRENT running Logic just gets an error.
*
*/
export async function handleError(ctx, error) {
  ctx.agents.logging.error(error.message);
}