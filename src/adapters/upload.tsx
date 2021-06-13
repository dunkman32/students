import {firestore, storage} from "./helpers"
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {omit} from 'lodash'

const COLLECTION = firestore.collection("documents")

export const messages = () => {
    return COLLECTION
}
export const removeMessage = (id: string) => {
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

export const useMessagesStream = () => {
    const query = COLLECTION.orderBy('createdAt').limit(25);
    return useCollectionData<DataType>(query, {idField: 'id'})[0]
}

interface SendDataTypes  {
    uid: string,
    text: string,
    photo: string,
    createdAt: number,
    user: string,
}

export const sendMessage = (data: SendDataTypes) => COLLECTION.add(data)

export const takeImg = (url: string) => {
    const starsRef = storage.ref(url);
// Get the download URL
    return starsRef.getDownloadURL()
        .then((url) => {
            return url
            // Insert url into an <img> tag to "download"
        })
}


interface Students {
    userId: string,
    username: string,
    file: any,
    desc: string,
    createdAt: number
}

export const addDocument = async (message: Students) => {
    try {
        const uid = message.userId
        const id = `${uid}_${message.createdAt}`
        const documentName: string = `documents/${id}.jpg`
        await storage.ref().child(documentName).put(message.file)
        const file = await takeImg(documentName)
        const documentObject = {
            ...omit(message, ['file']),
            file,
            id,
            status: 'Pending'
        }
        return await COLLECTION.doc(id).set(documentObject)
    } catch (e) {
        console.log(e)
    }
};
