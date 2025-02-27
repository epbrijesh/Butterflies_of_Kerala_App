import { Observable, Frame, Utils } from '@nativescript/core';
import { butterflies } from '../../data/butterflies';
import { DateService } from '../../services/date.service';

export class HomeViewModel extends Observable {
  private _featuredbutterfly;

  constructor() {
    super();
    const dateService = DateService.getInstance();
    const randomIndex = dateService.getRandomNumber(butterflies.length);
    this._featuredbutterfly = butterflies[randomIndex];
  }

  get featuredbutterfly() {
    return this._featuredbutterfly;
  }

  onFeaturedbutterflyTap() {
    Frame.topmost().navigate({
      moduleName: "pages/detail/detail-page",
      context: this._featuredbutterfly,
      clearHistory: false
    });
  }

  onSearchTap() {
    Frame.topmost().navigate({
      moduleName: "pages/list/list-page",
      clearHistory: false
    });
  }

  onLearnTap() {
    Frame.topmost().navigate({
      moduleName: "pages/learn/learn-page",
      clearHistory: false
    });
  }

  onChecklistsTap() {
    Frame.topmost().navigate({
      moduleName: "pages/checklist/checklist-page",
      clearHistory: false
    });
  }

  onTransectTap() {
    Frame.topmost().navigate({
      moduleName: "pages/transect/transect-page",
      clearHistory: false
    });
  }

  onAboutTap() {
    Frame.topmost().navigate({
      moduleName: "pages/about/about-page",
      clearHistory: false
    });
  }

  onAIIdentifierTap() {
    Utils.openUrl("https://butterflyvision.in/");
  }
}