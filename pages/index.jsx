import Layout from '../components/Layout/layout.cmp';
import './style.scss';
import Homepage from "../components/Home-page/homepage.cmp";
import Portfolio from "../pages/portfolio";

const Index =()=> {
  return (
    <Layout>
      <Homepage/>
    </Layout>
  )
}

export default Index;