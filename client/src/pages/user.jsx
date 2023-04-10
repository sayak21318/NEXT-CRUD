import React, { useState, useEffect } from "react";
import * as url from "../../urlhelper/UrlHelper";
import { getProcess, deleteProcess } from "../../utils/Gateway";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function User() {
  const [updateUserData, setUpdateUserData] = useState(null);
  const [userList, setUserList] = useState([]);

  //function for get userlist
  const getUserList = async () => {
    try {
      const requestUrl = url.baseUrl + url.getAllUsers;

      const response = await getProcess(requestUrl);

      setUserList(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const router = useRouter();
  const handleEditButtonClick = (val) => {
    router.push({
      pathname: "/edit",
      query: { data: JSON.stringify(val) }, // Convert data to string before passing
    });
  };

  const deleteUser = async (userId) => {
    try {
      const requestUrl = url.baseUrl + url.deleteUser + `/${userId}`;

      const response = await deleteProcess(requestUrl);

      if (response.status) {
        getUserList();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <div className="container mt-3">
      <h1>Users list</h1>
      <div className="table-responsive">
        <table className="table w-100">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Position</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Country</th>
              <th>Image</th>
              <th>Phone</th>
              <th>About</th>
              <th colSpan={2}></th>
            </tr>
          </thead>

          {userList.map((user, index) => {
            return (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>{user.position}</td>
                <td>{user.adrress}</td>
                <td>{user.city}</td>
                <td>{user.state}</td>
                <td>{user.country}</td>

                <td style={{ height: "80px", width: "80px" }}>
                  <img src={user.image} className="img-thumbnail" />
                </td>
                <td>{user.phone}</td>
                <td>{user.about}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => handleEditButtonClick(user)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      deleteUser(user._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
