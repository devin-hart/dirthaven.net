import { readFileSync } from 'node:fs';
import { join } from 'node:path';

// Single source: public/ai.md. Served as plain text at /ai.
export function GET() {
  const text = readFileSync(join(process.cwd(), 'public', 'ai.md'), 'utf-8');
  return new Response(text, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
