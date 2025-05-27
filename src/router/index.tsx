import {createBrowserRouter} from "react-router";
import MainLayout from "../layout/main.layout";
import Sample2 from "../pages/Sample2";
import Sample1 from "../pages/Sample1";

export default createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'sample1',
        element: Widget(Sample1)
      },
      {
        path: 'sample2',
        element: Widget(Sample2)
      }
    ]
  }
])
