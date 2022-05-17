const express = require("express");
const CallApi = require("engage-call-api-js-server-sdk/lib");
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

const port = 3000;

app.listen(port, () => {
  console.log(`Node server is running at http://localhost:${port}`);
});

//Make call configuration
CallApi.OpenAPI.HEADERS = {
  apikey:
    "eyJ4NXQiOiJZamd5TW1GalkyRXpNVEZtWTJNMU9HRmtaalV3TnpnMVpEVmhZVGRtTnpkaU9HUmhNR1kzWmc9PSIsImtpZCI6ImFwaV9rZXlfY2VydGlmaWNhdGVfYWxpYXMiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJyYWRpc3lzQGNhcmJvbi5zdXBlciIsImFwcGxpY2F0aW9uIjp7Im93bmVyIjoicmFkaXN5cyIsInRpZXJRdW90YVR5cGUiOm51bGwsInRpZXIiOiJVbmxpbWl0ZWQiLCJuYW1lIjoiZGVtby1kay5jb20iLCJpZCI6MywidXVpZCI6IjMzNmJhZDgzLTBmODUtNDMxNy05M2NmLWI2NDgwZTgyZTNjNCJ9LCJpc3MiOiJodHRwczpcL1wvYXBpbS5lbmdhZ2VkaWdpdGFsLmFpOjQ0M1wvb2F1dGgyXC90b2tlbiIsInRpZXJJbmZvIjp7IlVubGltaXRlZCI6eyJ0aWVyUXVvdGFUeXBlIjoicmVxdWVzdENvdW50Iiwic3RvcE9uUXVvdGFSZWFjaCI6dHJ1ZSwic3Bpa2VBcnJlc3RMaW1pdCI6MCwic3Bpa2VBcnJlc3RVbml0IjpudWxsfX0sImtleXR5cGUiOiJQUk9EVUNUSU9OIiwic3Vic2NyaWJlZEFQSXMiOlt7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJjYXJib24uc3VwZXIiLCJuYW1lIjoiQ2FsbEFQSVByb2R1Y3QiLCJjb250ZXh0IjoiXC9hcGlcL3YxIiwicHVibGlzaGVyIjoicmFkaXN5cyIsInZlcnNpb24iOiIxLjAuMCIsInN1YnNjcmlwdGlvblRpZXIiOiJVbmxpbWl0ZWQifV0sImlhdCI6MTY0MDA5NzI1NCwianRpIjoiNThjOGNjYTctMDFlNi00ZWQ0LThkMTEtYmE2OGM2MGI1YjQ4In0=.hbuhNmUMdFNX1j-tto8Fj4QPI3JllUkX6EOYw9DH6aGn0Z7yB8Ks4N9YJIOEoq7l-6fLhamqXfOx3uHDUe5aCLxqhnm3xElUQn-TFR7s7vsYV7AS4wgsCIvaSZvUy47ZTh-m3iwGfsPbIzm5QB_13_De84GicC-8Um7tAwnYWMsUoGfKFzb8KtZ_IBIhc8mnY38IuG5Nf4DF7oQv7jOL8GFXJ1BCs1hMQQJBahxRfYTyOVCmCA8hsA_K2Xh2GbJDPcCC13KeU_ExgtAxzAnLDUHzEfTWWQ4ISm3rP6CeyxxoIMhzUPnWN5BPbjZ_WGV8gIO4rABZKFz2v-XVjER9mQ==",
};
CallApi.OpenAPI.BASE = "https://apigateway.engagedigital.ai/api/v1";

app.post("/makeCall", function (req, res) {
  CallApi.CallService.makeCall("AC-4cf92d2a-b9ce-4da4-a05e-66239504e5ab", {
    From: "6070707111",
    To: "sip:demo@sipaz1.engageio.com",
    Eml: "<?xml version='1.0' encoding='UTF-8'?><Response><Say>This is Demo</Say></Response>",
  })
    .then(function (response) {
      res.status = 200;
      res.send(response);
    })
    .catch(function (error) {
      res.send(error);
    });
});

app.get("/getCallRecordsById", function (req, res) {
  CallApi.CallService.getCallRecordByCallId(
    "AC-4cf92d2a-b9ce-4da4-a05e-66239504e5ab",
    "<<Call_Id>>"
  )
    .then(function (response) {
      res.status = 200;
      res.send(response);
    })
    .catch(function (error) {
      res.send(error);
    });
});

app.get("/getCallRecords", function (req, res) {
  CallApi.CallService.getMultipleCallRecords(
    "AC-4cf92d2a-b9ce-4da4-a05e-66239504e5ab",
    undefined, //To
    undefined, //StartTime
    "2022-01-27", //EndTime
    undefined, // Status
    undefined, //FlowType
    undefined, //Channel
    undefined, //Direction
    "AUDIO", //CallType
    10, //limit
    1 //offset
  )
    .then(function (response) {
      res.status = 200;
      res.send(response);
    })
    .catch(function (error) {
      res.send(error);
    });
});
