import { getFirestore, collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";


const db = getFirestore();

const getQuotes = async (quoteIds) => {
    const quotesCollection = collection(db, 'quotes');

    const quotePromises = quoteIds.map(id => {
        const quoteDoc = doc(quotesCollection, id);
        return getDoc(quoteDoc);
    });

    const quoteSnapshots = await Promise.all(quotePromises);

    const quotes = quoteSnapshots
        .filter(quoteSnapshot => quoteSnapshot.exists())
        .map(quoteSnapshot => ({ id: quoteSnapshot.id, ...quoteSnapshot.data() }));

    return quotes;
}
export { getQuotes };
