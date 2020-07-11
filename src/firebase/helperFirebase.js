
export const convertSnapShotFirebaseToView = (snapshot) => {
	const products = [];
	
	snapshot.forEach((childSnapshot) => {		
		products.push({
			id: childSnapshot.key,	
			...childSnapshot.val()
		})
	});

	return products;
}



export function orderObjectByname(items) {

    items.sort(function (a, b) {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        // a must be equal to b
        return 0;
    });

    return items;
}