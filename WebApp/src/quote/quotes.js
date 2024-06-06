import { getFirestore, collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";


const db = getFirestore();

const getQuotes = async (quoteObjects) => {
    const quotesCollection = collection(db, 'quotes');

    const quotePromises = quoteObjects.map(quoteObject => {
        const quoteDoc = doc(quotesCollection, quoteObject.id);
        return getDoc(quoteDoc).then(docSnapshot => ({
            ...docSnapshot.data(),
            id: docSnapshot.id,
            date: quoteObject.date
        }));
    });

    const quotes = await Promise.all(quotePromises);

    return quotes;
}
export { getQuotes };
