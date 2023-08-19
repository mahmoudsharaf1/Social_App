
import database from '@react-native-firebase/database';
import { setError, setLoading, setPost } from './slices/postSlice';


export const setPosts = ({ image, textPost, from, createAt }) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const post = database().ref(`posts/`).push()
        post.set({
            image: image,
            textPost: textPost,
            from: from,
            createAt: createAt,
            key: post.key
        })
        dispatch(setPost(post));
        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setError(error));
        dispatch(setLoading(false));
    }
};