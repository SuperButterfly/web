const SCW_SECRET_KEY = '8aa89c17-476c-41d4-a4d3-803a70206145'
const SCW_DEFAULT_ZONE = 'fr-par-1'
const SCW_PROJECT_ID = '030e41cc-5a02-4791-a551-d3f1d5848e8e'

const API_URL = `https://api.scaleway.com/instance/v1/zones/${SCW_DEFAULT_ZONE}/servers`
const DOM_URL =
  'https://api.scaleway.com/domain/v2beta1/search-domains?domains='
const VOLUME_URL = `https://api.scaleway.com/instance/v1/zones/${SCW_DEFAULT_ZONE}/volumes`

const HEADERS = {
  'X-Auth-Token': SCW_SECRET_KEY,
  'Content-Type': 'application/json'
}

const SSH_KEY_ID = 'f0a00f16-8556-4f89-a6c2-0aaeccc5d0ad'

module.exports = {
  SCW_SECRET_KEY,
  SCW_DEFAULT_ZONE,
  SCW_PROJECT_ID,
  API_URL,
  DOM_URL,
  VOLUME_URL,
  HEADERS,
  SSH_KEY_ID
}
