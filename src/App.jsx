import { useEffect, useState } from 'react'
import { Image } from 'antd'
import { GithubOutlined } from '@ant-design/icons'
import { Space } from 'antd'
import './App.css'

const Timer = () =>{
  const [count , setCount] = useState(0)
  const [start, setStart] = useState(false)

  const handleStartStop = () =>{
    setStart(start => !start)
  }

  const handleReset = () =>{
    setCount(0)
  }

  useEffect(()=>{
    const timer = setInterval(()=>{
      if(start){
        setCount(count => count + 1)
      }
    },1000)
  
    return () =>{
      clearInterval(Timer)
    }
  },[start])
  
  return(
    <div>
      <h1>Timer: {count}</h1>
      <div>
        <button onClick={handleStartStop}>{start ? 'Stop' : 'Start'}</button>
        <button onClick={handleReset} disable={start}>Reset</button>
      </div>
     </div>
  ) 
  }
  
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Image.PreviewGroup>
    <Image width={200} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
    <Image
      width={200}
      src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
    />
  </Image.PreviewGroup>

  <Space>
  <GithubOutlined />
  </Space>
      <h1>Ant + React</h1>
      <div className="card">
      <Timer />
    </div>
   </div> 
  )
}

export default App