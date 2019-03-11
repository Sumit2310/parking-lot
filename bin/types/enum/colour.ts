export enum Colour {
  White = "White",
  Black = "Black",
  Red = "Red",
  Blue = "Blue",
  Green = "Green",
  Grey = "Grey",
  Sliver = "Sliver",
  Gold = "Gold",
  Pink = "Pink"
}

// console.log(Colour['Gold']);

// export const getColour = (colour: string): Colour => {
//   let pickEnum:Colour;
//   switch(colour) {
//     case 'White':
//       pickEnum = Colour.White;
//       break;
//     case 'Black':
//       pickEnum = Colour.Black;
//       break;
//     case 'Red':
//       pickEnum = Colour.Red;
//       break;
//     case 'Blue':
//       pickEnum = Colour.Blue;
//       break;
//     case 'Green':
//       pickEnum = Colour.Green;
//       break;
//     case 'Grey':
//       pickEnum = Colour.Grey;
//       break;
//     case 'Sliver':
//       pickEnum = Colour.Sliver;
//       break;
//     case 'Pink':
//       pickEnum = Colour.Pink;
//       break;
//     case 'Gold':
//       pickEnum = Colour.Gold;
//       break;
//     default:
//       pickEnum: Colour.White;
//       break;
//   }
//   return pickEnum;
// }