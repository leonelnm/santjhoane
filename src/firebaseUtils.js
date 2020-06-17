function convertJsonToState(dataFirebase) {

    let listProduct = []
    let listWithImages = []

    const keys = Object.keys(dataFirebase)

    for (let i = 0; i < keys.length; i++) {
        listProduct.push(dataFirebase[keys[i]])
    }

    listWithImages = orderObjectByname(listProduct.filter(item => item.img));

    let data = {
        onWeek: listWithImages.filter(item => !item.categories.includes('weekend')),
        onWeekend: listWithImages.filter(item => item.categories.includes('weekend')),
        porciones: orderObjectByname(listProduct.filter(item => item.categories.includes('racion')))
    }

    return data;
}

function orderObjectByname(items) {

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

function errData(err) {
    console.log('Error!');
    console.log(err);
}


export { convertJsonToState }