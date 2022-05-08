export class Post {
    id: number;
    categoryId: number;
    categoryTitle: string;
    categorySlug: string;
    title: string;
    summary: string;
    content: string;
    slug: string;
    viewCount: number | null;
    totalPost: number | null;
    createDate: Date;
    numberOfVotes: number | null;
    numberOfComments: number | null;
}