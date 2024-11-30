import { Time } from '@angular/common';

export interface AppDto {
  user_id: string;
  full_name: string;
  email: string;
  role: UserRole;
}

export interface AppInfo {
  user_id: string;
  full_name: string;
  email: string;
  role: UserRole;
  image: BlobPart;
  image_type: string;
}

export enum UserRole {
  Freelancer,
  Client,
  Lender,
}

export interface UserDto {
  user_id: string;
  full_name: string;
  email: string;
  role: UserRole;
}

export interface Chat {
  chatId: string;
  chatName: string;
  sender: string;
  messages: Message[];
}
export interface Message {
  text: string;
  time: Date;
  file_type: string;
  file: Blob;
  type: MessageType;
}

export enum MessageType {
  TEXT,
  FILE,
}

export interface Talent {
  talentId: string;
  skills: Skill[];
  summary: string;
  title: string;
  portfolios: Portfolio[];
  appUser: AppInfo;
}
export interface Portfolio {
  name: string;
  description: string;
  skills: Skill[];
  Project_url: string;
}
export interface Skill {
  skill_name: string;
}
