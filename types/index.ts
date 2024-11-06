import type { ObjectId } from 'mongoose';

export interface Post {
    _id: ObjectId,
    name: string,
    text: string,
    timestamp: string,
}