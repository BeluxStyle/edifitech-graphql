// types.ts


export interface User {
    id: string;
    name: string
    email: string;
    emailVerified?: Date | null;
    hasPassword: boolean;
    image?: string | null;
    role: Role;
    company?: Company;
    accounts?: Account[];
    comments?: Comment[];
    reactions?: Reaction[];
    userSubscriptions?: UserSubscription[];
    createdAt: Date;
    lastLogin?: Date | null;
    isOnline: boolean;
  }

  export interface UserInput {
    name: string;
    email: string;
    image?: string | null;
    password: string
  }
  
  export interface Account {
    id: string;
    userId?: string | null;
    type?: string | null;
    provider?: string | null;
    providerAccountId?: string | null;
    refresh_token?: string | null;
    access_token?: string | null;
    expires_at?: number | null;
    token_type?: string | null;
    scope?: string | null;
    id_token?: string | null;
    session_state?: string | null;
    user?: User;
  }
  
  export interface Role {
    id: string;
    name: string;
    level: number;
    users?: User[];
  }

  export interface RoleInput {
    name: string;
    level: number;
  }
  
  export interface Company {
    id: string;
    name: string;
    cif: string;
    address: string;
    type: string;
    phone: string;
    users: User[];
    owner: User;
    companySubscriptions: CompanySubscription[];
    comunidades: Comunidad[];
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface Comunidad {
    id: string;
    name: string;
    direccion: string;
    cp?: string | null;
    adminCompanyId?: string | null;
    adminCompany?: Company;
    instalaciones?: Instalacion[];
    edificios: Edificio[];
    comments?: Comment[];
    contactos?: Contacto[];
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface Edificio {
    id: string;
    name: string;
    label?: string | null;
    direccion?: string | null;
    cp?: string | null;
    adminCompany?: Company;
    adminCompanyId?: string | null;
    comunidadId?: string | null;
    comunidad?: Comunidad;
    comments?: Comment[];
    instalaciones?: Instalacion[];
    createdAt: Date;
    updatedAt: Date;
    contactos?: Contacto[];
  }
  
  export interface Comment {
    id: string;
    author: User;
    comunidad?: Comunidad | null;
    edificio?: Edificio | null;
    comment: string;
    rating?: number | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date | null;
    parent?: Comment | null;
    replies?: Comment[];
    reactions?: Reaction[];
    averageRating?: number | null;
  }

  export interface CommentInput {
    comunidadId?: string;
    edificioId?: string;
    comment: string;
    parentId?: string;
  }
  
  export interface Reaction {
    id: string;
    user: User;
    comment: Comment;
    type: string;
    createdAt: Date;
  }

  export interface ReactionInput {
    commentId: string;
    type: string;
  }
  
  export interface Instalacion {
    id: string;
    tipo: string;
    descripcion: string;
    installerCompany?: Company | null;
    installerCompanyId?: string | null;
    edificio?: Edificio | null;
    edificioId?: string | null;
    comunidad?: Comunidad | null;
    comunidadId?: string | null;
    elementos: Elemento[];
    createdAt: Date;
    updatedAt: Date;
    categoryId?: string | null;
    category?: Category | null;
  }
  
  export interface Elemento {
    id: string;
    product?: Product | null;
    instalacion?: Instalacion | null;
    estado: string;
    cantidad: number;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface Product {
    id: string;
    ref: string;
    ean?: string | null;
    name?: string | null;
    price: number;
    descripcion?: string | null;
    subcategory?: Subcategory | null;
    brand?: Brand | null;
    image?: Image | null;
    manuals?: Manual[];
    elementos?: Elemento[];
    createdAt: Date;
    updatedAt: Date;
  }

  export interface newProduct {
    ref: string;
    ean?: string;
    price: number;
    descripcion?: string;
    subcategoryId?: string;
    brandId?: string;
    imageUrl?: string;
  }
  
  export interface Subscription {
    id: string;
    name: string;
    price: number;
    duration: number;
    isTrial: boolean;
    isLifetime: boolean;
    userSubscriptions?: UserSubscription[];
    companySubscriptions?: CompanySubscription[];
  }

  export interface SubscriptionInput {
    name: string;
    price: number;
    duration: number;
    isTrial: boolean;
    isLifetime: boolean;
  }
  
  export interface UserSubscription {
    id: string;
    user: User;
    subscription: Subscription;
    startDate: Date;
    endDate: Date;
    status: string;
    autoRenew: boolean;
  }
  
  export interface CompanySubscription {
    id: string;
    company: Company;
    subscription: Subscription;
    startDate: Date;
    endDate: Date;
    status: string;
    autoRenew: boolean;
  }
  
  export interface Admin {
    id: string;
    name: string;
    agente?: number | null;
    comunidad?: Comunidad[];
    edificio?: Edificio[];
  }
  
  export interface Contacto {
    id: string;
    name: string;
    phone?: string | null;
    location?: string | null;
    edificio?: Edificio | null;
    comunidad?: Comunidad | null;
    type?: string | null;
  }
  
  export interface Aviso {
    id: string;
  }
  
  export interface Category {
    id: string;
    name: string;
    instalaciones?: Instalacion[];
    subcategorias?: Subcategory[];
    createdAt?: Date;
    updatedAt?: Date;
    parentId?: string
    isCategory?: boolean
    isSubcategory?: boolean
  }
  
  export interface Subcategory {
    id: string;
    name: string;
    categoria?: Category | null;
    categoriaId?: string | null;
    Products?: Product[];
  }
  
  export interface Brand {
    id: string;
    name: string;
    Products?: Product[];
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface Image {
    id: string;
    url: string;
    Product?: Product | null;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface Document {
    id: string;
    url: string;
    manuals?: Manual[];
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface Manual {
    id: string;
    documento?: Document | null;
    products?: Product[];
    name: string;
    description?: string | null;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface ProductsResponse {
    products: Product[];
    totalCount: number;
  }
  
  export interface ImportResponse {
    success: boolean;
    message: string;
  }

  export interface CategoryInput {
    name: string;
  }
  
  export interface SubcategoryInput {
    name: string;
    categoriaId?: string | null; // Opcional porque no es obligatorio en el schema
  }
  
  export interface ImageInput {
    url: string;
  }
  
  export interface BrandInput {
    name: string;
  }
  
  export interface CompanyInput {
    name: string;
    cif: string;
    address: string;
    phone: string;
    type: string;
  }
  
  export interface ComunidadInput {
    name: string;
    direccion: string;
    cp?: string | null; // Opcional
    adminCompanyId?: string | null; // Opcional
  }
  
  export interface EdificioInput {
    name: string;
    comunidadId?: string | null; // Opcional
    direccion?: string | null; // Opcional
    cp?: string | null; // Opcional
    adminCompanyId?: string | null; // Opcional
  }
  
  export interface InstalacionInput {
    tipo: string;
    descripcion: string;
    edificioId?: string | null; // Opcional
    categoryId?: string | null; // Opcional
    comunidadId?: string | null; // Opcional
  }
  
  export interface ElementoInput {
    product?: Product;
    instalacion?: Instalacion; // Opcional
    estado?: string | null; // Opcional
    cantidad?: number | null; // Opcional
  }

  export interface CreateOptions {
    onSuccess?: () => void;
    onError?: () => void;
  }
  
  export interface ProductInput {
    ref: string;
    descripcion: string | null;
    ean?: string | null; // Opcional
    price: number;
    brandId?: string | null; // Opcional
    subcategoryId?: string | null; // Opcional
    imageId?: string | null; // Opcional
  }

  export interface CountData {
    users: number
    roles: number
    subscriptions: number
    products: number
    manuals: number
    images: number
    edificios: number
    documents: number
    comunidades: number
    companies: number
    categories: number
    brands: number
    instalaciones: number
    contactos: number
  }
  
  export interface ManualInput {
    name: string
    url: string
    description: string
    productos: [ProductoInputManual]
  }
  
  export interface ProductoInputManual {
    id: string
  }
  export interface ManualUpdateInput {
    name: string
    description: string
    productos: [ProductoInputManual]
  }

  
  export interface DocumentInput {
    url: string;
  }
  
  export interface ContactoInput {
    name: string;
    type?: string | null; // Opcional
    location?: string | null; // Opcional
    phone?: string | null; // Opcional
    comunidadId?: string | null; // Opcional
    edificioId?: string | null; // Opcional
  }

  export interface UserNotificationCreateInput {
    userId: string
    title: string
    body: string
    link: string
  }
  