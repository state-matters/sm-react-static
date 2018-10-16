
import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ posts }) => (
  <div>
    <h1>It's blog time.</h1>
    <br />
    All Posts:
    <ul>
      {posts.map(post => (
        <li key={post.sys.id}>
          <Link to={`/article/${post.sys.id}`}>{post.fields.title}</Link>
        </li>
      ))}
    </ul>
  </div>
))
