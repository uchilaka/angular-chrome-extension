import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, tap } from 'rxjs/operators';

// Allow chrome detection
declare const chrome: any;
declare const document: HTMLDocument;

@Injectable({
  providedIn: 'root'
})
export class RunContextService {
  navigationEnd$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    tap((event: NavigationEnd) => {
      // Check if browser context is chrome plugin
      const body: HTMLElement = document.querySelector('body');
      if (
        !!chrome &&
        !!chrome.runtime &&
        !!chrome.runtime.id
        // && typeof chrome.runtime.getURL === 'function'
      ) {
        console.log('chrome plugin detected!');
        body.classList.add('chrome-plugin');
        // const contextURL = chrome.runtime.getURL();
        // console.warn(`Context URL: ${contextURL}`);
        if (body.clientWidth < 640) {
          body.classList.add('extension-popup');
        } else {
          body.classList.add('extension-tab');
        }
      } else {
        console.log('chrome plugin context not detected');
        body.classList.remove(
          'chrome-plugin',
          'extension-popup',
          'extension-tab'
        );
      }
    })
  );

  constructor(private router: Router) {
    this.navigationEnd$.subscribe();
  }
}
