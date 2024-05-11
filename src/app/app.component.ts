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

  colorSet1: 'red' | 'yellow' | 'green' = 'red';  // North-South
  colorSet2: 'red' | 'yellow' | 'green' = 'green'; // East-West

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
  

  
}
