import { useEffect, useState } from "react";

export function MyComponentSecond () {
  const [color, setColor] = useState('red');

  useEffect(() => {
    setTimeout(() => {
      setColor('blue');
    }, 2000);
  }, []);

  return Container({ width: 200, height: 200, backgroundColor: color, child: Center({ child: Txt("HARUSNYA TETEP BIRU") }) }).builder();
}