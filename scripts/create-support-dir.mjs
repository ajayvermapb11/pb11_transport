import { mkdir } from 'fs/promises';
import { join } from 'path';

const supportDir = join(process.cwd(), 'src', 'app', 'support');

try {
  await mkdir(supportDir, { recursive: true });
  console.log('✅ Support directory created successfully');
} catch (error) {
  console.error('Error creating directory:', error);
}
