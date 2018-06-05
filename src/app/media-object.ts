export class MediaObject {
    title: string;
    desc: string;
    imgUrl: string;
    type: string;
    timeStamp: DateTimeFormat;
    tags: string[];
    userName: string;

    //votes
    upVotes: number;
    downVotes: number;

    //array of comments
    comments: Comment[];
}

export class Comment {
    text: string;
    timeStamp: DateTimeFormat;
    userName: string;

    //comment rating
    upVotes: number;
    downVotes: number;

    //allow comments of comments
    parent: Comment;
}
