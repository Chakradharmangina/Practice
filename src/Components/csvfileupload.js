import React from "react";
import { MDBFile } from "mdb-react-ui-kit";
import Papa from "papaparse";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CsvFileUpload() {
  const [file, setFile] = useState("");
  const [response, setresponse] = useState({});
  const reader = new FileReader();

  function handlechange(e) {
    setFile(e.target.files[0]);
  }

  function handleParse(e) {
    if (!file) console.log("Enter a valid file");
    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target.result, { header: true });
      let filterone = csv.data.filter((i) => i.Name != "" && i.place != "");
      axios
        .post("http://localhost:3001/adddata", {
          csvdata: filterone,
        })
        .then((res) => {
          console.log(res.data.msg);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    reader.readAsText(file);
  }
  reader.abort();

  return (
    <div>
      <MDBFile
        label="uploade CSV file"
        id="customFile"
        onChange={handlechange}
      />
      <div>
        <button onClick={handleParse}>upload</button>
      </div>
    </div>
  );
}
