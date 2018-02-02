export class RadioPlayerModel {

  constructor (public artistName: string,
               public trackName: string,
               public cdName: string,
               public playingStatus: boolean,
               public progress: number){}
}
