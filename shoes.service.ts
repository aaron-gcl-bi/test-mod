import { Injectable } from '@angular/core';
import { ShoeListings } from './shoe-listings';

@Injectable({
  providedIn: 'root'
})
export class ShoesService {
  private shoeListings: ShoeListings[] = [
    {
      id: 1,
      name: 'Running Shoe',
      price: 59.99,
      imageUrl: 'assets/running-shoe.png',
      details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      id: 2,
      name: 'Basketball Shoe',
      price: 89.99,
      imageUrl: 'assets/basketball-shoes.png',
      details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },
    {
      id: 3,
      name: 'Casual Shoe',
      price: 39.99,
      imageUrl: 'assets/casual-shoe.png',
      details: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    },
    {
      id: 4,
      name: 'Tennis Shoe',
      price: 79.99,
      imageUrl: 'assets/tennis-shoe.png',
      details: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32."
    },
    {
      id:5,
      name: 'Air Jordans',
      price: 200,
      imageUrl: 'assets/air-jordans.jpg',
      details:"In feugiat porta hendrerit. Integer pulvinar lectus id dolor dignissim, at sagittis tellus mattis. Aliquam mauris ante, varius eu diam in, porta cursus nulla. Sed elementum vel nibh vitae aliquam. Suspendisse a urna ultrices, dapibus lectus at, commodo velit. Morbi commodo sapien ac mi pharetra convallis. Nullam cursus finibus pretium.  "
    }
  ];

  getAllShoeListings(): ShoeListings[] {
    return this.shoeListings;
  }

  getShoeListingsById(id: number): ShoeListings | undefined {
    return this.shoeListings.find(shoe => shoe.id === id);
  }

  addShoe(newShoe: ShoeListings): void {
    const newId = this.shoeListings.length ? Math.max(...this.shoeListings.map(shoe => shoe.id)) + 1 : 1;
    newShoe.id = newId;
    this.shoeListings.push(newShoe);
  }
}
