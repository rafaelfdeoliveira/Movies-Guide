import { Genre } from "./genre.model";


export class Movie {

  public thumbnailUrl: string;
  public trailerVideoId: string;

  constructor(
    public id: number,
    public title: string,
    public description: string,
    public rating: number,
    public durationInMinutes: number,
    public genre: Genre[],
    public releasedDate: Date,
    public trailerUrl: string,
    public imageUrl: string
  ) {
    this.setTrailerVideoId();
    this.setThumbnailLink();
  }

  private setTrailerVideoId() {
    this.trailerVideoId = this.trailerUrl.split("watch?v=")[1];
  }

  private setThumbnailLink() {
    if (this.trailerVideoId && this.trailerVideoId.length === 11) {
      this.thumbnailUrl = `https://img.youtube.com/vi/${this.trailerVideoId}/default.jpg`;
    }
  }
}
