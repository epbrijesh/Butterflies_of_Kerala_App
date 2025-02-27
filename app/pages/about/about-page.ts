import { NavigatedData, Page, Frame } from '@nativescript/core';
import { AboutViewModel } from './about-view-model';

export function onNavigatingTo(args: NavigatedData) {
  const page = <Page>args.object;
  page.bindingContext = new AboutViewModel();
}