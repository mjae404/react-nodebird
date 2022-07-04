export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: '엠제이'
        },
        content: '첫 번째 게시글 #해시태그 #익스프레스',
        Images: [{
            src: 'https://mjae404.github.io/images/css-animation01.gif',
        }, {
            src: 'https://mjae404.github.io/images/css-animation02.gif',
        }, {
            src: 'https://mjae404.github.io/images/css-animation03.gif',
        }],
        Comments : [{
            User: {
                nickname: 'mjae',
            },
            content: '댓글1입니다'
        }, {
            User: {
                nickname: 'mjaedot',
            },
            content: '댓글2입니다'
        }]
    }],
    imagePaths: [],
    postAdded: false
}

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST
}

const dummyPost = {
    id: 2,
    content: '더미데이터입니다.',
    User: {
        id: 1,
        nickname: 'MJAEDOT',
    },
    Images: [],
    Comments: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
                return {
                    ...state,
                    mainPosts: [dummyPost, ...state.mainPosts],
                    postAdded: true
                };
        default:
            return state;
    }
}

export default reducer;