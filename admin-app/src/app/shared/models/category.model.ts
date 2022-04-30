export class Category {
    id: number;
    parentCategoryId?: number;
    title: string;
    slug: string;
    sortOrder: number;
    isParent: boolean;
}