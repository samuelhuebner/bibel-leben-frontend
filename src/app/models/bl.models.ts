
export interface singleQuery {
    parameter: string;
    value: any;
}


export interface ytRatio {
    size: string,
    width: number,
    height: number,
}


export const bl19typeSermon: string[] = [
    'Gottesdienst',
    'Bibelstunde',
    'Gemeindebibelschule'
]

export interface bl19sermonData {

    suid?: string;              // sermon-unique identifier

    link?: string;               // download-link
    fileSize?: number;           // size of mp3
    duration?: number;
    filePath?: string;           // path to the file in storage
    title?: string;
    date?: Date;

    videoLink?: string;         // link to youtube video

    showOnWelcomePage?: boolean     // set true if sermon should be seen on main page


    // handling of the preacher:
    guestPreacher?: boolean; // if the preacher is a guest
    preacherName?: string; // 
    preacherObject?: bl19personSmall; // if preacher is in the database


    // place in the bible
    book?: string;
    chapterStart?: number;
    chapterEnd?: number;
    verseStart?: number;
    verseEnd?: number;

    // pictureURL and picturePath
    picture?: string;
    thumb_picture?: string;
    picturePath?: string;

    series?: string[];
    topic?: string[];

    type?: string;

    // generic key
    // name has to be a string
    // value can be anything
    [key: string]: any;
}


export interface bl19personOwn {

    name?: string;
    city?: string;
    email?: string;
    phone?: string;
    thumb_picture?: string;
    picture?: string;
    postalCd?: string;
    street?: string;
    UID?: string;

    bDay?: Date;

    rights?: number;

    ministries?: string[];


    // generic key
    // name has to be a string
    // value can be anything
    [key: string]: any;
}


export interface bl19dataRichText {

    richText?: string;

}

export interface bl19news {
    uid?: string,

    showOnWelcomePage?: boolean,

    regularEvents?: boolean, // is this news information on a regular event?

    heading?: string,
    text?: string,

    link?: string,

    versePlace?: string,

    picture?: string,   //url of picture

    date?: Date,
    validUntil?: Date,
    dateUpdated?: Date, //when was this news created or updated


    richText?: string,


    // generic key
    // name has to be a string
    // value can be anything
    [key: string]: any;
}

export interface bl19text {
    heading?: string;
    text?: string;
}


export interface bl19personSmall {
    uid?: string,
    name?: string,
    thumb_picture?: string;
    picture?: string;
}


export interface bl19userRight {
    level: number;
    description: string;
}

export const bl19userRights: bl19userRight[] = [
    {
        level: 0,
        description: "Registrierter User"
    },
    {
        level: 10,
        description: "regelmäßiger Besucher"
    },
    {
        level: 50,
        description: "Freund aus einer anderen Gemeinde"
    },
    {
        level: 100,
        description: "Mitglied der Gemeinde"
    },
    {
        level: 200,
        description: "Mitarbeiter der Gemeinde"
    },
    {
        level: 500,
        description: "Upload von Bildern und Predigten"
    },
    {
        level: 1000,
        description: "Admin - Vollzugriff"
    },

]


// for showing basic infos to the different types of events
// on the start page:
export class bl19EventInfo {
    name: string;           // for example: worship service
    description: string;    // for example: worship service with singing and a Sermon
    timing: string;         // for example: every Sunday at 10:00
    who: string;            // who is invited, for example: children from 7 -12 years old

    picture?: string;        // link to picture
    thumb_picture?: string;  // link to thumb
}



export class bl19Leader {
    name: string;
    role: string;
    picture: string;
}


export interface bl19group {
    uid?: string,
    name?: string,
    description?: string,
}


export const bl19BibleBooks: string[] = [
    "verschiedene Bibelstellen",
    "1.Mose",
    "2.Mose",
    "3.Mose",
    "4.Mose",
    "5.Mose",
    "Josua",
    "Richter",
    "Rut",
    "1.Samuel",
    "1.Samuel",
    "1.Könige",
    "2.Könige",
    "1.Chronik",
    "2.Chronik",
    "Esra",
    "Nehemia",
    "Esther",
    "Hiob",
    "Psalmen",
    "Sprüche",
    "Prediger",
    "Hoheslied",
    "Jesaja",
    "Jeremia",
    "Klagelieder",
    "Hesekiel",
    "Daniel",
    "Hosea",
    "Joel",
    "Amos",
    "Obadja",
    "Jona",
    "Micha",
    "Nahum",
    "Habakuk",
    "Zefanja",
    "Haggai",
    "Sacharja",
    "Maleachi",
    "Matthäus",
    "Markus",
    "Lukas",
    "Johannes",
    "Apostelgeschichte",
    "Römer",
    "1.Korinther",
    "2.Korinther",
    "Galater",
    "Epheser",
    "Philipper",
    "Kolosser",
    "1.Thessalonicher",
    "2.Thessalonicher",
    "1.Timotheus",
    "2.Timotheus",
    "Titus",
    "Philemon",
    "Hebräer",
    "Jakobus",
    "1.Petrus",
    "2.Petrus",
    "1.Johannes",
    "2.Johannes",
    "3.Johannes",
    "Judas",
    "Offenbarung",
]