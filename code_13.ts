import chalk, { Chalk } from "chalk";

let songfrommovie: string = "Movie Name Border";

let songinmessage: string =
  "\n error aate hain, hamein tadpaate hain\n Jo coding aati hai woh compile ho jaati hai\n Ke resut kab aaoge, ke result kab aaoge\n Likho result kab aaoge\n Ke tum bin yeh project soona soona hai.";

let songinmessage2: string =
  "\n Kisi discord waali ne, kisi group wali ne \n Hamein error likha hai Yeh humse poochha hai\n \n Kisi ki laptop ne, kisi ki mobile ne \n Kisi ki phone ne, kisi ke facebook ne \n Kisi ke linkedin ne, kisi ke discord ne\n  \n mehanti larko ne mehanti larkiyo ne \n programing raaton mein, adhoori coding ne \n Aur poochha hai tarsi nigaahon ne \n Ke resut kab aaoge, ke result kab aaoge \n Likho result kab aaoge \n Ke tum bin yeh project soona soona hai.";

console.log(chalk.red.bold(songfrommovie));
console.log(chalk.green(songinmessage));
console.log(chalk.blue(songinmessage2));
