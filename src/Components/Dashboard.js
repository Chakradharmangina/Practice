import axios from "axios";
import { useEffect, useState } from "react";
import DashboardView from "./View";

function Dashboard() {
  const [Mobilelist, setmobiledata] = useState({});
  const [userdata, setuserdata] = useState({});
  const [flag, setflag] = useState(false);
  useEffect(() => {
    axios
      .post("http://localhost:3001/getmobiles")
      .then((res) => {
        setmobiledata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .post(`http://localhost:3001/userdetails`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setuserdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function loader() {
    return (
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">.</span>
        </div>
      </div>
    );
  }
  return (
    <>
      {userdata.username && Mobilelist.items ? (
        <DashboardView Mobiles={Mobilelist} userdata={userdata} />
      ) : (
        loader()
      )}
    </>
  );
}

export default Dashboard;
