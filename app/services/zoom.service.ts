import { PinchGestureEventData, GestureEventData, PanGestureEventData, View } from '@nativescript/core';

export interface ZoomState {
  currentScale: number;
  previousScale: number;
  deltaX: number;
  deltaY: number;
}

export class ZoomService {
  private zoomStates: Map<number, ZoomState> = new Map();

  private getZoomState(viewId: number): ZoomState {
    if (!this.zoomStates.has(viewId)) {
      this.zoomStates.set(viewId, {
        currentScale: 1,
        previousScale: 1,
        deltaX: 0,
        deltaY: 0
      });
    }
    return this.zoomStates.get(viewId);
  }

  handlePinch(args: PinchGestureEventData): void {
    const image = args.object as View;
    const scrollView = image.parent as View;
    const viewId = scrollView._domId;
    const state = this.getZoomState(viewId);

    if (args.state === 1) {
      state.previousScale = state.currentScale;
    }

    let newScale = state.previousScale * args.scale;
    newScale = Math.min(Math.max(1, newScale), 4);

    state.currentScale = newScale;
    scrollView.animate({
      scale: { x: newScale, y: newScale },
      duration: 0
    });
  }

  handleDoubleTap(args: GestureEventData): void {
    const image = args.object as View;
    const scrollView = image.parent as View;
    const viewId = scrollView._domId;
    const state = this.getZoomState(viewId);

    const newScale = state.currentScale > 1 ? 1 : 2;
    const newTranslate = state.currentScale > 1 ? 0 : state.deltaX;

    state.currentScale = newScale;
    state.deltaX = newTranslate;
    state.deltaY = newTranslate;

    scrollView.animate({
      scale: { x: newScale, y: newScale },
      translate: { x: newTranslate, y: newTranslate },
      duration: 300,
      curve: "easeInOut"
    });
  }

  handlePan(args: PanGestureEventData): void {
    const image = args.object as View;
    const scrollView = image.parent as View;
    const viewId = scrollView._domId;
    const state = this.getZoomState(viewId);

    if (state.currentScale <= 1) return;

    if (args.state === 1) {
      state.deltaX = scrollView.translateX || 0;
      state.deltaY = scrollView.translateY || 0;
    }

    const maxPan = this.calculateMaxPan(image, state.currentScale);
    const newTranslation = this.calculateConstrainedTranslation(
      state.deltaX + args.deltaX,
      state.deltaY + args.deltaY,
      maxPan
    );

    scrollView.animate({
      translate: newTranslation,
      duration: 0
    });

    if (args.state === 3) {
      state.deltaX = newTranslation.x;
      state.deltaY = newTranslation.y;
    }
  }

  private calculateMaxPan(image: View, scale: number) {
    const size = image.getActualSize();
    return {
      x: (size.width * (scale - 1)) / 2,
      y: (size.height * (scale - 1)) / 2
    };
  }

  private calculateConstrainedTranslation(x: number, y: number, maxPan: { x: number; y: number }) {
    return {
      x: Math.min(Math.max(-maxPan.x, x), maxPan.x),
      y: Math.min(Math.max(-maxPan.y, y), maxPan.y)
    };
  }
}