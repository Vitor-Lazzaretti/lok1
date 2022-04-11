import { Router } from "express";

const router = Router();

router.get('/', (req, res) => { res.json({ api: 'Leo' }) });
router.get('*', (req, res) => { res.json('NotFound') });

export default router;