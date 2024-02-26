import {useState} from 'react'
import {Heading} from './styledComponents'

const ReadMore = () => {
  const [visible, setVisible] = useState(false)
  const onChangeVisible = () => setVisible(prevState => !prevState)

  return (
    <div>
      <Heading>React Hooks</Heading>
      <p>Hooks are a new addition to React</p>
      <img
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      {visible && (
        <>
          <p>
            Hooks solve a wide variety of seemingly unconnected problems in
            React that we have encountered over five years of writing and
            maintaining tens of thousands of components.
          </p>
          <button onClick={onChangeVisible} type="button">
            Read Less
          </button>
        </>
      )}
      {!visible && (
        <>
          <p>
            Hooks solve a wide variety of seemingly unconnected problems in
            React that we have encountered over five years of writing and
            maintaining tens of thousands of components. For curious readers, we
            have prepared a detailed RFC. Hooks allow you to reuse stateful
            logic without changing your component hierarchy. Hooks work
            side-by-side with existing code so you can adopt them gradually.
          </p>
          <button onClick={onChangeVisible} type="button">
            Read More
          </button>
        </>
      )}
    </div>
  )
}

export default ReadMore
