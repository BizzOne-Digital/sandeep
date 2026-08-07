import { mkdir, writeFile } from 'fs/promises';
import path from 'path';
import { randomBytes } from 'crypto';

export const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads');
export const UPLOAD_URL_PREFIX = '/uploads';

const ALLOWED_TYPES: Record<string, string> = {
  'image/jpeg': '.jpg',
  'image/jpg': '.jpg',
  'image/png': '.png',
  'image/webp': '.webp',
  'image/gif': '.gif',
};

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export function getExtensionForMime(mime: string): string | null {
  return ALLOWED_TYPES[mime] || null;
}

export function isAllowedImage(mime: string): boolean {
  return mime in ALLOWED_TYPES;
}

export async function ensureUploadDir(): Promise<void> {
  await mkdir(UPLOAD_DIR, { recursive: true });
}

export async function saveUploadedFile(
  file: File,
  folder = ''
): Promise<{ url: string; filename: string }> {
  if (!isAllowedImage(file.type)) {
    throw new Error('Only JPG, PNG, WEBP, and GIF images are allowed');
  }

  if (file.size > MAX_FILE_SIZE) {
    throw new Error('Image must be 5MB or smaller');
  }

  const ext = getExtensionForMime(file.type) || path.extname(file.name) || '.jpg';
  const filename = `${Date.now()}-${randomBytes(6).toString('hex')}${ext}`;
  const relativeFolder = folder.replace(/^\/+|\/+$/g, '');
  const destDir = relativeFolder
    ? path.join(UPLOAD_DIR, relativeFolder)
    : UPLOAD_DIR;

  await mkdir(destDir, { recursive: true });

  const buffer = Buffer.from(await file.arrayBuffer());
  const filepath = path.join(destDir, filename);
  await writeFile(filepath, buffer);

  const url = relativeFolder
    ? `${UPLOAD_URL_PREFIX}/${relativeFolder}/${filename}`
    : `${UPLOAD_URL_PREFIX}/${filename}`;

  return { url, filename };
}
