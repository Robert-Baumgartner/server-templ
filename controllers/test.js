import dbTest from '../models/test.js';

const test = async (req, res) => res.status(200).json(await dbTest());

export default test;
