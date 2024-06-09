
export class Audio {
    audioCtx: AudioContext;
    gainNode: GainNode;
    durration: number;
    

    constructor(volume: number) {
        this.durration = 0.1;
        this.audioCtx = new AudioContext();
        this.gainNode = this.audioCtx.createGain();
        this.gainNode.gain.value = volume;
        this.gainNode.connect(this.audioCtx.destination);
        
    }

    playAudio(frequency: number) {
        const oscillator = this.audioCtx.createOscillator();
        oscillator.connect(this.gainNode);
        oscillator.start();
        oscillator.stop(this.audioCtx.currentTime + this.durration);
        
    }

    
    
}