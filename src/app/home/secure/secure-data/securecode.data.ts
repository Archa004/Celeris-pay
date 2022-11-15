export interface SecureCodeData {
  code: string;
}
export const secureCodeData: Array<SecureCodeData> = [
  {
    code: `<script src="/JS/fingerprint-datapicker-lib.js" data-form-id="myUniqueFormID"></script>`,
  },
  {
    code: `<script src="/JS/fingerprint-datapicker-lib.js" data-form-id="myUniqueFormName"></script>`,
  },
];
export const secureCodeData_1: Array<SecureCodeData> = [
    {
      code: `<script src="/JS/fingerprint-datapicker-lib.js"></script>
      <form id="myForm">
         <input id="threeDS2FP" name="threeDS2FP">
      </form>
      
      <script>
      document.getElementById("threeDS2FP").value = __gateway.getFingerprintString();
      </script>`,
    },
  ];
  export const secureCodeData_2: Array<SecureCodeData> = [
    {
      code: `
      "3DSecure":{
           "deviceFingerprint":{
              "timezone": "330",
              "browserColorDepth": "24",
              "browserLanguage": "en-GB",
              "browserScreenHeight": "1080",
              "browserScreenWidth": "1920",
              "os": "windows",
              "browserAcceptHeader":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*",
              "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36",
              "browserJavascriptEnabled": false,
              "browserJavaEnabled" : true,
              "acceptContent":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
              "browserIP" :"192.1.1.1"
           },
           "sdk":{
            "sdkAppID":"8ff65412-0e9d-4b4d-9cad-c68446930767",
            "sdkEncData":"92e265838b0a5ebf5d399f4cd6ac9ba0a2f08fdd8c8bc02f4a44654c26b6b99592e265838b0a5ebf5d399f4cd6ac9ba0a2f08fdd8c8bc02f4a44654c26b6b995",
            "sdkEphemPubKey":"92e265838b0a5ebf5d399f4cd6ac9ba0a2f08fdd8c8bc02f4a44654c26b6b995",
            "sdkMaxTimeout":"60",
            "sdkReferenceNumber":"2bfdd080-8688-4226-bb91-2d5e474e73f1",
            "sdkTransID":"98d77730-a163-4e50-98f1-3b9786c0d9aa"
      
           },
           "exemptions":{
              "lowValue":true,
              "tra": true,
              "trustedBeneficiary":true,
              "secureCorporatePayment":true,
              "delegatedAuthentication":true,
              "recurringMITExemptionSameAmount" : true,
              "recurringMITExemptionOther" : true,
              "vmid":"12345"
          },
          "challengeIndicator":"01",
          "challengeWindowSize":"05" 
      
        }
      `,
    },
  ];
