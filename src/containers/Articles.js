
import React from 'react'
import { RouteData, withRouteData, Link } from 'react-static'
//
//
const ArticleWrapper = ({ data }) => (
  <div>
    <div>
      <h1>Articles</h1>
      <br />
      All Articles:
      <ul>
        {data['items'].map(post => (
          <li key={post.sys.id}>
            <Link to={`/article/${post.sys.id}`}>{post.fields.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
)
export default () => (
  <RouteData component={ArticleWrapper}/>
)
//
// export default withRouteData(({ data }) => (
//   <div>
//     <h1>It's blog time.</h1>
//     <br />
//     All Posts:
//     <ul>
//       {data.map(post => (
//         <li key={post.id}>
//           <Link to={`/blog/post/${post.id}`}>{post.title}</Link>
//         </li>
//       ))}
//     </ul>
//   </div>
// ))
