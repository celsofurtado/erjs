import { useEffect, useState } from "react"
import { setInterval } from "timers"

export default function Clock() {

  const [time, setTime] = useState<Date>()

  useEffect(() => {
    setInterval(() => {
      setTime(new Date())
    }, 1000)
  }, [])

  return <div>
    Agora: { time?.toLocaleTimeString() }
  </div>

}