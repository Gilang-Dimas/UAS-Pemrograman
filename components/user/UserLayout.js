//@ts-check

import NavBar from "./Navbar";
const UserLayout = ({children}) => {
    return(
        <div>
            <NavBar />
            {children}
        </div>
    );
}

export default UserLayout;