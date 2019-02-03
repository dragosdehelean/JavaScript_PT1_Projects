// fetch("https://api.thecatapi.com/v1/breeds")
//   .then(res => res.json())
//   .then(data => {
//     console.log("al catalea sunt?");
//     console.dir(data);
//   });
// console.log("eu sunt oare primul?");

async function myGlobalSpace() {
  await fetch("https://api.thecatapi.com/v1/breeds")
    .then(res => res.json())
    .then(data => {
      console.log("al catalea sunt oare?");
      console.dir(data);
    });

  console.log("eu sunt oare primul? Daca NU, inseamna ca pot sa ma folosesc aici de 'data' ;) ");

  /**
   * ...
   * ...
   * (Aici urmeaza restul codului din aplicatia mea)
   */
}
myGlobalSpace();
