
import React from 'react'
import { RouteData, withRouteData, Link } from 'react-static'
//
//
const ListWrapper = ({ data }) => (
  <div>
      <ul>
        {data['items'].map(post => (
          <li key={post.sys.id}>
            <Link to={`/article/${post.sys.id}`}>{post.fields.title}</Link>
          </li>
        ))}
      </ul>
  </div>
)
export default () => (
  <RouteData component={ListWrapper}/>
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
