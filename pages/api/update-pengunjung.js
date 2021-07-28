//@ts-check

import { db } from "../../lib/db";

    const handler = async (req, res) => {
        const {nama, umur, alamat, email, foto} = req.body;
        try {
            if (!nama || !umur || !alamat || !email){
                return res
                .status(400)
                .json({message: 'isian tidak boleh kosong'})
            }
            //const result = await sql_query(`
            const results = await db.query(
                `UPDATE Pengunjung  set nama = ?, umur = ?, alamat = ?, email = ?, foto = ?
                WHERE nama = ?`,[nama,umur,alamat,email,foto,nama]
                );
            return res.json(results)
        } catch (e) {
            res.status(500).json({message: e.message});
        } 
    };

    export default handler;