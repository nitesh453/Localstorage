//console.log(window.localStorage);

// localStorage this is globel variable so write without window

// localStorage.setItem('theme','light'); //the set the data in theme
// localStorage.setItem('font','bold');

// localStorage.removeItem('font')
// localStorage.clear(); //clear all storage
// const theme = localStorage.getItem('theme');
//    console.log(theme);

//storing the object

// const userData={
//     theme:"Dark",
//     font:"light",
//     score:100
// }

// //the localstorge set only string data so convert it

// const userStringData = JSON.stringify(userData);

// localStorage.setItem('userData',userStringData)

// const result = localStorage.getItem('userData');
//   const convertObject = JSON.parse(result);
//   console.log(convertObject.font);

const selectTheme = document.getElementById('selecttheme');

selectTheme.addEventListener('change',(e)=>{
    localStorage.setItem('theme', e.target.value);
    changetheme(e.target.value);
})

function changetheme(theme){
    if(theme === "dark"){
        document.body.style.backgroundColor ="#222"
    }
    else if(theme === "light"){
        document.body.style.backgroundColor ="#e5e5e5"
    }
    else {
        document.body.style.backgroundColor ="#fff"
    }
}

window.addEventListener('storage', (e)=>{
    changetheme(e.newValue)
    selectTheme.value = e.newValue;
})