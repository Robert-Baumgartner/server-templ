import { query } from '../db/index.js';

const dbTest = async () => {
  const { rows } = await query("SELECT 'It works' as test");
  return rows;
};

export default dbTest;
