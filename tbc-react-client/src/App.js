import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header2 from "./Nav/Header2";
import Discover from "./Discover/Discover";
import UserSetting from "./member/UserSetting";
import { Container, Grid } from "@material-ui/core";
// import EditProject from './components/EditProject';

function App() {
  return (
    <div className="App">
      <Container maxWidth="xl" fixed>
        <Header2 />
      </Container>
      <hr />
      {/* 아직 라우터 설정을 안해서 잠시 이렇게 작업하고 있습니다... 밑에 주석 푸시면 보입니다 */}
      <UserSetting />
      {/* <Discover /> */}
      {/* <EditProject /> */}
    </div>
  );
}

export default App;
