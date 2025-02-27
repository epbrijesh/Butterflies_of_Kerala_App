import { Observable, Frame, Utils } from '@nativescript/core';

export class LearnViewModel extends Observable {
  constructor() {
    super();
  }

  goBack() {
    Frame.topmost().goBack();
  }

  openButterflyBook() {
    Utils.openUrl("https://drive.google.com/file/d/1QEs_Cgm0YtdAmUt-K_wIpkQsxDHGVlzk/view?usp=drivesdk");
  }

  openWesternGhatsBook() {
    Utils.openUrl("https://www.researchgate.net/profile/Raju-Kasambe/publication/326098762_Butterflies_of_Western_Ghats_Second_Edition_2018_-3_Final/links/5b38fae4aca272078500df4f/Butterflies-of-Western-Ghats-Second-Edition-2018-3-Final.pdf");
  }

  openButterflyWatchingBook() {
    Utils.openUrl("https://drive.google.com/file/d/1QP5lpGT8r72uFvKMFD3E65-oD7aM-eTm/view?usp=drivesdk");
  }
}