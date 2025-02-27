import { NavigatedData, Page } from '@nativescript/core';
import { TransectViewModel } from './transect-view-model';

export function onNavigatingTo(args: NavigatedData) {
  const page = <Page>args.object;
  page.bindingContext = new TransectViewModel();
}