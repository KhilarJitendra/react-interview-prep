// Example from https://beta.reactjs.org/learn

import { useState } from 'react'
import styles from './counters.module.css'

function MyButton() {
  const [count, setCount] = useState(0)

  function handleClick() {
    const vir_dom = <h1>This is a Button (virtual)</h1>
    const real_dom = document.createElement('h1');

    real_dom.innerText = 'This is a Button (real)'

    console.log('vir_dom',vir_dom )
    console.dir(real_dom)
    setCount(count + 1)
  }


  


  return (
    <div>
      <button onClick={handleClick} className={styles.counter}>
        Clicked {count} times
      </button>
    </div>
  )
}

export default function MyApp() {
  return <MyButton />
}
