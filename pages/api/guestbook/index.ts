import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import prisma from 'lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const entries = await prisma.guestbook.findMany({
      orderBy: {
        email: 'desc'
      }
    });

    return res.json(
      entries.map((entry) => ({
        id: entry.id.toString(),
        body: entry.body,
      }))
    );
  }

  const session = await getSession({ req });
  const { email, name } = session.user;

  if (!session) {
    return res.status(403).send('Unauthorized');
  }

  if (req.method === 'POST') {
    const newEntry = await prisma.guestbook.create({
      data: {
        email,
        body: (req.body.body || '').slice(0, 500),
        created_by: name
      }
    });

    return res.status(200).json({
      id: newEntry.id.toString(),
      body: newEntry.body,
    });
  }

  return res.send('Method not allowed.');
}
