


import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import { setUser, setLoading, setError } from './slices/authSlice';

export const createUser = (
    email,
    password,
    fullName,
    gender
) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const { user } = await auth().createUserWithEmailAndPassword(email, password)
            .then(resp => {
                database().ref(`users/${resp.user.uid}`).set({
                    email,
                    fullName,
                    type: 'user',
                    gender,
                    uid: resp.user.uid,
                    legalStatus: 'null'
                })
                dispatch(setUser({
                    email,
                    fullName,
                    type: 'user',
                    gender,
                    uid: resp.user.uid,
                    legalStatus: 'null'
                }));
                dispatch(setLoading(false));
            }).catch((error) => {
                dispatch(setError(error));
            })
    } catch (error) {
        dispatch(setLoading(false));
    }
};
export const loginUser = (email, password) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        await auth().signInWithEmailAndPassword(email, password)
            .then(resp => {
                database().ref(`users/${resp.user.uid}`)
                    .on('value', snapshot => {
                        const user = snapshot.val();

                        dispatch(setUser({
                            email: user.email,
                            password: password,
                            profilePic: user.profilePic,
                            fullName: user.fullName,
                            uid: user.uid,
                            gender: user.gender,
                            type: user.type,
                            legalStatus: user.legalStatus
                        }));
                    });

            })

        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setError(error));
        dispatch(setLoading(false));
    }
};

export const signOut = () => async (dispatch) => {
    try {
        await auth().signOut();
    } catch (error) {
        dispatch(setError(error));
    }
};
