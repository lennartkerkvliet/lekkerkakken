import axios from 'axios'


export default async function(req, res) {

    const ip_address = process.env.HUE_ADDRESS
    const username = process.env.HUE_USERNAME
    const identifier = process.env.HUE_LIGHT
    
    const result = await axios.get(`http://${ip_address}/api/${username}/lights/${identifier}`)
    const status = result.data.state.on

    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({ status }))
}