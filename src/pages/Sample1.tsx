import { useState } from "react";

export default function Sample1() {
  const [enabled, setEnabled] = useState(false)

  return Root({
    child: Center({
      child: Column({
        children: [
          Button({
            text: !enabled ? "Show Box" : "Hide Box",
            onClick: () => setEnabled(prev => !prev)
          }),
          enabled ? MyComponent : ''
        ]
      })
    })
  }).builder();
}

const MyComponent = Container({ width: 200, height: 200, backgroundColor: 'red', child: Center({ child: Txt("Page 1") }) }).buildComponent();
