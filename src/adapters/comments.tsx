import {firestore} from "./helpers"
import {useCollectionData} from 'react-firebase-hooks/firestore';
const COLLECTION = firestore.collection("comments")

export const messages = () => {
    return COLLECTION
}
export const removeMessage = (id: string) => {
    return COLLECTION.doc(id).delete()
}


interface DataType {
    comment: string,
    userId: string,
    documentId: string,
    createdAt: number,
}

export const useCommentsStream = (id: string) => {
    const query = COLLECTION
        .where('userId', '==', id)
        .where('status', '==', 'new')
        .limit(25);
    return useCollectionData<DataType>(query, {idField: 'id'})[0]
}