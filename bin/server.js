import config from '../config'
import server from '../server/main'
import _debug from 'debug'
import http from 'http'

const debug = _debug('app:bin:server')
const protocol = config.server_protocol
const port = config.server_port
const host = config.server_host

// start the server
http.createServer(server.callback()).listen(port);

debug(`Server is now running at ${protocol}://${host}:${port}.`)
debug(`Server accessible via localhost:${port} if you are using the project defaults.`)


