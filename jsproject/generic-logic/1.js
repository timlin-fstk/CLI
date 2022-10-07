/**
*
*  The codes in 'run' is executed when no error occurred in Generic Logic.
*
*/

//import { saySomething } from "../../helper/hello";


export async function run(ctx) {
  console.log(ctx);
  //saySomething("Hello!!");
}


/**
*
*  The codes in 'handleError' is executed when there is any error occurred
*  in Generic Logic or CURRENT running Logic just gets an error.
*
*/
export async function handleError(ctx, error) {
  ctx.agents.logging.error(error.message);
}