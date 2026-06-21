import { Component, input, signal, PLATFORM_ID, inject, ElementRef, viewChild, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-img-skeleton',
  standalone: true,
  template: `
    <div [class]="'relative overflow-hidden ' + containerClass()">
      @if (isLoading()) {
        <div [class]="'absolute inset-0 bg-slate-200 animate-pulse ' + skeletonClass()"></div>
      }
      <img #imgElement
           [src]="src()"
           [alt]="alt()"
           [class]="imgClass() + ' transition-opacity duration-300'"
           [class.opacity-0]="isLoading()"
           (load)="onLoad()"
           (error)="onError()" />
    </div>
  `
})
export class ImgSkeletonComponent implements AfterViewInit {
  src = input.required<string>();
  alt = input<string>('');
  imgClass = input<string>('');
  skeletonClass = input<string>('');
  containerClass = input<string>('w-full h-full');

  isLoading = signal(true);
  private platformId = inject(PLATFORM_ID);
  imgElement = viewChild<ElementRef<HTMLImageElement>>('imgElement');

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const img = this.imgElement()?.nativeElement;
      if (img && img.complete) {
        this.isLoading.set(false);
      }
    }
  }

  onLoad() {
    this.isLoading.set(false);
  }

  onError() {
    this.isLoading.set(false);
  }
}
