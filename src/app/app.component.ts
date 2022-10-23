import { Component } from '@angular/core';

import { Comment } from './class/comment';

// モックデータ
const COMENTS: Comment[] = [
  { name: 'Kenzi', message: 'こんにちは' },
  { name: 'Kenzi', message: 'さようなら' },
  { name: 'Mitsiko', message: 'また会う日まで！' },
];

@Component({
  selector: 'ac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  comments = COMENTS;
}
