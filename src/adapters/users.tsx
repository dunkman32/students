import {firestore, auth, base} from "./helpers"
import {useCollectionData} from 'react-firebase-hooks/firestore';
const COLLECTION = firestore.collection("students")

export const students = () => {
    return COLLECTION
}
export const removeStudent = (id: string) => {
    return COLLECTION.doc(id).delete()
}


interface DataType {
    id: string
    uid: string,
    text: string,
    photo: string,
    createdAt: number,
    displayName: string,
}

export const useStudentsStream = () => {
    const query = COLLECTION.orderBy('createdAt').limit(25);
    return useCollectionData<DataType>(query, {idField: 'id'})[0]
}

interface Students  {
    name: string,
    idNumber: string,
    no: number,
    campus: string,
    birth: string,
    createdAt: number
}

export const addStudent = (data: Students) => COLLECTION.add(data)

export const removeFilm = (id: string) => {
    return COLLECTION.doc(id).delete()
}

export const updateStudent = (data: any) => {
    let prod = COLLECTION.doc(data.id)
    return prod.update(data)
}

export const getStudent = (id: string) => COLLECTION.doc(id).get()

const reauthenticate = (currentPassword: string) => {
    const user: any = auth.currentUser;
    const cred = base.auth.EmailAuthProvider.credential(user.email, currentPassword);
    return user.reauthenticateWithCredential(cred);
}

export const changePassword = (currentPassword: string, newPassword: string) => {
    return reauthenticate(currentPassword).then(() => {
        const user: any = auth.currentUser;
        user.updatePassword(newPassword).then(() => {
            console.log("Password updated!");
        }).catch((error: any) => { console.log(error); });
        return true
    })
}
