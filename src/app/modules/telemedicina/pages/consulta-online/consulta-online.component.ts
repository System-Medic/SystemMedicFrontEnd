import { Component, ElementRef, ViewChild } from '@angular/core';
import { Room, LocalVideoTrack, LocalAudioTrack, RemoteVideoTrack } from 'twilio-video'; 
import { SidebarComponent } from '../../../../shared/components/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consulta-online',
  standalone: true,
  imports: [ SidebarComponent, FormsModule, CommonModule ],
  templateUrl: './consulta-online.component.html',
  styleUrls: ['./consulta-online.component.css']
})
export class ConsultaOnlineComponent {
  room: Room | null = null; 
  localVideoTrack: LocalVideoTrack | null = null; 
  localAudioTrack: LocalAudioTrack | null = null; 
  remoteVideoTrack: RemoteVideoTrack | null = null; 
  messages: { sender: string, text: string }[] = []; 
  newMessage: string = ''; 
  consultaNotes: string = ''; 

  @ViewChild('localVideo', { static: true }) localVideo!: ElementRef<HTMLVideoElement>;
  @ViewChild('remoteVideo', { static: true }) remoteVideo!: ElementRef<HTMLVideoElement>;

  constructor() { }

  toggleCamera() {
    if (this.localVideoTrack) {
      this.localVideoTrack.stop();

      // Alterna entre a câmera frontal e traseira
      navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: true }).then(stream => {
        const newVideoTrack = new LocalVideoTrack(stream.getVideoTracks()[0]);
        
        if (this.room && this.room.localParticipant) {
          // Remover o track antigo
          this.room.localParticipant.unpublishTrack(this.localVideoTrack!);

          // Publicar o novo track de vídeo
          this.room.localParticipant.publishTrack(newVideoTrack);

          // Atualizar o vídeo local na interface
          this.localVideo.nativeElement.srcObject = stream;
          this.localVideoTrack = newVideoTrack;
        }
      });
    }
  }

  toggleMic() {
    if (this.localAudioTrack) {
      if (this.localAudioTrack.isEnabled) {
        this.localAudioTrack.disable();
      } else {
        this.localAudioTrack.enable();
      }
    }
  }

  endCall() {
    if (this.room) {
      this.room.disconnect();
    }

    if (this.localVideoTrack) {
      this.localVideoTrack.stop();
    }

    if (this.localAudioTrack) {
      this.localAudioTrack.stop();
    }

    // Limpeza
    this.room = null;
    this.localVideoTrack = null;
    this.localAudioTrack = null;
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({ sender: 'Você', text: this.newMessage });
      this.newMessage = '';
    }
  }

  saveNotes() {
    console.log('Anotações salvas:', this.consultaNotes);
  }
}
