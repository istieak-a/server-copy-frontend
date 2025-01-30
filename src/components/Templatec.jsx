import React from "react";

const Template = ({ data }) => {
  return (
    <div>
      <div className="background">
        <img
          className="crane"
          src="https://onlineeservercopy.click/images/cbimagex2.png"
          height="1500px"
          width="1070px"
          alt="Background"
        />
        <div
          style={{
            position: "absolute",
            left: "30%",
            top: "8%",
            width: "auto",
            fontSize: "16px",
            color: "rgb(255 224 0)",
          }}
        >
          <b>National Identity Registration Wing (NIDW)</b>
        </div>
        <div
          style={{
            position: "absolute",
            left: "37%",
            top: "11%",
            width: "auto",
            fontSize: "14px",
            color: "rgb(255, 47, 161)",
          }}
        >
          <b>Select Your Search Category</b>
        </div>
        <div
          style={{
            position: "absolute",
            left: "45%",
            top: "12.8%",
            width: "auto",
            fontSize: "12px",
            color: "rgb(8, 121, 4)",
          }}
        >
          Search By NID / Voter No.
        </div>
        <div
          style={{
            position: "absolute",
            left: "45%",
            top: "14.3%",
            width: "auto",
            fontSize: "12px",
            color: "rgb(7, 119, 184)",
          }}
        >
          Search By Form No.
        </div>
        <div
          style={{
            position: "absolute",
            left: "30%",
            top: "16.9%",
            width: "auto",
            fontSize: "12px",
            color: "rgb(252, 0, 0)",
          }}
        >
          <b>NID or Voter No*</b>
        </div>
        <div
          style={{
            position: "absolute",
            left: "45%",
            top: "16.9%",
            width: "auto",
            fontSize: "12px",
            color: "rgb(143, 143, 143)",
          }}
        >
          NID
        </div>
        <div
          style={{
            position: "absolute",
            left: "63.7%",
            top: "17.3%",
            width: "auto",
            fontSize: "11px",
            color: "#ffffff",
          }}
        >
          Submit
        </div>
        <div
          style={{
            position: "absolute",
            left: "89.6%",
            top: "11.75%",
            width: "auto",
            fontSize: "11px",
            color: "#fff",
          }}
        >
          Home
        </div>
        <div
          style={{
            position: "absolute",
            left: "37%",
            top: "27.4%",
            width: "auto",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          <b>জাতীয় পরিচিতি তথ্য</b>
        </div>
        <div
          style={{
            position: "absolute",
            left: "37%",
            top: "30%",
            width: "auto",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          জাতীয় পরিচয় পত্র নম্বর
        </div>
        <div
          id="nid_no"
          style={{
            position: "absolute",
            left: "55%",
            top: "30%",
            width: "auto",
            fontSize: "16px",
            color: "rgb(7, 7, 7)",
          }}
        >
          {data.nationalId}
        </div>
        <div
          style={{
            position: "absolute",
            left: "37%",
            top: "32.7%",
            width: "auto",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          পিন নম্বর
        </div>
        <div
          id="nid_father"
          style={{
            position: "absolute",
            left: "55%",
            top: "32.5%",
            width: "auto",
            fontSize: "16px",
            color: "rgb(7, 7, 7)",
          }}
        >
          {data.pin}
        </div>
        <div
          style={{
            position: "absolute",
            left: "37%",
            top: "35.4%",
            width: "auto",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          ভোটার অঞ্চল
        </div>
        <div
          id="voter_area"
          style={{
            position: "absolute",
            left: "55%",
            top: "35.4%",
            width: "auto",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >{data.permanentAddress.region}</div>
        <div
          style={{
            position: "absolute",
            left: "37%",
            top: "38%",
            width: "auto",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          <b>ব্যক্তিগত তথ্য</b>
        </div>
        <div
          style={{
            position: "absolute",
            left: "37%",
            top: "40.5%",
            width: "auto",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          নাম (বাংলা)
        </div>
        <div
          id="name_bn"
          style={{
            position: "absolute",
            fontWeight: "bold",
            left: "55%",
            top: "40.5%",
            width: "auto",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          <b>{data.name}</b>
        </div>
        <div
          style={{
            position: "absolute",
            left: "37%",
            top: "43.5%",
            width: "auto",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          নাম (ইংরেজি)
        </div>
        <div
          id="name_en"
          style={{
            position: "absolute",
            left: "55%",
            top: "43.5%",
            width: "auto",
            fontSize: "16px",
            color: "rgb(7, 7, 7)",
          }}
        >
          {data.nameEn}
        </div>
        <div
          style={{
            position: "absolute",
            left: "37%",
            top: "46%",
            width: "auto",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          জন্ম তারিখ
        </div>
        <div
          id="dob"
          style={{
            position: "absolute",
            left: "55%",
            top: "46%",
            width: "auto",
            fontSize: "16px",
            color: "rgb(7, 7, 7)",
          }}
        >
          {data.dateOfBirth}
        </div>
        <div
          style={{
            position: "absolute",
            left: "37%",
            top: "48.5%",
            width: "auto",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          পিতার নাম
        </div>
        <div
          id="fathers_name"
          style={{
            position: "absolute",
            left: "55%",
            top: "48.5%",
            width: "auto",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          {data.father}
        </div>
        <div
          style={{
            position: "absolute",
            left: "37%",
            top: "51.2%",
            width: "auto",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          মাতার নাম
        </div>
        <div
          id="mothers_name"
          style={{
            position: "absolute",
            left: "55%",
            top: "51.2%",
            width: "auto",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          {data.mother}
        </div>
        <div
          style={{
            position: "absolute",
            left: "37%",
            top: "53.8%",
            width: "auto",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          স্বামী/স্ত্রীর নাম
        </div>
        <div
          id="blood"
          style={{
            position: "absolute",
            left: "55%",
            top: "53.8%",
            width: "auto",
            fontSize: "18px",
            color: "black",
          }}
        >{data.spouse}</div>
        <div
          style={{
            position: "absolute",
            left: "37%",
            top: "56.5%",
            width: "auto",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          <b>অন্যান্য তথ্য</b>
        </div>
        <div
          style={{
            position: "absolute",
            left: "37%",
            top: "59.5%",
            width: "auto",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          লিঙ্গ
        </div>
        <div
          id="gender"
          style={{
            position: "absolute",
            left: "55%",
            top: "59.5%",
            width: "auto",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          {data.gender}
        </div>
        <div
          style={{
            position: "absolute",
            left: "37%",
            top: "62.2%",
            width: "auto",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          ধর্ম
        </div>
        <div
          id="mobile_no"
          style={{
            position: "absolute",
            left: "55%",
            top: "62.2%",
            width: "auto",
            fontSize: "16px",
            color: "rgb(7, 7, 7)",
          }}
        >
          {data.religion}
        </div>
        <div
          style={{
            position: "absolute",
            left: "37%",
            top: "65%",
            width: "auto",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          রক্তের গ্রুপ
        </div>
        <div
          id="blood_grp"
          style={{
            position: "absolute",
            left: "55%",
            top: "65%",
            width: "auto",
            fontSize: "18px",
            color: "red",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            left: "37%",
            top: "67.7%",
            width: "auto",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          জন্মস্থান
        </div>
        <div
          id="birth_place"
          style={{
            position: "absolute",
            left: "55%",
            top: "67.7%",
            width: "auto",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          {data.permanentAddress.upozila}
        </div>
        <div
          style={{
            position: "absolute",
            left: "37%",
            top: "70.5%",
            width: "auto",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          <b>বর্তমান ঠিকানা</b>
        </div>
        <div
          id="present_addr"
          style={{
            position: "absolute",
            left: "37%",
            top: "72.9%",
            width: "48%",
            fontSize: "16px",
            color: "rgb(7, 7, 7)",
          }}
        >
          {data.presentAddress.addressLine}
        </div>
        <div
          style={{
            position: "absolute",
            left: "37%",
            top: "79.3%",
            width: "auto",
            fontSize: "18px",
            color: "rgb(7, 7, 7)",
          }}
        >
          <b>স্থায়ী ঠিকানা</b>
        </div>
        <div
          id="permanent_addr"
          style={{
            position: "absolute",
            left: "37%",
            top: "81.5%",
            width: "48%",
            fontSize: "16px",
            color: "rgb(7, 7, 7)",
          }}
        >
          {data.permanentAddress.addressLine}
        </div>
        <div
          style={{
            position: "absolute",
            top: "95%",
            width: "100%",
            fontSize: "16px",
            textAlign: "center",
            color: "rgb(255, 0, 0)",
          }}
        >
          উপরে প্রদর্শিত তথ্যসমূহ জাতীয় পরিচয়পত্র সংশ্লিষ্ট, ভোটার তালিকার সাথে
          সরাসরি সম্পর্কযুক্ত নয়।
        </div>
        <div
          style={{
            position: "absolute",
            top: "93.5%",
            width: "100%",
            textAlign: "center",
            fontSize: "14px",
            color: "rgb(3, 3, 3)",
          }}
        >
          This is Software Generated Report From Bangladesh Election Commission,
          Signature & Seal Aren't Required.
        </div>
        <div
          style={{
            position: "absolute",
            left: "19%",
            top: "25.7%",
            width: "auto",
            fontSize: "12px",
            color: "rgb(3, 3, 3)",
          }}
        >
          <img
            id="photo"
            src={data.photo}
            height="140px"
            width="125px"
            style={{ borderRadius: "10px" }}
            alt="Photo"
          />
        </div>
        <div
          style={{
            position: "absolute",
            left: "20%",
            top: "38%",
            width: "auto",
            fontSize: "12px",
            color: "rgb(3, 3, 3)",
          }}
        >
          <style>
            {`img#qr {
              margin-left: -10px;
            }`}
          </style>
          <img
            id="qr"
            src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data.nameEn
              ?.split(" ")
              .join("+")}+${data.nationalId}+${
              data.dateOfBirth
            }&chf=bg,s,00000000`}
            style={{ top: "10px", position: "relative" }}
            alt="QR Code"
            height="110px"
            width="110px"
          />
        </div>
        <div
          id="name_en2"
          style={{
            position: "absolute",
            fontWeight: "bold",
            left: "17%",
            top: "36.6%",
            height: "32px",
            width: "161px",
            fontSize: "13px",
            color: "rgb(7, 7, 7)",
            margin: "auto",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <b>{data.nameEn}</b>
        </div>
      </div>
    </div>
  );
};

export default Template;
