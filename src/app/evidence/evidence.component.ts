import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-evidence',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './evidence.component.html',
  styleUrls: ['./evidence.component.scss']
})
export class EvidenceComponent implements OnInit {
  startTime: Date | null = null;
  endTime: Date | null = null;
  elapsedTime: string | null = null;
  nickname: string | null = null;
  currentDate: string = '';

  ngOnInit(): void {
    this.loadTimes();
    this.loadNickname();
    this.currentDate = this.getCurrentDate();
  }

  startTimer(): void {
    if (!this.nickname) return;
    this.startTime = new Date();
    this.endTime = null;
    this.elapsedTime = null;
    this.saveTimes();
  }

  stopTimer(): void {
    if (this.startTime) {
      this.endTime = new Date();
      this.calculateElapsedTime();
      this.saveTimes();
    }
  }

  calculateElapsedTime(): void {
    if (this.startTime && this.endTime) {
      const diff = this.endTime.getTime() - this.startTime.getTime();
      const totalMinutes = Math.ceil(diff / (1000 * 60));
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      this.elapsedTime = `${hours}h ${minutes}m`;
    }
  }

  saveTimes(): void {
    if (this.startTime) {
      localStorage.setItem('startTime', this.startTime.toString());
    }
    if (this.endTime) {
      localStorage.setItem('endTime', this.endTime.toString());
    }
  }

  loadTimes(): void {
    const startTimeString = localStorage.getItem('startTime');
    const endTimeString = localStorage.getItem('endTime');

    if (startTimeString) {
      this.startTime = new Date(startTimeString);
    }
    if (endTimeString) {
      this.endTime = new Date(endTimeString);
    }
  }

  loadNickname(): void {
    this.nickname = localStorage.getItem('nickname');
  }

  setNickname(): void {
    const name = prompt('Enter your nickname:');
    if (name) {
      this.nickname = name;
      localStorage.setItem('nickname', this.nickname);
    }
  }

  formatTime(date: Date | null): string {
    return date ? date.toISOString().replace(/T/, ' ').replace(/\..+/, '') : '';
  }

  getCurrentDate(): string {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
    return `${day}-${month}-${year}`;
  }
}
