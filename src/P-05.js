//1.
//Traditional Function
function sortFruits(fruits) {
	return fruits.sort();
}

//Arrow Function
const sortFruits = fruits => fruits.sort();

//2.
//Traditional Function
function getElementInTheMiddle(list) {
	return list[list.length / 2];
}

//Arrow Function
const getElementInTheMiddle = (list) => list[list.length / 2];

//3.
//Traditional Function
function adminLogin(user) {
	if(user == "ADMIN") return true;
	if(user == "DEV") return true;
	return false;
}

//Arrow Function
const adminLogin = (user) => {
    return user === "ADMIN" || user === "DEV";
}