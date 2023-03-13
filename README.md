# 🍼 little-vdom

> Forked from developit's [little-vdom](https://gist.github.com/developit/2038b141b31287faa663f410b6649a87) gist.

**npm**: `npm i @luwes/little-vdom`  
**cdn**: [unpkg.com/@luwes/little-vdom](https://unpkg.com/@luwes/little-vdom)  

---

- 1.2k none dependency React like library with hooks
- Components
- State
- Diffing
- Keys
- Fragments
- Refs
- Style maps

Use reactive JSX with minimal overhead.

## Usage ([Codepen](https://codepen.io/lloydzhou/pen/rNZJgKE?editors=0011))

```jsx
/** @jsx h */
/** @jsxFrag Fragment */

// functional component using hooks
function Since({ time }) {
  const [count, setCount] = useState()
  const r = useRef()
  useEffect(() => {
    console.log('update', r.current)
    const timer = setTimeout(() => {
      setCount(count + 1) // update every second
    }, 1000)
    return () => clearTimeout(timer)
  }, [count])
  useEffect(() => {
    console.log('mounted', r, r.current)
    return () => {
      console.log('unmounted')
    }
  }, [])
  const ago = (Date.now() - time) / 1000 | 0;
  return (
    <>
      <h1>Title</h1>
      <time ref={r}>{ago}s ago</time>
    </>
  )
}

function App() {
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    setTimeout(() => setVisible(false), 3000)
  }, [])
  return <div>{visible ? <Since time={Date.now()} /> : <div>clear</div>}</div>
}

render(<App />, document.querySelector('#root'))
```
