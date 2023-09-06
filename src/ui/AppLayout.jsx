import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <>
      <Header />
      <Sidebar />
      <Main>
        <div>main</div>
      </Main>
    </>
  );
}

export default AppLayout;
