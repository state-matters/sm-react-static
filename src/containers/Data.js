import React from 'react'
import { RouteData, withRouteData } from 'react-static'

// "component" syntax
const DataWrapper = ({ title, data }) => (
  <div>
    <h1>{title}</h1>
    <div>
      {JSON.stringify(data, null, 8) }
    </div>
  </div>
)
export default () => (
  <RouteData component={DataWrapper}/>
)


// export default withRouteData(DataWrapper)
