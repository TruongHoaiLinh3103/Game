import {createContext} from 'react';

const Temp = createContext(null);

export default Temp;

//How to use ?
// component cha: {
//     import React, {useState} from 'react';
//     import Form from "../Form/Form";
//     import Comment from "../Comment/Comment";
//     import MyComment from '../../Services/MyComment';

//     const Mycomment = () => {
//         const [todo, setTodo] = useState([
//             {id: 1, name: "Trương Hoài Linh"},
//             {id: 2, name: "Nguyễn Thị Kiều Thu"},
//         ])
//         const addComments = (job) => {
//             let add = todo;
//             add.push(job);
//             setTodo([...add]);
//         }
//         const deleteComments = (job) => {
//             let dele = todo;
//             dele = dele.filter(item => item.id !== job.id);
//             setTodo(dele);
//         }
//         return (
//             <MyComment.Provider style={{textAlign: "center"}} value={{todo, addComments, deleteComments}}>
//                 <Form/>
//                 <Comment/>
//             </MyComment.Provider>
//         );
//     };

//     export default Mycomment;
// }

// component con(1) = {
//     import React, {useState, useContext} from 'react';
//     import MyComment from '../../Services/MyComment';
//     const Form = () => {
//         const {addComments} = useContext(MyComment)
//         let [name, setName] = useState("");
//         const resetName = (e) => {
//             setName(e.target.value)
//         }
//         const addTodo = (e) => {
//             if(e.which === 13){
//                 if(!name){
//                     window.alert("Comment không hợp lệ");
//                 }else{
//                     addComments({
//                         id: Math.floor(Math.random() * 1000),
//                         name: name
//                     })
//                     setName("")
//                 }
//             }
//         }
//         return (
//             <div style={{textAlign: "center"}}>
//                 <input type='text' value={name} 
//                 onChange={(e) => resetName(e)}
//                 onKeyDown={(e) => addTodo(e)}
//                 />
//             </div>
//         );
//     };

//     export default Form;

// }

// component con(2) = {
//     import React, { useContext } from 'react';
//     import MyComment from '../../Services/MyComment';
//     const Comment = () => {
//         const {todo, deleteComments} = useContext(MyComment);
//         const todos = todo;
//         const deleteTodo = (job) => {
//             deleteComments(job)
//         }
//         return (
//             <div style={{textAlign: "center"}}>
//                 {todos.map((item) => {
//                     return(
//                         <p key={item.id}>{item.name}<span style={{cursor:'pointer', margin:"0px 0px 0px 20px"}} onClick={() => deleteTodo(item)}>X</span></p>
//                     )
//                 })}
//             </div>
//         );
//     };

//     export default Comment;
// }