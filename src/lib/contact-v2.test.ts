import { describe, it, expect } from 'vitest';
import { generateReferenceId } from '@/lib/referenceId';

describe('Reference ID Generator', () => {
  it('generates a reference id matching AM-YYYYMMDD-XXXX format', () => {
    const id = generateReferenceId();
    expect(id).toMatch(/^AM-\d{8}-\d{4}$/);
  });

  it('generates unique values sequentially', () => {
    const id1 = generateReferenceId();
    const id2 = generateReferenceId();
    expect(id1).not.toBe(id2);
  });
});
