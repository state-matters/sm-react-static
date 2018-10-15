import * as config from './_config'
const contentful = require('contentful')

const client = contentful.createClient({
  space: config.SPACE_ID,
  accessToken: config.PROD_API_KEY,
})

client.getEntries()
.then((response) => console.log(response.items))
.catch(console.error)
