// controllers/bfhlController.js

const { processData } = require('../models/bfhlModel');

/**
 * GET /bfhl
 * Returns a hardcoded operation code.
 */
const getOperationCode = (req, res) => {
  res.status(200).json({ operation_code: 1 });
};

/**
 * POST /bfhl
 * Processes the incoming JSON payload.
 *
 * Expects:
 * {
 *   "data": ["M", "1", "334", "4", "B"]
 * }
 *
 * Returns:
 * {
 *   "is_success": true,
 *   "user_id": "john_doe_17091999",
 *   "email": "john@xyz.com",
 *   "roll_number": "ABCD123",
 *   "numbers": ["1", "334", "4"],
 *   "alphabets": ["M", "B"],
 *   "highest_alphabet": ["M"]
 * }
 */
const postBfhl = (req, res) => {
  try {
    // Validate input: Ensure "data" exists and is an array.
    if (!req.body || !Array.isArray(req.body.data)) {
      return res.status(400).json({
        is_success: false,
        message: 'Invalid input format. "data" must be an array.'
      });
    }

    const inputArray = req.body.data;
    const { numbers, alphabets, highest_alphabet } = processData(inputArray);

    // Build the response object with hardcoded user details.
    const response = {
      is_success: true,
      user_id: "john_doe_17091999",  // Format: {full_name_ddmmyyyy}
      email: "john@xyz.com",
      roll_number: "ABCD123",
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
