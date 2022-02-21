import {rest} from "msw"
import {setupServer} from "msw/node"

const response = {
  release: []
}

const server = setupServer(
  rest.get(`${process.env.REACT_APP_BACKEND_URL}/releases`, (req, res, ctx) => {
    localStorage.getItem("token");
    return res(
      ctx.status(200),
      ctx.json(response),
    )
  }),
  rest.get("*", (req, res, ctx)=>{
    console.error(`Please add request handle for ${req.url.toString()}`);
    return res(
      ctx.status(500),
      ctx.json({error: "Please add request handler"})
    )
  })
)

beforeAll(()=> server.listen());
afterAll(()=> server.close());
afterEach(()=> server.resetHandlers());

export {server, rest};