import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-traffic-light',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './traffic-light.component.html',
  styleUrl: './traffic-light.component.scss'
})
export class TrafficLightComponent implements OnInit{
  
  @Input() color: 'red' | 'yellow' | 'green' | 'off' = 'red';

  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';



  

  ngOnInit(): void {
    
  }


  handleButtonClick() {
    if (this.color === 'yellow') {
      alert("Incorrect crossing");
    } 
  }


  

}
