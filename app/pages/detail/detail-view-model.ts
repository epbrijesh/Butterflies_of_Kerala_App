import { Observable, Frame, GestureEventData, PinchGestureEventData, PanGestureEventData, Utils, Dialogs } from '@nativescript/core';
import { Butterfly, HostPlant } from '../../models/butterfly.model';
import { ZoomService } from '../../services/zoom.service';
import { ChecklistService } from '../../services/checklist.service';
import { ClipboardService } from '../../services/clipboard.service';

export class DetailViewModel extends Observable {
  private _butterfly: Butterfly;
  private _zoomService: ZoomService;
  private _checklistService: ChecklistService;
  private _clipboardService: ClipboardService;
  private _isInChecklist: boolean;

  constructor(butterfly: Butterfly) {
    super();
    this._butterfly = butterfly;
    this._zoomService = new ZoomService();
    this._checklistService = ChecklistService.getInstance();
    this._clipboardService = ClipboardService.getInstance();
    this._isInChecklist = this._checklistService.isInChecklist(butterfly.id);
  }

  get butterfly(): Butterfly {
    return this._butterfly;
  }

  get isInChecklist(): boolean {
    return this._isInChecklist;
  }

  get checklistButtonText(): string {
    return this._isInChecklist ? "Remove from My Checklist" : "Add to My Checklist";
  }

  copyScientificInfo() {
    const text = `${this._butterfly.sciName} | ${this._butterfly.malayalamName} | ${this._butterfly.commonName}`;
    
    if (!this._clipboardService.copyToClipboard(text)) {
      Dialogs.alert({
        title: "Error",
        message: "Failed to copy information. Please try again.",
        okButtonText: "OK"
      });
    }
  }

  copyToClipboard() {
    const hostPlantsText = this._butterfly.hostPlants && this._butterfly.hostPlants.length > 0 
      ? `Host Plants: ${this._butterfly.hostPlants.map(hp => hp.name).join(', ')}` 
      : '';
    
    const wingspanText = this._butterfly.wingspan 
      ? `Wingspan: ${this._butterfly.wingspan}` 
      : '';
    
    const details = [
      `Scientific Name: ${this._butterfly.sciName}`,
      `Common Name: ${this._butterfly.commonName}`,
      `Malayalam Name: ${this._butterfly.malayalamName}`,
      `Family: ${this._butterfly.family}`,
      wingspanText,
      hostPlantsText,
      `Description: ${this._butterfly.description1} ${this._butterfly.description2} ${this._butterfly.description3} ${this._butterfly.description4} ${this._butterfly.description5}`,
      `Wikipedia: ${this._butterfly.wikipediaLink}`
    ].filter(item => item !== '').join('\n\n');

    if (this._clipboardService.copyToClipboard("*Butterflies of Kerala App* by Brijesh Pookkottur.\n https://play.google.com/store/apps/details?id=com.thinkdigit.butterflies.kerala\n\n"+details+"\n")) {
      Dialogs.alert({
        title: "Success",
        message: "Details copied to clipboard!\n\ \n\വിവരങ്ങള്‍ കോപ്പി ചെയ്തു. ഇനി എവിടേയും പേസ്റ്റ് ചെയ്യാം.",
        okButtonText: "OK"
      });
    } else {
      Dialogs.alert({
        title: "Error",
        message: "Failed to copy details. Please try again.",
        okButtonText: "OK"
      });
    }
  }

  onPinch(args: PinchGestureEventData) {
    try {
      if (!this._zoomService) {
        this._zoomService = new ZoomService();
      }
      this._zoomService.handlePinch(args);
    } catch (error) {
      console.error('Error in onPinch:', error);
    }
  }

  onDoubleTap(args: GestureEventData) {
    try {
      if (!this._zoomService) {
        this._zoomService = new ZoomService();
      }
      this._zoomService.handleDoubleTap(args);
    } catch (error) {
      console.error('Error in onDoubleTap:', error);
    }
  }

  onPan(args: PanGestureEventData) {
    try {
      if (!this._zoomService) {
        this._zoomService = new ZoomService();
      }
      this._zoomService.handlePan(args);
    } catch (error) {
      console.error('Error in onPan:', error);
    }
  }

  onSpeciesLinkTap() {
    Utils.openUrl(this._butterfly.speciesLink);
  }

  onWikipediaLinkTap() {
    Utils.openUrl(this._butterfly.wikipediaLink);
  }

  onCreditTap(args) {
    const photo = args.object.bindingContext;
    if (photo && photo.sourceUrl) {
      Utils.openUrl(photo.sourceUrl);
    }
  }

  onHostPlantTap(args) {
    const hostPlant = args.object.bindingContext as HostPlant;
    if (hostPlant && hostPlant.wikiLink) {
      Utils.openUrl(hostPlant.wikiLink);
    }
  }

  onChecklistTap() {
    if (this._isInChecklist) {
      this._checklistService.removeFromChecklist(this._butterfly.id);
    } else {
      this._checklistService.addToChecklist(this._butterfly.id);
    }
    this._isInChecklist = !this._isInChecklist;
    this.notifyPropertyChange('isInChecklist', this._isInChecklist);
    this.notifyPropertyChange('checklistButtonText', this.checklistButtonText);
  }

  goBack() {
    Frame.topmost().goBack();
  }
}