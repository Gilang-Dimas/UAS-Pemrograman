//@ts-check

import SideBar from "./SideBar";

const AdminLayout = ({children}) => {
    return (
        <div>
            <SideBar>
                {children}
            </SideBar>
        </div>
    );
}

export default AdminLayout;