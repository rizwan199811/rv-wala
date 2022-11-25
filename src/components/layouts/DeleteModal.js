// import axios from 'axios';
// import React, { useState } from 'react';
// import { useEffect } from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import { baseURL } from '../../config/apiURL';


// function DeleteModal(args) {

//   const handleDelete  = async(id) => {
//         try{
//        let headers = {
//         Authorization: localStorage.getItem('token'),
//       }
//     args.toggle()
//     const {
//       data: {
//         data: { message },
//       },
//     } = await axios.delete(baseURL + '/blog/' + id ,{headers})

//   } catch (e) { } 

//   };
// //   useEffect(() => {

// //   }, [args.toggle])
  
// console.log(args);
//   return (
//     <div>
//       {/* <Button color="danger" onClick={toggle}>
//         Click Me
//       </Button> */}
//       <Modal isopen={args.modal} toggle={args.toggle} {...args}>
//         <ModalHeader {...args}>Are You Sure?</ModalHeader>
//         <ModalBody className="text-center p-4">
//         <Button outline color="success" className="me-3" onClick={args.toggle}>
//             Cancel
//           </Button>                         
//         <Button outline color="danger" onClick={()=>handleDelete(args.deleteid)}>
//            Delete
//           </Button>{' '}
          
//         </ModalBody>
//       </Modal>
//     </div>
//   );
// }

// export default DeleteModal;