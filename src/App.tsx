export default function App() {
  return Root({
    child: Stack({
      children: [
        Positioned({
          width: "100%",
          height: "100%",
          child: Center({
            child: CircularProgress({
              size: 120,
              thickness: 1,
            })
          })
        }),
        Positioned({
          width: "100%",
          height: "100%",
          child: Center({
            child: Container({
              width: 100, height: 100,
              child: Icon("settings", { size: 100, color: "yellow" })
            })
          })
        }),
      ]
    })
  }).builder();
}