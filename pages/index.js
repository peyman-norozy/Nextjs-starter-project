import { useSelector } from "react-redux";

const Home = () => {

  const state = useSelector(state=>state)
  console.log(state)
  
  return (
    <>
    <div>Welcom to this project</div>
    </>
  );
};

export default Home;