import { Observable, Frame, Utils, Dialogs, ApplicationSettings } from '@nativescript/core';
import { SyncService } from '../../services/sync.service';

export class AboutViewModel extends Observable {
  private syncService: SyncService;
  private _currentVersion: number;
  private _latestVersion: number = 0;

  constructor() {
    super();
    this.syncService = SyncService.getInstance();
    this._currentVersion = ApplicationSettings.getNumber('butterfliesDataVersion', 0);
    this.checkLatestVersion();
  }

  get currentVersion(): string {
    return this._currentVersion ? `${this._currentVersion}` : 'Not synced';
  }

  get latestVersion(): string {
    return this._latestVersion ? `${this._latestVersion}` : 'Checking...';
  }

  private async checkLatestVersion() {
    try {
      const hasUpdates = await this.syncService.checkForUpdates();
      if (hasUpdates) {
        const response = await fetch(this.syncService.VERSION_URL);
        const data = await response.json();
        this._latestVersion = data.version;
        this.notifyPropertyChange('latestVersion', this.latestVersion);
      } else {
        this._latestVersion = this._currentVersion;
        this.notifyPropertyChange('latestVersion', this.latestVersion);
      }
    } catch (error) {
      console.error('Error checking latest version:', error);
      this._latestVersion = 0;
      this.notifyPropertyChange('latestVersion', 'Error');
    }
  }

  async syncData() {
    try {
      const hasUpdates = await this.syncService.checkForUpdates();
      
      if (!hasUpdates) {
        Dialogs.alert({
          title: "Up to Date",
          message: "Your butterfly data is already up to date!",
          okButtonText: "OK"
        });
        return;
      }

      const result = await this.syncService.syncData();
      
      if (result.success) {
        this._currentVersion = result.version;
        this.notifyPropertyChange('currentVersion', this.currentVersion);
        
        await Dialogs.alert({
          title: "Success",
          message: result.message + "\n\nPlease restart the app to see the updated data.",
          okButtonText: "OK"
        });
      } else {
        Dialogs.alert({
          title: "Sync Failed",
          message: result.message,
          okButtonText: "OK"
        });
      }
    } catch (error) {
      Dialogs.alert({
        title: "Error",
        message: "An unexpected error occurred while syncing data.",
        okButtonText: "OK"
      });
    }
  }

  goBack() {
    Frame.topmost().goBack();
  }

  openWebsite() {
    Utils.openUrl("https://thinkdigitdev.blogspot.com");
  }

  openPlayStore() {
    Utils.openUrl("https://play.google.com/store/apps/details?id=com.thinkdigit.butterflies.kerala");
  }
  
  openPlayStorePub() {
    Utils.openUrl("https://play.google.com/store/apps/developer?id=thinkdigit");
  }

  sendEmail() {
    Utils.openUrl("mailto:epbrijesh@gmail.com");
  }

  callPhone() {
    Utils.openUrl("tel:+919961257788");
  }

  onDeveloperImageTap() {
    Utils.openUrl("https://www.facebook.com/brijesh.ep");
  }

  onStearImageTap() {
    Utils.openUrl("https://stearorg.blogspot.com");
  }

  onTnhsImageTap() {
    Utils.openUrl("https://tnhs.info");
  }

  onWikipediaImageTap() {
    Utils.openUrl("https://ml.wikipedia.org/wiki/List_of_butterflies_of_Kerala");
  }

  onSosImageTap() {
    Utils.openUrl("https://www.ifoundbutterflies.org/");
  }

  onInaturalistImageTap() {
    Utils.openUrl("https://www.inaturalist.org/projects/butterflies-of-kerala");
  }

  onButterflyVisionImageTap() {
    Utils.openUrl("https://scholar.google.co.in/citations?user=qVr1HmcAAAAJ&hl=en");
  }
  
  onBoltImageTap() {
    Utils.openUrl("https://bolt.new");
  }

  onGithubImageTap() {
    Utils.openUrl("https://github.com/epbrijesh/Butterflies_of_Kerala_App/");
  }
}