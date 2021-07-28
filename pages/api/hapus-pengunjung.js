//@ts-check

import { db } from '../../lib/db'

const handler = async (req, res) =>{
    const { nama } = req.query
        try {
            if (!nama) {
                return res.status(400).json({ message: '`nama` tidak ada'})
            }
            const results = await db.query(
                `
                DELETE FROM pengunjung
                WHERE nama = ?`,nama )
            res.json(results)
        } catch (e) {
            res.status(500).json({ message: e.message})
        }
    }

export default handler;