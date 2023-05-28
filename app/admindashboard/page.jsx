"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import AddUser from "../user/AddUser";
import AddArtist from "../artist/AddArtist";

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState(false);
  const [listUser, setListUser] = useState(true);
  const [listArtist, setListArtist] = useState(true);
  const logOut = () => {
    Cookies.remove("user");
    router.push("/");
  };

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, []);

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "UserName",
      selector: (row) => row.username,
    },
    {
      name: "Website",
      selector: (row) => row.website,
    },
  ];

  // Datatable Related
  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleCleared, setToggleCleared] = useState(false);

  const handleRowSelected = useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const contextActions = useMemo(() => {
    const handleDelete = () => {
      if (
        window.confirm(
          `Are you sure you want to delete:\r ${selectedRows.map(
            (r) => r.title
          )}?`
        )
      ) {
        setToggleCleared(!toggleCleared);
        setUser(differenceBy(user, selectedRows, "title"));
      }
    };

    return (
      <button
        key="delete"
        onClick={handleDelete}
        style={{ backgroundColor: "red" }}
        icon
      >
        Delete
      </button>
    );
  }, [user, selectedRows, toggleCleared]);

  return (
    <div className="container ">
      <div className="col-md-12 d-flex mt-3">
        <h1 className="ms-auto">Admin dashboard</h1>
        <button className="btn btn-danger ms-auto" onClick={() => logOut()}>
          LogOut
        </button>
      </div>
      <div className="col-md-12">
        <div className="tabContainer">
          <button
            className={`tab  ${tab === false ? "tab-active" : ""}`}
            onClick={() => setTab(false)}
          >
            Users
          </button>
          <button
            className={`tab ${tab ? "tab-active" : ""}`}
            onClick={() => setTab(true)}
          >
            Artists
          </button>
        </div>
        <div className="p-3">
          {/* for Artist */}
          {tab && (
            <div>
              <div className="text-end mb-3">
                <button
                  className="btn btn-primary"
                  onClick={() => setListArtist(true)}
                >
                  List Artist
                </button>
                <button
                  className="ms-3 btn btn-primary"
                  onClick={() => setListArtist(false)}
                >
                  Add Artist
                </button>
              </div>
              <h4 className="text-center">Artist List</h4>
              {user != null && listArtist && (
                <>
                  <DataTable
                    columns={columns}
                    data={user}
                    pagination
                    selectableRows
                    contextActions={contextActions}
                    onSelectedRowsChange={handleRowSelected}
                    clearSelectedRows={toggleCleared}
                  />
                </>
              )}
              {user != null && !listArtist && <AddArtist />}
            </div>
          )}
          {/* for Users */}
          {!tab && (
            <div>
              <div className="text-end mb-3">
                <button
                  className="btn btn-primary"
                  onClick={() => setListUser(true)}
                >
                  List Users
                </button>
                <button
                  className="ms-3 btn btn-primary"
                  onClick={() => setListUser(false)}
                >
                  Add new user
                </button>
              </div>
              <h4 className="text-center">User List</h4>
              {user != null && listUser && (
                <>
                  <DataTable
                    columns={columns}
                    data={user}
                    pagination
                    selectableRows
                    onSelectedRowsChange={handleRowSelected}
                    clearSelectedRows={toggleCleared}
                  />
                </>
              )}
              {user != null && !listUser && <AddUser />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
