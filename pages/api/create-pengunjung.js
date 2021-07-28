//@ts-check
import { db } from "../../lib/db";

    const handler = async(req,res) => {
        const {nama, umur, alamat, email, foto} = req.body;
        try {
            if (!nama || !umur || !alamat || !email){
            return res
                .status(400)
                .json({message: 'Input harus di isi semua'})
            }
            const results = await db.query(`
            INSERT INTO pengunjung (nama, umur, alamat, email, foto)
            VALUES (?,?,?,?,?)`,[nama, umur, alamat, email, foto]
            );
            await db.end;

            return res.json(results)
        }  catch (e) {
                res.status(500).json({message: e.message});
        }
    };
    export default handler;