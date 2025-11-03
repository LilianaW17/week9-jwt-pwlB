const validateProposal = (req, res, next) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ message: "Request body is required." });
    }

    const { judul, ketua, status_lolos } = req.body;
    if (!judul || !ketua || status_lolos === undefined) {
        return res.status(400).json({
            message: "Fields 'judul', 'ketua', and 'status_lolos' are required"
        });
    }
    
    if (typeof status_lolos !== 'boolean') {
        return res.status(400).json({ 
            message: "'status_lolos' must be a boolean (true or false)" 
        });
    }
    next();
};

module.exports = validateProposal;