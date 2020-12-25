import express, { Request, Response } from 'express';
import { requireAuth, validateRequest, NotFoundError } from '@bltickets/common';
import { Ticket } from '../modules/ticket';

const router = express.Router();

router.get('/api/tickets/:id', async (req: Request, res: Response) => {
  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) {
    throw new NotFoundError();
  }

  res.send(ticket);
});

export { router as showTicketRouter };
