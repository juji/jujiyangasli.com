import React, {useMemo} from 'react'
import { useTrail, animated } from 'react-spring'

export default props => {

  const {components, component, transition, style, prefix} = props
  const trail = useTrail(components.length, transition);
  const Comp = useMemo(() => component || animated.div,[ component ])

  return trail.map((p, index) => (<Comp
      key={`${prefix}_${index}`}
      style={style(p)}
    >{components[index]}</Comp>))

}
