import { auth, db } from "./../config";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";
import {
    query,
    getDocs,
    collection,
    where,
    setDoc,
    doc,
} from "firebase/firestore";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async ({ onSuccess }) => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        console.log(user);
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        
        if (docs.docs.length === 0) {
            await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                name: user.displayName,
                email: user.email,
                authProvider: "google",
            });
        }

        if (onSuccess) {
            onSuccess();
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

export const logInWithEmailAndPassword = async ({ email, password, onSuccess }) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);

        if (onSuccess) {
            onSuccess();
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

export const registerWithEmailAndPassword = async ({ name, email, password, onSuccess }) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            name,
            email,
            authProvider: "local",
        });

        if (onSuccess) {
            onSuccess();
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

export const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

export const logout = () => {
    signOut(auth);
};