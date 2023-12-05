import { Genre } from "./genre.model";
import { Movie } from "./movie.model";

export const MoviesListData: Movie[] = [
  new Movie(
    1,
    'Tenet',
    'Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.',
    7.8,
    150,
    [Genre.ACTION, Genre.SCIFI],
    new Date(2020, 8, 3),
    "https://www.youtube.com/watch?v=LdOM0x0XDMo",
    "https://drive.google.com/uc?id=1BV5Yt6jPTaqKQRI1RECUA0JY1T7vBQlP&export=download"
  ),
  new Movie(
    2,
    "Spider-Man: Into the Spider-Verse",
    "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
    8.4,
    117,
    [Genre.ACTION, Genre.ANIMATION, Genre.ADVENTURE],
    new Date(2018, 11, 14),
    "https://www.youtube.com/watch?v=tg52up16eq0",
    "https://drive.google.com/uc?id=1KPALEd6yPr6F26yWEA5AAB83kg6fK93l&export=download"
  ),
  new Movie(
    3,
    "Knives Out",
    "A detective investigates the death of a patriarch of an eccentric, combative family.",
    7.9,
    130,
    [Genre.COMEDY, Genre.CRIME, Genre.DRAMA],
    new Date(2019, 10, 27),
    "https://www.youtube.com/watch?v=qGqiHJTsRkQ",
    "https://drive.google.com/uc?id=1gGIwNsVwUBE13RU_2Lri5CtyebQLLyO4&export=download"
  ),
  new Movie(
    4,
    "Guardians of the Galaxy",
    "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
    8.0,
    121,
    [Genre.ACTION, Genre.ADVENTURE, Genre.COMEDY],
    new Date(2014, 7, 1),
    "https://www.youtube.com/watch?v=d96cjJhvlMA",
    "https://drive.google.com/uc?id=1COcrGRyNZiisVK2abMGW255olGNp62PM&export=download"
  ),
  new Movie(
    5,
    "Avengers: Age of Ultron",
    "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
    7.3,
    141,
    [Genre.ACTION, Genre.ADVENTURE, Genre.SCIFI],
    new Date(2015, 4, 1),
    "https://www.youtube.com/watch?v=tmeOjFno6Do",
    "https://drive.google.com/uc?id=1At1BDQEFJ7iMoeh7t7ADrdZvZMErA4mb&export=download"
  )
];
