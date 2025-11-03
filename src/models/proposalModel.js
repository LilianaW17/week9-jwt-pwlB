const db = require('../config/db');

const getAllProposals = async () => {
    try{
        const [rows] = await db.query('SELECT * FROM proposals');
        return rows;
    }
    catch (error){
        throw new Error (`Database query failed: ${error.message}`);
    }
};

const getProposalById = async (id) => {
    try{
        const [rows] = await db.query('SELECT * FROM proposals WHERE id = ?', [id]);
        return rows[0];
    }
    catch (error){
        throw new Error (`Database query failed: ${error.message}`);
    }
};

const createProposal = async (proposalData) => {
    try{
        const { judul, kategori, ketua, univ, status_lolos} = proposalData;
        const [result] = await db.query('INSERT INTO proposals (judul, kategori, ketua, univ, status_lolos) VALUES (?,?,?,?,?)', [judul, kategori, ketua, univ, status_lolos]);
        return result.insertId;
    }
    catch (error){
        throw new Error (`Database query failed: ${error.message}`);
    }
};

const updateProposal = async (id, proposalData) =>{
    try{
        const { judul, kategori, ketua, univ, status_lolos} = proposalData;
        const[result] = await db.query('UPDATE proposals SET judul=?, kategori=?, ketua=?, univ=?, status_lolos=? WHERE id=?', [judul, kategori, ketua, univ, status_lolos, id]);
        return result.affectedRows;
    }
    catch (error){
        throw new Error (`Database query Failed: ${error.message}`);
    }
};

const deleteProposal = async (id) => {
    try{
        const [result] = await db.query('DELETE FROM proposals WHERE id=?', [id]);
        return result.affectedRows;
    }
    catch (error){
        throw new Error(`Database query failed: ${error.message}`);
    }
};

module.exports = {
    getAllProposals,
    getProposalById,
    createProposal,
    updateProposal,
    deleteProposal
};