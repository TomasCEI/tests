const ArtGallery = [ 
        { id: 1, artist: "Monet", title: "Water Lilies", year: 1916, isExhibited: true },
        { id: 2, artist: "Van Gogh", title: "Starry Night", year: 1889, isExhibited: true }, 
        { id: 3, artist: "Da Vinci", title: "Mona Lisa", year: 1503, isExhibited: false }, 
        { id: 4, artist: "Picasso", title: "Guernica", year: 1937, isExhibited: true }, 
        { id: 5, artist: "Rembrandt", title: "The Night Watch", year: 1642, isExhibited: false },
        { id: 6, artist: "Dali", title: "The Persistence of Memory", year: 1931, isExhibited: true }, 
        { id: 7, artist: "Munch", title: "The Scream", year: 1893, isExhibited: false }, 
        { id: 8, artist: "Klimt", title: "The Kiss", year: 1907, isExhibited: true }, 
        { id: 9, artist: "Hopper", title: "Nighthawks", year: 1942, isExhibited: false }, 
        { id: 10, artist: "Vermeer", title: "Girl with a Pearl Earring", year: 1665, isExhibited: true }
    ];

    // ------------------------
    // Metodos de Arrays 
    // ------------------------

    
    // .forEach()   // NO DEVUELVE NADA
    // .map()       // ARRAY con los elementos modificados del return (También edita los valores del array original)
    // .filter()    // ARRAY con los elementos que cumplan la condición
    // .some()      // BOOLEANO si se cumple la condición
    // .every()     // BOOLEANO si todos los elementos cumplen la condición
    // .find()      // ELEMENTO que cumpla la condición
    // .findIndex() // INDICE del elemento que cumpla la condición

    
// const titles = ArtGallery.map( (obra, indice) =>  obra.title);
// console.log(titles);

// const listaObrasExhibidas = ArtGallery.filter( (obra) =>  obra.isExhibited);

// const listaObrasPicasso = ArtGallery.filter (obra => {
//     if(obra.artist.includes("Picasso")){
//         return;
//     }
// })


// function ObtenerObra(tituloDeObra){
//     const obraBuscada = ArtGallery.find ( obra => 
//         obra.title==tituloDeObra
//     )
//     return obraBuscada;
// }
// const tituloDeObra="Picasso";
// const obraBuscsada= ObtenerObra(tituloDeObra);


// const findSomePainting = (year) => {

//     // SOME DEVUELVE UN BOOLEANO
//     const paintingFromYear = ArtGallery.some( painting => painting.year === year);
    
//     if(paintingFromYear){
//         console.log(`hay obras de arte del año ${year}`)
//     } else {
//         console.log("NO se encontrar obras de ese año");
//     }
// }
// findSomePainting(1503);



const nuevaObra = { 
    id: 11,
    artist: "Pablo", 
    title: "Mi gran obra maestra", 
    year: 2024, 
    isExhibited: true 
}

function agregarObra(nuevaObra){
    ArtGallery.push(nuevaObra);
}










//     const miObraDeArte = { 
//         id: 9, 
//         artist: "Hopper", 
//         title: "Nighthawks", 
//         year: 1942, 
//         tags: ["hoppers", "1942", "abstracto"], 
//         isExhibited: false,
//         noExhibir: () => { miObraDeArte.isExhibited=false},
//         exhibir: () => { miObraDeArte.isExhibited=true}
//     };

//     miObraDeArte.tags[1];

//     miObraDeArte.exhibir();
//     miObraDeArte.noExhibir();

//function mostrarTodo(){

    const imprimirObras = (arte)=>{
        const isExhibida= arte.isExhibited ? "SE" : "NO SE";
        console.log(`La obra ${arte.title} por el autor ${arte.artist} (${arte.year}) ${isExhibida} encuentra exhibida`);
    }


    const Resultado = ArtGallery.forEach( imprimirObras );
    console.log(Resultado); // forEach devuelven UNDEFINED



    
//     ArtGallery.forEach( arte => console.log(`La obra ${arte.title} por el autor ${arte.artist} (${arte.year}) ${arte.isExhibited ? "SE" : "NO SE"} encuentra exhibida`)); 


//     ArtGallery.forEach( (arte)=>{

//        // const isExhibida= arte.isExhibited ? "SE" : "NO SE";

//         console.log(`La obra ${arte.title} por el autor ${arte.artist} (${arte.year}) ${arte.isExhibited ? "SE" : "NO SE"} encuentra exhibida`);

//         if(arte.isExhibited){

//             // const nombre="tomi";
//             // "hola my 'name' is " + nombre + " y mi edad es....";
//             // `hola my "name" is ${nombre}`;

//             console.log(`La obra ${arte.title} por el autor ${arte.artist} (${arte.year}) SE encuentra exhibida`);
//         } else {
//             console.log(`La obra ${arte.title} por el autor ${arte.artist} (${arte.year}) NO SE encuentra exhibida`);
//         }
//     })
// //}