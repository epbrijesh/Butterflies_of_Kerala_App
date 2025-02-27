import { Utils } from '@nativescript/core';

export class ClipboardService {
  private static instance: ClipboardService;

  private constructor() {}

  static getInstance(): ClipboardService {
    if (!ClipboardService.instance) {
      ClipboardService.instance = new ClipboardService();
    }
    return ClipboardService.instance;
  }

  copyToClipboard(text: string): boolean {
    try {
      Utils.copyToClipboard(text);
      return true;
    } catch (error) {
      console.error('Error copying to clipboard:', error);
      return false;
    }
  }
}