// src/tesseractService.js
import { createWorker } from 'tesseract.js';

const worker = createWorker();

export const initializeTesseract = async () => {
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
};

export const extractTextFromImage = async (imageData) => {
  const {
    data: { text },
  } = await worker.recognize(imageData);
  return text;
};
