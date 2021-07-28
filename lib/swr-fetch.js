import useSWR from 'swr'

async function fetcher(url){
    const res = await fetch(url);
    return res.json();
}

export const useDataPgj = () => {
    //url
    const url = "http://localhost:3000/api/dataPengunjung";
    //data dan error
    const {data, error} = useSWR(url, fetcher);

    return {data, error}
}