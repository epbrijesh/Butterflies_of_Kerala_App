import { NavigatedData, Page } from '@nativescript/core';
import { LearnViewModel } from './learn-view-model';

export function onNavigatingTo(args: NavigatedData) {
  const page = <Page>args.object;
  page.bindingContext = new LearnViewModel();
}