import { useNavigate } from "react-router";

export default function Sidebar() {
  const nav = useNavigate()

  return Row({
    width: 400,
    children: [
      Expanded({
        onClick: ()=> {
          nav('/sample1')
        },
        child: Txt('Sample 1')
      }),
      Expanded({
        onClick: ()=> {
          nav('/sample2')
        },
        child: Txt('Sample 2')
      })
    ]
  })
}
