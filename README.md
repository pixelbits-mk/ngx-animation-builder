# @pixelbits/ngx-animation-builder

A library for building angular animations from JSON objects.

## Getting Started

### Example Usage

```ts
import { animationBuilder } from '@pixelbits/ngx-animation-builder'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: animationBuilder({
    'clickedState': {
      states: {
        'close': {
          position: 'relative',
          left: '0px',
          top: '0px',
          width: '200px',
          height: '50px',
          background: 'red',
          border: 'solid 5px black'
        },
        'open': {
          position: 'relative',
          left: '0px',
          top: '0px',
          width: '200px',
          height: '50px',
          background: 'blue',
          border: 'solid 5px black'
        }
      },
      transitions: [
        {
          expression: '* => *',
          animate: '1000ms ease-in',
          keyframes: [
            {
              left: '0px',
              top: '0px',
              width: '200px',
              height: '50px',
              background: 'blue',
              border: 'solid 5px black',
              transform: 'rotate(0)'
            },
            {
              left: '-200px',
              top: '-200px',
              width: '600px',
              height: '600px',
              background: 'red',
              border: 'solid 5px green',
              transform: 'rotate(180deg)',
              opacity: 0.3
            },
            {
              left: '0px',
              top: '0px',
              width: '250px',
              height: '50px',
              background: 'blue',
              border: 'solid 5px black',
              transform: 'rotate(360deg)'
            }
          ]
        }
      ]
    }
  })

```


### Installation

With [npm](http://npmjs.org):

```sh
npm install @pixelbits/ngx-animation-builder
```

### Include

Import the `BrowserAnimationsModule`

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

<!--
The ESM entry point was dropped due to a [Webpack bug](https://github.com/webpack/webpack/issues/6584).
-->

# API


## `animationBuilder(state: AnimationState)`

Pass the `animationBuilder` an animation state JSON object:

```ts
import { animationBuilder } from '@pixelbits/ngx-animation-builder'; 
import { clickedState } from './clicked-state'
import { openCloseState } from './open-closed-state'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: animationBuilder({ 
    ...clickedState, 
    ...openCloseState
  })
})
export class AppComponent {
}

```
Where the JSON format is defined as follows: 

### clicked-state.ts
```json
{
    "clickedState": {
        "states": {
            "on": {
                "color": "blue"
            },
            "off": {
                "color": "red"
            }
        },
        "transitions": [
            {  "expression": "on => off", "animate": "1s ease-in" },
            {  "expression": "off => on", "animate": "1s ease-out" },
        ]
    }
}
```
### open-close-state.ts

You can also add keyframe animations for each transition.
```json
{
    "openCloseState": {
        "states": {
            "open": {
                "backgroundColor": "blue"
            },
            "close": {
                "backgroundColor": "red"
            }
        },
        "transitions": [
            {  
                "expression": "* => *", 
                "animate": "1s ease-in", 
                "keyframes": [
                {
                    "width": "200px",
                    "offset": 0
                },
                {
                    "width": "400px",
                    "offset": 0.5
                },
                {
                    "width": "200px",
                    "offset": 1.0
                }] 

            }
        ]
    }
}

```

# License

MIT