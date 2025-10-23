import Airtable from 'airtable';
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

export async function listProducts() {
  const table = process.env.AIRTABLE_PRODUCTS_TABLE || 'Products';
  const records = await base(table).select({}).firstPage();
  return records.map(r => ({ id: r.id, fields: r.fields }));
}

export async function getProductById(id) {
  const table = process.env.AIRTABLE_PRODUCTS_TABLE || 'Products';
  const rec = await base(table).find(id);
  return { id: rec.id, fields: rec.fields };
}
