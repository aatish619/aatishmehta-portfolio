/**
 * Generates a unique, database-ready reference ID in the format: AM-YYYYMMDD-XXXX
 */
export function generateReferenceId(): string {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  // Generate a random 4-digit numeric string to serve as the sequential/random counter
  const randomSuffix = String(Math.floor(1000 + Math.random() * 9000));
  
  return `AM-${year}${month}${day}-${randomSuffix}`;
}
