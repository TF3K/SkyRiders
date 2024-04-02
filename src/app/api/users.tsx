import { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
    message: string,
    users: { id: number, name: string }[]
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    if (req.method === "GET"){
        const users = [
            {id:1, name:"John Doe"},
            {id:2, name:"Jane Doe"}
        ];
        res.status(200).json({ message: "Success", users });
    } else {
        res.status(405).end("Method not allowed yet")
    }
}