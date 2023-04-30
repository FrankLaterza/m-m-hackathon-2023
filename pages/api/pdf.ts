// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path';
const pdfPath = path.join('../pdf', 'path', 'to', 'pdf', 'file.pdf');
import extractTextFromPdf from '../../utils/pdf_to_text'

type Data = {
  res: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    try {
        const text = await extractTextFromPdf(pdfPath);
        console.log(text);
        res.status(200).json({ res: text });
      } catch (error) {
        console.error(error);
        res.status(500).json({ res: 'Internal server error' });
      }
}
