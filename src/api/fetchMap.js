import Axios from "axios"

const ENDPOINT  = id => `http://90.189.178.251:12913/${id}`

export const fetchMap =(id) => Axios.post(ENDPOINT(id), 'next'/*,  {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'text/plain',
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
    }}*/)
