// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res)  {
  res.status(200).json(
    {dataPgj:[
        {nama: 'Budi Sogleng', alamat : 'Banyuwangi'},
        {nama: 'Sugeng Sabun', alamat : 'Kabat'},
        {nama: 'Andi Penyok', alamat : 'Srono'}
      ]
    }
  )
}
