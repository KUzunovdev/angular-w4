import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrafficLightComponent } from './traffic-light/traffic-light.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TrafficLightComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  colorSet1: 'red' | 'yellow' | 'green' | 'off' = 'red';
  colorSet2: 'red' | 'yellow' | 'green' | 'off' = 'green';

  
  crashButtonDisabled: boolean = false;
  blinkInterval: any;

  ngOnInit(): void {
    this.manageTrafficLights();
  }

  manageTrafficLights() {
    setInterval(() => {
      if (this.colorSet1 === 'yellow' || this.colorSet2 === 'yellow') {
       
        this.colorSet1 = this.colorSet1 === 'yellow' ? 'red' : 'yellow';
        this.colorSet2 = this.colorSet2 === 'yellow' ? 'green' : 'yellow';
      } else {
       
        const nextColor1 = this.colorSet1 === 'red' ? 'green' : 'red';
        const nextColor2 = this.colorSet2 === 'red' ? 'green' : 'red';

        
        this.transitionToYellow(nextColor1, nextColor2);
      }
    }, 7000); 
  }

  transitionToYellow(nextColor1: 'red' | 'green', nextColor2: 'red' | 'green') {
  
    this.colorSet1 = 'yellow';
    this.colorSet2 = 'yellow';

    
    setTimeout(() => {
      this.colorSet1 = nextColor1;
      this.colorSet2 = nextColor2;
    }, 2000); 
  }

  handleButtonClick(position: string) {
    let color = position === 'North' || position === 'South' ? this.colorSet1 : this.colorSet2;
    if (color === 'yellow') {
      alert('Incorrect crossing at ' + position);
    } else if (color === 'green') {
      // Correct crossing does not need alert
    }
  }


  handleCrash() {
    if (!this.crashButtonDisabled) {
      this.crashButtonDisabled = true;
      this.startBlinking();

      setTimeout(() => {
        clearInterval(this.blinkInterval); 
        this.restoreLights(); 
        this.crashButtonDisabled = false; 
      }, 10000);
    }
  }

  startBlinking() {
    let showYellow = true;
    this.blinkInterval = setInterval(() => {
      this.colorSet1 = showYellow ? 'yellow' : 'off';
      this.colorSet2 = showYellow ? 'yellow' : 'off';
      showYellow = !showYellow;
    }, 500); // Blink every 500 ms
  }

  restoreLights() {
    this.colorSet1 = 'red';
    this.colorSet2 = 'green';
  }


  
}
