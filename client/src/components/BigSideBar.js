import Wrapper from "../assets/wrappers/BigSidebar";
import { useAppContext } from "../context/appContext";
import NavLinks from "./NavLinks";
import Logo from "../components/Logo";

export default function BigSideBar() {
  const { showSidebar, changeFalseEdit} = useAppContext()
  return <Wrapper>
    <div className={showSidebar ? "sidebar-container": 'sidebar-container show-sidebar'}>
      <div className="content">
        <header>
          <Logo/>
        </header>
        <NavLinks toggleSidebar={changeFalseEdit}/>
      </div>
    </div>
  </Wrapper>;
}
