import { NavigatedData, Page } from '@nativescript/core';
import { ListViewModel } from './list-view-model';

export function onNavigatingTo(args: NavigatedData) {
  const page = <Page>args.object;
  page.bindingContext = new ListViewModel();
}