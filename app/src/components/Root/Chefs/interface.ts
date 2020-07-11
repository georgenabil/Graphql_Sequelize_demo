export interface Querydata {
  chefs: Chef[];
}
interface Chef {
  id: string;
  name: string;
  Resturants: Resturant[];
}
interface Resturant {
  id: string;
  name: string;
}
