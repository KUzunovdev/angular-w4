import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-traffic-light',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './traffic-light.component.html',
  styleUrl: './traffic-light.component.scss'
})
export class TrafficLightComponent implements OnInit{

  color: 'red' | 'yellow' | 'green' = 'red';

  ngOnInit(): void {
    this.changeLights();
  }

  changeLights() {
    setInterval(() => {
      switch (this.color) {
        case 'red':
          this.color = 'green';
          break;
        case 'green':
          this.color = 'yellow';
          break;
        case 'yellow':
          this.color = 'red';
          break;
      }
    }, this.getTimeForColor());
  }

  getTimeForColor(): number {
    switch (this.color) {
      case 'red':
      case 'green':
        return 5000;  
      case 'yellow':
        return 2000;  
    }
  }

}
