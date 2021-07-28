import { useDataPgj } from "../lib/swr-fetch"

const detilpgj = () => {

    const {data, error} = useDataPgj();

    if(error){return <div>Error ....</div>}
    if(!data){return <div>Loading ....</div>}
    const {dataPgj} = data;
    return (
        <div>
            <ul>
                {dataPgj.map((pgj, idx) =>(
                    <>
                        <li>{pgj.Nama}</li>
                        <li>{pgj.Umur}</li>
                        <li>{pgj.Alamat}</li>
                        <li>{pgj.Email}</li>
                    </>
                ))}
            </ul>
        </div>
    );
}

export default detilpgj;