import React from 'react'
import PropTypes from 'prop-types'
import CollapseWrapper from '../common/collapse'

export const ChildrenWrapper = ({children}) => {
  console.log('children :>> ', children)

  return React.Children.map(children, (child, index) => {
    const config = {
      ...child.props,
      num: `${index + 1}.`
    }
    return React.cloneElement(child, config)
  })
}

ChildrenWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
 
const ChildrenExercise = () => {
  return (
    <CollapseWrapper title="Упражнение">
      <p className="mt-3">
        У вас есть компоненты Списка. Вам необходимо к каждому из них добавить
        порядковый номер, относительно того, как они располагаются на странице.
        Вы можете использовать как <code>React.Children.map</code> так и{' '}
        <code>React.Children.toArray</code>
      </p>
      <ChildrenWrapper>
        <Component />
        <Component />
        <Component />
      </ChildrenWrapper>
    </CollapseWrapper>
  )
}

const Component = ({num}) => {
  return <div>{num} Компонент списка</div>
}
Component.propTypes = {
  num: PropTypes.string
}

export default ChildrenExercise
