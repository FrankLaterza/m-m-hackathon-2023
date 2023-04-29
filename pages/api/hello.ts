// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  res: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log('sent');
  res.status(200).json({ res: 'John Doe' })
}
