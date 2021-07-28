//@ts-check

import { useDataPgj } from "../../lib/swr-fetch";

const DataPengunjung = () => {
    const {data, error} = useDataPgj();
if (error){
    return <div>Error Loading</div>
}
if (!data){
    return <div>Loading</div>

}

//console.log(data);

    return (
        <div style ={{marginLeft : "50px"}}>
        <h3>Data Pengunjung</h3>
        <table className = "table">
            <thead>
                <tr>
                    <th>Nama</th>
                    <th>Umur</th>
                    <th>Alamat</th>
                    <th>Email</th>

                </tr>
            </thead>
            <tbody>
        
            {data.map((pgj, idx) => (
                <tr key ={idx}>

                        <td>
                            {pgj.nama}
                        </td>
                        <td>
                            {pgj.umur}
                        </td>
                        <td>
                            {pgj.alamat}
                        </td>
                        <td>
                            {pgj.email}
                        </td>
                        

                        </tr>
                        ))
                    
                    }
                    </tbody>
                </table>
            </div>
    );
}

export default DataPengunjung;