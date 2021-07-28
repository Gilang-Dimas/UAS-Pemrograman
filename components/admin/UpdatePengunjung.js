//@ts-check

import { useEffect, useState } from "react";
import Router , {useRouter} from 'next/router';

const UpdatePengunjung = () =>{
    //Deklarasi state
    const [_nama, setNama] = useState('');
    const [_umur, setUmur] = useState('');
    const [_alamat, setAlamat] = useState('');
    const [_email, setEmail] = useState('');
    const [_foto, setFoto] = useState(null);
    const [selectedFile, setSelectFile] = useState('');
    const [file, setFile] = useState('');

    //mengmbil data yang dikirim melalui router
    const router = useRouter()
    const {nama, umur, alamat, email} = router.query;

    useEffect(()=>{
        if (typeof nama == 'string') {
            setNama(nama);
        }
        if (typeof umur == 'string'){
            setUmur(umur);
        }
        if (typeof alamat == 'string'){
            setAlamat(alamat);
        }
        if (typeof email == 'string'){
            setEmail(email);
        }
    },[nama, umur, alamat, email],)

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

    const submitHandler = async(e) => {
        e.preventDefault()
            //setSubmitting(true)
            try{
                const res = await fetch('/api/update-pengunjung', {
                    method: 'PATCH',
                    headers: {
                    'Content-type': 'application/json',
                    },
                    body: JSON.stringify({
                    nama : _nama,
                    umur : _umur,
                    alamat : _alamat,
                    email : _email,
                    foto : _foto
                    }),
                })
                const json = await res.json()
                //setSubmitting(false)
                if (!res.ok) throw Error(json.message)

                alert("Update Data Sukses")
                
                Router.push('/admin/datapengunjung')
                } catch (e) {
                    throw Error(e.message)
                }
    }

    return (
        <div>
            <div className= "container mt-4">
                <form className = "w-50 mx-auto" onSubmit={submitHandler}>
                    <h1 className="w-75 font-bold text-center mb-3">Edit Data Pengunjung</h1>

                    <div className="w-75 text-center mb-3">
                        <label htmlFor="uploadGambar">
                        <img 
                            className="rounded-circle"
                            src={_foto} alt="Pilih Foto"
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
                            value = {_nama}
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
                    value = {_umur}
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
                    value = {_alamat}
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
                    value = {_email}
                    onChange = {(e) => setEmail(e.target.value)}
                />
                <label htmlFor="nama">Email</label>
            </div>
            <div className ="d-flex flex-row-reverse">
                <button className = "btn btn-primary "
                        type = "submit"
                >
                    Update
                </button>
            </div>
            </div>
            </form>
            </div>
        </div>
    )
}

export default UpdatePengunjung;