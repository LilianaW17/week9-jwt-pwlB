const proposalModel = require ('../models/proposalModel');

const getAllProposals = async (req, res ) => {
    try{
        const proposals = await proposalModel.getAllProposals();
        res.json({
            success: true,
            data: proposals
        });
    }
    catch (error){
        res.status(500).json({
            success: false,
            message: 'Error dalam mengambil proposal',
            error: error.message
        });
    }
};

const getProposalById = async (req, res) => {
    try{
        const {id} = req.params;
        const proposal = await proposalModel.getProposalById(id);
        if(!proposal){
            return res.status(404).json({
                success: false,
                message: 'Proposal tidak ditemukan'
            });
        }
        res.json({
            success: true,
            data: proposal
        });
    }
    catch (error){
        res.status(500).json({
            success: false,
            message: 'Error dalam mengambil proposal dengan ID',
            error: error.message
        });
    }
}

const createProposal = async (req, res) => {
    try{
        const proposalId = await proposalModel.createProposal(req.body);
        res.status(201).json({
            success: true,
            message: 'Data Proposal berhasil ditambah',
            data: {id: proposalId, ...req.body}
        });
    }
    catch (error){
        res.status(500).json({
            success: false,
            message: 'Proposal gagal ditambah',
            error: error.message
        });
    }
}

const updateProposal = async (req, res) => {
    try{
        const {id} = req.params;
        const affectedRows = await proposalModel.updateProposal(id, req.body);
        if (affectedRows === 0){
            return res.status (404).json({
                success: false,
                message: 'Proposal tidak ditemukan'
            });
        }
        res.json({
            success: true,
            message: 'Proposal berhasil diupdate'
        });
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: 'Gagal update proposal',
            error: error.message
        });
    }
};

const deleteProposal = async (req, res) => {
    try{
        const {id} = req.params;
        const affectedRows = await proposalModel.deleteProposal(id);
        if (affectedRows === 0){
            return res.status(404).json({
                success: false,
                message: 'Proposal tidak ditemukan'
            });
        }
        res.json({
            success: true,
            message: 'Proposal berhasil dihapus'
        });
    }
    catch (error){
        res.status(500).json({
            success: false,
            message: 'Gagal menghapus proposal',
            error: error.message
        });
    }
};

module.exports = {
    getAllProposals,
    getProposalById,
    createProposal,
    updateProposal,
    deleteProposal
};