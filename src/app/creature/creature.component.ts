import { Component, OnInit } from '@angular/core';
import { Creature } from "../base/Creature";

@Component({
  selector: 'app-creature',
  templateUrl: './creature.component.html',
  styleUrls: ['./creature.component.scss']
})

export class CreatureComponent extends Creature implements OnInit {

  ngOnInit() {
  }

}
