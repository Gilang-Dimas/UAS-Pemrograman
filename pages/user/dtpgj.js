//@ts-check

import DataPengunjung from "../../components/user/DataPengunjung";
import UserLayout from "../../components/user/UserLayout";
const dtpgj = () => {

return(
    <div>
        <UserLayout>
            <div className="mt-4">
                <DataPengunjung />
            </div>
        </UserLayout>
    </div>
    );
}

export default dtpgj;