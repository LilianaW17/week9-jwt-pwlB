const express = require('express');
const router = express.Router();

const proposalController = require('../controllers/proposalController');
const validateProposal = require('../middleware/proposalValidate');

const authenticateToken = require('../middleware/authMiddleware');
const authorizeAdmin = require('../middleware/authorizeAdmin');

router.get('/', authenticateToken, proposalController.getAllProposals);
router.get('/:id', authenticateToken, proposalController.getProposalById);

router.post('/', authenticateToken, authorizeAdmin, validateProposal, proposalController.createProposal);
router.put('/:id', authenticateToken, authorizeAdmin, validateProposal, proposalController.updateProposal);
router.delete('/:id', authenticateToken, authorizeAdmin, proposalController.deleteProposal);

module.exports = router;