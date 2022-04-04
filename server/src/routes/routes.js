import { Router } from "express";

const router = Router();

router.get('/', (req, res) => { res.send('API') });
router.get('*', (req, res) => { res.send('NotFound') });

export default router;