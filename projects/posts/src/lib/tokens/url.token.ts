import { InjectionToken } from '@angular/core';

export const POSTS_URL_TOKEN = new InjectionToken('POSTS_URL_TOKEN', {
  factory: () => 'http://127.0.0.1:8080',
});
