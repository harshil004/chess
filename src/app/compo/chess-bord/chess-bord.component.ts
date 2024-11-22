import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chess-bord',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './chess-bord.component.html',
  styleUrls: ['./chess-bord.component.scss']
})
export class ChessBordComponent implements OnInit {
  row: number[] = [0, 1, 2, 3, 4, 5, 6, 7];
  col: number[] = [0, 1, 2, 3, 4, 5, 6, 7];
  direction = 'NORTH';
  x = 0;
  y = 0;
  currentDirectionIndex = 0;
  directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
  isFirstTime = true;
  color: any = 'white';
  placeDirection: any;
  isShow = false;
  isFirstTimeMove = true;
  get currentDirection() {
    return this.directions[this.currentDirectionIndex];
  }

  constructor() { }

  ngOnInit() { }

  isSelected(row: number, col: number): boolean {
    return row === 7 - this.y && col === this.x;
  }

  move(steps: number) {
    this.isFirstTimeMove = false;
    let newX = this.x;
    let newY = this.y;

    switch (this.currentDirection) {
      case 'NORTH':
        newY += steps;
        break;
      case 'SOUTH':
        newY -= steps;
        break;
      case 'EAST':
        newX += steps;
        break;
      case 'WEST':
        newX -= steps;
        break;
    }

    if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7) {
      this.x = newX;
      this.y = newY;
    } else {
      alert(
        `Invalid move! Pawn is at the edge. Current position: (${this.x}, ${this.y}), direction: ${this.currentDirection}`
      );
    }
  }

  turnLeft() {
    this.isFirstTimeMove = false;
    this.currentDirectionIndex = (this.currentDirectionIndex + 3) % 4;
  }

  turnRight() {
    this.isFirstTimeMove = false;
    this.currentDirectionIndex = (this.currentDirectionIndex + 1) % 4;
  }

  report() {
    console.log(`Position: (${this.x}, ${this.y}), Facing: ${this.currentDirection}`);
  }

  place(x: number, y: number, direction: string) {
    if (x >= 0 && x <= 7 && y >= 0 && y <= 7 && this.directions.includes(direction)) {
      this.isFirstTime = false;
      this.x = x;
      this.y = y;
      this.currentDirectionIndex = this.directions.indexOf(direction);
      console.log(`Placed at (${x}, ${y}) facing ${direction}`);
    } else {
      alert('Invalid position or direction. Please enter values within the range (0-7) and valid direction.');
    }
  }

  isAtEdge(): boolean {
    switch (this.currentDirection) {
      case 'NORTH':
        return this.y === 7;
      case 'SOUTH':
        return this.y === 0;
      case 'EAST':
        return this.x === 7;
      case 'WEST':
        return this.x === 0;
      default:
        return false;
    }
  }
}
