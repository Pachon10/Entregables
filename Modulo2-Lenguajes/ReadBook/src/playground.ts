
const city: string = "";

interface Book{
    title: string,
    isRead: boolean
}

const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];



function isBookRead(books : Book[], titleToSearch: string) : boolean {
    const bookFound = books.find( element => element.title === titleToSearch);
    return bookFound?.isRead ?? false;
}

 console.log(isBookRead(books, "Devastación")); // true
 console.log(isBookRead(books, "Canción de hielo y fuego")); // false
 console.log(isBookRead(books, "Los Pilares de la Tierra")); // false