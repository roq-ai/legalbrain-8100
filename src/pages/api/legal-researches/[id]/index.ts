import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { legalResearchValidationSchema } from 'validationSchema/legal-researches';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.legal_research
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getLegalResearchById();
    case 'PUT':
      return updateLegalResearchById();
    case 'DELETE':
      return deleteLegalResearchById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getLegalResearchById() {
    const data = await prisma.legal_research.findFirst(convertQueryToPrismaUtil(req.query, 'legal_research'));
    return res.status(200).json(data);
  }

  async function updateLegalResearchById() {
    await legalResearchValidationSchema.validate(req.body);
    const data = await prisma.legal_research.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteLegalResearchById() {
    const data = await prisma.legal_research.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
