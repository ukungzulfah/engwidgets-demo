import { useState } from "react";
import { MyComponentSecond } from "./MyComponentSecond";

export default function Sample2() {
  const [enabled, setEnabled] = useState(false)

  return Root({
    child: Center({
      child: Column({
        children: [
          Button({
            text: !enabled ? "Show Box 2" : "Hide Box 2",
            onClick: () => setEnabled(prev => !prev)
          }),
          enabled ? MyComponentSecond : ''
        ]
      })
    })
  }).builder();
}