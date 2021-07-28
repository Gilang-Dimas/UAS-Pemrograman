//@ts-check
import { useState } from "react"

const CreatePengunjung = () => {
    const [nama, setNama] = useState('');
    const [umur, setUmur] = useState('');
    const [alamat, setAlamat] = useState('');
    const [email, setEmail] = useState('');
    const [foto, setFoto] = useState(null);
    const [selectedFile, setselectedFile] = useState('');
    const [file, setFile] = useState('');

    const onSelectImage = (e) => {
        if (!e.target.files || e.target.files.length === 0){
            setSelectedFile(undefined)
            return
        }

        const _file = e.target.files[0];

        const reader = new FileReader()
        reader.onload = function(){
            setFile(_file);
            setFoto(reader.result);
        }
        reader.readAsDataURL(_file)
    }

    async function submitHandler(e){
        e.preventDefault()
        try{
            const res = await fetch("http://localhost:3000/api/create-pengunjung",{
                method: 'POST',
                headers:{
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify({
                    nama,
                    umur,
                    alamat,
                    email,
                    foto

                }),
            })
            const json = await res.json()
            if (!res.ok) throw Error(json.message)
            alert("Penambahan Data Sukses")
        }catch (e){
            throw Error(e.message)
        }
    }
    return(
        <div>
            <div className= "container mt-4"></div>
                <form className = "w-50 mx-auto" onSubmit={submitHandler}>
                    <h1 className ="w-75 text-center">Input Pengunjung</h1>
                    <div className="w-75 text-center mb-3">
                        <label htmlFor="uploadGambar">
                        <img 
                            className="rounded-circle"
                            src={foto} alt="Pilih Foto"
                            style = {{background : "blue",
                               width : "100px", height:"100px"}} />
                        </label>
                        <input 
                            id = "uploadGambar"
                            type="file" 
                            style ={{display : "none"}} 
                            onChange = {onSelectImage} />
                    </div>
                    
                    <div className="w-75">

                    
                    <div className = "form-floating">
                        <input 
                            className="form-control mb-2"
                            id ="nama"
                            type ="text"
                            placeholder = "nama"
                            value = {nama}
                            onChange = {(e) => setNama(e.target.value)}
                    />
                    <label htmlFor="nama">Nama</label>
            </div>

            <div className = "form-floating">
                <input 
                    className="form-control mb-2"
                    id ="umur"
                    type ="text"
                    placeholder = "umur"
                    value = {umur}
                    onChange = {(e) => setUmur(e.target.value)}
                />
                <label htmlFor="nama">Umur</label>
            </div>
       
            <div className = "form-floating">
                <input 
                    className="form-control mb-2"
                    id ="alamat"
                    type ="text"
                    placeholder ="alamat"
                    value = {alamat}
                    onChange = {(e) => setAlamat(e.target.value)}
                />
                <label htmlFor="nama">Alamat</label>
            </div>

            
            <div className = "form-floating">
                <input 
                    className="form-control mb-2"
                    id ="email"
                    type ="text"
                    placeholder="email"
                    value = {email}
                    onChange = {(e) => setEmail(e.target.value)}
                />
                <label htmlFor="nama">Email</label>
            </div>
            </div>
            <div className ="w-75 d-flex flex-row-reverse">
            <button className = "btn btn-primary "
                        type = "submit"
                >
                Simpan
            </button>
            </div>
            </form>
        </div>
        
    );
}

export default CreatePengunjung;