import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
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
        },
        dialogsPage: {
            messages: [
                { id: 1, name: 'Ваня', message: 'Привет', time: '14:57', avatar: 'https://sun6-22.userapi.com/s/v1/ig2/Yb50voMjhO5vzpa93mG-os7rkr343zc81lfKVZ-RAt1ddzBhkjvLd_B_Rqn21Qjjj18O4kbSiDItKpgFrlN03HQB.jpg?size=50x0&quality=96&crop=0,116,640,640&ava=1' },
                { id: 2, name: 'Ліза', message: 'Ку', time: '14:57', avatar: 'https://sun6-22.userapi.com/s/v1/ig2/bpLYVqLjPLCkZXTpGLP4opbaIPkvNeJvPUoL0jeZX2bRRYhMx_6T1MwO5xhqffG5GXV46IvBzfpqfzPfaO2AGGHH.jpg?size=50x0&quality=96&crop=180,456,359,359&ava=1' },
                { id: 3, name: 'Ваня', message: 'Как поживаешь?', time: '14:57', avatar: 'https://sun6-22.userapi.com/s/v1/ig2/Yb50voMjhO5vzpa93mG-os7rkr343zc81lfKVZ-RAt1ddzBhkjvLd_B_Rqn21Qjjj18O4kbSiDItKpgFrlN03HQB.jpg?size=50x0&quality=96&crop=0,116,640,640&ava=1' },
                { id: 4, name: 'Ліза', message: 'Хорошо)', time: '14:57', avatar: 'https://sun6-22.userapi.com/s/v1/ig2/bpLYVqLjPLCkZXTpGLP4opbaIPkvNeJvPUoL0jeZX2bRRYhMx_6T1MwO5xhqffG5GXV46IvBzfpqfzPfaO2AGGHH.jpg?size=50x0&quality=96&crop=180,456,359,359&ava=1' },
                { id: 5, name: 'Ліза', message: 'А ты как?', time: '14:57', avatar: 'https://sun6-22.userapi.com/s/v1/ig2/bpLYVqLjPLCkZXTpGLP4opbaIPkvNeJvPUoL0jeZX2bRRYhMx_6T1MwO5xhqffG5GXV46IvBzfpqfzPfaO2AGGHH.jpg?size=50x0&quality=96&crop=180,456,359,359&ava=1' },
            ],
            dialogs: [
                { id: 1, name: 'Ваня', date: '12 сек. назад', previous_name: 'Ви', avatar: 'https://sun6-22.userapi.com/s/v1/ig2/Yb50voMjhO5vzpa93mG-os7rkr343zc81lfKVZ-RAt1ddzBhkjvLd_B_Rqn21Qjjj18O4kbSiDItKpgFrlN03HQB.jpg?size=50x0&quality=96&crop=0,116,640,640&ava=1', previous_message: 'Привіт, шо як?', new_message_count: '13' },
                { id: 2, name: 'Катя', date: '12 сек. назад', previous_name: 'Катя', avatar: 'https://sun6-21.userapi.com/s/v1/ig2/yjAXDI8Zik_IGuNm1haWmVgeJYiQH-2QTq0H2qFZYk7kW7cJycLQP8S74jqnqzSXd-rKDAHe5LRddJchUgmAv8-4.jpg?size=50x0&quality=96&crop=180,180,359,359&ava=1', previous_message: 'Привіт', new_message_count: '1' },
                { id: 3, name: 'Ліза', date: '12 сек. назад', previous_name: 'Ви', avatar: 'https://sun6-22.userapi.com/s/v1/ig2/bpLYVqLjPLCkZXTpGLP4opbaIPkvNeJvPUoL0jeZX2bRRYhMx_6T1MwO5xhqffG5GXV46IvBzfpqfzPfaO2AGGHH.jpg?size=50x0&quality=96&crop=180,456,359,359&ava=1', previous_message: 'шо?', new_message_count: '3' },
                { id: 4, name: 'Марина', date: '12 сек. назад', previous_name: 'Марина', avatar: 'https://sun6-23.userapi.com/s/v1/ig2/DmlqPVEFZFimuaorX7kbHLTfdu9A607JNJ8BGYJ4siP5Et5qJHzHFwap7vydQWuTYqtyW6HcJvP1iUY1wlm-mu23.jpg?size=50x0&quality=96&crop=88,88,703,703&ava=1', previous_message: 'шо як?', new_message_count: '4' },
                { id: 5, name: 'Вова', date: '12 сек. назад', previous_name: 'Ви', avatar: 'https://sun6-22.userapi.com/s/v1/if1/zplTKO3pwlaRmsOhawqy7c8GK59JdUZh1rdVAQOh_bs2-5U4dMyKDdUAll60aCHvntXRV3M6.jpg?size=50x0&quality=96&crop=93,0,341,341&ava=1', previous_message: 'Прив', new_message_count: '152' },
            ]
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // observer - патерн
    },


    dispatch(action) { // { type: 'ADD-POST', ... }
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}


export default store;
window.store = store;