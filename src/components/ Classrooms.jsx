export default function Classrooms({room}){
    return(
        <>
<h2>This is the {room.lab} which has a capacity of {room.capacity} students and aproximately {room.computers} computers.</h2>
        </>
    );
}