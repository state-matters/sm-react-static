import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ post }) => (
  <div>
    <Link to="/articles/">{'<'} Back</Link>
    <br />
    <p>{post.fields.body}</p>
  </div>
))
