const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})

// In this example we simulate a server side error response
router.render = (req, res) => {
  console.log(req.url)
  console.log(req.body)

  // Response original response
  res.jsonp({
    body: res.locals.data
  })

  // Response with custom response
  // res.status(500).jsonp({
  //   error: "error message here"
  // })
}