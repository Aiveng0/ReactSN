const ADD_POST = 'ADD-POST';

let initialState = {
    posts: [
        {
            id: 1,
            text: 'Before working with SEO.WhiteKing international URLs appearing in the search results were',
            likesCount: 12
        },
        {
            id: 2,
            text: 'За одной белочкой ухаживали Ёжик и Енот...',
            likesCount: 8,
            img: 'https://sun9-12.userapi.com/impg/262SHfTB1enB2tRERrWFBxNJQU3ewT9vKjqw1A/t34-a1My1HE.jpg?size=640x800&quality=96&sign=2bd95082089e625937ba55608ae14b0c&type=album'
        },
        {
            id: 3,
            text: 'Я хочу бросить все и просто путешествовать по миру с кем-нибудь, кто хочет этого настолько же сильно, насколько и я.',
            likesCount: 4
        },
        {
            id: 4,
            text: 'Some post text',
            likesCount: 45
        },
    ],
    users: [
        {
            id: 1,
            username: 'Ваня Царик',
            status: 'dolorem 🍀✨🍰',
            birthday: '27 червня 2000 р.',
            city: 'Могилев',
            avatar: 'https://sun6-22.userapi.com/s/v1/ig2/m_OWTOe20Z4G-27T17LUOPK3ZzQNJZJyImV67l6lP1Ke7-PHleeLiHwqLW7Rjw3P1YmZhtbrtoMPbOlT4d9Rdk78.jpg?size=200x0&quality=96&crop=0,116,640,640&ava=1'
        },
    ]
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                text: action.text,
                likesCount: 0
            };
            state.posts.unshift(newPost);
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = (text) => ({ type: ADD_POST, text: text });
export default profileReducer;