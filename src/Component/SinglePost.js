import React from "react";
import { Link } from "react-router-dom";

function SinglePost(props) {
  const { body, id, title, userId } = props.post;

  console.log(props.users);

  return (
    <div>
    <div class=" flex w-3/4 bg-white shadow-2xl h-48 mx-auto mt-20 p-5">
        <div class=" relative flex"><img src="https://picsum.photos/id/684/600/400" alt=""
                class="my-auto h-24 w-24 border-gray-500 rounded-full border-4"/>
                <div className="">
                  <h3 class="block flex static text-left  font-bold text-lg my-auto p-3"> Title: {title}</h3>
            <p class="block flex static text-justify text-xs text-lg my-auto p-3">
             Details : {body}
                

            </p></div>
            <Link
          style={{ display: "block", margin: "1rem 0" }}
          to={`home/${userId}`}
        >
            <div class="absolute  bottom-0 right-0  bg-green-100 px-3 py-1 rounded-lg hover:text-red-700 inline-flex">
         Author - {props?.users[userId]?.name}
        </div></Link>
        </div>

    </div>
     
      {/* <h4>
         By----{" "}
        
      </h4>
      <p></p> */}
    </div>
  );
}

export default SinglePost;
