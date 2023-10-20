import { Fragment} from "react";
import Header from "./HeaderLayout";
import Footer from "./FooterLayout";

const MainLayout = (props) => {
  

  return (
    <Fragment>
       <Header /> 
        <main>
          {props.children}
        </main>
        <Footer />
    </Fragment>
  );
};

export default MainLayout;
