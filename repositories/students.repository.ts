const getAllStudent = async ({ page, size, searchString }: {page:number,size:number,searchString:string}) => {
  console.log("Get all student");
};

const insertStudent = async ({name,email,password,language,gender,phone,address}: {name:string,email:string,password:string,language:string,gender:string,phone:string,address:string}) => {
    console.log('insert student')
}

export default {
    getAllStudent,
    insertStudent
}
