// controllers/bfhlController.js

const { processData } = require('../models/bfhlModel');


const getOperationCode = (req, res) => {
  res.status(200).json({ operation_code: 1 });
};


const postBfhl = (req, res) => {
  try {
    if (!req.body || !Array.isArray(req.body.data)) {
      return res.status(400).json({
        is_success: false,
        message: 'Invalid input format. "data" must be an array.'
      });
    }

    const inputArray = req.body.data;
    const { numbers, alphabets, highest_alphabet } = processData(inputArray);

    const response = {
      is_success: true,
      user_id: "Shivansh_Tiwari_04062003",  // Format: {full_name_ddmmyyyy}
      email: "22BCS80289@cuchd.in",
      roll_number: "22BCS80289",
      numbers,
      alphabets,
      highest_alphabet
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ is_success: false, message: 'Internal Server Error' });
  }
};

module.exports = { getOperationCode, postBfhl };
