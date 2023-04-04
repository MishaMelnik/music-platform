import {FC} from "react";
// Components
import MainLayout from "@/layouts/MainLayout";


 const Home: FC = () => {
  return (
    <MainLayout>
        <div style={{
            marginTop:"150px",
            display:'flex',
            flexDirection:'column',
            justifyContent: 'center',
            alignItems:'center'
        }}>
            <h1 style={{color: 'black'}}>Hello</h1>
            <h1 style={{color: 'black'}}>Hello</h1>
            <h1 style={{color: 'black'}}>Hello</h1>
            <h1 style={{color: 'black'}}>Hello</h1>
        </div>
    </MainLayout>
  )
}
export default Home
