//admin type
// =====>sidebar
interface MenuItem {
    id:number,
    label:string,
    icon:string,
    routerLink:string,
    url:string
}
export interface MenuItems{
    id:number,
    label:string,
    items:MenuItem[]
}
// ===>HomeItem
export interface CardItem{
    id:number,
    name:string,
    amount:number,
    icon:string,
    color:string,
    color_icon:string,
    changeAmount:number,
    title:string,
}
export interface Customer {
    id?: string;
    fullName?: string;
    purchaseDate?:string;
    phone?: string;
    email?: string;
    avatar?: string;
    status?:string;
    totalAmount:number;
    orders?:Order[]
}

export interface Representative {
  name: string;
  image: string;
}
export interface Order{
  id?:string;
  productName?:string;
  productImage?:string;
  price?:number;
  quantity?:number;
  category?:string;
}
export interface Column {
    field: string;
    header: string;
    customExportHeader?: string;
}

export interface ExportColumn {
    title: string;
    dataKey: string;
}
export interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;

}
export interface Blog {
  id: string;
  title: string;
  author: string;
  date: string; 
  summary: string;
  content: string;
  category: 'Technology' | 'Sports' | 'Education' | 'Lifestyle'|'primary';
  tags: string[];
  readTime: number; 
  featured: boolean;
}
// Theme website
export type ThemeMode = "light" | "dark"
export interface ThemeState {
  mode:ThemeMode
}
export interface User {
  id: string;
  email: string;
  role: 'admin' | 'user';
  name?: string;
    country?: {
      name: string;
      code: string;
    };
    company?: string;
    date?: string | Date;
    status?: string;
    activity?: number;
    representative?: Representative;
    verified?: boolean;
}
export interface LoginResponse {
  accessToken: string;
}
export interface Items_Footer{
  id:number,
  name:string,
  children:Item_Footer[]
}
interface Item_Footer{
  id:number
  name:string
  link:string
}
export interface Features{
  id:number
  icon:string
  header:string
  article:string
}
export interface CATEGORY{
  id:number
  code:string
  name:string
  src:string
  link:string
}
