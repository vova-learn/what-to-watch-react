class FilmModel {
  constructor(film) {
    this.id = film[`id`];
    this.name = film[`name`];
    this.posterImage = film[`poster_image`];
    this.previewImage = film[`preview_image`];
    this.backgroundImage = film[`background_image`];
    this.backgroundColor = film[`background_color`];
    this.videoLink = film[`video_link`];
    this.previewVideoLink = film[`preview_video_link`];
    this.description = film[`description`];
    this.rating = film[`rating`];
    this.scoresCount = film[`scores_count`];
    this.director = film[`director`];
    this.starring = film[`starring`];
    this.runTime = film[`run_time`];
    this.genre = film[`genre`];
    this.released = film[`released`];
    this.isFavorite = film[`is_favorite`];
  }

  static getFilm(film) {
    return new FilmModel(film);
  }

  static getFilms(films) {
    return films.map((film) => FilmModel.getFilm(film));
  }
}

export default FilmModel;
