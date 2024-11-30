import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-file-uploader',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './file-uploader.component.html',
  styleUrl: './file-uploader.component.css',
})
export class FileUploaderComponent {
  @Output() fileSelected = new EventEmitter<File>();
  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;
  isImage: boolean = false;
  triggerFileInput(): void {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
  }
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.fileSelected.emit(this.selectedFile);
      this.previewImage(this.selectedFile);
    }
  }
  previewImage(file: File): void {
    const fileType = file.type.split('/')[0];
    this.isImage = fileType === 'image';
    if (this.isImage) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    } else {
      this.imagePreview = null;
    }
  }
  uploadFile(): void {
    if (this.selectedFile) {
      // Implement your file upload logic here
      console.log('Uploading file:', this.selectedFile.name);
    }
  }
}
