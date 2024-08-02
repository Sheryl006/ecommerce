
//Conditional rendering


// export default function Conditions(){
//     const Monday = true;

// if(Monday){return(
//     <>
//     <p>It's Monday</p>
//     </>
// );
// } else{
//     return(
//         <>
//         <p>It's NOT Monday</p>
//         </>
//     );
// }

// }


// export default function Conditions(){
//     const Monday = true;

//     let day;

// if(Monday){
//     day = (
//         <>
//         <p>It's Monday</p>
//         </>
//     );  
// }

// return day;
// }

export default function Conditions(){

    let number= 1;
    let outcome;

    if((number<0)){
outcome = (
    <>
    <h2>
This is a negative number
    </h2>
    </>
)
    }
    else if(number>0){
        outcome=(
            <>
            <h2>
                This is a positive number
            </h2>
            </>
        )
    }
    else{
        outcome = (
        <>
        <h2>
            The number is zero                                                                                                                         
        </h2>
        </>
        )
    }

    return outcome;
}