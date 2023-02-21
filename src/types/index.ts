import { DocumentReference } from "firebase/firestore"


//NAV
export interface INavLinks {
    id: number,
    title: string,
    link: string
};

//CARDS
export interface ICard {
    id: number,
    icon: string,
    title?: string,
    author?: string,
    desc?: string
};

//TAPES
export interface ITapeItem {
    id: number,
    title: string
};

//COURSE
export interface ICoursesListItem {
    id: number,
    title: string,
    imgSrc: string,
    author: string,
    rating: number,
    lectures: number,
    popular: boolean,
    img_src?: string,
    num_lectures?: number,
};

export interface ICategoriesLists {
    main: ITapeItem[],
    secondary: Record<number, ITapeItem[]>,
    topics: Record<number, ITapeItem[]>,
};

export interface ICourseLessons {
    sections: ICourseSection[],
    estimated_content_length_in_seconds: number,
    num_of_published_lectures: number,
};

export interface ICourseHeading {
    id: number,
    title: string,
    headline: string,
    rating: number,
    author: string,
    incentives: {
        video_content_length: string,
        num_articles: number,
        num_attached_resources: number,
        has_certificate: boolean,
    },
    preview_video: string
};

export interface ICourseContent {
    objectives: string[],
    curriculum_context: ICourseLessons,
    description: string,
};


//-==============================

export interface ILessonAttached {
    id: number,
    title: string,
    size: number,
};

export interface ICourseLesson {
    content_length: number,
    id: number,
    next_id: number,
    object_id: number,
    title: string,
    type: "text" | "video",
    in_progress: boolean,
    icon_class: string,
    video_url: string | null,
    description: string,
    completed: boolean,
    attached: ILessonAttached[] | null,
};

export interface ICourseSection {
    index: number,
    content_length: number,
    lecture_count: number,
    title: string,
    completed: boolean,
    lessons: DocumentReference<unknown>[] | ICourseLesson[],
}

export interface ICourseDetails {
    id: number,
    title: string,
    author: string,
    rating: number,
    img_src: string,
    preview_video: string,
    description: string,
    headline: string,
    objectives: string[],
    content_length_second: number,
    content_length_text: string,
    num_articles: number,
    num_attached_resources: number,
    has_certificate: boolean,
    lectures_count: number,
    in_progress: number,
    sections: ICourseSection[],
};

// AUTH
export interface IAuthState {
    email: string,
    password: string,
    confirm_password: string,
};