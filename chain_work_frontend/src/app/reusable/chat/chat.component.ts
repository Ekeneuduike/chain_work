import {
  Component,
  inject,
  input,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChatService } from '../../service/chat.service';
import { ServerService } from '../../service/server.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'], // corrected styleUrl to styleUrls
})
export class ChatComponent implements OnInit, OnDestroy {
  chatService = inject(ChatService);

  ngOnInit(): void {

  }
  ngOnDestroy(): void {

  }
  
  constructor(){
  
  }
  
  // Input for user's address
  userAddr = input.required<string>();

  // Sample contact list
  contacts = [
    {
      initials: 'JD',
      name: 'John Doe',
      message: "Hey, how's it going?",
      time: '10:30 AM',
    },
    {
      initials: 'JS',
      name: 'Jane Smith',
      message: 'Can we discuss the project?',
      time: 'Yesterday',
    },
    {
      initials: 'BJ',
      name: 'Bob Johnson',
      message: 'The designs look great!',
      time: '2 days ago',
    },
  ];

  // Message list for chat
  messages: { text: string; time: string; sender: string }[] = [];

  // Input for new message text
  messageText = signal<string>(''); // Compatible with ngModel binding

  // Send a new message
  sendMessage() {
    if (this.messageText().trim()) {
      this.messages.push({
        text: this.messageText(),
        time: new Date().toLocaleString(),
        sender: this.userAddr(),
      });
      this.messageText.set(''); // Clear input
    }
  }

  // Determine if a message was sent by the current user
  isSent(message: { sender: string }): boolean {
    return message.sender === this.userAddr();
  }
}
